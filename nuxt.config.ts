// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: '_assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  plugins: [
    '~/plugins/vue-drag-scroller.ts',
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
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css',
    '~/assets/css/component.css',
    'highlight.js/styles/stackoverflow-light.css',
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
})
