<template>
	<button
		type="button"
		aria-label="burger-menu"
		class="burger-menu"
		:style="sizes"
		v-on="$listeners"
	>
		<span class="burger-menu-item bg-dark" :class="{ active: active }"></span>
	</button>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: '2'
		},
		active: Boolean
	},
	computed: {
		sizes() {
			return { width: this.size + 'rem', height: this.size + 'rem' };
		}
	}
};
</script>

<style lang="scss">
.burger-menu {
	border: none;
	padding: 0 1rem;
	cursor: pointer;
	display: block;
	position: relative;
	border-radius: 50%;
	&:focus {
		outline: none;
	}
	&:focus,
	&:active {
		box-shadow: 0 0 0 0.2rem rgba(map-get($colors, 'light'), 0.5);
	}
	&-item,
	&-item::before,
	&-item::after {
		position: absolute;
		display: inline-block;
		width: 24px;
		height: 2px;
		transition: 0.3s transform;
	}
	&-item {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		&::before,
		&::after {
			background-color: inherit;
			content: '';
			left: 50%;
			transform: translateX(-50%);
		}
		&::before {
			top: 7px;
		}
		&::after {
			top: -7px;
		}
	}
	&-item.active {
		height: 0;
		&::before {
			transform: translateX(-50%) rotate(135deg);
			top: 0;
		}
		&::after {
			transform: translateX(-50%) rotate(-135deg);
			top: 0;
		}
	}
}
</style>
