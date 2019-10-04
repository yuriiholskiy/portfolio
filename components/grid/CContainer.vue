<script>
export default {
	functional: true,
	name: "CContainer",
	render(h, { data, children }) {
		return h('div', { class: ['c-container', data.staticClass] }, children);
	}
}
</script>

<style lang='scss'>
.c-container {
	max-width: #{$container-width};
	margin-left: auto;
	margin-right: auto;
	padding-left: #{$grid-gap};
	padding-right: #{$grid-gap};
}
</style>
