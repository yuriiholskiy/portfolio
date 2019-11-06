<template>
	<div class="section-wrap py-2">
		<section class="about text-lighten-dark">
	    <h2 class="display-1" :class="{'anim-trY-fast': isAnimation}">
	    	About me,
	    </h2>
		  <div class="about-content text-left" 
		  		 :class="{'anim-trY-slow': isAnimation}" 
		  		 ref="slowAnimEl">
	    	<p class="mt-1 title-1">
	  			I am Front-end developer and post graduate student in Ivan Franko Lviv National University.
		  	</p>
		  	<p class="mt-1 title-2">
		  		My future I see in IT speciality. I am interested in new technologies. 
		  		Quickly find a common language with people, easily join the new team.
		  		Love to work in team and teach new things from other people.
		
		  		Like to look for non-standart ways for solving differents task.
		    </p>
		    <p class="mt-1 title-2">
		    	Also, I am theoretical physicist and passionate by quantum mechanics problem.
					Currently, looking for a place where I can apply my knowledge, become a part of a cool team, 
					program and develop both personally and with team. 
		    </p>
	    </div>
	  </section>
		
	  <section class="skills mt-2 text-lighten-dark">
	    <h2 class="display-1" :class="{'anim-trY-fast': isAnimation}">
	    	My skills,
	    </h2>
	    <c-list-group class="mt-2" :class="{'anim-trY-slow': isAnimation}">
	    	<c-list-item v-for="({ name, percent, theme }, idx) in skills"
	    							 :key="name"
	    							 class="skill-list title-2"
	    							 >
	    		# {{ idx + 1 }} \ {{ name }} 
	    		<c-progress :value="percent" :theme="theme" class="mt-sm-1 mt-xs-1"/>
	    	</c-list-item>
	    </c-list-group>
	  </section>
	</div>
</template>

<script>
import removeAnimClassMixin from '~/mixins/remove-anim-class.mixin';
export default {
	head() {
		return {
			title: 'About me',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'A few words about me, my education and hobbies'
				}
			]
		}
	},
	mixins: [removeAnimClassMixin],
	data() {
		return {
			isAnimation: true,
			skills: [
				{
					name: 'HTML',
					percent: '90',
					theme: 'danger'
				},
				{
					name: 'CSS',
					percent: '90',
					theme: 'primary'
				},
				{
					name: 'JavaScript',
					percent: '85',
					theme: 'warning'
				},
				{
					name: 'Vue',
					percent: '90',
					theme: 'success'
				},
				{
					name: 'Nuxt',
					percent: '80',
					theme: 'success'
				},
				{
					name: 'React',
					percent: '70',
					theme: 'primary'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.about-content {
	line-height: 2rem;
	max-width: 100%;	

	@media screen and (min-width: map-get($grid-breakpoints, 'xs')) {
		max-width: 50rem;
		margin: 2rem auto 0 auto;
	}
}
.skill-list {
	.c-progress {
		width: 80%;
	}
	display: flex;
	flex-direction: column;
	@media screen and (min-width: map-get($grid-breakpoints, 'md')) {
		flex-direction: row;
	}
}
</style>