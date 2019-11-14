<template>
	<c-app class="bg-light full-height">
		<app-header />

		<c-container class="pt-5">
			<nuxt />
		</c-container>

		<to-top-btn />
	</c-app>
</template>


<script>
import AppHeader from '~/components/AppHeader';
import ToTopBtn from '~/components/ToTopBtn';
export default {
	components: {
		AppHeader,
		ToTopBtn
	}
}
</script>

