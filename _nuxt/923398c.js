(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1279:function(o,t,e){"use strict";e.r(t);e(265);var l={methods:{openPopupWindow:function(o){return window.open(o,"popup","width=800,height=600"),!1},openModal:function(o,t){var e=this;this.$nuxt.$route.path!==o?(this.$router.push(o),setTimeout((function(){e.$store.commit(t,!0)}),300)):this.$store.commit(t,!0)}}},n=e(89),component=Object(n.a)(l,(function(){var o=this,t=o._self._c;return t("div",[t("vue-fab",{attrs:{"main-btn-color":"#61646D",size:"big",icon:"add","scroll-auto-hide":!1,"global-options":{spacing:50,delay:.1},"fab-item-animate":"alive"}},[t("fab-item",{attrs:{idx:0,"title-color":"#FFF","title-bg-color":"#61646D",icon:"email",title:"Nuevo envío",color:"#AFABA7"},on:{clickItem:function(t){return o.openModal("/messages/","modules/messages/toogleNew")}}}),o._v(" "),t("fab-item",{attrs:{idx:1,"title-color":"#FFF","title-bg-color":"#61646D",icon:"inventory_2",title:"Nuevo producto",color:"#DA5D46"},on:{clickItem:function(t){return o.openModal("/products/","modules/products/toogleModal")}}}),o._v(" "),t("fab-item",{attrs:{idx:2,"title-color":"#FFF","title-bg-color":"#61646D",icon:"apartment",title:"Nueva aseguradora",color:"#DA8328"},on:{clickItem:function(t){return o.openModal("/insurances/","modules/insurance/toogleModal")}}}),o._v(" "),t("fab-item",{attrs:{idx:3,"title-color":"#FFF","title-bg-color":"#61646D",icon:"assignment_ind",title:"Nuevo vendedor",color:"#7FA631"},on:{clickItem:function(t){return o.openModal("/employees/","modules/employees/toogleModal")}}}),o._v(" "),t("fab-item",{attrs:{idx:4,"title-color":"#FFF","title-bg-color":"#61646D",icon:"person",title:"Nuevo cliente",color:"#318DA6"},on:{clickItem:function(t){return o.openModal("/clients/","modules/clients/toogleModal")}}}),o._v(" "),t("fab-item",{attrs:{idx:5,"title-color":"#FFF","title-bg-color":"#61646D",icon:"add_moderator",title:"Nueva póliza",color:"#E6B51E"},on:{clickItem:function(t){return o.$router.push("/policy/edit/")}}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);