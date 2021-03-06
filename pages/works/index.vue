<template>
	<section class="section-wrap text-color-dark">
		<h2 class="display-1">
			My works,
		</h2>
		<c-input
			type="text"
			placeholder="search by title ('/' to focus)"
			v-model.trim="searchData"
			ref="search-input"
		/>

		<transition-group tag="div" name="work-card" class="row" appear>
			<div
				class="column mt-1 work-card-item"
				v-for="item in filteredWorksData"
				:key="item.title"
			>
				<c-card action max-width="50">
					<template #title>
						{{ item.title }}
					</template>
					<template #description>
						<span> {{ item.description.slice(0, 45).trim() }}... </span>
						<app-tag-list :tags="item.tags" class="mt-1 hide-md-and-down" />
					</template>
					<template #action>
						<works-useful-links
							:links="item.links"
							@show-details="showDetails(item)"
						/>
					</template>
				</c-card>
			</div>
		</transition-group>
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
				<app-tag-list :tags="activeItem.tags" />
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
import CModal from '~/components/ui/CModal';
import AppTagList from '~/components/AppTagList';
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
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'My works'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'My portfolio works'
				}
			]
		};
	},
	data() {
		return {
			worksData,
			searchData: '',
			isModalActive: false,
			activeItem: {}
		};
	},
	mounted() {
		const handler = e => {
			if (e.key === '/') {
				this.$refs['search-input'].$refs.input.focus();
			}
		};
		document.addEventListener('keyup', handler);
		this.$once('hook:beforeDestroy', () => {
			document.removeEventListener('keyup', handler);
		});
	},
	methods: {
		showAllTags(tags, index) {
			const el = this.filteredWorksData.find((_, idx) => idx === index);
			const sub = tags.length - el.tagsCountShow;
			el.tagsCountShow = tags.length + sub;
		},
		showDetails(item) {
			this.activeItem = item;
			this.isModalActive = true;
		}
	},
	computed: {
		filteredWorksData() {
			return this.worksData.filter(w =>
				w.title.toLowerCase().includes(this.searchData.toLowerCase())
			);
		}
	},
	components: {
		CModal,
		AppTagList,
		WorksUsefulLinks
	}
};
</script>

<style lang="scss">
.work-card-leave-active {
	width: 100%;
	// for smooth moving when enter transition
	position: absolute !important;
}
.work-card-enter,
.work-card-leave-to {
	opacity: 0;
	transform: translateY(10px);
}
.work-card-item {
	transition: transform 0.7s ease-out, opacity 0.7s ease-in-out;
}
.fit {
	object-fit: cover;
}
.created-by-title {
	font-weight: 800;
}
</style>
