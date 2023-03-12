// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
    ],
    app: {
        head: {
            title: "4 Player Chess"
        }
    }
})