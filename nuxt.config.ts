// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],

  icon: {
    serverBundle: 'local',
    collections: ['mdi'],
  },

  app: {
    head: {
      title: 'MUTXRI | Financial Profit Optimization for Service Businesses',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'MUTXRI helps service businesses fix profit leaks, improve cash flow, and build financial systems that turn revenue into real profit. Free profit audit available.',
        },
        { name: 'theme-color', content: '#1a2e1a' },
        { name: 'author', content: 'MUTXRI' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MUTXRI' },
        { property: 'og:title', content: 'MUTXRI | Financial Profit Optimization for Service Businesses' },
        {
          property: 'og:description',
          content: 'MUTXRI helps service businesses fix profit leaks, improve cash flow, and build financial systems that turn revenue into real profit. Free profit audit available.',
        },
        { property: 'og:image', content: '/images/mutxri-brand.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MUTXRI | Financial Profit Optimization for Service Businesses' },
        {
          name: 'twitter:description',
          content: 'MUTXRI helps service businesses fix profit leaks, improve cash flow, and build financial systems that turn revenue into real profit. Free profit audit available.',
        },
        { name: 'twitter:image', content: '/images/mutxri-brand.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})