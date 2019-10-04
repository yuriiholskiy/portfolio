<template>
	<div class="c-progress" :class="[themes[theme]]" v-if="dismiss" v-on="$listeners">
		<div class="c-progress-bar" :style="progressWidth">
			{{ value }}
		</div>
	</div>
</template>

<script>
import themesMixin from '@/mixins/themes.mixin';
export default {
	name: 'CProgress',
	mixins: [themesMixin('progress')],
	props: {
		value: {
			type: [Number, String],
			required: true
		},
		max: {
			type: Number,
			default: 100
		},
		theme: {
			type: String,
			default: 'primary'
		},
		dismiss: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		progressWidth() {
			return {
				width: (this.max / 100) * this.value + '%'
			}
		}
	}
}
</script>

<style lang='scss' scoped>
.c-progress {
	display: flex;
	color: #fff;
	text-align: center;
	overflow: hidden;
	appearance: none;
	border-radius: .1rem;
	@each $key, $val in $colors {
		&-#{$key} {
			border: 1px solid darken($val, 5%);
			background-color: lighten($val, 30%);
			> div {
				background-color: $val;
			}
		}
	}
	&-bar {
		white-space: nowrap;
		transition: width .3s;
	}
}

</style>