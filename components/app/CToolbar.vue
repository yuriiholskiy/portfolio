<template>
	<nav class="c-toolbar" :style="[{height: height}]" :class="[themes[theme]]">
		<slot></slot>
	</nav>
</template>

<script>
import themesMixin from '../../mixins/themes.mixin';
export default {
	name: 'CToolbar',
	mixins: [themesMixin('toolbar')],
	props: {
		height: {
			type: [Number, String],
			default: '70px'
		},
		theme: {
			type: String,
			default: 'light'
		}
	}
}
</script>

<style lang='scss' scoped>
.c-toolbar {
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
	padding: 0 #{$grid-gap};
	color: #fff;
	box-shadow: 0 3px 15px rgba(#000, .7);
	display: flex;
	align-items: center;
	justify-content: space-between;
	@each $key, $val in $colors {
  	&-#{$key} {
  		color: darken($val, 15%);
  		background-color: $val;
  	}
  }
}
</style>