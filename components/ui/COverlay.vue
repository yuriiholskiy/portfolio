<script>
export default {
	functional: true,
	name: 'COverlay',
	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	},
	render(h, { data, props, children, listeners }) {
		return props.isOpen
			? h(
					'div',
					{
						class: [
							'c-overlay',
							data.staticClass,
							data.class,
							{ 'is-open': props.isOpen }
						],
						on: listeners,
						ref: data.ref
					},
					children
			  )
			: null;
	}
};
</script>

<style lang="scss">
.c-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 3;
	transition: 0.3s background-color ease;
	transition-delay: 0.3s;
	&.is-open {
		z-index: 10000;
		background-color: rgba(#000, 0.7);
		width: 100%;
		height: 100%;
	}
}
</style>
