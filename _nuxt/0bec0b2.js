(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1213:function(t,n,e){"use strict";e.r(n);e(265);var o={name:"Login",data:function(){return{isLoading:!1,isSuccess:!1,form:{email:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.form.email=null,t.isLoading=!1,t.isSuccess=!0,t.$buefy.snackbar.open({message:"Link sent",duration:1e3,queue:!1})}),750)}},head:function(){return{title:"Password Recovery — ParamQ"}}},l=e(89),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("card-component",{attrs:{title:"Password Recovery",icon:"lock-open","has-card-header-background":!0,"has-button-slot":!0}},[n("nuxt-link",{staticClass:"button is-small",attrs:{slot:"button",to:"/"},slot:"button"},[t._v("\n    Dashboard\n  ")]),t._v(" "),n("form",{attrs:{method:"POST"},on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[n("b-field",{attrs:{label:"E-mail Address",message:"E-mail used for registration"}},[n("b-input",{attrs:{type:"email",name:"email",required:"",autofocus:""},model:{value:t.form.email,callback:function(n){t.$set(t.form,"email",n)},expression:"form.email"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{grouped:""}},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-black",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n          Send Reset Link\n        ")])]),t._v(" "),n("div",{staticClass:"control"},[n("nuxt-link",{staticClass:"button is-black is-outlined",attrs:{to:"/full-page/login"}},[t._v("\n          Back\n        ")])],1)])],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CardComponent:e(496).default})}}]);