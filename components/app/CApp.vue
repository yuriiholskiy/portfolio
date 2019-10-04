<script>
export default {
	functional: true,
	name: 'CApp',
	render(h, { data, children }) {
		return h('div', { attrs: {id: 'app'}, class: [data.staticClass] }, children);
	}
}
</script>

<style>
#app {
	min-height: 100vh;
}
</style>