// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,  // Włączenie SSR
    modules: ['@nuxt/image', '@pinia/nuxt', 'vuetify-nuxt-module'],

    vuetify: {
        moduleOptions: {
            styles: true,  // Automatyczne ładowanie stylów Vuetify
            autoImport: true  // Automatyczny import komponentów Vuetify
        },
        vuetifyOptions: {
            theme: {
                defaultTheme: 'dark',  // Ustawienie domyślnego motywu
            },
            icons: {
                defaultSet: 'mdi',  // Ikony Material Design
            },
        },
    },

    runtimeConfig: {
        public: {
            apiBase: '/api'  // Podstawowy URL dla API
        },
        apiBase: 'http://omni-backend:8080',
    },

    compatibilityDate: '2024-04-03',

    plugins: ['~/plugins/fingerprint.client.ts'],

    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js', async: true }
            ]
        }
    },

    build: {
        analyze: false,  // Wyłączenie analizy bundla w produkcji
        extractCSS: true,  // Wyodrębnienie CSS do oddzielnych plików dla lepszej wydajności
    },

    devtools: { enabled: false },  // Wyłączenie narzędzi deweloperskich w produkcji

    spaLoadingTemplate: false,  // Wyłączenie szablonu ładowania SPA w produkcji

    hooks: {
        'build:done': () => {
            console.log('Build complete. Ready for production.');
        }
    }
})