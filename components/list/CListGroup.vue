<script>
export default {
	functional: true,
	name: 'CListGroup',
	props: {
		maxWidth: {
			type: [Number, String],
			required: false
		}
	},
	render(h, { data, props, children }) {
		return h('ul', {
			class: ['c-list-group', data.staticClass],
			style: {
				'max-width': props.maxWidth
			}
		}, children);
	}
}
</script>

<style lang='scss'>
.c-list-group {
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	list-style-type: none;
	width: 100%;
}
</style>
