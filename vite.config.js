import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
        require('autoprefixer')
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    server: {
        port: 8080
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    presets: [
        ['@vue/app', {
            polyfills: [
                'es.promise',
                'es.symbol'
            ]
        }]
    ]
})