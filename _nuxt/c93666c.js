(window.webpackJsonp=window.webpackJsonp||[]).push([[46,47],{1261:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("a",{staticClass:"navbar-item is-expanded",attrs:{href:"/"}},[t("img",{attrs:{src:n(486),width:"auto",height:"auto"}})])}],r=(n(61),n(58),n(59),n(38),n(70),n(60),n(71),n(26)),c=n(152);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"NavBar",data:function(){return{isMenuNavBarActive:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({menuNavBarToggleIcon:function(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon:function(){return this.isAsideMobileExpanded?"backburger":"forwardburger"},menuToggleIcon:function(){return this.isAsideExpanded?"backburger":"forwardburger"},toggleTooltip:function(){return this.isAsideExpanded?"Collapse":"Expand"},darkModeToggleIcon:function(){return this.isDarkModeActive?"white-balance-sunny":"weather-night"}},Object(c.b)(["isNavBarVisible","isAsideExpanded","isAsideMobileExpanded","isAsideRightVisible","isDarkModeActive","userName","userFullName","hasUpdates"])),methods:{menuToggle:function(){this.$store.commit("asideStateToggle")},menuToggleMobile:function(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle:function(){this.isMenuNavBarActive=!this.isMenuNavBarActive},updatesToggle:function(){this.$store.commit("asideRightToggle")},darkModeToggle:function(){this.$store.commit("darkModeToggle")},logout:function(){this.$buefy.toast.open({message:"Cerrando sesión...",type:"is-danger",queue:!1}),this.$store.dispatch("modules/auth/logout").then((function(){window.location.reload()}))}}},v=d,m=n(89),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("nav",{directives:[{name:"show",rawName:"v-show",value:t.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[e("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),e("p",{staticClass:"navbar-item is-desktop-icon-only is-hidden-touch",staticStyle:{cursor:"pointer"},attrs:{title:t.toggleTooltip},on:{click:function(e){return e.preventDefault(),t.menuToggle.apply(null,arguments)}}},[e("b-icon",{attrs:{icon:t.menuToggleIcon}})],1),t._v(" "),e("p",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(e){return e.preventDefault(),t.menuToggleMobile.apply(null,arguments)}}},[e("b-icon",{attrs:{icon:t.menuToggleMobileIcon}})],1)]),t._v(" "),e("div",{staticClass:"navbar-brand is-right"}),t._v(" "),e("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":t.isMenuNavBarActive}},[e("div",{staticClass:"navbar-end"},[e("nav-bar-menu",{staticClass:"has-divider"},[e("div",{staticClass:"is-user-name"},[e("span",[t._v("Reportes")])]),t._v(" "),e("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/building","exact-active-class":"is-active"}},[e("b-icon",{attrs:{icon:"account","custom-size":"default"}}),t._v(" "),e("span",[t._v("General")])],1),t._v(" "),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/building","exact-active-class":"is-active"}},[e("b-icon",{attrs:{icon:"account","custom-size":"default"}}),t._v(" "),e("span",[t._v("Denuncias")])],1),t._v(" "),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/building","exact-active-class":"is-active"}},[e("b-icon",{attrs:{icon:"account","custom-size":"default"}}),t._v(" "),e("span",[t._v("Instituciones")])],1)],1)]),t._v(" "),e("nav-bar-menu",{staticClass:"has-divider"},[e("div",{staticClass:"is-user-name"},[e("span",[t._v("Recorridos")])]),t._v(" "),e("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/calendar","exact-active-class":"is-active"}},[e("b-icon",{attrs:{icon:"calendar-month-outline","custom-size":"default"}}),t._v(" "),e("span",[t._v("Planificación")])],1),t._v(" "),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/building","exact-active-class":"is-active"}},[e("b-icon",{attrs:{icon:"file-document-edit-outline","custom-size":"default"}}),t._v(" "),e("span",[t._v("Bitácoras")])],1),t._v(" "),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/building","exact-active-class":"is-active"}},[e("b-icon",{attrs:{icon:"map-marker-distance","custom-size":"default"}}),t._v(" "),e("span",[t._v("Recorridos")])],1)],1)]),t._v(" "),e("nav-bar-item",{staticClass:"m-1"},[e("a",{staticClass:"navbar-item has-text-danger",on:{click:t.logout}},[e("span",[t._v("Cerrar Sesión")])])])],1)])])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{NavBarMenu:n(938).default})},938:function(t,e,n){"use strict";n.r(e);var o={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon:function(){return this.isDropdownActive?"chevron-up":"chevron-down"}},mounted:function(){window.addEventListener("click",this.forceClose)},beforeDestroy:function(){window.removeEventListener("click",this.forceClose)},methods:{toggle:function(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose:function(t){this.$el.contains(t.target)||(this.isDropdownActive=!1)}}},r=n(89),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":t.isHoverable,"is-active":t.isDropdownActive},on:{click:t.toggle}},[e("a",{staticClass:"navbar-link is-arrowless"},[t._t("default"),t._v(" "),e("b-icon",{attrs:{icon:t.toggleDropdownIcon,"custom-size":"default"}})],2),t._v(" "),t._t("dropdown")],2)}),[],!1,null,null,null);e.default=component.exports}}]);