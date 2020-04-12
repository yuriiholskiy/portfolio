export const uuid = () =>
	'_' +
	Math.random()
		.toString(16)
		.slice(2);

export const throttle = (fn, wait) => {
	let time = Date.now();
	return function() {
		if (time + wait - Date.now() < 0) {
			fn();
			time = Date.now();
		}
	};
};
