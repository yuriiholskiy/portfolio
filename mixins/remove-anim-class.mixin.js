export default {
	mounted() {
		const { animationDuration } = window.getComputedStyle(this.$refs.slowAnimEl);
		const time = (+animationDuration.replace('s', '')) * 1000;
		window.setTimeout(() => {
			this.isAnimation = false;
		}, time);
	}
}