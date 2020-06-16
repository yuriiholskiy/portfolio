<template>
	<div class="c-chip" v-on="$listeners">
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
export default {
	name: 'CChip',
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
	&.is-primary {
		background-color: var(--primary-color);
		color: var(--light-color);
		border-color: var(--primary-light-color);
	}
	&.is-secondary {
		background-color: var(--secondary-color);
		color: var(--secondary-dark-color);
		border-color: var(--secondary-light-color);
	}
	&.is-info {
		background-color: var(--info-color);
		color: var(--dark-color);
		border-color: var(--info-light-color);
	}
	&.is-negative {
		background-color: var(--negative-color);
		color: var(--light-color);
		border-color: var(--negative-light-color);
	}
	&.is-positive {
		background-color: var(--positive-color);
		color: var(--dark-color);
		border-color: var(--positive-light-color);
	}
	&.is-light {
		background-color: var(--light-color);
		color: var(--dark-color);
		border-color: var(--light-light-color);
	}
	&.is-dark {
		background-color: var(--dark-color);
		color: var(--light-color);
		border-color: var(--dark-light-color);
	}
}
</style>
