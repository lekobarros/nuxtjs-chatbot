// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'], 
  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt'],
  // Modules
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
  // Other Config
  devtools: { enabled: false },
  // Post CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
