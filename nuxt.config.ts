// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/main.scss";',
                },
            },
        },
    },
    app: {
      head: {
        charset: 'utf-16',
        viewport: 'initial-scale=1',
        title: 'Portfolio | Alexandre TROUVÉ',
        meta: [
          { name: 'description', content: 'My amazing portfolio' }
        ],
        htmlAttrs: {
          lang: 'en'
        },
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', as: 'image' },
            { rel: 'preload', href: '~/assets/fonts/Sora-Light.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
            { rel: 'preload', href: '~/assets/fonts/Sora-Regular.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
            { rel: 'preload', href: '~/assets/fonts/Sora-Medium.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
            { rel: 'preload', href: '~/assets/fonts/Sora-SemiBold.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
            { rel: 'preload', href: '~/assets/fonts/Sora-Bold.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
        ]
      }
    }
})
