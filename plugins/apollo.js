import { useAuthStore } from "../stores/auth"

export default defineNuxtPlugin((nuxtApp) => {
  const AuthStore = useAuthStore()

  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    if (AuthStore.token) {
      const storedToken = sessionStorage.getItem('authToken')
      const refreshToken = sessionStorage.getItem('refreshToken')
        console.log("Token set from sessionstorage:", token.value)
      
      if (storedToken) {
        token.value = storedToken
        console.log("Token set from sessionstorage:", token.value)
      } 
      else {
        console.error("Token not stored || found")
      }
    }
  })

  nuxtApp.hook('apollo:error', (error) => {
    console.error("Apollo error:", error)
  })
})
