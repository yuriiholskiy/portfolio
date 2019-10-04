<script>
export default {
	functional: true,
	name: 'COverlay',
	props: {
		drawer: {
			type: Boolean,
			default: false
		},
		modal: {
			type: Boolean,
			default: false
		}
	},
	render(h, { data, props, children, listeners }) {
		return h('div', {
			class: [
				'c-overlay',
		 	  {'is-open': props.drawer},
				data.staticClass
			],
			on: listeners
		}, children);
	}
}
</script>

<style lang='scss'>
.c-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 3;
	transition: .3s background-color ease;
	transition-delay: .3s;
	&.is-open {
		z-index: 10000;
		background-color: rgba(#000, .7);
		width: 100%;
		height: 100%;
	}
}
</style>
