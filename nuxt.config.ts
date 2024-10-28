// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-04-03',
    plugins: ['~/plugins/fingerprint.client.ts'],
    devtools: {enabled: true},
    modules: ['vuetify-nuxt-module', '@nuxt/image', '@pinia/nuxt'],
    vuetify: {
        vuetifyOptions: {
            theme: {
                defaultTheme: 'dark'
            }
        }
    },
    spaLoadingTemplate: true,
    css: [
        'vuetify/styles',  // Styl Vuetify
    ],
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js'
            ]
        }
    }
})