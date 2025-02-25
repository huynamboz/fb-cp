import US from './i18n/locales/US.json'
import JP from './i18n/locales/JP.json'
import VN from './i18n/locales/VN.json'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'US',
  messages: {
    US,
    JP,
    VN,
  },
}))
