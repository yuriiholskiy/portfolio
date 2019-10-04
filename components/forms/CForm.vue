<!-- <template>
	<form class="c-form" @submit="$emit('submit', $event)">
		<slot></slot>
	</form>
</template> -->
<script>
export default {
	functional: true,
	name: 'CForm',
	render(h, { data, children, listeners }) {
		return h('form', {
			class: ['c-form', data.staticClass],
			on: listeners
		}, children);
	}
}
</script>

<style>
	.c-form {
		width: 100%;
	}
</style>
