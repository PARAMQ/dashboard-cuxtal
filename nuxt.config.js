export default {
  /*
   ** Headers of the page
   */
  target: 'static',
  head: {
    title: 'Cuxtal - admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Panel administrativo para el control de reportes, bitácoras y más.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Nunito'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unicons.iconscout.com/release/v3.0.6/css/line.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#a2007b' },
  /*
   ** Global CSS
   */
  css: ['./assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/filters.js', mode: 'client' },
    { src: '~plugins/cleave.js', mode: 'client' },
    { src: '~plugins/vee-validate.js', mode: 'client' },
    { src: '~/plugins/after-each.js', mode: 'client' },
    { src: '~/plugins/particles.js', mode: 'client' },
    { src: '~/plugins/vue-float-action-button.js', mode: 'client' },
    { src: '~/plugins/pop-up-window.js', mode: 'client' },
    { src: '~/plugins/sweetalerts.js', mode: 'client' },
    { src: '~/plugins/vuelayers.js', mode: 'client' },
    { src: '~/plugins/vue-charts.js', mode: 'client' },
    { src: '~/plugins/gmap.js', mode: 'client' },
    { src: '~/plugins/vue-calendar.js', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' },
    { src: '~/plugins/month-picker.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://www.npmjs.com/package/nuxt-route-meta
    'nuxt-route-meta',
    // Doc: https://www.npmjs.com/package/nuxt-leaflet
    'nuxt-leaflet',
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { materialDesignIcons: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '~/shared/vuelayers'
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/base',
      '~/components/forms',
      '~/components/cards',
      '~/components/calendar',
      '~/components/binnacles',
      '~/components/cuxtalForms',
      '~/components/defaultComponents',
      '~/components/complaint',
      '~/components/techOp'
    ]
  },
  devtools: true,
  ssr: false,
  telemetry: false,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  router: {
    middleware: ['auth'],
    mode: 'hash',
    base: '/sistema-iv/'
    //base: '/'
  },
  pwa: {
    icon: {
      source: 'static/RC_V.png'
    },
    manifest: {
      name: 'Cuxtal',
      lang: 'es',
      theme_color: '#ff9503',
      useWebmanifestExtension: false
    },
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: process.env.BASE_URL || 'https://paramq-asr.herokuapp.com/api',
          handler: 'StaleWhileRevalidate'
        }
      ]
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://paramq-asr.herokuapp.com/api'
  },
  server: {
    host: process.env.HOST || 'localhost'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['vee-validate/dist/rules'],
    extend (config, ctx) {
      if (!config.externals) {
        config.externals = {}
      }

      // Remove moment.js from chart.js
      // https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc
      config.externals.moment = 'moment'
    }
  }
}
