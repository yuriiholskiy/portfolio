<template>
	<figure class="df aic">
		<nuxt-link :to="{ name: 'index' }" class="ml-1">
			<img
				src="~/assets/images/yurii.jpg"
				alt="Yurii Golskyi"
				class="img-responsive hero-image"
			/>
		</nuxt-link>
		<figcaption class="display text-color-light">
			Yurii Golskyi,
			<span class="custom-title db mtn-1">more than developer.</span>
		</figcaption>
	</figure>
</template>

<script>
export default {
	name: 'AppLogo'
};
</script>

<style lang="scss">
.hero-image {
	width: 50px;
	height: 50px;
	border: 1px solid var(--dark-color);
	border-radius: 50%;
}
</style>
