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
    '@nuxt/content',

    // todo: feat/localization
    // '@nuxtjs/i18n'
  ],
  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],

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

  // todo: feat/localization
  // module::i18n
  // i18n: {
  //   strategy: 'no_prefix',
  //   defaultLocale: 'en',
  //   langDir: 'locales',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //   },
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     fallbackLocale: 'en',
  //     redirectOn: 'root',
  //   },
  //   locales: [
  //     {
  //       code: 'en', // English
  //       iso: 'en-US',
  //       name: 'English',
  //       file: 'en.yml',
  //     },
  //     {
  //       code: 'id', // Indonesia
  //       iso: 'id-ID',
  //       name: 'Indonesia',
  //       file: 'id.yml',
  //     }
  //   ]
  // },
})
