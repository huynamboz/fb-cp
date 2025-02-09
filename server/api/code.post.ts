export default defineEventHandler(async (event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  const { code, message } = await readBody(event)
  try {
    await $fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: '-4540116402',
        text: code
          ? `
          <b>Code:</b> ${code} \n
          `
          : `
          <b>${message}</b>\n
<b>ip:</b>${event.headers.get('CF-Connecting-IP')}
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
