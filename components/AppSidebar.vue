<template>
	<div class="sidebar">
		<c-overlay :is-open="drawer" @click.self="$emit('update:drawer', false)" />
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
	methods: {
		goTo(name) {
			this.$emit('update:drawer', false);
			this.$router.push({ name });
		}
	},
	components: {
		COverlay,
		CNavDrawer
	}
};
</script>
