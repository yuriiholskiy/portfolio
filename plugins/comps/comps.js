import options from './comps.options';

const { components, directives } = options;

export default {
	install(Vue) {
		Object.keys(components).forEach(name => {
			Vue.component(name, components[name]);
		});

		Object.keys(directives).forEach(name => {
			Vue.directive(name, directives[name]);
		});
	}
};
