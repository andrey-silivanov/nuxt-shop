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
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", crossorigin: "anonymous"}
    ],
    script: [
      { src: "~assets/vendor/jquery/jquery-3.2.1.min.js" },
      { src: "~assets/vendor/animsition/js/animsition.min.js" },
      { src: "~assets/vendor/bootstrap/js/popper.js" },
      { src: "~assets/vendor/bootstrap/js/bootstrap.min.js" },
      { src: "~assets/vendor/select2/select2.min.js" },


      { src: "~assets/vendor/daterangepicker/moment.min.js" },
      { src: "~assets/vendor/daterangepicker/daterangepicker.js" },
      { src: "~assets/vendor/slick/slick.min.js" },
      { src: "~assets/js/slick-custom.js" },
      { src: "~assets/vendor/parallax100/parallax100.js" },




      { src: "~assets/vendor/MagnificPopup/jquery.magnific-popup.min.js" },



      { src: "~assets/vendor/isotope/isotope.pkgd.min.js" },
      { src: "~assets/vendor/sweetalert/sweetalert.min.js" },



      { src: "~assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js" },


      { src: "~assets/js/main.js" },
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
  }
}

