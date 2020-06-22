<template>
	<section class="section-wrap">
		<h2 class="display-1">
			It is my blog,
		</h2>
		<div class="row">
			<div class="column mt-1" v-for="article in articles" :key="article.name">
				<c-card action max-width="50">
					<template #title>
						{{ article.title }}
					</template>
					<template #description>
						<span> {{ article.description.slice(0, 40).trim() }}... </span>
					</template>
					<template #action>
						<c-button tag="nuxt-link" class="is-info mt-1" :to="article.path">
							Read
						</c-button>
					</template>
				</c-card>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: 'Blog',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'This is article blog page'
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Article blog'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'This is article blog page'
				}
			]
		};
	},
	data() {
		return {
			articles: [
				{
					title: 'Build a modal component with Vue 3',
					path: { name: 'blog-article', params: { article: 'vue3_modal' } },
					description:
						'In this article we build modal component using Vue 3 v-model and also work with built-in Teleport component.'
				},
				{
					title: 'Build a validation system with Vue 3 and typescript',
					path: {
						name: 'blog-article',
						params: { article: 'vue3_validation_system' }
					},
					description:
						'In this article we build a validation system using Vue 3 composition api and typescript'
				}
			]
		};
	}
};
</script>
