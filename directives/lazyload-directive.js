export default {
	inserted(el) {
		const loadImage = () => (el.src = el.dataset.src);
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					loadImage();
					observer.unobserve(el);
				}
			});
		};

		const createIntersectionObserver = () => {
			const options = {
				root: null,
				threshold: 0
			};

			const observer = new IntersectionObserver(callback, options);
			observer.observe(el);
		};

		if (!window['IntersectionObserver']) {
			loadImage();
		} else {
			createIntersectionObserver();
		}
	}
};
