(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(t,e,o){var content=o(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("07da8672",content,!0,{sourceMap:!1})},173:function(t,e,o){"use strict";var n=o(6),r=o(21),c=o(24),l=o(117),d=o(65),m=o(13),f=o(48).f,h=o(66).f,v=o(11).f,x=o(174).trim,w=n.Number,k=w,y=w.prototype,C="Number"==c(o(79)(y)),_="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,c=(e=_?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof w&&(C?m((function(){y.valueOf.call(o)})):"Number"!=c(o))?l(new k(S(e)),o,w):S(e)};for(var N,I=o(10)?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;I.length>z;z++)r(k,N=I[z])&&!r(w,N)&&v(w,N,h(k,N));w.prototype=y,y.constructor=w,o(14)(n,"Number",w)}},174:function(t,e,o){var n=o(9),r=o(25),c=o(13),l=o(175),d="["+l+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(t,e,o){var r={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),m=r[t]=d?e(v):l[t];o&&(r[o]=m),n(n.P+n.F*d,"String",r)},v=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},175:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},178:function(t,e,o){"use strict";var n=o(172);o.n(n).a},179:function(t,e,o){(e=o(45)(!1)).push([t.i,".c-icon-wrap[data-v-67b32497]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1rem;font-weight:600}.c-icon-wrap.right[data-v-67b32497]{margin-left:.5rem}.c-icon-wrap.left[data-v-67b32497]{margin-right:.5rem}.c-icon[data-v-67b32497]{stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}",""]),t.exports=e},181:function(t,e,o){var content=o(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("4579570e",content,!0,{sourceMap:!1})},182:function(t,e,o){var content=o(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("288f7ac0",content,!0,{sourceMap:!1})},183:function(t,e,o){var content=o(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("585dda70",content,!0,{sourceMap:!1})},184:function(t,e,o){var content=o(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("48529c80",content,!0,{sourceMap:!1})},188:function(t,e,o){"use strict";o(32),o(173);var n={name:"CIcon",props:{sprite:{type:String,default:""},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},name:{type:String,required:!0},right:{type:Boolean,default:!1},left:{type:Boolean,default:!1},color:{type:String,default:"none"},strokeColor:{type:String,default:"currentColor"}},computed:{svgBindings:function(){return{"xlink:href":"".concat(this.sprite,"#").concat(this.name),fill:this.color,stroke:this.strokeColor}}}},r=(o(178),o(46)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-icon-wrap",class:[{left:t.left},{right:t.right}]},[t.sprite?o("svg",{staticClass:"c-icon",attrs:{width:t.width,height:t.height}},[o("use",t._b({},"use",t.svgBindings,!1))]):o("iconify-icon",{attrs:{icon:t.name,width:"20",height:"20"}})],1)}),[],!1,null,"67b32497",null);e.a=component.exports},196:function(t,e,o){"use strict";var n=o(9),r=o(197)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(81)("find")},197:function(t,e,o){var n=o(26),r=o(80),c=o(27),l=o(22),d=o(198);t.exports=function(t,e){var o=1==t,m=2==t,f=3==t,h=4==t,v=6==t,x=5==t||v,w=e||d;return function(e,d,k){for(var y,C,_=c(e),S=r(_),N=n(d,k,3),I=l(S.length),z=0,A=o?w(e,I):m?w(e,0):void 0;I>z;z++)if((x||z in S)&&(C=N(y=S[z],z,_),t))if(o)A[z]=C;else if(C)switch(t){case 3:return!0;case 5:return y;case 6:return z;case 2:A.push(y)}else if(h)return!1;return v?-1:f||h?h:A}}},198:function(t,e,o){var n=o(199);t.exports=function(t,e){return new(n(t))(e)}},199:function(t,e,o){var n=o(15),r=o(118),c=o(3)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},200:function(t,e,o){"use strict";var n=o(181);o.n(n).a},201:function(t,e,o){(e=o(45)(!1)).push([t.i,".c-card[data-v-0e58a634]{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-bottom:1rem;margin:0 auto;text-align:left;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:#555;-webkit-box-shadow:0 0 3px 0 #aaa;-moz-box-shadow:0 0 3px 0 #aaa;box-shadow:0 0 3px 0 #aaa;background-color:#e8e9e9;-webkit-transition:-webkit-box-shadow .15s;transition:-webkit-box-shadow .15s;-o-transition:.15s box-shadow;-moz-transition:.15s box-shadow,.15s -moz-box-shadow;transition:box-shadow .15s;transition:box-shadow .15s,-webkit-box-shadow .15s,-moz-box-shadow .15s}.c-card[data-v-0e58a634]:hover{-webkit-box-shadow:0 0 5px 0 #777;-moz-box-shadow:0 0 5px 0 #777;box-shadow:0 0 5px 0 #777}.c-card-image[data-v-0e58a634]{height:20rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.25rem;-o-object-fit:cover;object-fit:cover}.c-card-body[data-v-0e58a634]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem}.c-card-body h3[data-v-0e58a634]{font-weight:600;font-size:1.6rem;margin-top:0}.c-card-description[data-v-0e58a634]{line-height:1.3rem;margin:1rem 0 0;font-size:1.2rem;color:#666}.c-card-action[data-v-0e58a634]{margin-left:1rem}@media screen and (max-width:600px){.c-card-image[data-v-0e58a634]{height:10rem;-o-object-fit:contain;object-fit:contain}}",""]),t.exports=e},202:function(t,e,o){"use strict";var n=o(182);o.n(n).a},203:function(t,e,o){(e=o(45)(!1)).push([t.i,".c-chip[data-v-b2139fcc]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.3rem .7rem;-webkit-border-radius:1rem;-moz-border-radius:1rem;border-radius:1rem;white-space:nowrap;cursor:default}.c-chip[data-v-b2139fcc]:not(:last-child){margin-right:.25rem}.c-chip-primary[data-v-b2139fcc]{color:#b3d7ff;background-color:#007bff;border-color:#006fe6}.c-chip-secondary[data-v-b2139fcc]{color:#caced1;background-color:#6c757d;border-color:#60686f}.c-chip-danger[data-v-b2139fcc]{color:#f6cdd1;background-color:#dc3545;border-color:#d32535}.c-chip-success[data-v-b2139fcc]{color:#9be7ac;background-color:#28a745;border-color:#23923d}.c-chip-warning[data-v-b2139fcc]{color:#ffeeba;background-color:#ffc107;border-color:#edb100}.c-chip-dark[data-v-b2139fcc]{color:#658c8c;background-color:#1a2424;border-color:#0f1515}.c-chip-light[data-v-b2139fcc]{color:#fff;background-color:#e8e9e9;border-color:#dbdddd}",""]),t.exports=e},204:function(t,e,o){"use strict";var n=o(183);o.n(n).a},205:function(t,e,o){(e=o(45)(!1)).push([t.i,".modal-fade-enter,.modal-fade-leave-to{opacity:0;-webkit-transform:skewX(8deg);-moz-transform:skewX(8deg);-ms-transform:skewX(8deg);-o-transform:skewX(8deg);transform:skewX(8deg)}.modal-fade-enter-active,.modal-fade-leave-active{-webkit-transition:opacity .5s ease,-webkit-transform .3s;transition:opacity .5s ease,-webkit-transform .3s;-o-transition:opacity .5s ease,-o-transform .3s;-moz-transition:opacity .5s ease,transform .3s,-moz-transform .3s;transition:opacity .5s ease,transform .3s;transition:opacity .5s ease,transform .3s,-webkit-transform .3s,-moz-transform .3s,-o-transform .3s}",""]),t.exports=e},206:function(t,e,o){t.exports=o.p+"img/bc50847.png"},207:function(t,e,o){t.exports=o.p+"img/eeac9cd.png"},208:function(t,e,o){t.exports=o.p+"img/1823c4a.jpg"},209:function(t,e,o){t.exports=o.p+"img/b1825ff.png"},210:function(t,e,o){t.exports=o.p+"img/26fb819.jpg"},211:function(t,e,o){"use strict";var n=o(184);o.n(n).a},212:function(t,e,o){(e=o(45)(!1)).push([t.i,".created-by-title{font-weight:800}",""]),t.exports=e},220:function(t,e,o){"use strict";o.r(e);o(196),o(173);var n,r={name:"CCard",functional:!0,props:{imageSrc:{type:String,default:""},imageAlt:{type:String,default:"Image"},maxWidth:{type:[String,Number],default:"30"},bgColor:{type:String,default:"#e8e9e9"},action:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1}},render:function(t,e){var data=e.data,o=e.props,n=e.slots,r=e.listeners,c=n().title?n().title:["Default title"],l=n().description?n().description:["Default description"],d=n().action?n().action:["Default action"],m=o.imageSrc,f=o.imageAlt,h=o.maxWidth,v=o.bgColor,x=o.action,w=o.ripple,k=(o.image,[t("h3",{class:"c-card-title"},c),t("div",{class:"c-card-description"},l)]),y=[m&&t("img",{class:"c-card-image",attrs:{"data-src":m,alt:f},directives:[{name:"lazyload"}]}),t("div",{class:"c-card-body"},k),x&&t("div",{class:"c-card-action"},d)];return t("article",{class:["c-card",data.staticClass,data.class],style:[{"background-color":v},{"max-width":h+"rem"}],directives:w?[{name:"ripple",value:v}]:null,on:r},y)}},c=(o(200),o(46)),l=Object(c.a)(r,void 0,void 0,!1,null,"0e58a634",null).exports,d=o(188),m={name:"CChip",mixins:[(n="chip",{data:function(){return{themes:{primary:"c-".concat(n,"-primary"),secondary:"c-".concat(n,"-secondary"),warning:"c-".concat(n,"-warning"),danger:"c-".concat(n,"-danger"),success:"c-".concat(n,"-success"),dark:"c-".concat(n,"-dark"),light:"c-".concat(n,"-light")}}}})],props:{theme:{type:String,default:"secondary"},iconName:{type:String,required:!1},iconRight:{type:Boolean,default:!1}},components:{CIcon:d.a}},f=(o(202),Object(c.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g({staticClass:"c-chip",class:[t.themes[t.theme]]},t.$listeners),[t.iconName&&!t.iconRight?o("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",left:""}}):t._e(),t._v(" "),t._t("default",[t._v("Default")]),t._v(" "),t.iconName&&t.iconRight?o("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",right:""}}):t._e()],2)}),[],!1,null,"b2139fcc",null).exports),h={name:"CModal",model:{prop:"modelValue",event:"update:modelValue"},props:{modelValue:{type:Boolean,required:!0}}},v=(o(204),Object(c.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-modal",{attrs:{active:t.modelValue,"can-cancel":!0,scroll:"keep",width:900,animation:"modal-fade"},on:{close:function(e){return t.$emit("update:modelValue",!t.modelValue)}}},[t._t("default")],2)}),[],!1,null,null,null).exports),x=[{name:"html",theme:"danger",rippleColor:"red"},{name:"css",theme:"primary",rippleColor:"lightblue"},{name:"js",theme:"warning",rippleColor:"orange"}],w=[{title:"comps",description:"Simple Vue ui component library. Now have a 23 components and 2 directives. You can check more on comps site. Project still in progress.",imageSrc:o(206),chips:[].concat(x,[{name:"vue",theme:"success",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/comps"},{name:"Comps",to:"https://yuriiholskiy.github.io/comps"}]},{title:"Awesome todo app",description:"This is a CRUD application, created by Vue.js (+ Vuex and VueRouter) and using firebase hosting.You can add, delete and update(by double click on todo title). \n\t\t\t\t\t\t\t\t\t\t\t\tAlso have a filter for done, active and all todos.",imageSrc:o(207),chips:[].concat(x,[{name:"vue",theme:"success",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Todo app",to:"https://aw-vue-todo.web.app/"}]},{title:"Pokedex app",description:"Pokedex app using pokemon api",imageSrc:o(208),chips:[].concat(x,[{name:"vue",theme:"success",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/pokedex"},{name:"Pokedex",to:"https://yuriiholskiy.github.io/pokedex"}]},{title:"vtrello",description:"Trello clone build with Vue and tailwindcss",imageSrc:o(209),chips:[].concat(x,[{name:"vue",theme:"success",rippleColor:"green"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/vtrello"},{name:"Vtrello",to:"https://yuriiholskiy.github.io/vtrello"}]},{title:"Defibrillator app",description:"Defibrillators app",imageSrc:o(210),chips:[].concat(x,[{name:"react",theme:"primary",rippleColor:"lightblue"},{name:"redux",theme:"dark",rippleColor:"aqua"},{name:"jest",theme:"warning",rippleColor:"orangered"},{name:"material-ui",theme:"dark",rippleColor:"aqua"}]),chipsCountShow:4,links:[{name:"Github",to:"https://github.com/LV-469/defibrillator"},{name:"Def app",to:"https://yuriiholskiy.github.io/vtrello"}]}],k={head:function(){return{title:"My works",meta:[{hid:"description",name:"description",content:"This is my portfolio works page"}]}},data:function(){return{worksData:w,isModalActive:!1,activeItem:{}}},methods:{showAllChips:function(t,e){var o=this.worksData.find((function(t,o){return o===e})),sub=t.length-o.chipsCountShow;o.chipsCountShow=t.length+sub},showDetails:function(t){this.activeItem=t,this.isModalActive=!0}},components:{CCard:l,CChip:f,CModal:v}},y=(o(211),Object(c.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"works py-2 text-lighten-dark"},[o("h2",{staticClass:"display-1"},[t._v("\n\t\tMy works,\n\t")]),t._v(" "),o("div",{staticClass:"mt-1 columns jcc fww"},t._l(t.worksData,(function(e,n){return o("div",{key:e.title,staticClass:"column is-6"},[o("c-card",{attrs:{action:"","max-width":"50"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(e.description.slice(0,40))+" ...\n\t\t\t\t\t"),o("h4",{staticClass:"created-by-title mt-2 text-lighten-dark"},[t._v("\n\t\t\t\t\t\tUsed techonologies:\n\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"mt-half df aic fww acsa"},[t._l(e.chips.slice(0,e.chipsCountShow),(function(e){var n=e.name,r=e.theme,c=e.rippleColor;return o("c-chip",{directives:[{name:"ripple",rawName:"v-ripple",value:c,expression:"rippleColor"}],key:n,staticClass:"mt-half",attrs:{theme:r,"icon-name":n}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t\t")])})),t._v(" "),e.chips.length>e.chipsCountShow?o("b-button",{staticClass:"button is-small mt-xs-1",attrs:{rounded:"",title:"Show all techonologies"},on:{click:function(o){return t.showAllChips(e.chips,n)}}},[t._v("\n\t\t\t\t\t\t\t...\n\t\t\t\t\t\t")]):t._e()],2)]},proxy:!0},{key:"action",fn:function(){return[o("div",{staticClass:"buttons"},[o("b-button",{staticClass:"button is-primary",on:{click:function(o){return t.showDetails(e)}}},[t._v("\n\t\t\t\t\t\t\tShow more\n\t\t\t\t\t\t")]),t._v(" "),t._l(e.links,(function(e){var n=e.name,r=e.to;return o("b-button",{key:r,staticClass:"button is-link",attrs:{tag:"a",target:"_blank",rel:"noopener",href:r}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t\t")])}))],2)]},proxy:!0}],null,!0)})],1)})),0),t._v(" "),o("c-modal",{staticClass:"px-1",model:{value:t.isModalActive,callback:function(e){t.isModalActive=e},expression:"isModalActive"}},[o("c-card",{attrs:{action:"","image-src":t.activeItem.imageSrc,"image-alt":t.activeItem.title,"max-width":"50"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.activeItem.title)+"\n\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.activeItem.description)+"\n\t\t\t")]},proxy:!0},{key:"action",fn:function(){return[o("p",{staticClass:"title-2"},[t._v("\n\t\t\t\t\tSee more on:\n\t\t\t\t")]),t._v(" "),o("div",{staticClass:"buttons"},t._l(t.activeItem.links,(function(e){var n=e.name,r=e.to;return o("b-button",{key:r,staticClass:"button is-link",attrs:{tag:"a",target:"_blank",rel:"noopener",href:r}},[t._v("\n\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t")])})),1)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null));e.default=y.exports}}]);