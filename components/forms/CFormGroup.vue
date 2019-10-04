<template>
	<div class="c-form-group">
		<label :for="labelFor" class="c-form-label">{{ label }}</label>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'CFormGroup',
	props: {
		label: {
			type: String,
			default: ''
		},
		labelFor: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang='scss'>
.c-form {
	&-group {
		width: 100%;
	}
	&-label {
		margin-bottom: 1rem;
		display: block;
	}
}
</style>