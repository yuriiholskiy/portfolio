(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(t,e,n){"use strict";n.r(e);var o={head:()=>({title:"Blog",meta:[{hid:"description",name:"description",content:"This is article blog page"},{hid:"og:title",property:"og:title",content:"Article blog"},{hid:"og:description",property:"og:description",content:"This is article blog page"}]}),data:()=>({articles:[{title:"Build a modal component with Vue 3",path:{name:"blog-article",params:{article:"vue3_modal"}},description:"In this article we build modal component using Vue 3 v-model and also work with built-in Teleport component."},{title:"Build a validation system with Vue 3 and typescript",path:{name:"blog-article",params:{article:"vue3_validation_system"}},description:"In this article we build a validation system using Vue 3 composition api and typescript"}]})},l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-wrap"},[n("h2",{staticClass:"display-1"},[t._v("\n\t\tIt is my blog,\n\t")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.articles,(function(article){return n("div",{key:article.name,staticClass:"column mt-1"},[n("c-card",{attrs:{action:"","max-width":"50"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(article.title)+"\n\t\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[n("span",[t._v(" "+t._s(article.description.slice(0,40).trim())+"... ")])]},proxy:!0},{key:"action",fn:function(){return[n("c-button",{staticClass:"is-info mt-1",attrs:{tag:"nuxt-link",to:article.path}},[t._v("\n\t\t\t\t\t\tRead\n\t\t\t\t\t")])]},proxy:!0}],null,!0)})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);