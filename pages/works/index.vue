<template>
	<section class="works py-2 text-lighten-dark">
		<h2 class="display-1" :class="{ 'anim-trY-fast': isAnimation }">
			My works,
		</h2>
		<div ref="slowAnimEl" :class="{ 'anim-trY-slow': isAnimation }">
			<c-row class="works-row" justify="xs-center">
				<c-col
					xs="size-12"
					sm="size-10"
					md="size-6"
					v-for="{ title, description, imageSrc, chips, links } in works"
					:key="title"
					class="mt-1"
				>
					<c-card
						action
						:image-src="imageSrc"
						:image-alt="title"
						max-width="40"
					>
						<template #title>
							{{ title }}
						</template>
						<template #description>
							{{ description }}
							<h4 class="created-by-title mt-1 text-lighten-dark">
								Created by:
							</h4>
							<div class="created-by mt-1">
								<c-chip
									v-for="{ name, theme, rippleColor } in chips"
									:key="name"
									:theme="theme"
									:icon-name="name"
									v-ripple="rippleColor"
									class="mt-xs-1"
								>
									{{ name }}
								</c-chip>
							</div>
						</template>
						<template #action>
							<c-button
								v-for="{ name, to } in links"
								:key="to"
								theme="secondary"
								class="mr-1"
								target="_blank"
								rel="noopener"
								:href="to"
							>
								{{ name }}
							</c-button>
						</template>
					</c-card>
				</c-col>
			</c-row>
		</div>
	</section>
</template>

<script>
import removeAnimClassMixin from '~/mixins/remove-anim-class.mixin';
export default {
	mixins: [removeAnimClassMixin],
	head() {
		return {
			title: 'My works',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'This is my portfolio works page'
				}
			]
		};
	},
	data() {
		return {
			works: [
				{
					title: '@vue/comps',
					description: `Simple Vue ui component library. Now have a 23 components and 2 directives. This portfolio created by using @vue/comps. You can check more on comps site. Project still in progress.`,
					imageSrc: require('~/assets/images/comps.png'),
					chips: [
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
							name: 'vue',
							theme: 'success',
							rippleColor: 'green'
						}
					],
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
							name: 'vue',
							theme: 'success',
							rippleColor: 'green'
						}
					],
					links: [
						{
							name: 'Todo app',
							to: 'https://aw-vue-todo.web.app/'
						}
					]
				},
				{
					title: 'Cube app',
					description: `Cube application with awesome vue.js animations, where all side of cube is link on other page. Just testing app.`,
					imageSrc: require('~/assets/images/cube-app.png'),
					chips: [
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
							name: 'vue',
							theme: 'success',
							rippleColor: 'green'
						},
						{
							name: 'nuxt',
							theme: 'success',
							rippleColor: 'green'
						}
					],
					links: [
						{
							name: 'Github',
							to: 'https://github.com/yuriiholskiy/cube-app'
						},
						{
							name: 'Cube app',
							to: 'https://yuriiholskiy.github.io/cube-app'
						}
					]
				},
				{
					title: 'Pokedex app',
					description: 'Pokedex app using pokemon api',
					imageSrc: require('~/assets/images/not-optimized/pokedex.png'),
					chips: [
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
							name: 'vue',
							theme: 'success',
							rippleColor: 'green'
						}
					],
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
				}
			]
		};
	}
};
</script>

<style lang="scss">
.created-by-title {
	font-weight: 800;
}
</style>
