(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(t,e,n){var content=n(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("89faa720",content,!0,{sourceMap:!1})},176:function(t,e,n){"use strict";var o=n(148);n.n(o).a},177:function(t,e,n){(e=n(13)(!1)).push([t.i,".nuxt-content{max-width:65rem;margin:1rem auto 0}.nuxt-content code{font-size:1.2rem}.nuxt-content p{font-size:1.3rem}.nuxt-content h3 a{color:var(--primary-color)}",""]),t.exports=e},201:function(t,e,n){"use strict";n.r(e);var o=n(2),c={head(){return{title:this.doc.title,meta:[{hid:"description",name:"description",content:this.doc.description},{hid:"og:title",property:"og:title",content:this.doc.title},{hid:"og:description",property:"og:description",content:this.doc.description}]}},asyncData:t=>Object(o.a)((function*(){var e,{$content:n,params:o,error:c}=t;try{e=yield n(o.article||"index").fetch()}catch(t){c({statusCode:404,message:"Article not found"})}return{doc:e}}))()},r=(n(176),n(4)),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-wrap"},[e("h2",{staticClass:"py-1 title-1 text-center"},[this._v("\n\t\t"+this._s(this.doc.title)+"\n\t")]),this._v(" "),e("nuxt-content",{staticClass:"mt-2",attrs:{document:this.doc}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);