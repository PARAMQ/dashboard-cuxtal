(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1260:function(t,e,r){"use strict";r.r(e);r(61),r(58),r(59),r(38),r(70),r(60),r(71);var n=r(26),o=r(152);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"HeroBarMain",data:function(){return{lastLoginTimeString:"hace 12 minutos",lastLoginIpString:"192.168.1.1"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["userName","userAvatar"]))},v=l,_=r(89),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero is-hero-bar is-main-hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item is-hero-avatar-item"},[e("div",{staticClass:"image is-user-avatar"},[e("img",{attrs:{src:t.userAvatar}})])]),t._v(" "),e("div",{staticClass:"level-item is-hero-content-item"},[e("div",[e("h1",{staticClass:"title is-spaced"},[t._v("\n              Bienvenido, "),e("b",[t._v(t._s(t.userName))]),t._v("!\n            ")]),t._v(" "),e("h3",{staticClass:"subtitle"},[t._v("\n              Último inicio de sesión "),e("b",[t._v(t._s(t.lastLoginTimeString))]),t._v(" desde "),e("b",[t._v(t._s(t.lastLoginIpString))])]),t._v(" "),t._m(0)])])]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"button is-light",attrs:{to:"/profile",title:"Profile"}},[e("b-icon",{attrs:{icon:"account","custom-size":"default"}}),t._v(" "),e("span",[t._v("Mi Cuenta")])],1)],1)])])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("Tienes "),e("b",[t._v("6 pendientes")]),t._v(" para hoy "),e("b",[t._v("84 nuevos clientes")])])}],!1,null,null,null);e.default=component.exports}}]);