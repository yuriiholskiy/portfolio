<template>
	<section class="section-wrap">
		<h2 class="py-1 title-1 text-center">
			{{ doc.title }}
		</h2>
		<nuxt-content class="mt-2" :document="doc" />
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: this.doc.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.doc.description
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.doc.title
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.doc.description
				}
			]
		};
	},
	async asyncData({ $content, params, error }) {
		let doc;
		try {
			doc = await $content(params.article || 'index').fetch();
		} catch {
			error({ statusCode: 404, message: 'Article not found' });
		}
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
