<template>
	<div class="error">
		<p class="error-text text-center">
			Sorry, we have error there.
			<span>Looks like this page doesn't exist.</span>
		</p>
		<img
			src="~/assets/icons/error-icon.svg"
			alt="Error icon"
			class="mt-2 error-icon"
		/>
		<b-button tag="nuxt-link" :to="{ name: 'index' }" class="is-info mt-2">
			Back to home
		</b-button>
	</div>
</template>

<script>
export default {
	layout: 'error-layout'
};
</script>

<style scoped lang="scss">
.error {
	height: 100vh;
	background-color: #235789;
	color: #fff;
	font-size: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&-text {
		span {
			display: block;
		}
	}
	&-icon {
		width: 8rem;
		height: 8rem;
	}
}
</style>
