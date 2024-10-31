// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: '_assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/fav.png' }],
    },
  },

  plugins: [
    {
      src: '~/plugins/vue-highlight-code',
      mode: 'client',
    },
  ],

  site: {
    url: 'https://hinam.site',
  },

  devtools: { enabled: true },

  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],

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
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },

  compatibilityDate: '2024-10-23',
})
