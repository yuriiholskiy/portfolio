<script>
export default {
	functional: true,
	name: 'CFooter',
	render(h, { data, children }) {
		return h(
			'div',
			{ class: ['c-footer', data.staticClass, data.class] },
			children
		);
	}
};
</script>

<style lang="scss">
.c-footer {
	padding: 0 #{$grid-gap};
	position: fixed;
	bottom: 0;
	z-index: 1000;
	height: 3.5rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
