<template>
	<nuxt-link class="c-button"
							 v-if="!btn"
							 :to="to"
							 :class="[
							 		themes[theme],
							 		sizes[size],
							 		{disabled: disabled},
							 		{flat: flat},
							 		{circle: circle},
							 		{'no-border': noBorder},
							 		{loading: loading}
							 ]"
							 :disabled="disabled"
							 @click.native="onClick">
		<c-spinner loading size="1" theme="light" v-if="loading"></c-spinner>
		<slot>Button</slot>
	</nuxt-link>
	<button v-else
					class="c-button"
				  :class="[
				 		themes[theme],
				 		sizes[size],
				 		{disabled: disabled},
				 		{flat: flat},
				 		{'no-border': noBorder},
				 		{circle: circle},
				 		{loading: loading}
					]"
					type="button"
					:disabled="disabled"
					@click="onClick">
		<c-spinner size="1" theme="light" v-if="loading"></c-spinner>
		<slot>Button</slot>
	</button>
</template>

<script>
import themesMixin from '../../mixins/themes.mixin';
export default {
	name: 'CButton',
	mixins: [themesMixin('button')],
	props: {
		btn: {
			type: Boolean,
			default: false
		},
		to: {
			type: [String, Object],
			default() {
				return {
					path: '/'
				}
			}
		},
		theme: {
			type: String,
			default: 'primary'
		},
		size: {
			type: String,
			default: 'normal'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		flat: {
			type: Boolean,
			default: false
		},
		noBorder: {
			type: Boolean,
			default: false
		},
		circle: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			sizes: {
				small: 'c-button-small',
				normal: '',
				large: 'c-button-large'
			}
		}
	},
	methods: {
		onClick(event) {
			if(this.disabled) {
				return;
			}
			this.$emit('click', event);
		}
	}
}
</script>

<style lang='scss' scoped>
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
		padding: .5rem .8rem;
		cursor: pointer;
		transition: .3s background-color, .3s transform, .3s border-color, .2s box-shadow;
		color: #fff;
		&:focus {
			outline: none;
		}
		&:active,
		&:focus {
			box-shadow: 0px 2px 5px rgba(#000, .5);
		}
		&.no-border {
			border: none !important;
		}
		&.circle {
			border-radius: 100%;
		}
		&.loading {
			display: inline-flex;
			align-items: center;
			> div.c-spinner {
				margin-right: .5rem;
			}
		}
		@each $key, $val in $colors {
			&-#{$key} {
				background-color: $val;
				color: lighten($val, 40%);
				&:hover,
				&.nuxt-link-exact-active {
					background-color: darken($val, 15%);
				}
				&:active {
					background-color: darken($val, 10%);
				}
				&:focus {
					box-shadow: 0 0 0 .2rem rgba($val, .5);
				}
				&.flat {
					border: 1px solid $val;
					background-color: transparent;
					color: darken($val, 10%);
					&:hover {
						background-color: darken($val, 2%);
						color: lighten($val, 20%);
					}
				}
			}
		}

		// sizes
		&-small {
			padding: .3rem .5rem;
		}
		&-large {
			padding: .8rem 1.1rem;
		}

		&.disabled {
			color: #999;
			background-color: #ddd;
		}
	}
</style>
