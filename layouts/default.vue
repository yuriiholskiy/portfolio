<template>
  <c-app class="bg-light">
  	<app-header />

    <c-container class="pt-5">
      <nuxt />
    </c-container>

		<!-- <c-footer class="bg-secondary text-light text-center">
			Hello, i'm footer.
			created by Yurii Golskyi. All rights reserved;
			{{ new Date().getFullYear() }}
		</c-footer> -->
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

<style>

</style>

