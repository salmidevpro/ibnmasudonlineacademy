// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: 'IBN MAS\'UD ONLINE ACADEMY',

      meta: [
        {
          name: 'description',
          content:
            'Quality online Qur’an, Tajwīd, Arabic and Islamic education for children, teenagers, university students and adults.'
        }
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/jpeg',
          href: '/favicon.jpeg'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  typescript: {
    strict: true,
    typeCheck: true
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
