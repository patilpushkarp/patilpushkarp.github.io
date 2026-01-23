// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Playfair Display', provider: 'google', weights: [400, 500, 600, 700, 800, 900] },
      { name: 'Montserrat', provider: 'google', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] }
    ]
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})