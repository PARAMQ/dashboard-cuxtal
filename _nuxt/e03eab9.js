(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1210:function(t,e,n){"use strict";n.r(e);n(265);var o={name:"Login",components:{CardComponent:n(695).a},data:function(){return{isLoading:!1,form:{email:null,password:null,remember:!1}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$router.push("/")}),750)}},head:function(){return{title:"Login — Admin Null Nuxt.js Bulma"}}},l=n(89),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("card-component",{attrs:{title:"Login",icon:"lock","has-card-header-background":!0,"has-button-slot":!0}},[e("nuxt-link",{staticClass:"button is-small",attrs:{slot:"button",to:"/"},slot:"button"},[t._v("\n    Dashboard\n  ")]),t._v(" "),e("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-field",{attrs:{label:"E-mail Address"}},[e("b-input",{attrs:{name:"email",type:"email",required:"",autofocus:""}})],1),t._v(" "),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password",name:"password",required:""}})],1),t._v(" "),e("b-field",[e("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"}},[t._v("\n        Remember me\n      ")])],1),t._v(" "),e("hr"),t._v(" "),e("b-field",{attrs:{grouped:""}},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-black",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n          Login\n        ")])]),t._v(" "),e("div",{staticClass:"control"},[e("nuxt-link",{staticClass:"button is-outlined is-black",attrs:{to:"/full-page/password-recovery"}},[t._v("\n          Forgot Password?\n        ")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardComponent:n(496).default})},695:function(t,e,n){"use strict";var o=n(390),l={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},hasTitleSlot:{type:Boolean,default:!1},hasButtonSlot:{type:Boolean,default:!1},hasFooterSlot:{type:Boolean,default:!1},hasCardHeaderBackground:{type:Boolean,default:!1},isScrollable:{type:Boolean,default:!1}},mounted:function(){this.isScrollable&&(this.ps=new o.a(this.$refs.cardContent),this.$emit("ps-ready",this.ps))},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},r=n(89),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:{"has-height-medium":t.isScrollable,"has-card-header-background":t.hasCardHeaderBackground}},[t.title||t.hasTitleSlot?e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t.icon?e("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v(" "),t.hasTitleSlot?t._t("title"):t.title?e("span",[t._v(t._s(t.title))]):t._e()],2),t._v(" "),t.hasButtonSlot?t._t("button"):t.headerIcon?e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick.apply(null,arguments)}}},[e("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()],2):t._e(),t._v(" "),t._t("toolbar"),t._v(" "),e("div",{ref:"cardContent",staticClass:"card-content"},[t._t("default")],2),t._v(" "),t.hasFooterSlot?e("footer",{staticClass:"card-footer"},[t._t("footer")],2):t._e()],2)}),[],!1,null,null,null);e.a=component.exports}}]);