<template>
	<div class="section-wrap py-2">
		<section class="about text-lighten-dark">
	    <h2 class="display-1 anim-trY-fast">
	    	About me,
	    </h2>
		  <div class="about-content text-left anim-trY-slow">
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
	    <h2 class="display-1 anim-trY-fast">
	    	My skills,
	    </h2>
	    <c-list-group class="mt-2 anim-trY-slow">
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
	data() {
		return {
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
	},
	mounted() {
		console.log(this.$refs);
	}
}
</script>

<style lang="scss">
.about-content {
	line-height: 2rem;
	max-width: 50rem;
	margin: 2rem auto 0 auto;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		margin: 0;
	}
}
.skill-list {
	.c-progress {
		width: 80%;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
}
</style>