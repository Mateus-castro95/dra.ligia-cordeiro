// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  // CSS global com importação das fontes
  css: ['~/assets/css/main.css'],

  // Configuração do módulo Tailwind
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  app: {
    head: {
      title: 'Dra. Lígia Cordeiro',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})