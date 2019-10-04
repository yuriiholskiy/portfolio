<template>
	<li class="c-list-item" 
			:class="[themes[theme], {active: active}, {disabled: disabled}, {flex: flex}]" 
			v-on="$listeners">
		<slot></slot>
	</li>
</template>

<script>
export default {
	name: 'CListItem',
	props: {
		active: {
			type: Boolean,
			required: false
		},
		theme: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		flex: {
			type: Boolean,
			required: false
		}
	},
	data() {
		return {
			themes: {
				primary: 'c-list-item-primary',
				secondary: 'c-list-item-secondary',
				warning: 'c-list-item-warning',
				danger: 'c-list-item-danger',
				success: 'c-list-item-success',
				dark: 'c-list-item-dark',
				light: 'c-list-item-light'
			},

		}
	}
}
</script>

<style lang='scss' scoped>
.c-list-item {
	position: relative;
	z-index: 5;
  display: block;
  padding: .75rem 1rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125);
  transition: .3s background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  &:not(:last-child) {
  	margin-bottom: -1px;
  }
  &:hover {
  	background-color: darken(#fff, 10%);
  }
  &.active {
  	background-color: map-get($colors, 'primary');
  	color: #fff;
  	&:hover {
  		background-color: darken(map-get($colors, 'primary'), 10%);
  	}
  }
  &.disabled {
  	background-color: darken(#fff, 10%) !important;
  	color: #000 !important;
  }
  &.flex {
  	display: flex;
	  justify-content: space-between;
	  align-items: center;
  }
  @each $key, $val in $colors {
		&-#{$key} {
			background-color: $val;
			color: lighten($val, 40%);
			&:hover {
				background-color: darken($val, 10%);
			}
		}
	}
}

</style>