<template>
	<section class="works py-2 text-lighten-dark">
		<h2 class="display-1" :class="{'anim-trY-fast': isAnimation}">
			My works,
		</h2>
		<div ref="slowAnimEl" :class="{'anim-trY-slow': isAnimation}">
			<c-row class="works-row mt-1" 
						 justify="xs-center" 
						 >
				<c-col xs="size-12" 
							 sm="size-10" 
							 md="size-6"
							 v-for="{ title, description, imageSrc, links } in works"
							 :key="title">
					<c-card action :image-src="imageSrc" image-alt="@vue/comps">
						<template #title>
							{{ title }}
						</template>
						<template #description>
							{{ description }}
						</template>
						<template #action>
							<c-button v-for="{ name, to } in links"
												:key="to"
												theme="secondary"
												class="mr-1" 
												target="_blank" 
												rel="noopener"
												:href="to">
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
		}
	},
	data() {
		return {
			works: [
				{
					title: '@vue/comps',
					description: `Simple Vue ui component library. This portfolio created by using @vue/comps.
												You can check more on github.`,
					imageSrc: 'images/comps.png',
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
					description: 
											`This is a CRUD application, created by Vue.js (+ Vuex and VueRouter) and using firebase hosting.You can add, delete and update(by double click on todo title). 
												Also have a filter for done, active and all todos.`,
					imageSrc: 'images/aw-todo.png',
					links: [
						{
							name: 'Comps',
							to: 'https://aw-vue-todo.web.app/'
						}
					] 						
				},
				{
					title: '@vue/comps',
					description: `Simple Vue ui component library. This portfolio created by using @vue/comps.
												You can check more on github.`,
					imageSrc: 'images/comps.png',
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
					title: '@vue/comps',
					description: `Simple Vue ui component library. This portfolio created by using @vue/comps.
												You can check more on github.`,
					imageSrc: 'images/comps.png',
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
			]
		}
	}
}
</script>

