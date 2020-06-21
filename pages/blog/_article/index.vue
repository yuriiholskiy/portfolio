<template>
	<section class="section-wrap">
		<h2 class="title-1 text-center">
			{{ doc.title }}
		</h2>
		<nuxt-content class="mt-2" :document="doc" />
	</section>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const doc = await $content(params.article || 'index').fetch();
		// console.log(doc);
		return {
			doc
		};
	}
};
</script>

<style lang="scss">
.nuxt-content {
	max-width: 65rem;
	margin: 1rem auto 0;
	code {
		font-size: 1.2rem;
	}
	p {
		font-size: 1.3rem;
	}
	h3 {
		a {
			color: var(--primary-color);
		}
	}
}
</style>
