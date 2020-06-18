<template>
	<div class="mt-half df aic fww acsa hide-sm-and-down">
		<c-chip
			v-for="{ name, theme, rippleColor } in item.chips.slice(
				0,
				item.chipsCountShow
			)"
			:key="name"
			:icon-name="name"
			v-ripple="rippleColor"
			class="mt-half"
			:class="`is-${theme}`"
		>
			{{ name }}
		</c-chip>
		<c-button
			title="Show all techonologies"
			class="is-info is-rounded is-small mt-half"
			v-if="item.chips.length > item.chipsCountShow"
			@click="$emit('show-all-chips')"
		>
			...
		</c-button>
	</div>
</template>

<script>
import CChip from '~/components/ui/CChip';
export default {
	name: 'WorksTechnology',
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	components: {
		CChip
	}
};
</script>
