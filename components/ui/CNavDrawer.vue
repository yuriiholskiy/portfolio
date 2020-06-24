<template>
	<aside
		class="c-nav-drawer"
		:style="{ width: width }"
		:class="{
			'is-open': drawer,
			[position]: position
		}"
	>
		<slot></slot>
	</aside>
</template>

<script>
export default {
	name: 'CNavDrawer',
	model: {
		prop: 'drawer',
		event: 'close-drawer'
	},
	props: {
		drawer: {
			type: Boolean,
			default: true
		},
		width: {
			type: [String, Number],
			default() {
				return '250px';
			}
		},
		position: {
			type: String,
			default: 'left'
		}
	}
};
</script>

<style lang="scss" scoped>
.c-nav-drawer {
	position: fixed;
	top: 0;
	z-index: 1000;
	padding-top: 1rem;
	width: 250px;
	height: 100vh;
	box-shadow: 1px 2px 15px rgba(#000, 0.7);
	transition: 0.3s transform, 0.3s color, 0.3s background-color ease;
	color: var(--text-color);
	background-color: var(--bg-color);
	&.left {
		left: 0;
		transform: translateX(-110%);
	}
	&.right {
		right: 0;
		transform: translateX(110%);
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	&.is-open {
		z-index: 11111;
		transform: translateX(0);
	}
}
</style>
