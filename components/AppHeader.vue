<template>
	<div class="app-header">
		<c-nav-drawer v-model="drawer" dark push>
			<h3 class="title-1">Navigation</h3>
			<c-button
				theme="light"
				v-for="link in menuLinks"
				:to="{ name: link.path }"
				:key="link.path"
				class="text-dark mt-1"
			>
				{{ link.name }}
			</c-button>
		</c-nav-drawer>
		<c-overlay v-if="drawer" drawer @click="drawer = false"> </c-overlay>
		<c-toolbar theme="secondary">
			<div
				class="toolbar-left df aic"
				:class="{ 'anim-trY-down-slow': isAnimation }"
				ref="slowAnimEl"
			>
				<burger-menu
					class="bg-light"
					size="2.5"
					@click="drawer = true"
					:active="drawer"
					v-ripple
				/>
				<figure class="df aic ml-2">
					<img
						src="~/assets/images/yurii.jpg"
						alt="Yurii Golskyi"
						class="img-responsive hero-image"
					/>
					<figcaption class="display text-white">
						Yurii Golskyi, <span class="title db">more than developer.</span>
					</figcaption>
				</figure>
			</div>
			<div class="toolbar-right hidden-sm-and-down">
				<c-button
					theme="light"
					v-for="link in menuLinks"
					:to="{ name: link.path }"
					:key="link.path"
					class="mr-1 text-dark"
					:class="{ 'anim-trY-down-middle': isAnimation }"
				>
					{{ link.name }}
				</c-button>
			</div>
		</c-toolbar>
	</div>
</template>

<script>
import BurgerMenu from '~/components/BurgerMenu';
import removeAnimClassMixin from '~/mixins/remove-anim-class.mixin';
export default {
	mixins: [removeAnimClassMixin],
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
