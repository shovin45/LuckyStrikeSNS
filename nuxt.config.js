
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Lucky Strikeメンズダンサー5人SNSまとめ - Lucky Strike',
    titleTemplate: 'Lucky Strikeメンズダンサー5人SNSまとめ - Lucky Strike',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'エンターテイメント集団Lucky Strikeから横浜在中の横浜をこよなく愛するハッピーラッキーなメンズダンサー5人組！サマーソニックからクラブシーンのゲストなど唯一無二のエンターテイメントで様々な場所で活躍中！' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Lucky Strikeメンズダンサー5人SNSまとめ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://lucky-strike.netlify.com/' },
      { hid: 'og:title', property: 'og:title', content: 'Lucky Strikeメンズダンサー5人SNSまとめ - Lucky Strike' },
      { hid: 'og:description', property: 'og:description', content: 'エンターテイメント集団Lucky Strikeから横浜在中の横浜をこよなく愛するハッピーラッキーなメンズダンサー5人組！サマーソニックからクラブシーンのゲストなど唯一無二のエンターテイメントで様々な場所で活躍中！' },
      { hid: 'og:image', property: 'og:image', content: 'https://lucky-strike.netlify.com/assets/img/ogp.png' },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/aos', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [['nuxt-webfontloader']
  ],
  webfontloader: {
    google: {
      families: ['Londrina+Sketch', 'Lato:300', 'M+PLUS+Rounded+1c:300']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
