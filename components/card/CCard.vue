<script>
export default {
	name: 'CCard',
	functional: true,
	props: {
		imageSrc: {
			type: String,
			default: ''
		},
		imageAlt: {
			type: String,
			default: 'Image'
		},
		maxWidth: {
			type: [String, Number],
			default: '30'
		},
		bgColor: {
			type: String,
			default: '#e8e9e9'
		},
		action: {
			type: Boolean,
			default: false
		},
		ripple: {
			type: Boolean,
			default: false
		}
	},
	render(h, { data, props, slots, listeners }) {
		const titleSlot = slots().title ? slots().title : ['Default title'];
		const descrSlot = slots().description
			? slots().description
			: ['Default description'];
		const actionSlot = slots().action ? slots().action : ['Default action'];

		const { imageSrc, imageAlt, maxWidth, bgColor, action, ripple } = props;

		const cardBody = [
			h(
				'h3',
				{
					class: 'c-card-title'
				},
				titleSlot
			),
			h(
				'div',
				{
					class: 'c-card-description'
				},
				descrSlot
			)
		];
		const children = [
			h('img', {
				class: 'c-card-image',
				attrs: {
					src: imageSrc || '',
					alt: imageAlt
				}
			}),
			h(
				'div',
				{
					class: 'c-card-body'
				},
				cardBody
			),
			action
				? h(
						'div',
						{
							class: 'c-card-action'
						},
						actionSlot
				  )
				: null
		];
		return h(
			'article',
			{
				class: ['c-card', data.staticClass, data.class],
				style: [
					{ 'background-color': bgColor },
					{ 'max-width': maxWidth + 'rem' }
				],
				directives: ripple
					? [
							{
								name: 'ripple',
								value: bgColor
							}
					  ]
					: null,
				on: listeners
			},
			children
		);
	}
};
</script>

<style lang="scss" scoped>
.c-card {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-bottom: 1rem;
	margin: 1rem auto;
	text-align: left;
	border-radius: 5px;
	color: #555;
	box-shadow: 0 0 3px 0 #aaa;
	background-color: map-get($colors, 'light');
	transition: 0.15s box-shadow;
	&:hover {
		box-shadow: 0 0 5px 0 #777;
	}
}

.c-card-image {
	border-radius: 5px 5px 0 0;
	height: auto;
}

.c-card-body {
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

.c-card-body h3 {
	font-weight: 600;
	font-size: 1.6rem;
	margin-top: 0;
}

.c-card-description {
	line-height: 1.3rem;
	margin: 1rem 0 0;
	font-size: 1.2rem;
	color: $card-color;
}

.c-card-action {
	margin-left: 1rem;
	margin-top: auto;
}
</style>
