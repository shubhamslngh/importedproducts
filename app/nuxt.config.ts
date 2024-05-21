export default defineNuxtConfig(
  {
  devtools: { enabled: true },
  extends: '../',
  modules: [
    'vue3-carousel-nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
    ],
 
   apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
    credentials: 'include',
    clients: {
      default: {
        credentials: 'include',
          httpEndpoint: 'https://importedproducts.in/graphql',
      }
      }
    }
    
  }
)