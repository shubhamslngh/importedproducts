import { useWordpressStore } from "~/stores/wordpress"
export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            wordpressStore : useWordpressStore()
        },
    }
})
