<template>
	<c-app class="bg-light full-height">
		<app-header />

		<c-container class="pt-5">
			<nuxt />
		</c-container>
	</c-app>
</template>


<script>
import AppHeader from '~/components/AppHeader';
export default {
	components: {
		AppHeader
	}
}
</script>

