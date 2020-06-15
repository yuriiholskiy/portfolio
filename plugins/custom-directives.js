import Vue from 'vue';
import ripple from '~/directives/ripple-directive';
import lazyload from '~/directives/lazyload-directive';
Vue.directive('ripple', ripple);
Vue.directive('lazyload', lazyload);
