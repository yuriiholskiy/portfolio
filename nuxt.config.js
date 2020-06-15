const base = '/portfolio/';

export default {
	router: {
		base,
		trailingSlash: false
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
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'author',
				name: 'author',
				content: 'Yurii Golskyi'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Yurii Golskyi Front-end developer portfolio created by nuxt.js'
			},
			{
				hid: 'keyword',
				name: 'keyword',
				content:
					'Yurii Golskyi, Yurii Golskyi Portfolio, Portfolio, Frontend, Frond-end developer, HTML, CSS, Github, JavaScript, Vue, Nuxt'
			},
			{
				hid: 'url',
				name: 'url',
				content: 'https://yuriiholskiy.github.io/portfolio'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: base + 'favicon.ico' }]
	},
	server: {
		port: 3000,
		host: '0.0.0.0'
	},
	loading: { color: 'aqua' },
	pageTransition: {
		name: 'page-fade',
		mode: 'out-in'
	},
	css: ['~/assets/style.scss'],
	plugins: ['~/plugins/custom-directives'],
	modules: ['@nuxtjs/style-resources', 'nuxt-buefy'],
	styleResources: {
		scss: '~/assets/_vars.scss'
	},
	build: {
		publicPath: '/assets/'
	}
};
