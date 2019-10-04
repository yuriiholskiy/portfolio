<template>
	<div class="c-spinner" :class="[themes[theme]]">
		<div v-if="!pulse" class="c-spinner-circle" :style="sizes"></div>
		<div v-else class="c-spinner-pulse" :style="sizes"></div>
	</div>
</template>

<script>
import themesMixin from '@/mixins/themes.mixin';
export default {
	name: 'CSpinner',
	mixins: [themesMixin('spinner')],
	props: {
		pulse: {
			type: Boolean,
			default: false
		},
		theme: {
			type: String,
			default: 'danger'
		},
		size: {
			type: [Number, String],
			default: 5
		},
	},
	computed: {
		sizes() {
			return {
				width: this.size + 'rem',
				height: this.size + 'rem',
				borderWidth: this.size / 20 + 'rem'
			}
		}
	}
}
</script>

<style lang='scss' scoped>
.c-spinner {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@each $key, $val in $colors {
		&-#{$key} {
			> .c-spinner-circle {
				border-top: .2rem solid $val;
				border-left:  .2rem solid $val;
				border-right: .2rem solid $val;
				border-bottom: .2rem solid transparent;
			}
			> .c-spinner-pulse {
				background-color: $val;
			}
		}
	}
	&-circle,
	&-pulse {
		border-radius: 50%;
	}
	&-circle {
		width: 5rem;
		height: 5rem;
		animation: circleSpinner .8s infinite linear backwards;
	}
	&-pulse {
		animation: pulseSpinner 1s infinite linear;
	}
}
@keyframes circleSpinner {
	to {
		transform: rotate(360deg);
	}
}
@keyframes pulseSpinner {
	from {
		transform: scale(0);
		opacity: 0;
	} to {
		transform: scale(1.5);
		opacity: 1;
	}
}
</style>