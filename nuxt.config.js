export default {
  target:"static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BAU Radio - An online radio service',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'BAU Radio is an online radio station of Bangladesh Agricultural University, administrated by its student.The very first online streaming platform has come to light in the 60-years history of BAU. '
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://i.imgur.com/nh4cmMm.png",
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxt/image',
     '@nuxt/content'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  }
}
