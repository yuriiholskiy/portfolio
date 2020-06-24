<template>
	<div class="sidebar">
		<c-overlay :is-open="drawer" @click.self="$emit('update:drawer', false)" />
		<c-nav-drawer v-model="drawer">
			<div class="full-width text-center mt-2 px-1">
				<h3 class="title-1">
					Navigation
				</h3>
				<c-button
					tag="nuxt-link"
					:to="{ name: link.path }"
					v-for="link in menuLinks"
					:key="link.path"
					class="mt-1 is-primary db is-big"
				>
					{{ link.name }}
				</c-button>
				<c-button class="is-info mt-2" @click="changeTheme">
					Change theme ({{ $colorMode.preference }})
				</c-button>
			</div>
		</c-nav-drawer>
	</div>
</template>

<script>
import CNavDrawer from '~/components/ui/CNavDrawer';
import COverlay from '~/components/ui/COverlay';
export default {
	name: 'AppSidebar',
	model: {
		prop: 'drawer',
		event: 'update:drawer'
	},
	props: {
		menuLinks: {
			type: Array,
			required: true
		},
		drawer: {
			type: Boolean,
			required: true
		}
	},
	watch: {
		'$route.fullPath'() {
			this.$emit('update:drawer', false);
		}
	},
	methods: {
		changeTheme() {
			if (this.$colorMode.preference === 'light') {
				this.$colorMode.preference = 'dark';
			} else {
				this.$colorMode.preference = 'light';
			}
		}
	},
	components: {
		COverlay,
		CNavDrawer
	}
};
</script>
