// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      }
    }
})
