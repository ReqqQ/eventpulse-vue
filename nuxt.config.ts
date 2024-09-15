// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['vuetify-nuxt-module', '@nuxt/image'],
    vuetify: {
        vuetifyOptions: {
            theme: {
                defaultTheme: 'dark'
            }
        }
    },
    css: [
        'vuetify/styles',  // Styl Vuetify
    ],

})