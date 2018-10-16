module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", crossorigin: "anonymous"},
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js", integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN", crossorigin: "anonymous"},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q", crossorigin: "anonymous" },
      { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl", crossorigin: "anonymous" },
    ]
  },

  css: [
    { src: "~assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css" },
    { src: "~assets/fonts/iconic/css/material-design-iconic-font.min.css" },
    { src: "~assets/fonts/linearicons-v1.0.0/icon-font.min.css" },
    { src: "~assets/vendor/animate/animate.css" },
    { src: "~assets/vendor/css-hamburgers/hamburgers.min.css" },
    { src: "~assets/vendor/animsition/css/animsition.min.css" },
    { src: "~assets/vendor/select2/select2.min.css" },
    { src: "~assets/vendor/daterangepicker/daterangepicker.css" },
    { src: "~assets/vendor/slick/slick.css" },
    { src: "~assets/vendor/MagnificPopup/magnific-popup.css" },
    { src: "~assets/vendor/perfect-scrollbar/perfect-scrollbar.css" },
    { src: '~assets/sass/util.scss', lang: 'sass' },
    { src: '~assets/sass/main.scss', lang: 'sass' }
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    { src: '~/plugins/VueFlickity.js', ssr: false },
  ],

  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { icon: false }],
  ],

  axios: {
    baseURL: 'http://nuxt-back/api',
    proxyHeaders: false,
    credentials: false
  },
  
  workbox: {
    importScripts: [
      'custom-sw.js'
    ],
  }

}

