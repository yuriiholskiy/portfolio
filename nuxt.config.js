const base = '/portfolio/';

export default {
	router: {
		base
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
	loading: { color: 'blue' },
	layoutTransition: {
		name: 'layout-fade',
		mode: 'out-in'
	},
	pageTransition: {
		name: 'page-fade',
		mode: 'out-in'
	},
	css: ['~/assets/style.scss'],
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
		publicPath: '/assets/'
	}
};
