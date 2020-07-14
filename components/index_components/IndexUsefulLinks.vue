<template>
	<nav class="mt-1 text-color-secondary text-center">
		<h2 class="display">Links that You might be interesting:</h2>
		<div class="buttons jcc mt-1 title-2">
			<c-button
				tag="a"
				v-for="(link, index) in links"
				:aria-label="link.name"
				class="is-primary"
				:class="{ 'mt-xs-1': links.length - 1 === index }"
				:key="link.name"
				:href="link.url"
			>
				🚀
				{{ link.name }}
			</c-button>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'IndexUsefulLinks',
	props: {},
	data() {
		return {
			links: [
				{
					name: 'Facebook',
					url: 'https://facebook.com/yuriiholskiy'
				},
				{
					name: 'Github',
					url: 'https://github.com/yuriiholskiy'
				},
				{
					name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/yurii-golskyi-322376194/'
				}
			]
		};
	}
};
</script>
