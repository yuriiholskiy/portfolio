<template>
	<div class="df aicfe fww acsa hide-sm-and-down">
		<app-tag-list :tags="item.tags.slice(0, item.tagsCountShow)" />
		<c-button
			title="Show all techonologies"
			class="is-info is-small ml-half"
			v-if="item.tags.length > item.tagsCountShow"
			@click="$emit('show-all-tags')"
		>
			...
		</c-button>
	</div>
</template>

<script>
import AppTagList from '~/components/AppTagList';
export default {
	name: 'WorksTechnology',
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	components: {
		AppTagList
	}
};
</script>
