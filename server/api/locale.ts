const currentLocales = ['US', 'VN', 'JP']
export default defineEventHandler(async (event) => {
  try {
    // const countryCode = event?.headers.get('CF-IPCountry')
    const res = await $fetch('https://damp-boat-f247.hamoiaye2412.workers.dev/')
    return {
      locale: currentLocales.includes(res.countryCode || '') ? res.countryCode : 'US',
    }
  } catch (error) {
    console.error(error)
  }
  return {
    lo: 'EN',
  }
})
