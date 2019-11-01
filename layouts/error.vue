<template>
	<div class="error">
		<p class="error-text text-center">
			Sorry, we have error there.
			<span>Looks like this page doesn't exist.</span>
		</p>
		<img src="~/assets/icons/error-icon.svg" alt="Error icon" class="mt-2 error-icon" />
		<c-button :to="{name: 'index'}" class="mt-2" theme="danger">
			Back to home
		</c-button>	
	</div>
</template>

<script>
export default {
	layout: 'error-layout',
}
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
