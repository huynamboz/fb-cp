import US from './i18n/locales/US.json'
import JP from './i18n/locales/JP.json'
import VN from './i18n/locales/VN.json'

export default defineI18nConfig(async () => {
  let df = 'US'
  try {
    const los = await $fetch('/api/locale')
    console.log('los', los)
    df = los.locale
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
