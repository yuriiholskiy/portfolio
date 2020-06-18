<template>
	<div class="app-header">
		<app-sidebar :menu-links="menuLinks" v-model="drawer" />
		<c-toolbar class="bg-color-dark">
			<template #start>
				<div class="buttons">
					<app-burger-menu
						class="bg-color-light"
						size="2.5"
						@click="drawer = true"
						:active="drawer"
					/>

					<app-logo />
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
import AppSidebar from '~/components/AppSidebar';
import CToolbar from '~/components/ui/CToolbar';
import AppBurgerMenu from '~/components/AppBurgerMenu';
import AppLogo from '~/components/AppLogo';
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
	components: {
		AppSidebar,
		CToolbar,
		AppBurgerMenu,
		AppLogo
	}
};
</script>
