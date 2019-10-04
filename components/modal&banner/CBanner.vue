<template>
	<div v-if="!value" class="c-banner" :class="[themes[theme]]" v-on="$listeners">
		<slot>Simple message</slot>
		<c-button v-if="dismissible" btn flat no-border @click="$emit('input', !value)">&times;</c-button>
	</div>
</template>

<script>
import themesMixin from '@/mixins/themes.mixin';
export default {
	name: 'CBanner',
	mixins: [themesMixin('banner')],
	props: {
		value: {
			type: Boolean,
			required: false
		},
		theme: {
			type: String,
			default: 'primary'
		},
		dismissible: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang='scss' scoped>
.c-banner {
  position: relative;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @each $key, $val in $colors {
  	&-#{$key} {
  		color: lighten($val, 35%);
  		background-color: $val;
  		border-color: darken($val, 5%);
  	}
  }
}
</style>