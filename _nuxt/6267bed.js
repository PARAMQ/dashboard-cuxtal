(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{933:function(o,e,t){"use strict";t.r(e);var n={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon:function(){return this.isDropdownActive?"chevron-up":"chevron-down"}},mounted:function(){window.addEventListener("click",this.forceClose)},beforeDestroy:function(){window.removeEventListener("click",this.forceClose)},methods:{toggle:function(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose:function(o){this.$el.contains(o.target)||(this.isDropdownActive=!1)}}},r=t(89),component=Object(r.a)(n,(function(){var o=this,e=o._self._c;return e("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":o.isHoverable,"is-active":o.isDropdownActive},on:{click:o.toggle}},[e("a",{staticClass:"navbar-link is-arrowless"},[o._t("default"),o._v(" "),e("b-icon",{attrs:{icon:o.toggleDropdownIcon,"custom-size":"default"}})],2),o._v(" "),o._t("dropdown")],2)}),[],!1,null,null,null);e.default=component.exports}}]);