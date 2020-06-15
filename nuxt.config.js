const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const base = '/portfolio/';
const isDev = process.env.NODE_ENV !== 'production';
export default {
	mode: 'universal',
	...(!isDev && {
		modern: 'client'
	}),
	router: {
		base,
		trailingSlash: true
	},
	rootDir: __dirname,
	head: {
		title: 'Yurii Golskyi portfolio',
		htmlAttrs: {
			lang: 'en'
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
				content: 'https://yuriiholskiy.github.io/portfolio/'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: base + 'favicon.ico' }]
	},
	loading: { color: 'aqua' },
	pageTransition: {
		name: 'page-fade',
		mode: 'out-in'
	},
	css: ['~/assets/style.scss'],
	plugins: [
		'~/plugins/buefy',
		'~/plugins/custom-directives',
		'~/plugins/iconify'
	],
	modules: ['@nuxtjs/style-resources'],
	styleResources: {
		scss: '~/assets/_vars.scss'
	},
	transpile: ['vue-lazy-hydration'],
	build: {
		publicPath: '/assets/',
		optimizeCss: false,
		filenames: {
			app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
			chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
			css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
			img: ({ isDev }) =>
				isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
			font: ({ isDev }) =>
				isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
			video: ({ isDev }) =>
				isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
		},
		...(!isDev && {
			html: {
				minify: {
					collapseBooleanAttributes: true,
					decodeEntities: true,
					minifyCSS: true,
					minifyJS: true,
					processConditionalComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					trimCustomFragments: true,
					useShortDoctype: true
				}
			}
		}),
		splitChunks: {
			layouts: true,
			pages: true,
			commons: true
		},
		otimization: {
			minimize: !isDev
		},
		...(!isDev && {
			exractCSS: {
				ignoreOrder: true
			}
		}),
		postcss: {
			plugins: {
				...(!isDev && {
					cssnano: {
						preset: [
							'advanced',
							{
								autoprefixer: false,
								cssDeclarationSorter: false,
								zindex: false,
								discardComments: {
									removeAll: true
								}
							}
						]
					}
				}),
				'postcss-sort-media-queries': {}
			},
			...(!isDev && {
				preset: {
					browsers: 'cover 99.5%',
					autoprefixer: true
				}
			}),
			order: 'cssnanoLast'
		}
	},
	extend(config, context) {
		const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i';
		const vueSvgLoader = [
			{
				loader: 'vue-svg-loader',
				options: {
					svgo: false
				}
			}
		];
		const imageMinPlugin = new ImageminWebpackPlugin({
			pngquant: {
				quality: '5-30',
				speed: 7,
				strip: true
			},
			jpegtran: {
				progressive: true
			},
			gifsicle: {
				interlaced: true
			},
			plugins: [
				imageminMozjpeg({
					quality: 70,
					progressive: true
				})
			]
		});
		if (!context.isDev) config.plugins.push(imageMinPlugin);

		config.module.rules.forEach(rule => {
			if (rule.test.toString() === ORIGINAL_TEST) {
				rule.test = /\.(png|jpe?g|gif|webp)$/i;
				rule.use = [
					{
						loader: 'url-loader',
						options: {
							limit: 1000,
							name: context.isDev
								? '[path][name].[ext]'
								: 'img/[contenthash:7].[ext]'
						}
					}
				];
			}
		});
		const svgRule = {
			test: /\.svg$/,
			oneOf: [
				{
					resourceQuery: /inline/,
					use: vueSvgLoader
				},
				{
					resourceQuery: /data/,
					loader: 'url-loader'
				},
				{
					resourceQuery: /raw/,
					loader: 'raw-loader'
				},
				{
					loader: 'file-loader'
				}
			]
		};
		config.module.rules.push(svgRule);
	}
};
