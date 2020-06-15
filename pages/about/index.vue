<template>
	<div class="section-wrap py-2 text-lighten-dark">
		<section class="about">
			<h2 class="display-1">
				About me,
			</h2>
			<div class="about-content text-left title-2">
				<p class="mt-1">
					I am Front-end developer and post graduate student in Ivan Franko Lviv
					National University.
				</p>
				<p class="mt-1">
					My future I see in IT speciality. I am interested in new technologies.
					Quickly find a common language with people, easily join the new team.
					Love to work in team and teach new things from other people. Like to
					look for non-standart ways for solving differents task.
				</p>
				<p class="mt-1">
					Also, I am theoretical physicist and passionate by quantum mechanics
					problem. Currently, looking for a place where I can apply my
					knowledge, become a part of a cool team, program and develop both
					personally and with team.
				</p>
			</div>
		</section>

		<section class="skills mt-2">
			<h2 class="display-1">
				My skills,
			</h2>
			<c-list-group class="mt-2 mx-auto" max-width="800px">
				<c-list-item
					v-for="({ name, percent, theme, icon }, idx) in skills"
					:key="name"
					class="skill-list title-2"
					v-ripple
				>
					<div class="skill-content">
						<c-icon
							:sprite="require('@/assets/icons/sprite.svg')"
							:name="icon"
							class="skill-icon"
						/>
						<span class="skill-name"> #{{ idx + 1 }} \ {{ name }} </span>
					</div>
					<b-progress
						:type="`is-${theme}`"
						size="is-medium"
						:value="+percent"
						show-value
						class="mb-0 mt-sm-1 mt-xs-1"
					>
					</b-progress>
				</c-list-item>
			</c-list-group>
		</section>

		<section class="hobbies mt-2">
			<h2 class="display-1">
				My hobbies,
			</h2>
			<div class="about-content text-left title-2">
				<p class="mt-1">
					My hoobies is reading books (much prefer fantastic like "Harry
					Potter", "Lord of the ring", etc.), I enjoy word games like crosswords
					and anagrams. Love solving math and physics problems and wonder a lot
					about how certain things work. In sports like jogging and table
					tennis. Also, I often listen to music.
				</p>
				<p class="mt-1">
					My <strong>"personal motivators"</strong> is: family and friends;
					<span class="db"
						>My <strong>"energy fillers"</strong> is: listen to music and doing
						sports.</span
					>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
import CListGroup from '~/components/ui/CListGroup';
import CListItem from '~/components/ui/CListItem';
import CIcon from '~/components/ui/CIcon';
export default {
	head() {
		return {
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'A few words about me, my education, skills and hobbies'
				}
			]
		};
	},
	data() {
		return {
			skills: [
				{
					name: 'HTML',
					percent: '95',
					theme: 'danger',
					icon: 'html'
				},
				{
					name: 'CSS',
					percent: '90',
					theme: 'primary',
					icon: 'css'
				},
				{
					name: 'JavaScript',
					percent: '95',
					theme: 'warning',
					icon: 'js'
				},
				{
					name: 'Vue',
					percent: '90',
					theme: 'success',
					icon: 'vue'
				},
				{
					name: 'Nuxt',
					percent: '90',
					theme: 'success',
					icon: 'nuxt'
				},
				{
					name: 'React',
					percent: '90',
					theme: 'primary',
					icon: 'react'
				}
			]
		};
	},
	components: {
		CListGroup,
		CListItem,
		CIcon
	}
};
</script>

<style lang="scss">
.about-content {
	line-height: 2rem;
	max-width: 100%;

	@media screen and (min-width: map-get($breakpoints, 'phone')) {
		max-width: 50rem;
		margin: 1rem auto 0 auto;
	}
}
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
.progress-wrapper {
	width: 75%;
}
</style>
