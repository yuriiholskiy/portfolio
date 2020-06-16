<template>
	<div class="full-height bg-color-light">
		<app-header />
		<div class="container">
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
		console.log();
		const canonical = `https://yuriiholskiy.github.io/portfolio${this.$route.path
			.toLowerCase()
			.replace(/\/$/, '')}/`;
		return {
			link: [{ rel: 'canonical', href: canonical }]
		};
	}
};
</script>
<style lang="scss">
.container {
	@include container;
}
.pulse {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	position: absolute;
	z-index: 1;
	top: 0%;
	left: 0%;
	transform: scale(0);
}
.anim {
	animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
	to {
		transform: scale(2);
		opacity: 0;
	}
}
</style>
