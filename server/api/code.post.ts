export default defineEventHandler(async (event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  const { code } = await readBody(event)
  try {
    await $fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: '-4540116402',
        text: `
          <b>Code:</b> ${code} \n
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
