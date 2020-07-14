<template>
	<section class="section-wrap text-color-dark">
		<h1 class="display-1 pt-1">
			Hello there,
			<span class="db mt-1 display"
				>I am <strong>frontend developer</strong>, <strong>physicist</strong>,
				<strong>thinker</strong>, <strong>philosopher</strong>.
			</span>
		</h1>
		<p class="title-1 mt-2">
			I like creating frontend apps, and I find happiness in being a better me
			today than the me yesterday.
		</p>

		<nav class="mt-4 mt-sm-2 text-color-secondary text-center">
			<h2 class="display">
				Want to read about me? Or check my works? Or read my articles?
			</h2>
			<div class="buttons jcc mt-1 mt-sm-1 title-2">
				<c-button tag="nuxt-link" class="is-primary" :to="{ name: 'about' }">
					About
				</c-button>
				<c-button tag="nuxt-link" class="is-primary" :to="{ name: 'works' }">
					Works
				</c-button>
				<c-button tag="nuxt-link" class="is-primary" :to="{ name: 'blog' }">
					Blog
				</c-button>
			</div>
		</nav>
		<index-useful-links />
		<p class="title-2 text-center mt-4 mt-sm-2">
			<strong>All rights reserved {{ new Date().toLocaleString() }}</strong>
		</p>
	</section>
</template>

<script>
import IndexUsefulLinks from '~/components/index_components/IndexUsefulLinks';
export default {
	head() {
		return {
			title: 'Home',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Home page and useful links'
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Yurii Golskyi, more than developer.'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content:
						'I am frontend developer, physicist, thinker, philosopher. I like creating frontend apps, and I find happiness in being a better me today than the me yesterday.'
				}
			]
		};
	},
	components: {
		IndexUsefulLinks
	}
};
</script>
