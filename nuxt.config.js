export default {
  router: {
    base: '/portfolio/'
  },
  head: {
    title: 'Yurii Golskyi portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'margin-transition'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
      	hid: 'description', 
      	name: 'description', 
      	content: 'Yurii Golskyi front end developer portfolio created by nuxt.js' 
      },
      {
      	hid: 'keyword',
      	name: 'keyword',
      	content: 'portfolio, javascript, vue, nuxt, frontend'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  }, 
  loading: { color: 'blue' },
  layoutTransition: {
    name: 'layout-fade',
    mode: 'out-in'
  },
  pageTransition: {
  	name: 'page-fade',
  	mode: 'out-in'
  },
  css: [
  	'~/assets/style.scss'
  ],
  plugins: [
		{
			src: '~/plugins/comps',
			ssr: true
		}
  ],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: '~/assets/_vars.scss'
  },
  build: {
    publicPath: '/assets/',
    extend (config, ctx) {
    }
  }
}
