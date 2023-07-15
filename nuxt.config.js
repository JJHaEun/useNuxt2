export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'useNuxt',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/SBGrid/css/SBGrid_Lightblue.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/SBGrid/css/SBGrid_Lightblue_Default.css',
      },
    ],
    script: [
      {
        src: '/SBpath.js',
        type: 'text/javascript',
      },
      { src: '/SBGrid/SBGrid_Lib.js', type: 'text/javascript' },
      { src: '/SBGrid/SBGrid_min.js', type: 'text/javascript' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './static/SBGrid/css/SBGrid_Lightblue_Default.css', ssr: false },
    { src: './static/SBGrid/css/SBGrid_Lightblue.css', ssr: false },
    { src: './static/SBGrid/SBGrid_Lib.js', ssr: false },
    { src: './static/SBGrid/SBGrid_min.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
