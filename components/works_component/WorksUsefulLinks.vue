<template>
	<div class="buttons mt-1">
		<c-button class="is-info" @click.prevent="$emit('show-details')">
			Show more
		</c-button>
		<c-button
			tag="a"
			v-for="{ name, to } in links"
			:key="to"
			class="is-primary hide-sm-and-down"
			:href="to"
		>
			{{ name }}
		</c-button>
	</div>
</template>

<script>
export default {
	name: 'WorksUsefulButtons',
	props: {
		links: {
			type: Array,
			required: true
		}
	}
};
</script>
