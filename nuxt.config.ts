// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'Pushkar Patil',
      meta: [
        {
          'hid': 'description',
          'name': 'description',
          'content': 'Portfolio of Pushkar Patil '
        }
      ],
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: '200..900',
      Onest: '200..900'
    }
  },
})