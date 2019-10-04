<script>
export default {
	functional: true,
	props: {
		direction: {
			type: String
		},
		justify: {
			type: String,
			default: ''
		},
		align: {
			type: String,
			default: ''
		}
	},
	render(h, { data, props, children }) {
		const classes = [];
		if(props.justify !== '') {
			const jarrs = props.justify.split(' ');
			jarrs.forEach(j => {
				classes.push(`justify-${j}`);
			});
		}
		if(props.align !== '') {
			const alarrs = props.align.split(' ');
			alarrs.forEach(a => {
				classes.push(`align-${a}`);
			});
		}
		return h('div', {
			class: ['c-row', data.staticClass, ...classes]
		}, children);
	}
}
</script>

<style lang='scss'>
$justifies: (center, flex-start, flex-end, space-between, space-around);
$aligns: (center, flex-start, flex-end, stretch, baseline);

.c-row {
	margin-left: #{$grid-gap-one-side * -1};
	margin-right:  #{$grid-gap-one-side * -1};
	display: flex;
	flex-wrap: wrap;
	@each $k, $v in $grid-breakpoints {
		@each $t in $justifies {
			@media (min-width: $v) {
				&.justify-#{$k}-#{$t} {
					justify-content: $t;
				}
			}
		}
		@each $t in $aligns {
			@media (min-width: $v) {
				&.align-#{$k}-#{$t} {
					align-items: $t;
				}
			}
		}
	}
}
</style>
