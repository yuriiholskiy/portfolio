<template>
	<input
		class="c-form-input"
		:value="modelValue"
		v-bind="$attrs"
		v-on="combineListeners"
		ref="input"
	/>
</template>

<script>
export default {
	name: 'CFormInput',
	model: {
		prop: 'modelValue',
		event: 'update:modelValue'
	},
	props: {
		modelValue: {
			type: String,
			default: ''
		}
	},
	computed: {
		combineListeners() {
			return {
				...this.$listeners,
				input: event => this.$emit('update:modelValue', event.target.value)
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.c-form-input {
	display: block;
	width: 100%;
	margin: 0 auto;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	margin-bottom: 1px;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	&:valid {
		border-color: #749c75;
	}
	&:invalid {
		border-color: #dc3545;
	}
}
</style>
