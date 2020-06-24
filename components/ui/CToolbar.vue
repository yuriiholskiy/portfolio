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
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 #{$grid-gap};
	color: var(--light-color);
	box-shadow: 0 3px 15px rgba(#000, 0.7);
	background-color: var(--bg-secondary-color);
	transition: 0.3s color, 0.3s background-color ease;
	&-content {
		width: inherit;
	}
}
</style>
