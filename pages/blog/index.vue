<template>
	<section class="section-wrap">
		<h2 class="display-1">
			There is a blog
		</h2>
		<div class="row">
			<div class="column mt-1" v-for="article in articles" :key="article.name">
				<c-card action max-width="50">
					<template #title>
						{{ article.name }}
					</template>
					<template #description>
						<span> {{ article.description.slice(0, 40).trim() }}... </span>
					</template>
					<template #action>
						<c-button
							tag="nuxt-link"
							class="is-primary mt-1"
							:to="article.path"
						>
							{{ article.name }}
						</c-button>
					</template>
				</c-card>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			articles: [
				{
					name: 'Vue teleport',
					path: 'blog/vue_teleport',
					description: 'This is a vue 3'
				}
			]
		};
	}
};
</script>

<style lang="scss">
.row {
	@include row;
	@include md(justify-content, center);
}
.column {
	@include responsive-col(6, 12, 12, 12);
}
</style>
