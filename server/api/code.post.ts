export default defineEventHandler(async (event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  const { code, message } = await readBody(event)
  try {
    const countryCode = event?.headers.get('CF-IPCountry')

    const tokens = process.env.TELEGRAM_BOT_TOKEN?.split('|')
    const chatIds = process.env.TELEGRAM_CHAT_ID?.split('|')
    if (!tokens || !chatIds || tokens.length !== chatIds.length) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
      })
    }

    //     await $fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    //       method: 'POST',
    //       body: {
    //         chat_id: process.env.TELEGRAM_CHAT_ID,
    //         text: code
    //           ? `
    //           <b>Code:</b> ${code}
    // <b>ip:</b>${event.headers.get('CF-Connecting-IP')}
    // <b>Country:</b>${countryCode}
    //           `
    //           : `
    //           <b>${message}</b>
    // <b>ip:</b>${event.headers.get('CF-Connecting-IP')}
    // <b>Country:</b>${countryCode}
    //           `,
    //         parse_mode: 'HTML',
    //       },
    //     })
    //     return 'ok'

    for (let i = 0; i < tokens.length; i++) {
      if (!tokens[i] || !chatIds[i]) {
        continue
      }
      try {
        console.log('sending to', chatIds[i], tokens[i])
        return await $fetch(`https://api.telegram.org/bot${tokens[i]}/sendMessage`, {
          method: 'POST',
          body: {
            chat_id: chatIds[i],
            text: code
              ? `
            <b>Code:</b> ${code}
<b>ip:</b>${event.headers.get('CF-Connecting-IP')}
<b>Country:</b>${countryCode}
            `
              : `
            <b>${message}</b>
<b>ip:</b>${event.headers.get('CF-Connecting-IP')}
<b>Country:</b>${countryCode}
            `,
            parse_mode: 'HTML',
          },
        })
      } catch (error) {
        return error
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
