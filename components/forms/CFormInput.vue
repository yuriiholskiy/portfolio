<template>
	<input class="c-form-input" :value="value" v-bind="$attrs" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
	name: 'CFormInput',
	props: {
		value: {
			type: [String, Number],
			default() {
				return ''
			}
		}
	}
}
</script>

<style lang='scss' scoped>
.c-form-input {
	display: block;
	width: 100%;
	margin: 0 auto;
	padding: .375rem .75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	margin-bottom: 1px;
	border: 1px solid #ced4da;
	border-radius: .25rem;
	transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	&:valid {
	  border-color: #749C75;
	}
	&:invalid {
	  border-color: #dc3545;
	}
}
</style>