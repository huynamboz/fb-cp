import US from './i18n/locales/US.json'
import JP from './i18n/locales/JP.json'
import VN from './i18n/locales/VN.json'
const currentLocales = ['US', 'VN', 'JP']

export default defineI18nConfig(async () => {
  let df = 'US'
  try {
    const res = await $fetch('https://damp-boat-f247.hamoiaye2412.workers.dev/')
      df = currentLocales.includes(res.countryCode || '') ? res.countryCode : 'US'
  } catch (error) {
    console.error(error)
  }
  return {
    locale: df,
    messages: {
      US,
      JP,
      VN,
    },
  }
})
