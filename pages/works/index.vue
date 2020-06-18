<template>
	<section class="section-wrap text-color-dark">
		<h2 class="display-1">
			My works,
		</h2>
		<div class="row">
			<div
				class="column mt-1"
				v-for="(item, index) in worksData"
				:key="item.title"
			>
				<c-card action max-width="50">
					<template #title>
						{{ item.title }}
					</template>
					<template #description>
						{{ item.description.slice(0, 40) }} ...
						<h4 class="created-by-title mt-2 text-color-light hide-sm-and-down">
							Used techonologies:
						</h4>
						<works-technology
							:item="item"
							@show-all-chips="showAllChips(item.chips, index)"
						/>
					</template>
					<template #action>
						<works-useful-links
							:links="item.links"
							@show-details="showDetails(item)"
						/>
					</template>
				</c-card>
			</div>
		</div>
		<c-modal v-model="isModalActive" class="px-1" :lock-scroll="true">
			<template #header>
				<h3 class="title-1 text-center">
					{{ activeItem.title }}
				</h3>
			</template>
			<template #body>
				<img
					class="img-responsive fit"
					:src="activeItem.imageSrc"
					:alt="activeItem.title"
				/>
				<p class="mt-1 title-2">
					{{ activeItem.description }}
				</p>
			</template>
			<template #footer>
				<p class="title-2">
					See more on:
				</p>
				<div class="buttons mt-half">
					<c-button
						tag="a"
						v-for="{ name, to } in activeItem.links"
						:key="to"
						class="is-primary"
						target="_blank"
						rel="noopener"
						:href="to"
					>
						{{ name }}
					</c-button>
				</div>
			</template>
		</c-modal>
	</section>
</template>

<script>
import CCard from '~/components/ui/CCard';
import CModal from '~/components/ui/CModal';
import WorksTechnology from '~/components/works_component/WorksTechnology';
import WorksUsefulLinks from '~/components/works_component/WorksUsefulLinks';
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
		CModal,
		WorksTechnology,
		WorksUsefulLinks
	}
};
</script>

<style lang="scss">
.fit {
	object-fit: cover;
}
.created-by-title {
	font-weight: 800;
}
.row {
	@include row;
	@include md(justify-content, center);
}
.column {
	@include responsive-col(6, 12, 12, 12);
}
</style>
