(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{190:function(t,e,x){var content=x(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,x(18).default)("4cd0477a",content,!0,{sourceMap:!1})},213:function(t,e,x){"use strict";var c=x(190);x.n(c).a},214:function(t,e,x){(e=x(17)(!1)).push([t.i,".row{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-15px;margin-right:-15px}.column,.row{position:relative}.column{max-width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-height:1px;margin-left:15px;margin-right:15px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;word-wrap:break-word;-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(50% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(50% - 30px);flex:0 0 calc(50% - 30px);max-width:-webkit-calc(50% - 30px);max-width:-moz-calc(50% - 30px);max-width:calc(50% - 30px)}@media (max-width:768px){.row{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.column{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 30px);flex:0 0 calc(100% - 30px);max-width:-webkit-calc(100% - 30px);max-width:-moz-calc(100% - 30px);max-width:calc(100% - 30px)}}@media (max-width:560px){.column{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 30px);flex:0 0 calc(100% - 30px);max-width:-webkit-calc(100% - 30px);max-width:-moz-calc(100% - 30px);max-width:calc(100% - 30px)}}@media (max-width:480px){.column{-webkit-box-flex:0;-webkit-flex:0 0 -webkit-calc(100% - 30px);-moz-box-flex:0;-ms-flex:0 0 calc(100% - 30px);flex:0 0 calc(100% - 30px);max-width:-webkit-calc(100% - 30px);max-width:-moz-calc(100% - 30px);max-width:calc(100% - 30px)}}",""]),t.exports=e},258:function(t,e,x){"use strict";x.r(e);var c={data:function(){return{articles:[{name:"Vue teleport",path:"blog/vue_teleport",description:"This is a vue 3"}]}}},l=(x(213),x(8)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("section",{staticClass:"section-wrap"},[x("h2",{staticClass:"display-1"},[t._v("\n\t\tThere is a blog\n\t")]),t._v(" "),x("div",{staticClass:"row"},t._l(t.articles,(function(article){return x("div",{key:article.name,staticClass:"column mt-1"},[x("c-card",{attrs:{action:"","max-width":"50"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(article.name)+"\n\t\t\t\t")]},proxy:!0},{key:"description",fn:function(){return[x("span",[t._v(" "+t._s(article.description.slice(0,40).trim())+"... ")])]},proxy:!0},{key:"action",fn:function(){return[x("c-button",{staticClass:"is-primary mt-1",attrs:{tag:"nuxt-link",to:article.path}},[t._v("\n\t\t\t\t\t\t"+t._s(article.name)+"\n\t\t\t\t\t")])]},proxy:!0}],null,!0)})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);