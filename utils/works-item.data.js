const defaultTechologies = [
	{
		name: 'html',
		theme: 'danger',
		rippleColor: 'red'
	},
	{
		name: 'css',
		theme: 'primary',
		rippleColor: 'lightblue'
	},
	{
		name: 'js',
		theme: 'warning',
		rippleColor: 'orange'
	}
];
const CHIPS_COUNT_SHOW = 4;
export default [
	{
		title: 'comps',
		description: `Simple Vue ui component library. Now have a 23 components and 2 directives. You can check more on comps site. Project still in progress.`,
		imageSrc: require('~/assets/images/comps.png'),
		chips: [
			...defaultTechologies,
			{
				name: 'vue',
				theme: 'success',
				rippleColor: 'green'
			}
		],
		chipsCountShow: CHIPS_COUNT_SHOW,
		links: [
			{
				name: 'Github',
				to: 'https://github.com/yuriiholskiy/comps'
			},
			{
				name: 'Comps',
				to: 'https://yuriiholskiy.github.io/comps'
			}
		]
	},
	{
		title: 'Awesome todo app',
		description: `This is a CRUD application, created by Vue.js (+ Vuex and VueRouter) and using firebase hosting.You can add, delete and update(by double click on todo title). 
												Also have a filter for done, active and all todos.`,
		imageSrc: require('~/assets/images/aw-todo.png'),
		chips: [
			...defaultTechologies,
			{
				name: 'vue',
				theme: 'success',
				rippleColor: 'green'
			}
		],
		chipsCountShow: CHIPS_COUNT_SHOW,
		links: [
			{
				name: 'Todo app',
				to: 'https://aw-vue-todo.web.app/'
			}
		]
	},
	{
		title: 'Pokedex app',
		description: 'Pokedex app using pokemon api',
		imageSrc: require('~/assets/images/pokedex.jpg'),
		chips: [
			...defaultTechologies,
			{
				name: 'vue',
				theme: 'success',
				rippleColor: 'green'
			}
		],
		chipsCountShow: CHIPS_COUNT_SHOW,
		links: [
			{
				name: 'Github',
				to: 'https://github.com/yuriiholskiy/pokedex'
			},
			{
				name: 'Pokedex',
				to: 'https://yuriiholskiy.github.io/pokedex'
			}
		]
	},
	{
		title: 'vtrello',
		description: 'Trello clone build with Vue and tailwindcss',
		imageSrc: require('~/assets/images/trello-clone.png'),
		chips: [
			...defaultTechologies,
			{
				name: 'vue',
				theme: 'success',
				rippleColor: 'green'
			}
		],
		chipsCountShow: CHIPS_COUNT_SHOW,
		links: [
			{
				name: 'Github',
				to: 'https://github.com/yuriiholskiy/vtrello'
			},
			{
				name: 'Vtrello',
				to: 'https://yuriiholskiy.github.io/vtrello'
			}
		]
	},
	{
		title: 'Defibrillator app',
		description: 'Defibrillators app',
		imageSrc: require('~/assets/images/def-app.jpg'),
		chips: [
			...defaultTechologies,
			{
				name: 'react',
				theme: 'primary',
				rippleColor: 'lightblue'
			},
			{
				name: 'redux',
				theme: 'dark',
				rippleColor: 'aqua'
			},
			{
				name: 'jest',
				theme: 'warning',
				rippleColor: 'orangered'
			},
			{
				name: 'material-ui',
				theme: 'dark',
				rippleColor: 'aqua'
			}
		],
		chipsCountShow: CHIPS_COUNT_SHOW,
		links: [
			{
				name: 'Github',
				to: 'https://github.com/LV-469/defibrillator'
			}
		]
	}
];
