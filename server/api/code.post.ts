export default defineEventHandler(async (event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  const { code, message } = await readBody(event)
  try {
    const countryCode = event?.headers.get('CF-IPCountry')
    await $fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: '-4793352063',
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
    return 'ok'
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    throw createError({
      statusCode: 400,
      statusMessage: (error as any)?.message || 'Bad Request',
    })
  }
})
