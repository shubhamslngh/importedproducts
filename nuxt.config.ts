import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import { defineNuxtConfig } from 'nuxt/config'
// import { InMemoryCache } from '@apollo/client';
export default defineNuxtConfig({
  // exp
  experimental: {
    localLayerAliases: true,  
  },
//buildModules
  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
 
  modules: [
    // chore
    '@nuxtjs/eslint-module',
    // styling & ui
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo', 
    // management
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // contents,
    'nuxt-swiper',
    '@nuxt/content',

    // todo: feat/localization
    // '@nuxtjs/i18n'
  ],
  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],
swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'SwiperEffectCreative','SwiperAutoplay','pagination'], // all modules are imported by default
  },
  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
      global: true,
    },
    {
      prefix: 'Awesome',
      path: resolve('./components/awesome'),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  // module::pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // module::color-mode
  colorMode: {
    classSuffix: '',
  },

  // module::content
  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

})
