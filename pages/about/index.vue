<template>
	<div class="section-wrap text-color-dark">
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
				<c-button
					tag="a"
					href="https://github.com/yuriiholskiy/Lv-469.node/blob/master/cv/YuriiHolskyiCV.pdf"
					class="is-primary mt-1"
				>
					Link to cv
				</c-button>
			</div>
		</section>

		<section class="skills mt-1">
			<h2 class="display-1">
				My skills,
			</h2>
			<about-skill-list />
		</section>

		<section class="hobbies mt-1">
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
import AboutSkillList from '~/components/about_component/AboutSkillList';
export default {
	head() {
		return {
			title: 'About me',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'A few words about me, my education, skills and hobbies'
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'About me'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content:
						'I am Front-end developer. My future I see in IT speciality. I am interested in new technologies. Quickly find a common language with people, easily join the new team. Love to work in team and teach new things from other people. Like to look for non-standart ways for solving differents task. My "personal motivators" is: family and friends; My "energy fillers" is: listen to music and doing sports.'
				}
			]
		};
	},
	components: {
		AboutSkillList
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
</style>
