export default defineEventHandler((event) => {
  const countryCode = event?.headers.get('CF-IPCountry')
  const runtimeConfig = useRuntimeConfig()
  const HOST_PRODUCTION = runtimeConfig.HOST_PRODUCTION
  const host = event.node.req.headers.host
    ? event.node.req.headers.host.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    : 'N/A'
  if (HOST_PRODUCTION === host && !countryCode) {
    console.log('BLOCKED--->')
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }
  return {
    status: 'healthy',
  }
})
