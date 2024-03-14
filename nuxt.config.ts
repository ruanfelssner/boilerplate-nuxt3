// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src/',
  app: {
    head: {
      charset: 'utf-8',
      title: 'FF Boilerplate'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n.config.ts'
      }
    ]
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict'
    },
    storage: 'localStorage'
  },
  devtools: { enabled: true, timeline: { enabled: true } },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('ff-')
    }
  }
})
