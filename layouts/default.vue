<template>
	<div class="full-height">
		<app-header />
		<div class="container px-2">
			<nuxt />
		</div>
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
export default {
	components: {
		AppHeader
	},
	head() {
		const canonical = `https://yuriiholskiy.github.io${this.$route.path
			.toLowerCase()
			.replace(/\/$/, '')}`;
		return {
			link: [{ rel: 'canonical', href: canonical }]
		};
	}
};
</script>
