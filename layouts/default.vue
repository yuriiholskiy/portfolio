<template>
	<div>
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
	}
};
</script>
