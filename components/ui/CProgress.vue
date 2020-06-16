<template>
	<div
		class="c-progress"
		v-if="dismiss"
		v-on="$listeners"
		:style="{ width: size + '%' }"
	>
		<progress class="c-progress-bar" :style="progressWidth" :value="value" />
		<span v-if="showValue && value" class="c-progress-value">{{ value }}</span>
	</div>
</template>

<script>
export default {
	name: 'CProgress',
	props: {
		size: {
			type: Number,
			default: 100
		},
		value: {
			type: [Number, String],
			required: true
		},
		max: {
			type: Number,
			default: 100
		},
		dismiss: {
			type: Boolean,
			default: true
		},
		showValue: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		progressWidth() {
			return {
				width: (this.max / 100) * this.value + '%'
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.c-progress {
	position: relative;
	display: flex;
	text-align: center;
	overflow: hidden;
	appearance: none;
	border-radius: 0.3rem;
	border: 1px solid transparent;
	color: #fff;
	@media (max-width: map-get($breakpoints, 'phablet')) {
		width: 100% !important;
	}
	&.is-primary {
		border-color: var(--primary-color);
		> * {
			background-color: var(--primary-color);
		}
	}
	&.is-secondary {
		border-color: var(--secondary-color);
		> * {
			background-color: var(--secondary-color);
		}
	}
	&.is-info {
		border-color: var(--info-color);
		> * {
			background-color: var(--info-color);
		}
	}
	&.is-negative {
		border-color: var(--negative-color);
		> * {
			background-color: var(--negative-color);
		}
	}
	&.is-positive {
		border-color: var(--positive-color);
		> * {
			background-color: var(--positive-color);
		}
	}
	&.is-light {
		border-color: var(--light-color);
		> * {
			background-color: var(--light-color);
		}
	}
	&.is-dark {
		border-color: var(--dark-dark-color);
		> * {
			background-color: var(--dar-color);
		}
	}
	&-bar {
		white-space: nowrap;
		border-radius: 0.2rem;
		appearance: none;
		transition: width 0.5s;
	}
	&-value {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
