<template>
	<div class="c-icon-wrap" :class="[{'left': left}, {'right': right}]">
		<svg class="c-icon" :width="width" :height="height" >
			<use v-bind="svgBindings" />
		</svg>
	</div>
</template>

<script>
export default {
	name: 'CIcon',
	props: {
		width: {
			type: [Number, String],
			default: 24
		},
		height: {
			type: [Number, String],
			default: 24
		},
		sprite: {
			type: String,
			default: ''
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
}
</script>

<style scoped lang='scss'>
.c-icon-wrap {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	font-weight: 600;

	&.right {
		margin-left: .5rem;
	}
	&.left {
		margin-right: .5rem;
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
