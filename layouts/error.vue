<template>
	<div class="error">
		<p class="error-text text-center">
			{{ error.message }}
		</p>
		<img
			src="~/assets/icons/error-icon.svg"
			alt="Error icon"
			class="mt-2 error-icon"
		/>
		<c-button tag="nuxt-link" :to="{ name: 'index' }" class="is-negative mt-2">
			Back to home
		</c-button>
	</div>
</template>

<script>
export default {
	layout: 'error-layout',
	props: {
		error: {
			type: Object,
			required: true
		}
	},
	head() {
		return {
			title: this.error.message
		};
	}
};
</script>

<style scoped lang="scss">
.error {
	min-height: 100vh;
	width: 100%;
	background-color: var(--primary-color);
	color: var(--light-color);
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
