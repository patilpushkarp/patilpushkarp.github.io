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
      link: [
        {
          rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          integrity: 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz',
          crossorigin: 'anonymous'
        },
      ],
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '@fortawesome/fontawesome-svg-core/styles.css', '~/assets/css/global.css'],
  modules: ["@nuxtjs/google-fonts", "@nuxt/content"],
  plugins: ['~/plugins/bootstrap.client.ts'],
  googleFonts: {
    families: {
      Inter: '200..900',
      Onest: '200..900',
      Sarina: true
    }
  },
})