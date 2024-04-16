import {useAuthStore} from "../stores/auth"

export default defineNuxtPlugin((nuxtApp) => {
  const AuthStore = useAuthStore()
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    if (AuthStore.token) {
      token.value = AuthStore.token
      console.log("here is plugin hits", token);
      
    }
  })
  nuxtApp.hook('apollo:error', (error) => {
    console.error(error,"not able hit")
  })
})