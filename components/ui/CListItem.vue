<template>
	<li
		class="c-list-item"
		:class="[{ active: active }, { disabled: disabled }, { flex: flex }]"
		v-on="$listeners"
	>
		<slot></slot>
	</li>
</template>

<script>
export default {
	name: 'CListItem',
	props: {
		active: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		flex: {
			type: Boolean,
			required: false
		}
	}
};
</script>

<style lang="scss" scoped>
.c-list-item {
	position: relative;
	z-index: 5;
	display: block;
	padding: 0.75rem 1rem;
	background-color: #fff;
	color: var(--light-color);
	border: 1px solid var(--dark-light-color);
	transition: 0.3s background-color;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	&:not(:last-child) {
		margin-bottom: -1px;
	}
	&:hover {
		background-color: darken(#fff, 10%);
	}
	&.active {
		background-color: var(--primary-color);
		color: #fff;
		&:hover {
			background-color: var(--primary-dark-color);
		}
	}
	&.disabled {
		background-color: var(--light-dark-color) !important;
		color: #000 !important;
	}
	&.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&.is-primary {
		background-color: var(--primary-color);
		border-color: var(--light-color);
		&:hover {
			background-color: var(--primary-dark-color);
		}
	}
	&.is-secondary {
		background-color: var(--secondary-color);
		border-color: var(--light-color);
		&:hover {
			background-color: var(--secondary-dark-color);
		}
	}
	&.is-info {
		background-color: var(--info-color);
		color: var(--dark-color);
		&:hover {
			background-color: var(--info-dark-color);
		}
	}
	&.is-negative {
		background-color: var(--negative-color);
		&:hover {
			background-color: var(--negative-dark-color);
		}
	}
	&.is-positive {
		background-color: var(--positive-color);
		&:hover {
			background-color: var(--positive-dark-color);
		}
	}
	&.is-light {
		background-color: var(--bg-color);
		color: var(--text-color);
		border-color: var(--text-secondary-color);
		&:hover {
			background-color: var(--bg-secondary-color);
		}
	}
	&.is-dark {
		background-color: var(--dark-color);
		border-color: var(--light-color);
		&:hover {
			background-color: var(--dark-light-color);
		}
	}
}
</style>
