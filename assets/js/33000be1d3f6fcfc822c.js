(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(t,e,o){"use strict";var r=o(3),n=o(17),c=o(21),l=o(114),d=o(62),m=o(10),f=o(44).f,x=o(63).f,h=o(8).f,v=o(165).trim,w=r.Number,k=w,y=w.prototype,C="Number"==c(o(76)(y)),_="trim"in String.prototype,z=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,r,n,c=(e=_?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof w&&(C?m((function(){y.valueOf.call(o)})):"Number"!=c(o))?l(new k(z(e)),o,w):z(e)};for(var S,N=o(7)?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)n(k,S=N[I])&&!n(w,S)&&h(w,S,x(k,S));w.prototype=y,y.constructor=w,o(11)(r,"Number",w)}},164:function(t,e,o){var content=o(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("07da8672",content,!0,{sourceMap:!1})},165:function(t,e,o){var r=o(6),n=o(22),c=o(10),l=o(166),d="["+l+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),x=function(t,e,o){var n={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),m=n[t]=d?e(h):l[t];o&&(n[o]=m),r(r.P+r.F*d,"String",n)},h=x.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=x},166:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},169:function(t,e,o){"use strict";var r=o(164);o.n(r).a},170:function(t,e,o){(e=o(42)(!1)).push([t.i,".c-icon-wrap[data-v-67b32497]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1rem;font-weight:600}.c-icon-wrap.right[data-v-67b32497]{margin-left:.5rem}.c-icon-wrap.left[data-v-67b32497]{margin-right:.5rem}.c-icon[data-v-67b32497]{stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}",""]),t.exports=e},173:function(t,e,o){var content=o(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("316f1d3f",content,!0,{sourceMap:!1})},174:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("108d1123",content,!0,{sourceMap:!1})},175:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("42bb3c3a",content,!0,{sourceMap:!1})},176:function(t,e,o){var content=o(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("48529c80",content,!0,{sourceMap:!1})},183:function(t,e,o){"use strict";o(29),o(163);var r={name:"CIcon",props:{sprite:{type:String,default:""},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},name:{type:String,required:!0},right:{type:Boolean,default:!1},left:{type:Boolean,default:!1},color:{type:String,default:"none"},strokeColor:{type:String,default:"currentColor"}},computed:{svgBindings:function(){return{"xlink:href":"".concat(this.sprite,"#").concat(this.name),fill:this.color,stroke:this.strokeColor}}}},n=(o(169),o(20)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-icon-wrap",class:[{left:t.left},{right:t.right}]},[t.sprite?o("svg",{staticClass:"c-icon",attrs:{width:t.width,height:t.height}},[o("use",t._b({},"use",t.svgBindings,!1))]):o("iconify-icon",{attrs:{icon:t.name,width:"20",height:"20"}})],1)}),[],!1,null,"67b32497",null);e.a=component.exports},193:function(t,e,o){"use strict";var r=o(6),n=o(194)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(78)("find")},194:function(t,e,o){var r=o(23),n=o(77),c=o(24),l=o(18),d=o(195);t.exports=function(t,e){var o=1==t,m=2==t,f=3==t,x=4==t,h=6==t,v=5==t||h,w=e||d;return function(e,d,k){for(var y,C,_=c(e),z=n(_),S=r(d,k,3),N=l(z.length),I=0,j=o?w(e,N):m?w(e,0):void 0;N>I;I++)if((v||I in z)&&(C=S(y=z[I],I,_),t))if(o)j[I]=C;else if(C)switch(t){case 3:return!0;case 5:return y;case 6:return I;case 2:j.push(y)}else if(x)return!1;return h?-1:f||x?x:j}}},195:function(t,e,o){var r=o(196);t.exports=function(t,e){return new(r(t))(e)}},196:function(t,e,o){var r=o(12),n=o(115),c=o(2)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},197:function(t,e,o){"use strict";var r=o(173);o.n(r).a},198:function(t,e,o){(e=o(42)(!1)).push([t.i,'.c-card[data-v-7bcbceea]{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-bottom:1rem;margin:0 auto;text-align:left;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:#555;-webkit-box-shadow:0 0 3px 0 #aaa;-moz-box-shadow:0 0 3px 0 #aaa;box-shadow:0 0 3px 0 #aaa;background-color:"#666";background-color:var(--dark-color,"#666");-webkit-transition:-webkit-box-shadow .15s;transition:-webkit-box-shadow .15s;-o-transition:.15s box-shadow;-moz-transition:.15s box-shadow,.15s -moz-box-shadow;transition:box-shadow .15s;transition:box-shadow .15s,-webkit-box-shadow .15s,-moz-box-shadow .15s;color:var(--light-color)}.c-card[data-v-7bcbceea]:hover{-webkit-box-shadow:0 0 5px 0 #777;-moz-box-shadow:0 0 5px 0 #777;box-shadow:0 0 5px 0 #777}.c-card-image[data-v-7bcbceea]{height:20rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.25rem;-o-object-fit:fill;object-fit:fill}.c-card-body[data-v-7bcbceea]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem;border-bottom:1px solid var(--light-color)}.c-card-body h3[data-v-7bcbceea]{font-weight:600;font-size:1.6rem;margin-top:0}.c-card-description[data-v-7bcbceea]{line-height:1.3rem;margin:1rem 0 0;font-size:1.2rem;color:var(--light-color)}.c-card-action[data-v-7bcbceea]{margin-left:1rem}@media screen and (max-width:600px){.c-card-image[data-v-7bcbceea]{height:10rem}}',""]),t.exports=e},199:function(t,e,o){"use strict";var r=o(174);o.n(r).a},200:function(t,e,o){(e=o(42)(!1)).push([t.i,".c-chip[data-v-017600ea]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.3rem .7rem;-webkit-border-radius:1rem;-moz-border-radius:1rem;border-radius:1rem;white-space:nowrap;cursor:default}.c-chip[data-v-017600ea]:not(:last-child){margin-right:.25rem}.c-chip.is-primary[data-v-017600ea]{background-color:var(--primary-color);color:var(--light-color);border-color:var(--primary-light-color)}.c-chip.is-secondary[data-v-017600ea]{background-color:var(--secondary-color);color:var(--secondary-dark-color);border-color:var(--secondary-light-color)}.c-chip.is-info[data-v-017600ea]{background-color:var(--info-color);color:var(--dark-color);border-color:var(--info-light-color)}.c-chip.is-negative[data-v-017600ea]{background-color:var(--negative-color);color:var(--light-color);border-color:var(--negative-light-color)}.c-chip.is-positive[data-v-017600ea]{background-color:var(--positive-color);color:var(--dark-color);border-color:var(--positive-light-color)}.c-chip.is-light[data-v-017600ea]{background-color:var(--light-color);color:var(--dark-color);border-color:var(--light-light-color)}.c-chip.is-dark[data-v-017600ea]{background-color:var(--dark-color);color:var(--light-color);border-color:var(--dark-light-color)}",""]),t.exports=e},201:function(t,e,o){"use strict";var r=o(175);o.n(r).a},202:function(t,e,o){(e=o(42)(!1)).push([t.i,".c-modal-backdrop[data-v-61dfd6e7]{position:fixed;z-index:9999;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.7);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.c-modal[data-v-61dfd6e7],.c-modal-backdrop[data-v-61dfd6e7]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.c-modal[data-v-61dfd6e7]{background-color:var(--light-color);overflow-x:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:var(--dark-color);min-height:400px;-webkit-flex-basis:70%;-ms-flex-preferred-size:70%;flex-basis:70%}.c-modal-body[data-v-61dfd6e7]{position:relative;padding:2rem 4rem}.c-modal-footer[data-v-61dfd6e7],.c-modal-header[data-v-61dfd6e7]{padding:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.c-modal-header[data-v-61dfd6e7]{border-bottom:1px solid var(--dark-color);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.c-modal-footer[data-v-61dfd6e7]{border-top:1px solid var(--dark-color);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-top:auto}.modal-fade-enter[data-v-61dfd6e7],.modal-fade-leave-to[data-v-61dfd6e7]{opacity:0;-webkit-transform:skewX(5deg);-moz-transform:skewX(5deg);-ms-transform:skewX(5deg);-o-transform:skewX(5deg);transform:skewX(5deg)}.modal-fade-enter-active[data-v-61dfd6e7],.modal-fade-leave-active[data-v-61dfd6e7]{-webkit-transition:opacity .5s ease,-webkit-transform .3s;transition:opacity .5s ease,-webkit-transform .3s;-o-transition:opacity .5s ease,-o-transform .3s;-moz-transition:opacity .5s ease,transform .3s,-moz-transform .3s;transition:opacity .5s ease,transform .3s;transition:opacity .5s ease,transform .3s,-webkit-transform .3s,-moz-transform .3s,-o-transform .3s}@media screen and (max-width:768px){.c-modal[data-v-61dfd6e7]{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%}}@media screen and (max-width:640px){.c-modal-body[data-v-61dfd6e7]{padding:1rem 1rem 0}}@media screen and (max-width:560px){.c-modal-body[data-v-61dfd6e7]{max-height:200px;overflow-y:scroll}}",""]),t.exports=e},203:function(t,e,o){t.exports=o.p+"img/bc50847.png"},204:function(t,e,o){t.exports=o.p+"img/eeac9cd.png"},205:function(t,e,o){t.exports=o.p+"img/1823c4a.jpg"},206:function(t,e,o){t.exports=o.p+"img/b1825ff.png"},207:function(t,e,o){t.exports=o.p+"img/26fb819.jpg"},208:function(t,e,o){"use strict";var r=o(176);o.n(r).a},209:function(t,e,o){(e=o(42)(!1)).push([t.i,".created-by-title{font-weight:800}.row{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-15px;margin-right:-15px}.column{position:relative;max-width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-height:1px;margin-left:15px;margin-right:15px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;word-wrap:break-word;-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(50% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(50% - 30px);flex:0 0 calc(50% - 30px);max-width:-webkit-calc(50% - 30px);max-width:-moz-calc(50% - 30px);max-width:calc(50% - 30px)}@media (max-width:768px){.row{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.column{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 30px);flex:0 0 calc(100% - 30px);max-width:-webkit-calc(100% - 30px);max-width:-moz-calc(100% - 30px);max-width:calc(100% - 30px)}}@media (max-width:560px){.column{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 30px);flex:0 0 calc(100% - 30px);max-width:-webkit-calc(100% - 30px);max-width:-moz-calc(100% - 30px);max-width:calc(100% - 30px)}}@media (max-width:480px){.column{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 30px);flex:0 0 calc(100% - 30px);max-width:-webkit-calc(100% - 30px);max-width:-moz-calc(100% - 30px);max-width:calc(100% - 30px)}}",""]),t.exports=e},224:function(t,e,o){"use strict";o.r(e);o(193),o(163);var r={name:"CCard",functional:!0,props:{imageSrc:{type:String,default:""},imageAlt:{type:String,default:"Image"},maxWidth:{type:[String,Number],default:"30"},action:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1}},render:function(t,e){var data=e.data,o=e.props,r=e.slots,n=e.listeners,c=r().title?r().title:["Default title"],l=r().description?r().description:["Default description"],d=r().action?r().action:["Default action"],m=o.imageSrc,f=o.imageAlt,x=o.maxWidth,h=o.action,v=o.ripple,w=(o.image,[t("h3",{class:"c-card-title"},c),t("div",{class:"c-card-description"},l)]),k=[m&&t("img",{class:"c-card-image",attrs:{"data-src":m,alt:f},directives:[{name:"lazyload"}]}),t("div",{class:"c-card-body"},w),h&&t("div",{class:"c-card-action"},d)];return t("article",{class:["c-card",data.staticClass,data.class],style:[{"max-width":x+"rem"}],directives:v?[{name:"ripple",value:bgColor}]:null,on:n},k)}},n=(o(197),o(20)),c=Object(n.a)(r,void 0,void 0,!1,null,"7bcbceea",null).exports,l=o(183),d={name:"CChip",props:{theme:{type:String,default:"secondary"},iconName:{type:String,required:!1},iconRight:{type:Boolean,default:!1}},components:{CIcon:l.a}},m=(o(199),Object(n.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g({staticClass:"c-chip"},t.$listeners),[t.iconName&&!t.iconRight?o("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",left:""}}):t._e(),t._v(" "),t._t("default",[t._v("Default")]),t._v(" "),t.iconName&&t.iconRight?o("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",right:""}}):t._e()],2)}),[],!1,null,"017600ea",null).exports),f={name:"CModal",model:{prop:"modelValue",event:"update:modelValue"},props:{modelValue:{type:Boolean,required:!0},lockScroll:{type:Boolean,deafult:!1},cancelOnEscape:{type:Boolean,default:!0}},mounted:function(){var t=this;this.modelValue&&this.lockScroll&&(document.body.style.overflow="hidden");var e=function(e){var code=e.code;t.cancelOnEscape&&"Escape"===code&&t.closeModal()};document.addEventListener("keydown",e),this.$once("hook:beforeDestroy",(function(){document.removeEventListener("keydown",e),t.closeModal()}))},methods:{closeModal:function(){this.$emit("update:modelValue",!1),document.body.style.overflow=""}}},x=(o(201),Object(n.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal-fade"}},[t.modelValue?o("div",{staticClass:"c-modal-backdrop",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[o("div",{staticClass:"c-modal"},[o("header",{staticClass:"c-modal-header"},[t._t("header",[t._v("\n\t\t\t\t\tThis is the default title!\n\t\t\t\t")])],2),t._v(" "),o("section",{staticClass:"c-modal-body"},[t._t("body",[t._v("\n\t\t\t\t\tI'm the default body!\n\t\t\t\t")])],2),t._v(" "),o("footer",{staticClass:"c-modal-footer"},[t._t("footer",[t._v("\n\t\t\t\t\tI'm the default footer!\n\t\t\t\t")])],2)])]):t._e()])}),[],!1,null,"61dfd6e7",null).exports),h=[{name:"html",theme:"negative",rippleColor:"red"},{name:"css",theme:"primary",rippleColor:"lightblue"},{name:"js",theme:"info",rippleColor:"orange"}],v=[{title:"comps",description:"Simple Vue ui component library. Now have a 23 components and 2 directives. You can check more on comps site. Project still in progress.",imageSrc:o(203),chips:[].concat(h,[{name:"vue",theme:"positive",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/comps"},{name:"Comps",to:"https://yuriiholskiy.github.io/comps"}]},{title:"Awesome todo app",description:"This is a CRUD application, created by Vue.js (+ Vuex and VueRouter) and using firebase hosting.You can add, delete and update(by double click on todo title). \n\t\t\t\t\t\t\t\t\t\t\t\tAlso have a filter for done, active and all todos.",imageSrc:o(204),chips:[].concat(h,[{name:"vue",theme:"positive",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Todo app",to:"https://aw-vue-todo.web.app/"}]},{title:"Pokedex app",description:"Pokedex app using pokemon api",imageSrc:o(205),chips:[].concat(h,[{name:"vue",theme:"positive",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/pokedex"},{name:"Pokedex",to:"https://yuriiholskiy.github.io/pokedex"}]},{title:"vtrello",description:"Trello clone build with Vue and tailwindcss",imageSrc:o(206),chips:[].concat(h,[{name:"vue",theme:"positive",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/vtrello"},{name:"Vtrello",to:"https://yuriiholskiy.github.io/vtrello"}]},{title:"Defibrillator app",description:"Defibrillators app",imageSrc:o(207),chips:[].concat(h,[{name:"react",theme:"primary",rippleColor:"lightblue"},{name:"redux",theme:"dark",rippleColor:"aqua"},{name:"jest",theme:"info",rippleColor:"orangered"},{name:"material-ui",theme:"dark",rippleColor:"aqua"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/LV-469/defibrillator"}]}],w={head:function(){return{title:"My works",meta:[{hid:"description",name:"description",content:"This is my portfolio works page"}]}},data:function(){return{worksData:v,isModalActive:!1,activeItem:{}}},methods:{showAllChips:function(t,e){var o=this.worksData.find((function(t,o){return o===e})),sub=t.length-o.chipsCountShow;o.chipsCountShow=t.length+sub},showDetails:function(t){this.activeItem=t,this.isModalActive=!0,document.body.style.overflow="hidden"}},components:{CCard:c,CChip:m,CModal:x}},k=(o(208),Object(n.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section-wrap text-color-dark"},[o("h2",{staticClass:"display-1"},[t._v("\n\t\tMy works,\n\t")]),t._v(" "),o("div",{staticClass:"row"},t._l(t.worksData,(function(e,r){return o("div",{key:e.title,staticClass:"column mt-1"},[o("c-card",{attrs:{action:"","max-width":"50"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(e.description.slice(0,40))+" ...\n\t\t\t\t\t"),o("h4",{staticClass:"created-by-title mt-2 text-color-light hide-sm-and-down"},[t._v("\n\t\t\t\t\t\tUsed techonologies:\n\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"mt-half df aic fww acsa hide-sm-and-down"},[t._l(e.chips.slice(0,e.chipsCountShow),(function(e){var r=e.name,n=e.theme,c=e.rippleColor;return o("c-chip",{directives:[{name:"ripple",rawName:"v-ripple",value:c,expression:"rippleColor"}],key:r,staticClass:"mt-half",class:"is-"+n,attrs:{"icon-name":r}},[t._v("\n\t\t\t\t\t\t\t"+t._s(r)+"\n\t\t\t\t\t\t")])})),t._v(" "),e.chips.length>e.chipsCountShow?o("c-button",{staticClass:"is-info is-rounded is-small mt-half",attrs:{title:"Show all techonologies"},on:{click:function(o){return t.showAllChips(e.chips,r)}}},[t._v("\n\t\t\t\t\t\t\t...\n\t\t\t\t\t\t")]):t._e()],2)]},proxy:!0},{key:"action",fn:function(){return[o("div",{staticClass:"buttons mt-1"},[o("c-button",{staticClass:"is-info",attrs:{type:"button"},on:{click:function(o){return o.preventDefault(),t.showDetails(e)}}},[t._v("\n\t\t\t\t\t\t\tShow more\n\t\t\t\t\t\t")]),t._v(" "),t._l(e.links,(function(e){var r=e.name,n=e.to;return o("c-button",{key:n,staticClass:"is-primary hide-sm-and-down",attrs:{tag:"a",target:"_blank",rel:"noopener",href:n}},[t._v("\n\t\t\t\t\t\t\t"+t._s(r)+"\n\t\t\t\t\t\t")])}))],2)]},proxy:!0}],null,!0)})],1)})),0),t._v(" "),o("c-modal",{staticClass:"px-1",attrs:{"lock-scroll":!0},scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",{staticClass:"title-1 text-center"},[t._v("\n\t\t\t\t"+t._s(t.activeItem.title)+"\n\t\t\t")])]},proxy:!0},{key:"body",fn:function(){return[o("img",{staticClass:"img-responsive",attrs:{src:t.activeItem.imageSrc,alt:t.activeItem.title}}),t._v(" "),o("p",{staticClass:"mt-1 title-2"},[t._v("\n\t\t\t\t"+t._s(t.activeItem.description)+"\n\t\t\t")])]},proxy:!0},{key:"footer",fn:function(){return[o("p",{staticClass:"title-2"},[t._v("\n\t\t\t\tSee more on:\n\t\t\t")]),t._v(" "),o("div",{staticClass:"buttons mt-half"},t._l(t.activeItem.links,(function(e){var r=e.name,n=e.to;return o("c-button",{key:n,staticClass:"is-primary",attrs:{tag:"a",target:"_blank",rel:"noopener",href:n}},[t._v("\n\t\t\t\t\t"+t._s(r)+"\n\t\t\t\t")])})),1)]},proxy:!0}]),model:{value:t.isModalActive,callback:function(e){t.isModalActive=e},expression:"isModalActive"}})],1)}),[],!1,null,null,null));e.default=k.exports}}]);