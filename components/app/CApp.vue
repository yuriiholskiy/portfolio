<script>
export default {
	functional: true,
	name: 'CApp',
	render(h, { data, children }) {
		return h(
			'div',
			{ attrs: { id: 'app' }, class: [data.staticClass, data.class] },
			children
		);
	}
};
</script>

<style>
#app {
	position: relative;
	min-height: 100vh;
}
</style>
