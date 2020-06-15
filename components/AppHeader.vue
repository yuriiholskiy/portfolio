<template>
	<div class="app-header">
		<b-sidebar
			type="is-dark"
			:fullheight="true"
			:overlay="true"
			:open.sync="drawer"
		>
			<div class="text-center mt-2 px-1">
				<h3 class="title-1 text-white">
					Navigation
				</h3>
				<b-button
					tag="nuxt-link"
					v-for="link in menuLinks"
					:to="{ name: link.path }"
					:key="link.path"
					class="mt-1 is-link db"
				>
					{{ link.name }}
				</b-button>
			</div>
		</b-sidebar>
		<b-navbar :mobile-burger="false" type="is-dark" class="py-1">
			<template slot="brand">
				<div class="buttons">
					<burger-menu
						class="bg-light ml-1"
						size="2.5"
						@click="drawer = true"
						:active="drawer"
					/>

					<figure class="df aic">
						<nuxt-link :to="{ name: 'index' }" class="ml-1">
							<img
								src="~/assets/images/yurii.jpg"
								alt="Yurii Golskyi"
								class="img-responsive hero-image"
							/>
						</nuxt-link>
						<figcaption class="display text-white">
							Yurii Golskyi,
							<span class="custom-title db mtn-1">more than developer.</span>
						</figcaption>
					</figure>
				</div>
			</template>

			<template slot="end">
				<b-navbar-item tag="div">
					<div class="buttons">
						<b-button
							tag="nuxt-link"
							v-for="link in menuLinks"
							:to="{ name: link.path }"
							:key="link.path"
							class="is-link"
						>
							{{ link.name }}
						</b-button>
					</div>
				</b-navbar-item>
			</template>
		</b-navbar>
	</div>
</template>

<script>
import BurgerMenu from '~/components/BurgerMenu';
export default {
	data() {
		return {
			isAnimation: true,
			drawer: false,
			menuLinks: [
				{
					name: 'Home',
					path: 'index'
				},
				{
					name: 'About',
					path: 'about'
				},
				{
					name: 'Works',
					path: 'works'
				}
			]
		};
	},
	watch: {
		'$route.fullPath'() {
			this.drawer = false;
		}
	},
	components: {
		BurgerMenu
	}
};
</script>

<style lang="scss">
.hero-image {
	width: 50px;
	height: 50px;
	border: 1px solid map-get($colors, dark);
	border-radius: 50%;
}
</style>
