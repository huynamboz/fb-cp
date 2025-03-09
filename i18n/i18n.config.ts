import US from './locales/US.json'
import JP from './locales/JP.json'
import VN from './locales/VN.json'
import BR from './locales/BR.json'
import CA from './locales/CA.json'
import TW from './locales/TW.json'
import FR from './locales/FR.json'
import ES from './locales/ES.json'
import MX from './locales/MX.json'
const currentLocales = ['US', 'VN', 'JP', 'BR', 'CA', 'TW', 'FR', 'ES', 'MX']

export default defineI18nConfig(async () => {
  let df = 'US'
  try {
    const res = await $fetch('https://damp-boat-f247.hamoiaye2412.workers.dev/')
      df = currentLocales.includes(res.countryCode || '') ? res.countryCode : 'US'
      console.log('df', df)
  } catch (error) {
    console.error(error)
  }
  return {
    locale: df,
    messages: {
      US,
      JP,
      VN,
      BR,
      CA,
      TW,
      FR,
      ES,
      MX,
    },
  }
})
