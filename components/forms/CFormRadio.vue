<template>
	<div class="c-form-custom-radio">
		<input type="radio" 
					 class="c-form-radio"
					 :class="[
					 		themes[theme]
					 ]"
					 :value="value"
					 :checked="shouldBeChecked"
					 v-bind="$attrs"
					 @change="$emit('change', value)"
					 />
		<label class="c-form-radio-label" :for="labelFor">
			<slot></slot>
		</label>			 
	</div>
</template>

<script>
import themesMixin from '@/mixins/themes.mixin';
export default {
	inheritAttrs: false,
	mixins: [themesMixin('form-radio')],
	name: 'CFormRadio',
	model: {
		prop: 'modelChecked',
		event: 'change'
	},
	props: {
		modelChecked: {
			default: false
		},
		value: {
			type: String,
			default: ''
		},
		theme: {
			type: String,
			default: 'primary'
		}
	},
	computed: {
		labelFor() {
			return this.$attrs.id;
		},
		shouldBeChecked() {
			return this.modelChecked === this.value;
		}
	}
}
</script>

<style lang='scss' scoped>
.c-form {
	&-custom-radio {
		position: relative;
    display: flex;
    align-items: center;
    min-height: 1.5rem;
	}
	&-radio {
		position: absolute;
    z-index: -1;
    opacity: 0;
    appearance: none;
    @each $key, $val in $colors {
    	&-#{$key} {
				&:focus ~ .c-form-radio-label::before {
		    	box-shadow: 0 0 0 0.2rem rgba($val,.25);
		    }
			  &:checked ~ .c-form-radio-label::before {
				  color: #fff;
				  border-color: $val;
				  background-color: $val;
			  }
			  &:checked ~ .c-form-radio-label::after {
			  	background-color: lighten($val, 40%);
			  	opacity: 1;
			  }
			  &:focus:not(:checked) ~ .c-form-radio-label::before {
				  border-color: rgba($val,.25);
				}
			}
    }
	}
	&-radio-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-bottom: 0;
    &::before {
    	content: '';
    	width: 1rem;
    	height: 1rem;
    	display: block;
    	background-color: transparent;
    	transition: .3s background-color;
    	border: 1px solid #333;
    	border-radius: 50%;
    	margin-right: .5rem;
    }
    &::after {
    	content: '';
	    display: block;
	    opacity: 0;
	    transition: .3s opacity, .3s background-color;
	    border-radius: 50%;
	    background-color: #fff;
	    position: absolute;
	    left: .3rem;
	    width: .4rem;
	    height: .4rem;
    }
	}
}
</style>