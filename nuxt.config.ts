import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css', 'vuetify/styles'],
  devtools: { enabled: true },
  compatibilityDate: '2025-04-25',
  app: {
    head: {
      title: 'Nuxt3 course',
      meta: [
        { name: 'description', content: 'This is a Nuxt3 course project' }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  typescript: {
    strict: true,
  }, runtimeConfig: {
    MAIN_VITE_DB_PASSWORD: process.env.MAIN_VITE_DB_PASSWORD,
    MAIN_VITE_DB_PORT: process.env.MAIN_VITE_DB_PORT,
    MAIN_VITE_DB_DATABASE: process.env.MAIN_VITE_DB_DATABASE,
  }
})
