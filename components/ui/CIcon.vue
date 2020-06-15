<template>
	<div class="c-icon-wrap" :class="[{ left: left }, { right: right }]">
		<svg class="c-icon" :width="width" :height="height" v-if="sprite">
			<use v-bind="svgBindings" />
		</svg>
		<iconify-icon v-else :icon="name" width="20" height="20" />
	</div>
</template>

<script>
export default {
	name: 'CIcon',
	props: {
		sprite: {
			type: String,
			default: ''
		},
		width: {
			type: [Number, String],
			default: 24
		},
		height: {
			type: [Number, String],
			default: 24
		},
		name: {
			type: String,
			required: true
		},
		right: {
			type: Boolean,
			default: false
		},
		left: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: 'none'
		},
		strokeColor: {
			type: String,
			default: 'currentColor'
		}
	},
	computed: {
		svgBindings() {
			return {
				'xlink:href': `${this.sprite}#${this.name}`,
				fill: this.color,
				stroke: this.strokeColor
			};
		}
	}
};
</script>

<style scoped lang="scss">
.c-icon-wrap {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	font-weight: 600;

	&.right {
		margin-left: 0.5rem;
	}
	&.left {
		margin-right: 0.5rem;
	}
}
.c-icon {
	stroke: currentColor;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
}
</style>
