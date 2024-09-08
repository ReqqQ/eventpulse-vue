import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    server: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://eventpulse.local', // Backend na Dockerze
                changeOrigin: true,               // Ustawienie zmieniające nagłówek Origin na target
                secure: false,                    // Jeśli nie masz certyfikatu SSL, ustaw na false
                pathRewrite: { '^/api': '/api' }, // Przekierowanie ścieżki (opcjonalnie)
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
