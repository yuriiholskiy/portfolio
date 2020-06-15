<template>
	<div class="c-chip" :class="[themes[theme]]" v-on="$listeners">
		<c-icon
			v-if="iconName && !iconRight"
			:name="iconName"
			width="20"
			height="20"
			left
		/>
		<slot>Default</slot>
		<c-icon
			v-if="iconName && iconRight"
			:name="iconName"
			width="20"
			height="20"
			right
		/>
	</div>
</template>

<script>
import CIcon from '~/components/ui/CIcon';
import themesMixin from '@/mixins/themes.mixin';
export default {
	name: 'CChip',
	mixins: [themesMixin('chip')],
	props: {
		theme: {
			type: String,
			default: 'secondary'
		},
		iconName: {
			type: String,
			required: false
		},
		iconRight: {
			type: Boolean,
			default: false
		}
	},
	components: {
		CIcon
	}
};
</script>

<style lang="scss" scoped>
.c-chip {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.3rem 0.7rem;
	border-radius: 1rem;
	white-space: nowrap;
	cursor: default;
	&:not(:last-child) {
		margin-right: 0.25rem;
	}
	@each $key, $val in $colors {
		&-#{$key} {
			color: lighten($val, 35%);
			background-color: $val;
			border-color: darken($val, 5%);
		}
	}
}
</style>
