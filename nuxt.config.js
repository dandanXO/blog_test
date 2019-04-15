const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 443, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  env: {
    API_URL:  'https://dandan.tw:443/api/'
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/css/main.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
  ],
  styleResources: {
    scss: [
      './assets/css/*.scss'
    ]
  },
  /*
** Customize the progress bar color
*/
  loading: { color: 'rgb(221, 209, 209)' },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
      },
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
