<template>
	<nav class="c-toolbar" :style="[{ height: height }]">
		<div class="c-toolbar-content df aic jcsb">
			<slot name="start" />
			<slot name="end" />
		</div>
	</nav>
</template>

<script>
export default {
	name: 'CToolbar',
	props: {
		height: {
			type: [Number, String],
			default: '80px'
		}
	}
};
</script>

<style lang="scss" scoped>
.c-toolbar {
	width: 100%;
	position: absolute;
	top: 0;
	z-index: 10;
	padding: 0 #{$grid-gap};
	color: #fff;
	box-shadow: 0 3px 15px rgba(#000, 0.7);
	display: flex;
	align-items: center;
	justify-content: space-between;
	&-content {
		width: inherit;
	}
}
</style>
