(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(t,e,r){var content=r(149);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("0ccaee10",content,!0,{sourceMap:!1})},148:function(t,e,r){"use strict";var o=r(142);r.n(o).a},149:function(t,e,r){(e=r(13)(!1)).push([t.i,".c-chip[data-v-799271a3]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.3rem .7rem;-webkit-border-radius:1rem;-moz-border-radius:1rem;border-radius:1rem;white-space:nowrap;cursor:default}.c-chip[data-v-799271a3]:not(:last-child){margin-right:.25rem}.c-chip.is-primary[data-v-799271a3]{background-color:var(--primary-color);color:var(--light-color);border-color:var(--primary-light-color)}.c-chip.is-secondary[data-v-799271a3]{background-color:var(--secondary-color);color:var(--secondary-dark-color);border-color:var(--secondary-light-color)}.c-chip.is-info[data-v-799271a3]{background-color:var(--info-color);color:var(--dark-color);border-color:var(--info-light-color)}.c-chip.is-negative[data-v-799271a3]{background-color:var(--negative-color);color:var(--light-color);border-color:var(--negative-light-color)}.c-chip.is-positive[data-v-799271a3]{background-color:var(--positive-color);color:var(--dark-color);border-color:var(--positive-light-color)}.c-chip.is-light[data-v-799271a3]{background-color:var(--light-color);color:var(--dark-color);border-color:var(--light-light-color)}.c-chip.is-dark[data-v-799271a3]{background-color:var(--dark-color);color:var(--light-color);border-color:var(--dark-light-color)}",""]),t.exports=e},159:function(t,e,r){"use strict";var o={name:"CChip",props:{theme:{type:String,default:"secondary"},iconName:{type:String,required:!1},iconRight:{type:Boolean,default:!1}}},l=(r(148),r(4)),n=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._g({staticClass:"c-chip"},t.$listeners),[t.iconName&&!t.iconRight?r("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",left:""}}):t._e(),t._v(" "),t._t("default",[t._v("Default")]),t._v(" "),t.iconName&&t.iconRight?r("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",right:""}}):t._e()],2)}),[],!1,null,"799271a3",null).exports,c={name:"AppTagList",props:{tags:{type:Array,required:!0}},components:{CChip:n}},d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-1"},[r("h4",{staticClass:"fwb text-color-primary-light mt-half hide-sm-and-down"},[t._v("Tags:")]),t._v(" "),t._l(t.tags,(function(e){var o=e.name,l=e.theme,n=e.rippleColor;return r("c-chip",{directives:[{name:"ripple",rawName:"v-ripple",value:n,expression:"rippleColor"}],key:o,staticClass:"mt-half",class:"is-"+l,attrs:{"icon-name":o}},[t._v("\n\t\t"+t._s(o)+"\n\t")])}))],2)}),[],!1,null,null,null);e.a=d.exports},203:function(t,e,r){"use strict";r.r(e);var o=r(159),l=[{title:"Build a modal component with Vue 3",readTime:"7 minutes",path:{name:"blog-article",params:{article:"vue3_modal"}},description:"In this article we build modal component using Vue 3 v-model and also work with built-in Teleport component.",tags:[{name:"js",theme:"info",rippleColor:"yellow"},{name:"vue",theme:"positive",rippleColor:"green"}]},{title:"Build a validation system with Vue 3 and typescript",readTime:"Paper in progress",path:{name:"blog-article",params:{article:"vue3_validation_system"}},description:"In this article we build a validation system using Vue 3 composition api and typescript",tags:[{name:"js",theme:"info",rippleColor:"yellow"},{name:"ts",theme:"primary",rippleColor:"lightblue"},{name:"vue",theme:"positive",rippleColor:"green"}]}],n={head:()=>({title:"Blog",meta:[{hid:"description",name:"description",content:"This is article blog page"},{hid:"og:title",property:"og:title",content:"Article blog"},{hid:"og:description",property:"og:description",content:"This is article blog page"}]}),data:()=>({articlesData:l}),components:{AppTagList:o.a}},c=r(4),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section-wrap"},[r("h2",{staticClass:"display-1"},[t._v("\n\t\tIt is my blog,\n\t")]),t._v(" "),r("div",{staticClass:"row"},t._l(t.articlesData,(function(article){return r("div",{key:article.name,staticClass:"column mt-1"},[r("c-card",{attrs:{action:"","max-width":"50"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(article.title)+"\n\t\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[r("span",[t._v(" "+t._s(article.description.slice(0,40).trim())+"... ")]),t._v(" "),r("app-tag-list",{attrs:{tags:article.tags}}),t._v(" "),r("p",{staticClass:"mt-1"},[t._v("Read time: ("+t._s(article.readTime)+")")])]},proxy:!0},{key:"action",fn:function(){return[r("c-button",{staticClass:"is-info mt-1",attrs:{tag:"nuxt-link","aria-label":article.title,to:article.path}},[t._v("\n\t\t\t\t\t\t👓 Read\n\t\t\t\t\t")])]},proxy:!0}],null,!0)})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);