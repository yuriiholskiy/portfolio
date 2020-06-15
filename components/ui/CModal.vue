<template>
	<b-modal
		:active="modelValue"
		:can-cancel="true"
		scroll="keep"
		:width="900"
		animation="modal-fade"
		@close="$emit('update:modelValue', !modelValue)"
	>
		<slot />
	</b-modal>
</template>

<script>
export default {
	name: 'CModal',
	model: {
		prop: 'modelValue',
		event: 'update:modelValue'
	},
	props: {
		modelValue: {
			type: Boolean,
			required: true
		}
	}
};
</script>

<style lang="scss">
.modal-fade-enter,
.modal-fade-leave-to {
	opacity: 0;
	transform: skewX(8deg);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 0.5s ease, transform 0.3s;
}
</style>
