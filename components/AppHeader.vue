<template>
	<div class="app-header">
		<c-nav-drawer v-model="drawer" dark push>
			<h3 class="title-1">Navigation</h3>
	  	<c-button :to="{name: 'index'}" 
	  						theme="light"
	  						class="mt-2 text-dark">
	  		Home
	  	</c-button>
	   	<c-button :to="{name: 'about'}" 
	   						theme="light" 
	   						class="mt-1 text-dark">
		   	About
		   </c-button>
	  </c-nav-drawer>
	  <c-overlay v-if="drawer"
							 drawer
							 @click="drawer = false">
		</c-overlay>
	  <c-toolbar theme="secondary">
	  	<div class="toolbar-left df aic">
	    	<burger-menu class="bg-light"
	    							 size="2.5"  
	    							 @click="drawer = true"
	    							 :active="drawer"
	    							 v-ripple />
	    	<figure class="df aic ml-2">
	    		<img :src="require('~/assets/images/yurii.jpg')" 
	    				alt="Yurii Golskyi"
	    				class="img-responsive hero-image">						 
		    	<figcaption>
		    		<h1 class="display text-white">
		    			Yurii Golskyi, <span class="title db text-darken-light">more than developer.</span>
		    		</h1>
		    	</figcaption>
	    	</figure>
	    </div>
	    <div class="toolbar-right hidden-sm-and-down">
	    	<c-button :to="{name: 'index'}" 
	    						theme="light" 
	    						class="mr-1 text-dark">
	    		Home
	    	</c-button>
	   	 	<c-button :to="{name: 'about'}"
	   	 						theme="light"
	   	 						class="text-dark">
		   	 	About
		   	 </c-button>
	    </div>
	  </c-toolbar>
	</div>
</template>

<script>
import BurgerMenu from '~/components/BurgerMenu';
export default {
	data() {
		return {
			drawer: false
		}
	},
	watch: {
		'$route.fullPath'() {
			this.drawer = false;
		}
	},
	components: {
		BurgerMenu
	}
}
</script>

<style lang="scss">
.hero-image {
	width: 50px;
	height: 50px;
	border: 1px solid map-get($colors, light);
	border-radius: 50%;
}
</style>