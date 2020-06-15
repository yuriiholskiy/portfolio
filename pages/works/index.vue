<template>
	<section class="works py-2 text-lighten-dark">
		<h2 class="display-1">
			My works,
		</h2>
		<div class="mt-1 columns jcc fww">
			<div
				class="column is-6"
				v-for="(item, index) in worksData"
				:key="item.title"
			>
				<c-card action max-width="50">
					<template #title>
						{{ item.title }}
					</template>
					<template #description>
						{{ item.description.slice(0, 40) }} ...
						<h4 class="created-by-title mt-2 text-lighten-dark">
							Used techonologies:
						</h4>
						<div class="mt-half df aic fww acsa">
							<c-chip
								v-for="{ name, theme, rippleColor } in item.chips.slice(
									0,
									item.chipsCountShow
								)"
								:key="name"
								:theme="theme"
								:icon-name="name"
								v-ripple="rippleColor"
								class="mt-half"
							>
								{{ name }}
							</c-chip>
							<b-button
								rounded
								title="Show all techonologies"
								class="button is-small mt-half"
								v-if="item.chips.length > item.chipsCountShow"
								@click="showAllChips(item.chips, index)"
							>
								...
							</b-button>
						</div>
					</template>
					<template #action>
						<div class="buttons">
							<b-button
								tag="a"
								class="button is-link"
								@click.prevent="showDetails(item)"
							>
								Show more
							</b-button>
							<b-button
								tag="a"
								v-for="{ name, to } in item.links"
								:key="to"
								class="button is-link"
								target="_blank"
								rel="noopener"
								:href="to"
							>
								{{ name }}
							</b-button>
						</div>
					</template>
				</c-card>
			</div>
		</div>
		<c-modal v-model="isModalActive" class="px-1">
			<c-card
				action
				:image-src="activeItem.imageSrc"
				:image-alt="activeItem.title"
				max-width="50"
			>
				<template #title>
					{{ activeItem.title }}
				</template>
				<template #description>
					{{ activeItem.description }}
				</template>
				<template #action>
					<p class="title-2">
						See more on:
					</p>
					<div class="buttons">
						<b-button
							tag="a"
							v-for="{ name, to } in activeItem.links"
							:key="to"
							class="button is-link"
							target="_blank"
							rel="noopener"
							:href="to"
						>
							{{ name }}
						</b-button>
					</div>
				</template>
			</c-card>
		</c-modal>
	</section>
</template>

<script>
import CCard from '~/components/ui/CCard';
import CChip from '~/components/ui/CChip';
import CModal from '~/components/ui/CModal';
import worksData from '~/utils/works-item.data';

export default {
	head() {
		return {
			title: 'My works',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'This is my portfolio works page'
				}
			]
		};
	},
	data() {
		return {
			worksData,
			isModalActive: false,
			activeItem: {}
		};
	},
	methods: {
		showAllChips(chips, index) {
			const el = this.worksData.find((_, idx) => idx === index);
			const sub = chips.length - el.chipsCountShow;
			el.chipsCountShow = chips.length + sub;
		},
		showDetails(item) {
			this.activeItem = item;
			this.isModalActive = true;
		}
	},
	components: {
		CCard,
		CChip,
		CModal
	}
};
</script>

<style lang="scss">
.created-by-title {
	font-weight: 800;
}
</style>
