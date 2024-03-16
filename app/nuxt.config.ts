export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: '../',
  modules: [
    'vue3-carousel-nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    // 'nuxt-graphql-client',
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://importedproducts.in/graphql'
      }
    },
  },
})