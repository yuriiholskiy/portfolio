export const uuid = () =>
	'_' +
	Math.random()
		.toString(16)
		.slice(2);
