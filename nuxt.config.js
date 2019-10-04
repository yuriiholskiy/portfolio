const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {};
export default {
  head: {
    title: 'Yurii Golskyi portfolio',
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
      	content: 'javascript, portfolio, vue, nuxt, frontend'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  }, 
  loading: { color: 'blue' },
  pageTransition: {
  	name: 'page',
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
  ...routerBase,
  build: {
    extend (config, ctx) {
    }
  }
}
