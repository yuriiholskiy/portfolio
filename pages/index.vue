<template>
	<section class="hero py-2 mt-5 mt-sm-2 mt-xs-0 text-lighten-dark">
    <h1 class="display-1" :class="{'anim-trY-fast': isAnimation}">
    	Hello there,
    	<p class="mt-1 display">I am 
    		<strong>frontend developer</strong>, 
    		<strong>physicist</strong>, 
    		<strong>thinker</strong>, 
    		<strong>philosopher</strong>.
    	</p>
    </h1>
    <p class="title-1 mt-2" :class="{'anim-trY-middle': isAnimation}">
    	I like creating frontend apps, and I find happiness in being a better me today than the me yesterday.
    </p>

    <div class="mt-4 mt-xs-2 text-secondary text-center" :class="{'anim-trY-slow': isAnimation}">
    	<h2 class="display">Links that You might be interesting:</h2>
			<div class="links mt-2 title-2">
				<a v-for="link in links" 
					 class="link"
				   :key="link.id" 
				   :href="link.url"
				   target="_blank"
				   v-ripple
				   rel="noopener"
				   aria-label="External link">
					{{ link.name }}
				</a>
			</div>
    </div>
    <div class="mt-4 mt-xs-2 text-secondary text-center" 
    		 :class="{'anim-trY-slow': isAnimation}"
    		 ref="slowAnimEl">
    	<h2 class="display">Or You want to check my works:</h2>
			<div class="links mt-2 title-2">
				<c-button :to="{name: 'about'}" theme="secondary" flat>
					Works
				</c-button>
			</div>
    </div>
  </section>
</template>

<script>
import { uuid } from '~/utils/helpers';
import removeAnimClassMixin from '~/mixins/remove-anim-class.mixin';
export default {
	mixins: [removeAnimClassMixin],
	data() {
		return {
			isAnimation: true,
			links: [
				{
					name: 'Codepen',
					url: 'https://codepen.io/erety',
					id: uuid()
				},
				{
					name: 'Facebook',
					url: 'https://facebook.com/',
					id: uuid()
				},
				{
					name: 'Github',
					url: 'https://github.com/yuriiholskiy',
					id: uuid()
				}
			]
		}
	},
}
</script>

<style lang="scss">
.hero {
	overflow: hidden;
}
.link {
	text-decoration: none;
	position: relative;
	color: map-get($colors, dark);
	border-radius: 5px;
	padding: .2rem;
	&:not(:first-child) {
		margin-left: 1rem;
	}
	&:focus {
		outline: none;
	}
	&:active,
	&:focus {
		&::before {
			transform: scale(1);
		}
	}
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		transition: .25s transform;
		transform: scale(0);
		width: 100%;
		height: 1px;
		background-color: map-get($colors, dark);
	}
	&:hover {
		color: lighten(map-get($colors, dark), 15%);
		&::before {
			transform: scale(1);
		}
	}
}
</style>
