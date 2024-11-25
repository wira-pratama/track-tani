export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'id'
            },
            charset: 'utf-8',
            meta: [
                { 
                    name: 'viewport', 
                    content: 'width=device-width, initial-scale=1' 
                },
            ],
            link: [
                { 
                    rel: 'icon', 
                    type: 'image/x-icon', 
                    href: '/favicon.ico' 
                },
                { 
                    rel: 'icon', 
                    type: 'image/png', 
                    sizes: '32x32', 
                    href: '/favicon-32x32.png' 
                },
                { 
                    rel: 'icon', 
                    type: 'image/png', 
                    sizes: '16x16', 
                    href: '/favicon-16x16.png' 
                },
            ]
        }
    },
    site: {
        url: "https://shootersbasketclub.com"
    },
    nitro: {
        compressPublicAssets: true
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/motion/nuxt',
        '@nuxtjs/sitemap',
        'nuxt-jsonld',
        "@nuxt/image"
    ]
});