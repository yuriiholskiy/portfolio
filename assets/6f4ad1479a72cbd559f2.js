(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(t,e,r){var content=r(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("2d558e3c",content,!0,{sourceMap:!1})},161:function(t,e,r){"use strict";var o=r(3),n=r(17),c=r(22),l=r(106),d=r(62),m=r(10),h=r(43).f,f=r(63).f,v=r(9).f,y=r(163).trim,k=o.Number,x=k,C=k.prototype,w="Number"==c(r(76)(C)),_="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,o,n,c=(e=_?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,o)}}return+e};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(w?m((function(){C.valueOf.call(r)})):"Number"!=c(r))?l(new x(N(e)),r,k):N(e)};for(var S,I=r(8)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)n(x,S=I[E])&&!n(k,S)&&v(k,S,f(x,S));k.prototype=C,C.constructor=k,r(11)(o,"Number",k)}},162:function(t,e,r){t.exports=r.p+"img/f9a5716.svg"},163:function(t,e,r){var o=r(6),n=r(23),c=r(10),l=r(164),d="["+l+"]",m=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),f=function(t,e,r){var n={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),m=n[t]=d?e(v):l[t];r&&(n[r]=m),o(o.P+o.F*d,"String",n)},v=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(h,"")),t};t.exports=f},164:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},167:function(t,e,r){"use strict";var o=r(160);r.n(o).a},168:function(t,e,r){(e=r(20)(!1)).push([t.i,".c-icon-wrap[data-v-543de068]{display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-weight:600}.c-icon-wrap.right[data-v-543de068]{margin-left:.5rem}.c-icon-wrap.left[data-v-543de068]{margin-right:.5rem}.c-icon[data-v-543de068]{stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}",""]),t.exports=e},170:function(t,e,r){var content=r(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("737bf082",content,!0,{sourceMap:!1})},171:function(t,e,r){var content=r(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("774e88dc",content,!0,{sourceMap:!1})},172:function(t,e,r){var content=r(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("48529c80",content,!0,{sourceMap:!1})},174:function(t,e,r){"use strict";r(29),r(161);var o={name:"CIcon",props:{width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},sprite:{type:String,default:""},name:{type:String,required:!0},right:{type:Boolean,default:!1},left:{type:Boolean,default:!1},color:{type:String,default:"none"},strokeColor:{type:String,default:"currentColor"}},computed:{svgBindings:function(){return{"xlink:href":"".concat(this.sprite,"#").concat(this.name),fill:this.color,stroke:this.strokeColor}}}},n=(r(167),r(7)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c-icon-wrap",class:[{left:this.left},{right:this.right}]},[e("svg",{staticClass:"c-icon",attrs:{width:this.width,height:this.height}},[e("use",this._b({},"use",this.svgBindings,!1))])])}),[],!1,null,"543de068",null);e.a=component.exports},181:function(t,e,r){"use strict";var o=r(170);r.n(o).a},182:function(t,e,r){(e=r(20)(!1)).push([t.i,".c-card[data-v-91fd1dea]{position:relative;display:flex;flex-direction:column;width:100%;height:100%;padding-bottom:1rem;margin:0 auto;text-align:left;border-radius:5px;color:#555;box-shadow:0 0 3px 0 #aaa;background-color:#e8e9e9;transition:box-shadow .15s}.c-card[data-v-91fd1dea]:hover{box-shadow:0 0 5px 0 #777}.c-card-image[data-v-91fd1dea]{border-radius:5px 5px 0 0;height:200px}.c-card-body[data-v-91fd1dea]{display:flex;flex-direction:column;padding:1rem}.c-card-body h3[data-v-91fd1dea]{font-weight:600;font-size:1.6rem;margin-top:0}.c-card-description[data-v-91fd1dea]{line-height:1.3rem;margin:1rem 0 0;font-size:1.2rem;color:#666}.c-card-action[data-v-91fd1dea]{margin-left:1rem;margin-top:auto}",""]),t.exports=e},183:function(t,e,r){"use strict";var o=r(171);r.n(o).a},184:function(t,e,r){(e=r(20)(!1)).push([t.i,".c-chip[data-v-03094e17]{position:relative;display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;border-radius:1rem;white-space:nowrap;cursor:default}.c-chip[data-v-03094e17]:not(:first-child){margin-left:.25rem}.c-chip-primary[data-v-03094e17]{color:#b3d7ff;background-color:#007bff;border-color:#006fe6}.c-chip-secondary[data-v-03094e17]{color:#caced1;background-color:#6c757d;border-color:#60686f}.c-chip-danger[data-v-03094e17]{color:#f6cdd1;background-color:#dc3545;border-color:#d32535}.c-chip-success[data-v-03094e17]{color:#9be7ac;background-color:#28a745;border-color:#23923d}.c-chip-warning[data-v-03094e17]{color:#ffeeba;background-color:#ffc107;border-color:#edb100}.c-chip-dark[data-v-03094e17]{color:#658c8c;background-color:#1a2424;border-color:#0f1515}.c-chip-light[data-v-03094e17]{color:#fff;background-color:#e8e9e9;border-color:#dbdddd}",""]),t.exports=e},185:function(t,e,r){t.exports=r.p+"img/bc50847.png"},186:function(t,e,r){t.exports=r.p+"img/eeac9cd.png"},187:function(t,e,r){t.exports=r.p+"img/c36cd6d.png"},188:function(t,e,r){t.exports=r.p+"img/d382e30.png"},189:function(t,e,r){"use strict";var o=r(172);r.n(o).a},190:function(t,e,r){(e=r(20)(!1)).push([t.i,".created-by-title{font-weight:800}",""]),t.exports=e},193:function(t,e,r){"use strict";r.r(e);r(161);var o,n={name:"CCard",functional:!0,props:{imageSrc:{type:String,default:""},imageAlt:{type:String,default:"Image"},maxWidth:{type:[String,Number],default:"30"},bgColor:{type:String,default:"#e8e9e9"},action:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1}},render:function(t,e){var data=e.data,r=e.props,o=e.slots,n=e.listeners,c=o().title?o().title:["Default title"],l=o().description?o().description:["Default description"],d=o().action?o().action:["Default action"],m=r.imageSrc,h=r.imageAlt,f=r.maxWidth,v=r.bgColor,y=r.action,k=r.ripple,x=[t("h3",{class:"c-card-title"},c),t("div",{class:"c-card-description"},l)],C=[t("img",{class:"c-card-image",attrs:{"data-src":m,alt:h},directives:[{name:"lazyload"}]}),t("div",{class:"c-card-body"},x),y?t("div",{class:"c-card-action"},d):null];return t("article",{class:["c-card",data.staticClass,data.class],style:[{"background-color":v},{"max-width":f+"rem"}],directives:k?[{name:"ripple",value:v}]:null,on:n},C)}},c=(r(181),r(7)),l=Object(c.a)(n,void 0,void 0,!1,null,"91fd1dea",null).exports,d=r(174),m={name:"CChip",mixins:[(o="chip",{data:function(){return{themes:{primary:"c-".concat(o,"-primary"),secondary:"c-".concat(o,"-secondary"),warning:"c-".concat(o,"-warning"),danger:"c-".concat(o,"-danger"),success:"c-".concat(o,"-success"),dark:"c-".concat(o,"-dark"),light:"c-".concat(o,"-light")}}}})],props:{theme:{type:String,default:"secondary"},iconName:{type:String,required:!1},iconRight:{type:Boolean,default:!1}},components:{CIcon:d.a}},h=(r(183),{head:function(){return{title:"My works",meta:[{hid:"description",name:"description",content:"This is my portfolio works page"}]}},data:function(){return{works:[{title:"@vue/comps",description:"Simple Vue ui component library. Now have a 23 components and 2 directives. You can check more on comps site. Project still in progress.",imageSrc:r(185),chips:[{name:"html",theme:"danger",rippleColor:"red"},{name:"css",theme:"primary",rippleColor:"lightblue"},{name:"vue",theme:"success",rippleColor:"green"}],links:[{name:"Github",to:"https://github.com/yuriiholskiy/comps"},{name:"Comps",to:"https://yuriiholskiy.github.io/comps"}]},{title:"Awesome todo app",description:"This is a CRUD application, created by Vue.js (+ Vuex and VueRouter) and using firebase hosting.You can add, delete and update(by double click on todo title). \n\t\t\t\t\t\t\t\t\t\t\t\tAlso have a filter for done, active and all todos.",imageSrc:r(186),chips:[{name:"html",theme:"danger",rippleColor:"red"},{name:"css",theme:"primary",rippleColor:"lightblue"},{name:"vue",theme:"success",rippleColor:"green"}],links:[{name:"Todo app",to:"https://aw-vue-todo.web.app/"}]},{title:"Cube app",description:"Cube application with awesome vue.js animations, where all side of cube is link on other page. Just testing app.",imageSrc:r(187),chips:[{name:"html",theme:"danger",rippleColor:"red"},{name:"css",theme:"primary",rippleColor:"lightblue"},{name:"vue",theme:"success",rippleColor:"green"},{name:"nuxt",theme:"success",rippleColor:"green"}],links:[{name:"Github",to:"https://github.com/yuriiholskiy/cube-app"},{name:"Cube app",to:"https://yuriiholskiy.github.io/cube-app"}]},{title:"Pokedex app",description:"Pokedex app using pokemon api",imageSrc:r(188),chips:[{name:"html",theme:"danger",rippleColor:"red"},{name:"css",theme:"primary",rippleColor:"lightblue"},{name:"vue",theme:"success",rippleColor:"green"}],links:[{name:"Github",to:"https://github.com/yuriiholskiy/pokedex"},{name:"Pokedex",to:"https://yuriiholskiy.github.io/pokedex"}]}]}},components:{CCard:l,CChip:Object(c.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g({staticClass:"c-chip",class:[t.themes[t.theme]]},t.$listeners),[t.iconName&&!t.iconRight?o("c-icon",{attrs:{sprite:r(162),name:t.iconName,width:"20",height:"20",left:""}}):t._e(),t._v(" "),t._t("default",[t._v("Default")]),t._v(" "),t.iconName&&t.iconRight?o("c-icon",{attrs:{sprite:r(162),name:t.iconName,width:"20",height:"20",right:""}}):t._e()],2)}),[],!1,null,"03094e17",null).exports}}),f=(r(189),Object(c.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"works py-2 text-lighten-dark"},[r("h2",{staticClass:"display-1"},[t._v("\n\t\tMy works,\n\t")]),t._v(" "),r("div",{staticClass:"mt-1 columns jcc fww"},t._l(t.works,(function(e){var title=e.title,o=e.description,n=e.imageSrc,c=e.chips,l=e.links;return r("div",{key:title,staticClass:"column is-5-desktop is-6-tablet"},[r("c-card",{attrs:{action:"","image-src":n,"image-alt":title,"max-width":"40"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(title)+"\n\t\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(o)+"\n\t\t\t\t\t"),r("h4",{staticClass:"created-by-title mt-1 text-lighten-dark"},[t._v("\n\t\t\t\t\t\tCreated by:\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"created-by mt-1"},t._l(c,(function(e){var o=e.name,n=e.theme,c=e.rippleColor;return r("c-chip",{directives:[{name:"ripple",rawName:"v-ripple",value:c,expression:"rippleColor"}],key:o,staticClass:"mt-xs-1",attrs:{theme:n,"icon-name":o}},[t._v("\n\t\t\t\t\t\t\t"+t._s(o)+"\n\t\t\t\t\t\t")])})),1)]},proxy:!0},{key:"action",fn:function(){return t._l(l,(function(e){var o=e.name,n=e.to;return r("a",{key:n,staticClass:"mr-1 button is-link",attrs:{target:"_blank",rel:"noopener",href:n}},[t._v("\n\t\t\t\t\t\t"+t._s(o)+"\n\t\t\t\t\t")])}))},proxy:!0}],null,!0)})],1)})),0)])}),[],!1,null,null,null));e.default=f.exports}}]);