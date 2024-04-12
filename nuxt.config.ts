import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  experimental: {
    localLayerAliases: true,  
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
 
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo', 
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@nuxt/content',

  ],
 
  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],
swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'SwiperEffectCreative','SwiperAutoplay','pagination'], 
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

  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },

  headlessui: {
    prefix: 'Headless',
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

})
