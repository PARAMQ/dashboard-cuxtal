(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5,17],{1258:function(e,t,n){"use strict";n.r(t);n(61),n(58),n(59),n(38),n(70),n(60),n(71);var o=n(26),c=n(376),r=n(152);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={name:"AsideMenu",props:{menu:{type:Array,default:function(){return[]}},menuBottom:{type:Array,default:function(){return[]}},isSecondary:{type:Boolean,default:!1},label:{type:String,default:null},icon:{type:String,default:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)(["isAsideVisible","isAsideExpanded","isAsideMobileExpanded"])),mounted:function(){this.ps=new c.a(this.$refs.menuContainer)},methods:{menuClick:function(e){this.$emit("menu-click",e)},psUpdate:function(){this.ps&&this.ps.update()},close:function(){this.$emit("close")}}},m=d,f=n(89),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left",class:{"is-expanded":e.isAsideExpanded||e.isSecondary,"is-secondary":e.isSecondary}},[t("aside-tools",{attrs:{"has-close":e.isSecondary,icon:e.icon},on:{close:e.close}},[e.isSecondary?e.label?t("span",[e._v(e._s(e.label))]):e._e():t("span",[[t("div",{staticClass:"columns is-mobile"},[t("div",{staticClass:"column"},[t("span",[t("img",{staticStyle:{width:"35px","padding-top":"10px"},attrs:{src:n(697),alt:"ParamQ logo"}})])]),e._v(" "),e.isAsideExpanded||e.isAsideMobileExpanded?t("div",{staticClass:"column is-9"},[t("span",[e._v("Panel de control")])]):e._e()])]],2)]),e._v(" "),t("div",{ref:"menuContainer",staticClass:"menu-container",on:{mouseenter:e.psUpdate}},[t("div",{staticClass:"menu is-menu-main"},[e._l(e.menu,(function(n,o){return["string"==typeof n?t("p",{key:o,staticClass:"menu-label"},[e._v("\n          "+e._s(n)+"\n        ")]):t("aside-menu-list",{key:o,attrs:{"is-secondary":e.isSecondary,menu:n},on:{"menu-click":e.menuClick}})]}))],2)]),e._v(" "),t("div",{staticClass:"menu is-menu-bottom"},[t("aside-menu-list",{attrs:{menu:e.menuBottom},on:{"menu-click":e.menuClick}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AsideTools:n(936).default,AsideMenuList:n(743).default})},697:function(e,t,n){e.exports=n.p+"img/logo.5f07e1d.png"},743:function(e,t,n){"use strict";n.r(t);var o={name:"AsideMenuList",props:{isSubmenuList:{type:Boolean,default:!1},isSecondary:{type:Boolean,default:!1},menu:{type:Array,default:function(){return[]}}},methods:{menuClick:function(e){this.$emit("menu-click",e)}}},c=n(89),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("ul",{class:{"menu-list":!e.isSubmenuList,"ml-4":e.isSubmenuList}},e._l(e.menu,(function(n,o){return t("aside-menu-item",{key:o,attrs:{"is-secondary":e.isSecondary,item:n},on:{"menu-click":e.menuClick}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AsideMenuItem:n(787).default})},787:function(e,t,n){"use strict";n.r(t);n(61),n(58),n(59),n(38),n(70),n(60),n(71);var o=n(26),c=n(152);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={name:"AsideMenuItem",props:{item:{type:Object,default:null},isSecondary:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({componentIs:function(){return this.item.to?"nuxt-link":"a"},hasSubmenuIcon:function(){return this.hasDropdown||this.item.menuSecondary},hasDropdown:function(){return!!this.item.menu},submenuIcon:function(){return this.item.menuSecondary?"chevron-right":this.isDropdownActive?"minus":"plus"},itemTo:function(){return this.item.to?this.item.to:null},itemHref:function(){return this.item.href?this.item.href:null},componentTitle:function(){return!this.isAsideExpanded&&this.item.label?this.item.label:null},componentClass:function(){var e={"has-icon":!!this.item.icon,"has-submenu-icon":this.hasSubmenuIcon};return this.item.state&&(e["is-state-"+this.item.state]=!0,e["is-hoverable"]=!0),this.asideActiveForcedKey&&this.item.menuSecondaryKey&&this.asideActiveForcedKey===this.item.menuSecondaryKey&&(e["is-active"]=!0),e},componentActiveClass:function(){return this.asideActiveForcedKey?null:"is-active"}},Object(c.b)(["asideActiveForcedKey","isAsideExpanded"])),watch:{isAsideExpanded:function(e){e||(this.isDropdownActive=!1)}},methods:{menuClick:function(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive,this.isSecondary||this.isAsideMobileExpanded||this.$store.commit("asideStateToggle",!0))}}},d=l,m=n(89),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("li",{class:{"is-active":e.isDropdownActive}},[t(e.componentIs,{tag:"component",class:e.componentClass,attrs:{to:e.itemTo,href:e.itemHref,title:e.componentTitle,"exact-active-class":e.componentActiveClass},on:{click:e.menuClick}},[e.item.icon?t("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default",pack:"uil"}}):e._e(),e._v(" "),e.item.label?t("span",{class:{"menu-item-label":!!e.item.icon}},[e._v(e._s(e.item.label))]):e._e()],1),e._v(" "),e.hasDropdown?t("aside-menu-list",{attrs:{menu:e.item.menu,"is-submenu-list":!0}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AsideMenuList:n(743).default})},936:function(e,t,n){"use strict";n.r(t);var o={name:"AsideTools",props:{icon:{type:String,default:null},label:{type:String,default:null},hasClose:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("close")}}},c=n(89),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"aside-tools",class:{"has-icon":!!e.icon}},[t("div",{staticClass:"aside-tools-label"},[e.icon?t("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v(" "),e._t("default")],2),e._v(" "),e.hasClose?t("a",{staticClass:"aside-close",on:{click:e.close}},[t("b-icon",{attrs:{icon:"close","custom-size":"default"}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);