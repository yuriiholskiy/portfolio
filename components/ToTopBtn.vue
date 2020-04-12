<template>
	<button class="to-top-btn" :class="{ show: isVisible }" @click="toTop">
		up
	</button>
</template>

<script>
import { throttle } from '~/utils/helpers';
export default {
	name: 'ToTopBtn',
	data() {
		return {
			isVisible: false,
			threshold: 150
		};
	},
	mounted() {
		window.addEventListener('scroll', throttle(this.scrollHandler, 180));
		this.scrollHandler();
		this.$once('hook:destroyed', () => {
			window.removeEventListener('scroll', this.scrollHandler);
		});
	},
	methods: {
		scrollHandler(event) {
			const scrollTop = document.body.scrollTop || window.pageYOffset;
			scrollTop >= this.threshold
				? (this.isVisible = true)
				: (this.isVisible = false);
		},
		toTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
};
</script>
<style lang="scss">
.to-top-btn {
	position: fixed;
	z-index: 10000;
	right: 1rem;
	bottom: 1rem;
	border: none;
	border-radius: 50%;
	padding: 1rem;
	background-color: map-get($colors, 'danger');
	text-transform: uppercase;
	color: #fff;
	font-weight: 700;
	transform: scale(0);
	transition: 0.3s transform;

	cursor: pointer;
	&:focus {
		outline: none;
		box-shadow: 0 0 0 0.2rem rgba(map-get($colors, 'danger'), 0.5);
	}
	&.show {
		transform: scale(1);
	}
}
</style>
