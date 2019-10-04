<template>
	<aside class="c-nav-drawer" 
			 :style="{width: width}" 
			 :class="{'is-open': drawer, dark: dark, [position]: position}">
		<slot></slot>
	</aside>
</template>

<script>
export default {
	name: 'CNavDrawer',
	model: {
		prop: 'drawer',
		event: 'close-drawer'
	},
	props: {
		drawer: {
			type: Boolean,
			default: true
		},
		dark: Boolean,
		width: {
			type: [String, Number],
			default() {
				return '250px';
			}
		},
		push: {
			type: Boolean,
			required: false
		},
		position: {
			type: String,
			default: 'left'
		},
	},
	beforeUpdate() {
		if(this.push) {
			if(this.position === 'left') {
				this.drawer ? 
						document.body.classList.add('push-content-left') : 
						document.body.classList.remove('push-content-left');
			}
			if(this.position === 'right') {
				this.drawer ? 
						document.body.classList.add('push-content-right') : 
						document.body.classList.remove('push-content-right');
			}
		}
	}
}
</script>

<style lang='scss' scoped>
.c-nav-drawer {
	position: fixed;
	top: 0;
	z-index: 1000;
	padding-top: 1rem;
	width: 250px;
	height: 100vh;
	background-color: darken(#fff, 15%);
	box-shadow: 1px 2px 15px rgba(#000, .7);
	transition: .3s transform;
	&.left {
		left: 0;
		transform: translateX(-110%);
	}
	&.right {
		right: 0;
		transform: translateX(110%);
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	&.dark {
		background-color: #333;
		color: #fff;
		box-shadow: 1px 2px 15px rgba(#000, 1);
	}
	&.is-open {
		z-index: 11111;
		transform: translateX(0);
	}
}
</style>