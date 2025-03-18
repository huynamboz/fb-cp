// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    buildAssetsDir: '_assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'Business Help Center',
      link: [{ rel: 'icon', type: 'image/webp', href: '/logo.webp' }],
    },
  },

  plugins: [
    {
      src: '~/plugins/vue-highlight-code',
      mode: 'client',
    },
  ],

  devtools: { enabled: false },
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        // '/_ipx/f_webp/images/docs/ecommerce-v2/thumb.png',
        // '/_ipx/f_webp/images/docs/portfolio/preview.png',
      ],
    },
  },

  image: {
    format: ['webp'],
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css',
    '~/assets/css/component.css',
    'highlight.js/styles/stackoverflow-light.css',
    '~/public/assets/css/fonts.css',
  ],

  alias: {
    '@Components': './components',
    '@Assets': './assets',
  },

  runtimeConfig: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    ADMIN_ID: process.env.ADMIN_ID,
    HOST_PRODUCTION: process.env.HOST_PRODUCTION,
    public: {
      BG_PATH: process.env.BG_PATH,
    },
  },

  compatibilityDate: '2024-10-23',
})
