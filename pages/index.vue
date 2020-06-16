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

		<div class="mt-4 mt-sm-2 text-color-secondary text-center">
			<h2 class="display">Want to read about me? Or check my works?</h2>
			<div class="buttons jcc mt-1 mt-sm-1 title-2">
				<c-button tag="nuxt-link" class="is-primary" :to="{ name: 'about' }">
					About
				</c-button>
				<c-button tag="nuxt-link" class="is-primary" :to="{ name: 'works' }">
					Works
				</c-button>
			</div>
		</div>

		<div class="mt-1 text-color-secondary text-center">
			<h2 class="display">Links that You might be interesting:</h2>
			<div class="buttons jcc mt-1 title-2">
				<c-button
					tag="a"
					v-for="(link, index) in links"
					class="is-primary"
					:class="{ 'mt-xs-1': index === linksLength }"
					:key="link.id"
					:href="link.url"
					target="_blank"
					rel="noopener"
					aria-label="External link"
				>
					{{ link.name }}
				</c-button>
			</div>
		</div>
		<p class="title-2 text-center mt-4 mt-sm-2">
			<strong>All rights reserved {{ new Date().toLocaleString() }}</strong>
		</p>
	</section>
</template>

<script>
import { uuid } from '~/utils/helpers';
export default {
	data() {
		return {
			links: [
				{
					name: 'Codepen',
					url: 'https://codepen.io/erety',
					id: uuid()
				},
				{
					name: 'Facebook',
					url: 'https://facebook.com/yuriiholskiy',
					id: uuid()
				},
				{
					name: 'Github',
					url: 'https://github.com/yuriiholskiy',
					id: uuid()
				},
				{
					name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/yurii-golskyi-322376194/',
					id: uuid()
				}
			]
		};
	},
	computed: {
		linksLength() {
			return this.links.length - 1;
		}
	}
};
</script>
