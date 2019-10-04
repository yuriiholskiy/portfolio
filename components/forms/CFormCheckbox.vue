<template>
	<div class="c-form-custom-checkbox">
		<input type="checkbox" 
					 class="c-form-checkbox"
					 :class="[
					 		themes[theme],
					 		{switcher: switcher}
					 ]"
					 v-bind="$attrs"
					 v-on="$listeners"
					 :value="value"
					 :checked="shouldBeChecked"
					 @change="updateCheckboxInput" 
					 />
		<label class="c-form-checkbox-label" :for="labelFor" :class="{switcher: switcher}">
			<slot></slot>
		</label>			 
	</div>
</template>

<script>
import themesMixin from '@/mixins/themes.mixin';
export default {
	inheritAttrs: false,
	mixins: [themesMixin('form-checkbox')],
	name: 'CFormCheckbox',
	model: {
		prop: 'modelChecked',
		event: 'modelCheckedEvent'
	},
	props: {
		modelChecked: {
			default: false
		},
		value: {
			type: String,
			default: ''
		},
		trueValue: {
			type: Boolean,
			default: true
		},
		falseValue: {
			type: Boolean,
			default: false
		},
		theme: {
			type: String,
			default: 'primary'
		},
		switcher: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		labelFor() {
			return this.$attrs.id;
		},
		shouldBeChecked() {
			if(this.modelChecked instanceof Array) {
				return this.modelChecked.includes(this.value);
			}
			return this.modelChecked === this.trueValue;
		}
	},
	methods: {
		updateCheckboxInput(event) {
			const isChecked = event.target.checked;

			if(this.modelChecked instanceof Array) {
				const newValue = [...this.modelChecked];

				if(isChecked) {
					newValue.push(this.value);
				} else {
					newValue.splice(newValue.indexOf(this.value), 1);
				}
				this.$emit('modelCheckedEvent', newValue);
			} else {
				this.$emit('modelCheckedEvent', isChecked ? this.trueValue : this.falseValue);
			}		
		}
	}
}
</script>

<style lang='scss' scoped>
.c-form {
	&-custom-checkbox {
		position: relative;
		min-height: 1.5rem;
		display: flex;
		align-items: center;
	}
	&-checkbox {
		position: absolute;
    z-index: -1;
    opacity: 0;
    appearance: none;
    @each $key, $val in $colors {
    	&-#{$key} {
				&:focus ~ .c-form-checkbox-label::before {
		    	box-shadow: 0 0 0 0.2rem rgba($val,.25);
		    }
			  &:checked ~ .c-form-checkbox-label::before {
					color: #fff;
				  border-color: $val;
				  background-color: $val;
			  }
			  &:checked ~ .c-form-checkbox-label::after {
			  	background-image: url('~@/assets/icons/checked.svg');
			  }
			  &:focus:not(:checked) ~ .c-form-checkbox-label::before {
				  border-color: rgba($val,.25);
				}
				&.switcher {
					&:checked ~ .c-form-checkbox-label::after {
						background-image: none;
						background-color: #fff;
						left: 1.3rem;
				  }
				}
			}
    }
	}
	&-checkbox-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-bottom: 0;
    &::before {
    	content: '';
    	width: 1rem;
    	height: 1rem;
    	transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    	border-radius: .25rem;
    	padding-right: .8rem;
    	margin-right: .5rem;
    	pointer-events: none;
	    background-color: #fff;
	    border: 1px solid #adb5bd;
    }
    &::after {
    	content: '';
	    display: block;
	    position: absolute;
	    width: 1rem;
	    height: 1rem;
	    background: no-repeat 50% / 50% 50%;
    }
    &.switcher {
    	&::before {
    		content: '';
    		display: block;
	    	width: 2rem;
	    	border-radius: .5rem;
    	}
    	&::after {
    		content: '';
    		position: absolute;
    		top: calc(50% - .25rem);
    		left: .2rem;
    		transition: left .25s, background-color .3s;
	    	width: .5rem;
	    	height: .5rem;
	    	border-radius: 50%;
	    	background-color: $switcher-disabled-color;
    	}
    }
	}
}
</style>