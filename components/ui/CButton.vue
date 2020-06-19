<template>
	<component
		:is="tag"
		class="c-button"
		v-on="$listeners"
		v-bind="linkAttrs"
		:to="to"
	>
		<slot />
	</component>
</template>

<script>
export default {
	name: 'CButton',
	props: {
		tag: {
			type: String,
			default: 'button'
		},
		to: {
			type: [String, Object],
			required: false
		}
	},
	computed: {
		linkAttrs() {
			const isLink = this.tag === 'a';
			const extLinkAttrs = isLink
				? {
						target: '_blank',
						rel: 'noopener',
						'aria-label': 'External link'
				  }
				: null;
			return {
				...this.$attrs,
				...extLinkAttrs
			};
		}
	}
};
</script>

<style lang="scss">
.c-button {
	position: relative;
	min-width: 66px;
	vertical-align: middle;
	display: inline-flex;
	flex: 0 0 auto;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-size: 1rem;
	border-radius: 4px;
	border: none;
	padding: 0.25rem 0.6rem;
	cursor: pointer;
	transition: 0.3s background-color, 0.3s transform, 0.3s border-color,
		0.2s box-shadow;
	color: var(--color-light);
	&:focus {
		outline: none;
	}
	&.is-primary {
		background-color: var(--primary-color);
		color: var(--light-light-color);
		&:hover {
			background-color: var(--primary-light-color);
		}
		&:active {
			background-color: var(--primary-light-color);
		}
		&:focus {
			box-shadow: 0 0 0 0.15rem var(--primary-dark-color);
		}
	}
	&.is-secondary {
		background-color: var(--secondary-color);
		&:hover {
			background-color: var(--secondary-light-color);
		}
		&:active {
			background-color: var(--secondary-light-color);
		}
		&:focus {
			box-shadow: 0 0 0 0.15rem var(--secondary-dark-color);
		}
	}
	&.is-info {
		background-color: var(--info-color);
		color: var(--dark-color);
		&:hover {
			background-color: var(--info-light-color);
		}
		&:active {
			background-color: var(--info-light-color);
		}
		&:focus {
			box-shadow: 0 0 0 0.15rem var(--info-dark-color);
		}
	}
	&.is-negative {
		background-color: var(--negative-color);
		&:hover {
			background-color: var(--negative-light-color);
		}
		&:active {
			background-color: var(--negative-light-color);
		}
		&:focus {
			box-shadow: 0 0 0 0.15rem var(--negative-dark-color);
		}
	}
	&.is-positive {
		background-color: var(--positive-color);
		color: var(--dark-color);
		&:hover {
			background-color: var(--positive-light-color);
		}
		&:active {
			background-color: var(--positive-light-color);
		}
		&:focus {
			box-shadow: 0 0 0 0.15rem var(--positive-dark-color);
		}
	}
	&.is-light {
		background-color: var(--light-color);
		color: var(--dark-color);
		&:hover {
			background-color: var(--light-light-color);
		}
		&:active {
			background-color: var(--light-light-color);
		}
		&:focus {
			box-shadow: 0 0 0 0.15rem var(--light-dard-color);
		}
	}
	&.is-dark {
		background-color: var(--dark-color);
		color: var(--light-color);
		&:hover {
			background-color: var(--dark-light-color);
		}
		&:active {
			background-color: var(--dark-light-color);
		}
		&:focus {
			box-shadow: 0 0 0 0.15rem var(--dark-light-color);
		}
	}
	&.is-big {
		width: 100%;
	}
	&.is-small {
		min-width: 33px;
		padding: 0.1rem 0.2rem;
	}
	&.is-rounded {
		border-radius: 50%;
	}
	&.disabled {
		color: #999;
		background-color: #ddd;
	}
}
</style>
