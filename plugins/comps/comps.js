import options from './comps.options';

const { components, directives }  = options;

export default {
	install(Vue) {
		for(let name in components) {
			Vue.component(name, components[name]);
		}
		
		for(let directiveName in directives) {
			Vue.directive(directiveName, directives[directiveName]);
		}
	}
}