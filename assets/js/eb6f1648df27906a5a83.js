(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(t,e,o){var content=o(149);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("0ccaee10",content,!0,{sourceMap:!1})},148:function(t,e,o){"use strict";var r=o(142);o.n(r).a},149:function(t,e,o){(e=o(13)(!1)).push([t.i,".c-chip[data-v-799271a3]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.3rem .7rem;-webkit-border-radius:1rem;-moz-border-radius:1rem;border-radius:1rem;white-space:nowrap;cursor:default}.c-chip[data-v-799271a3]:not(:last-child){margin-right:.25rem}.c-chip.is-primary[data-v-799271a3]{background-color:var(--primary-color);color:var(--light-color);border-color:var(--primary-light-color)}.c-chip.is-secondary[data-v-799271a3]{background-color:var(--secondary-color);color:var(--secondary-dark-color);border-color:var(--secondary-light-color)}.c-chip.is-info[data-v-799271a3]{background-color:var(--info-color);color:var(--dark-color);border-color:var(--info-light-color)}.c-chip.is-negative[data-v-799271a3]{background-color:var(--negative-color);color:var(--light-color);border-color:var(--negative-light-color)}.c-chip.is-positive[data-v-799271a3]{background-color:var(--positive-color);color:var(--dark-color);border-color:var(--positive-light-color)}.c-chip.is-light[data-v-799271a3]{background-color:var(--light-color);color:var(--dark-color);border-color:var(--light-light-color)}.c-chip.is-dark[data-v-799271a3]{background-color:var(--dark-color);color:var(--light-color);border-color:var(--dark-light-color)}",""]),t.exports=e},150:function(t,e,o){var content=o(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("36f867c9",content,!0,{sourceMap:!1})},151:function(t,e,o){var content=o(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("48529c80",content,!0,{sourceMap:!1})},159:function(t,e,o){"use strict";var r={name:"CChip",props:{theme:{type:String,default:"secondary"},iconName:{type:String,required:!1},iconRight:{type:Boolean,default:!1}}},n=(o(148),o(4)),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g({staticClass:"c-chip"},t.$listeners),[t.iconName&&!t.iconRight?o("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",left:""}}):t._e(),t._v(" "),t._t("default",[t._v("Default")]),t._v(" "),t.iconName&&t.iconRight?o("c-icon",{attrs:{name:t.iconName,width:"20",height:"20",right:""}}):t._e()],2)}),[],!1,null,"799271a3",null).exports,c={name:"AppTagList",props:{tags:{type:Array,required:!0}},components:{CChip:l}},d=Object(n.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h4",{staticClass:"fwb text-color-primary-light mt-half"},[t._v("Tags:")]),t._v(" "),t._l(t.tags,(function(e){var r=e.name,n=e.theme,l=e.rippleColor;return o("c-chip",{directives:[{name:"ripple",rawName:"v-ripple",value:l,expression:"rippleColor"}],key:r,staticClass:"mt-half",class:"is-"+n,attrs:{"icon-name":r}},[t._v("\n\t\t"+t._s(r)+"\n\t")])}))],2)}),[],!1,null,null,null);e.a=d.exports},170:function(t,e,o){"use strict";var r=o(150);o.n(r).a},171:function(t,e,o){(e=o(13)(!1)).push([t.i,".c-modal-backdrop[data-v-68b00187]{position:fixed;z-index:9999;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.7);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.c-modal[data-v-68b00187],.c-modal-backdrop[data-v-68b00187]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.c-modal[data-v-68b00187]{background-color:var(--bg-color);overflow-x:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:var(--text-color);max-height:650px;-webkit-flex-basis:70%;-ms-flex-preferred-size:70%;flex-basis:70%}.c-modal-body[data-v-68b00187]{position:relative;padding:1rem 4rem}.c-modal-footer[data-v-68b00187],.c-modal-header[data-v-68b00187]{padding:.5rem 1rem 1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.c-modal-header[data-v-68b00187]{border-bottom:1px solid var(--light-color);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.c-modal-footer[data-v-68b00187]{border-top:1px solid var(--light-color);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;margin-top:auto}.modal-fade-enter[data-v-68b00187],.modal-fade-leave-to[data-v-68b00187]{opacity:0;-webkit-transform:skewX(5deg);-moz-transform:skewX(5deg);-ms-transform:skewX(5deg);-o-transform:skewX(5deg);transform:skewX(5deg)}.modal-fade-enter-active[data-v-68b00187],.modal-fade-leave-active[data-v-68b00187]{-webkit-transition:opacity .5s ease,-webkit-transform .3s;transition:opacity .5s ease,-webkit-transform .3s;-o-transition:opacity .5s ease,-o-transform .3s;-moz-transition:opacity .5s ease,transform .3s,-moz-transform .3s;transition:opacity .5s ease,transform .3s;transition:opacity .5s ease,transform .3s,-webkit-transform .3s,-moz-transform .3s,-o-transform .3s}@media screen and (max-width:768px){.c-modal[data-v-68b00187]{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%}}@media screen and (max-width:640px){.c-modal-body[data-v-68b00187]{padding:1rem 1rem 0}}@media screen and (max-width:560px){.c-modal-body[data-v-68b00187]{max-height:200px;overflow-y:scroll}}",""]),t.exports=e},172:function(t,e,o){t.exports=o.p+"img/bc50847.png"},173:function(t,e,o){t.exports=o.p+"img/eeac9cd.png"},174:function(t,e,o){t.exports=o.p+"img/1823c4a.jpg"},175:function(t,e,o){t.exports=o.p+"img/b1825ff.png"},176:function(t,e,o){t.exports=o.p+"img/26fb819.jpg"},177:function(t,e,o){"use strict";var r=o(151);o.n(r).a},178:function(t,e,o){(e=o(13)(!1)).push([t.i,".work-card-leave-active{width:100%;position:absolute!important}.work-card-enter,.work-card-leave-to{opacity:0;-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px);transform:translateY(10px)}.work-card-item{-webkit-transition:opacity .7s ease-in-out,-webkit-transform .7s ease-out;transition:opacity .7s ease-in-out,-webkit-transform .7s ease-out;-o-transition:opacity .7s ease-in-out,-o-transform .7s ease-out;-moz-transition:transform .7s ease-out,opacity .7s ease-in-out,-moz-transform .7s ease-out;transition:transform .7s ease-out,opacity .7s ease-in-out;transition:transform .7s ease-out,opacity .7s ease-in-out,-webkit-transform .7s ease-out,-moz-transform .7s ease-out,-o-transform .7s ease-out}.fit{-o-object-fit:cover;object-fit:cover}.created-by-title{font-weight:800}",""]),t.exports=e},201:function(t,e,o){"use strict";o.r(e);var r={name:"CModal",model:{prop:"modelValue",event:"update:modelValue"},props:{modelValue:{type:Boolean,required:!0},lockScroll:{type:Boolean,deafult:!1},cancelOnEscape:{type:Boolean,default:!0}},watch:{modelValue:{handler(t){t&&this.lockScroll?document.body.style.overflow="hidden":document.body.style.overflow=""}},immediate:!0},mounted(){var t=t=>{var{code:code}=t;this.cancelOnEscape&&"Escape"===code&&this.closeModal()};document.addEventListener("keydown",t),this.$once("hook:beforeDestroy",()=>{document.removeEventListener("keydown",t),this.closeModal()})},methods:{closeModal(){this.$emit("update:modelValue",!1)}}},n=(o(170),o(4)),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal-fade"}},[t.modelValue?o("div",{staticClass:"c-modal-backdrop",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[o("div",{staticClass:"c-modal"},[o("header",{staticClass:"c-modal-header"},[t._t("header",[t._v("\n\t\t\t\t\tThis is the default title!\n\t\t\t\t")])],2),t._v(" "),o("section",{staticClass:"c-modal-body"},[t._t("body",[t._v("\n\t\t\t\t\tI'm the default body!\n\t\t\t\t")])],2),t._v(" "),o("footer",{staticClass:"c-modal-footer"},[t._t("footer",[t._v("\n\t\t\t\t\tI'm the default footer!\n\t\t\t\t")])],2)])]):t._e()])}),[],!1,null,"68b00187",null).exports,c=o(159),d={name:"WorksUsefulButtons",props:{links:{type:Array,required:!0}}},m=Object(n.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"buttons mt-1"},[o("c-button",{staticClass:"is-info",on:{click:function(e){return e.preventDefault(),t.$emit("show-details")}}},[t._v("\n\t\tShow more\n\t")]),t._v(" "),t._l(t.links,(function(e){var r=e.name,n=e.to;return o("c-button",{key:n,staticClass:"is-primary hide-sm-and-down",attrs:{tag:"a",href:n}},[t._v("\n\t\t"+t._s(r)+"\n\t")])}))],2)}),[],!1,null,null,null).exports,f=[{name:"html",theme:"negative",rippleColor:"red"},{name:"css",theme:"primary",rippleColor:"lightblue"},{name:"js",theme:"info",rippleColor:"yellow"}],h=[{title:"comps",description:"Simple Vue ui component library. Now have a 23 components and 2 directives. You can check more on comps site. Project still in progress.",imageSrc:o(172),tags:[...f,{name:"vue",theme:"positive",rippleColor:"green"},{name:"jest",theme:"info",rippleColor:"yellow"}],tagsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/comps"},{name:"Comps",to:"https://yuriiholskiy.github.io/comps"}]},{title:"Awesome todo app",description:"This is a CRUD application, created by Vue.js (+ Vuex and VueRouter) and using firebase hosting.You can add, delete and update(by double click on todo title). \n\t\t\t\t\t\t\t\t\t\t\t\tAlso have a filter for done, active and all todos.",imageSrc:o(173),tags:[...f,{name:"vue",theme:"positive",rippleColor:"green"}],tagsCountShow:4,links:[{name:"Todo app",to:"https://aw-vue-todo.web.app/"}]},{title:"Pokedex app",description:"Pokedex app using pokemon api",imageSrc:o(174),tags:[...f,{name:"vue",theme:"positive",rippleColor:"green"}],tagsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/pokedex"},{name:"Pokedex",to:"https://yuriiholskiy.github.io/pokedex"}]},{title:"vtrello",description:"Trello clone build with Vue and tailwindcss",imageSrc:o(175),tags:[...f,{name:"vue",theme:"positive",rippleColor:"green"}],tagsCountShow:4,links:[{name:"Github",to:"https://github.com/yuriiholskiy/vtrello"},{name:"Vtrello",to:"https://yuriiholskiy.github.io/vtrello"}]},{title:"Defibrillator app",description:"Defibrillators app, this is a volunteer health care project. We are developing a service that could help people to find the nearest place with defibrillator.",imageSrc:o(176),tags:[...f,{name:"react",theme:"primary",rippleColor:"lightblue"},{name:"redux",theme:"dark",rippleColor:"aqua"},{name:"jest",theme:"info",rippleColor:"yellow"},{name:"material-ui",theme:"dark",rippleColor:"aqua"}],tagsCountShow:4,links:[{name:"Github",to:"https://github.com/LV-469/defibrillator"}]}],v={head:()=>({title:"My works",meta:[{hid:"description",name:"description",content:"This is my portfolio works page"},{hid:"og:title",property:"og:title",content:"My works"},{hid:"og:description",property:"og:description",content:"My portfolio works"}]}),data:()=>({worksData:h,searchData:"",isModalActive:!1,activeItem:{}}),mounted(){var t=t=>{"/"===t.key&&this.$refs["search-input"].$refs.input.focus()};document.addEventListener("keyup",t),this.$once("hook:beforeDestroy",()=>{document.removeEventListener("keyup",t)})},methods:{showAllTags(t,e){var o=this.filteredWorksData.find((t,o)=>o===e),sub=t.length-o.tagsCountShow;o.tagsCountShow=t.length+sub},showDetails(t){this.activeItem=t,this.isModalActive=!0}},computed:{filteredWorksData(){return this.worksData.filter(t=>t.title.toLowerCase().includes(this.searchData.toLowerCase()))}},components:{CModal:l,AppTagList:c.a,WorksUsefulLinks:m}},k=(o(177),Object(n.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section-wrap text-color-dark"},[o("h2",{staticClass:"display-1"},[t._v("\n\t\tMy works,\n\t")]),t._v(" "),o("c-input",{ref:"search-input",attrs:{type:"text",placeholder:"search by title ('/' to focus)"},model:{value:t.searchData,callback:function(e){t.searchData="string"==typeof e?e.trim():e},expression:"searchData"}}),t._v(" "),o("transition-group",{staticClass:"row",attrs:{tag:"div",name:"work-card",appear:""}},t._l(t.filteredWorksData,(function(e){return o("div",{key:e.title,staticClass:"column mt-1 work-card-item"},[o("c-card",{attrs:{action:"","max-width":"50"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[o("span",[t._v(" "+t._s(e.description.slice(0,45).trim())+"... ")]),t._v(" "),o("app-tag-list",{staticClass:"mt-1 hide-md-and-down",attrs:{tags:e.tags}})]},proxy:!0},{key:"action",fn:function(){return[o("works-useful-links",{attrs:{links:e.links},on:{"show-details":function(o){return t.showDetails(e)}}})]},proxy:!0}],null,!0)})],1)})),0),t._v(" "),o("c-modal",{staticClass:"px-1",attrs:{"lock-scroll":!0},scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",{staticClass:"title-1 text-center"},[t._v("\n\t\t\t\t"+t._s(t.activeItem.title)+"\n\t\t\t")])]},proxy:!0},{key:"body",fn:function(){return[o("img",{staticClass:"img-responsive fit",attrs:{src:t.activeItem.imageSrc,alt:t.activeItem.title}}),t._v(" "),o("p",{staticClass:"mt-1 title-2"},[t._v("\n\t\t\t\t"+t._s(t.activeItem.description)+"\n\t\t\t")]),t._v(" "),o("app-tag-list",{attrs:{tags:t.activeItem.tags}})]},proxy:!0},{key:"footer",fn:function(){return[o("p",{staticClass:"title-2"},[t._v("\n\t\t\t\tSee more on:\n\t\t\t")]),t._v(" "),o("div",{staticClass:"buttons mt-half"},t._l(t.activeItem.links,(function(e){var r=e.name,n=e.to;return o("c-button",{key:n,staticClass:"is-primary",attrs:{tag:"a",target:"_blank",rel:"noopener",href:n}},[t._v("\n\t\t\t\t\t"+t._s(r)+"\n\t\t\t\t")])})),1)]},proxy:!0}]),model:{value:t.isModalActive,callback:function(e){t.isModalActive=e},expression:"isModalActive"}})],1)}),[],!1,null,null,null));e.default=k.exports}}]);