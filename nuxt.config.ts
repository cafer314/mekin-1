import languages from './lang/languages'
import brand from './assets/text/brand'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: brand.starter.name,
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css' }
      ]
    },
  },
  components: false,
  css: [
    'aos/dist/aos.css',
    'vuetify/lib/styles/main.sass',
    '@splidejs/vue-splide/css',
    '@/assets/scss/vuetify-overide.scss',
    '@/assets/scss/transition.scss',
    '@/assets/scss/vendors/hamburger-menu.css'
  ],
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: languages,
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ar',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    // vueI18n: './config/i18n.js', // use this options for next vueI18n version
    vueI18n: {
      legacy: false,
      locale: 'ar',
      fallbackLocale: 'ar',
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/scss/styles.scss";` } // eslint-disable-line
      }
    }
  },
  build: {
    transpile: ['vuetify'],
    extend(config) {
      config.performance.hints = false
    },
  },
  devServer: {
    port: 8000
  }
})
