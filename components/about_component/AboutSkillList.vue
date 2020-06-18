<template>
	<c-list-group class="mx-auto mt-1" max-width="800px">
		<c-list-item
			v-for="({ name, percent, theme, icon }, idx) in skillsData"
			:key="name"
			class="skill-list title-2 is-light"
			v-ripple="'#46afcc'"
		>
			<div class="skill-content">
				<c-icon :name="icon" class="skill-icon" />
				<span class="skill-name"> #{{ idx + 1 }} \ {{ name }} </span>
			</div>
			<c-progress
				:size="75"
				class="mt-md-1"
				:class="`is-${theme}`"
				:value="percent"
				show-value
			/>
		</c-list-item>
	</c-list-group>
</template>

<script>
const values = [95, 90, 95, 95, 95, 90];
import skillsData from '~/utils/skill-item.data.js';
import CListGroup from '~/components/ui/CListGroup';
import CListItem from '~/components/ui/CListItem';
import CProgress from '~/components/ui/CProgress';
export default {
	name: 'AboutSkillList',
	components: {
		CListGroup,
		CListItem,
		CProgress
	},
	data() {
		return {
			skillsData
		};
	},
	mounted() {
		const intervalId = setTimeout(() => {
			for (let i = 0; i < this.skillsData.length; i++) {
				this.skillsData[i].percent = values[i];
			}
		}, 150);
		this.$once('hook:beforeDestroy', () => {
			setTimeout(intervalId);
		});
	}
};
</script>

<style lang="scss">
.skill-list {
	display: flex;
	flex-direction: column;
	.skill-content {
		display: flex;
		align-items: center;
	}
	.skill-icon {
		margin-right: 0.5rem;
	}
	.skill-name {
		margin-right: 0;
	}
	@media screen and (min-width: map-get($breakpoints, 'tablet')) {
		flex-direction: row;
		.skill-icon {
			margin-right: 0.5rem;
		}
		.skill-name {
			margin-right: auto;
		}
	}
}
</style>
