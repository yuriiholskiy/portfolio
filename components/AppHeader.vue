<template>
	<div class="app-header">
		<c-overlay :is-open="drawer" @click.self="drawer = false" />
		<c-nav-drawer v-model="drawer" class="bg-color-dark text-color-light">
			<div class="full-width text-center mt-2 px-1">
				<h3 class="title-1 text-color-light">
					Navigation
				</h3>
				<c-button
					tag="a"
					v-for="link in menuLinks"
					:key="link.path"
					class="mt-1 is-primary db is-big"
					@click="goTo(link.path)"
				>
					{{ link.name }}
				</c-button>
			</div>
		</c-nav-drawer>
		<c-toolbar class="bg-color-dark">
			<template #start>
				<div class="buttons">
					<burger-menu
						class="bg-color-light"
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
						<figcaption class="display text-color-light">
							Yurii Golskyi,
							<span class="custom-title db mtn-1">more than developer.</span>
						</figcaption>
					</figure>
				</div>
			</template>
			<template #end>
				<div class="buttons hide-md-and-down">
					<c-button
						tag="nuxt-link"
						v-for="link in menuLinks"
						:to="{ name: link.path }"
						:key="link.path"
						class="is-primary"
					>
						{{ link.name }}
					</c-button>
				</div>
			</template>
		</c-toolbar>
	</div>
</template>

<script>
import CToolbar from '~/components/ui/CToolbar';
import CNavDrawer from '~/components/ui/CNavDrawer';
import COverlay from '~/components/ui/COverlay';
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
	methods: {
		goTo(name) {
			this.drawer = false;
			this.$router.push({ name });
		}
	},
	components: { CToolbar, CNavDrawer, COverlay, BurgerMenu }
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
