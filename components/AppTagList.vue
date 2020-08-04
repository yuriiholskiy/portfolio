<template>
	<div>
		<h4 class="fwb text-color-primary-light mt-half">Tags:</h4>
		<c-chip
			v-for="{ name, theme, rippleColor } in tags"
			:key="name"
			:icon-name="name"
			v-ripple="rippleColor"
			class="mt-half"
			:class="`is-${theme}`"
		>
			{{ name }}
		</c-chip>
	</div>
</template>

<script>
import CChip from '~/components/ui/CChip';
export default {
	name: 'AppTagList',
	props: {
		tags: {
			type: Array,
			required: true
		}
	},
	components: {
		CChip
	}
};
</script>
