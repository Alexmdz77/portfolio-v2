// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [
        ['@nuxtjs/google-fonts',],
        ['nuxt-mail', {
            message: {
                to: 'alexandretrv@gmail.com',
            },
            smtp: {
                host: 'smtp.gmail.com',
                port: 465,
            },
        }],
    ],
    googleFonts: {
        families: {
            'Sora': [400, 500, 600, 700, 800, 900],
        },
        download: true,
        preload: true,
    },
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
      }
    }
})
