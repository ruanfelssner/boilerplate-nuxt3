<<<<<<< HEAD
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
  devtools: {
    enabled: true,
    timeline: { enabled: true }
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag =>
        tag.startsWith('ff-')
    }
  },
  runtimeConfig: {
    public: {
      api: {
        apiBaseUrl:
          process.env.API_BASE_URL || '',
        isMockActive:
          process.env.IS_MOCK_ACTIVE === 'true'
      }
    }
  }
})
||||||| merged common ancestors
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
  devtools: {
    enabled: true,
    timeline: { enabled: true }
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag =>
        tag.startsWith('ff-')
    }
  },
  runtimeConfig: {
    public: {
      api: {
        apiBaseUrl:
          process.env.API_BASE_URL || '',
        isMockActive:
          process.env.IS_MOCK_ACTIVE === 'true'
      }
    }
  }
})
=======
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
  devtools: {
    enabled: true,
    timeline: { enabled: true }
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag =>
        tag.startsWith('ff-')
    }
  },
  runtimeConfig: {
    public: {
      api: {
        apiBaseUrl:
          process.env.API_BASE_URL || '',
        isMockActive:
          process.env.IS_MOCK_ACTIVE === 'true'
      }
    }
  }
})
>>>>>>> fix: useRuntimeCOnfig
