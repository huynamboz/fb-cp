const currentLocales = ['US', 'VN', 'JP']
export default defineEventHandler((event) => {
  try {
    const countryCode = event?.headers.get('CF-IPCountry')
    return {
      locale: currentLocales.includes(countryCode || '') ? countryCode : 'US',
    }
  } catch (error) {
    console.error(error)
  }
  return {
    lo: 'EN',
  }
})
