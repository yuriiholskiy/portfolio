<script>
export default {
	functional: true,
	name: 'CCol',
	props: {
		xs: {
			type: String,
			default: ''
		},
		sm:  {
			type: String,
			default: ''
		},
		md:  {
			type: String,
			default: ''
		},
		lg:  {
			type: String,
			default: ''
		},
		xl:  {
			type: String,
			default: ''
		},
	},
	render(h, { data, props, children }) {
		const classes = [];
		if(props.xs !== '') classes.push('xs-' + props.xs)
		if(props.sm !== '') classes.push('sm-' + props.sm)
		if(props.md !== '') classes.push('md-' + props.md)
		if(props.lg !== '') classes.push('lg-' + props.lg)
		if(props.xl !== '') classes.push('xl-' + props.xl)
		return h('div', {
			class: ['c-col', data.staticClass, ...classes]
		}, children);
	}
}
</script>

<style lang='scss'>
	.c-col {
		box-sizing: border-box;
    word-wrap: break-word;
		max-width: 100%;
		min-height: 1px;
		margin-left: #{$grid-gap-one-side};
		margin-right: #{$grid-gap-one-side};

		@each $k, $v in $grid-breakpoints {
			@for $i from 1 through $grid-columns {
				@media (min-width: $v) {
					&.#{$k}-size-#{$i} {
						flex-basis: calc(#{(100% / $grid-columns) * $i - #{$grid-gap}});
					}
				}
			}
			@media (min-width: $v) {
				&.#{$k}-flex {
					flex: 1;
				}
			}
 		}
	}
</style>
