<template>
	<section class="section-wrap">
		<h2 class="display-1">
			It is my blog,
		</h2>
		<div class="row">
			<div
				class="column mt-1"
				v-for="article in articlesData"
				:key="article.name"
			>
				<c-card action max-width="50">
					<template #title>
						{{ article.title }}
					</template>
					<template #description>
						<span> {{ article.description.slice(0, 40).trim() }}... </span>
						<app-tag-list :tags="article.tags" />
						<p class="mt-1">Read time: ({{ article.readTime }})</p>
					</template>
					<template #action>
						<c-button
							tag="nuxt-link"
							:aria-label="article.title"
							class="is-info mt-1"
							:to="article.path"
						>
							👓 Read
						</c-button>
					</template>
				</c-card>
			</div>
		</div>
	</section>
</template>

<script>
import AppTagList from '~/components/AppTagList';
import articlesData from '~/utils/articles.data';
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
			articlesData
		};
	},
	components: {
		AppTagList
	}
};
</script>
