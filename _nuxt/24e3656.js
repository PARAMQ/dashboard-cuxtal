(window.webpackJsonp=window.webpackJsonp||[]).push([[18,19],{744:function(t,e,n){"use strict";n.r(e);var l={name:"AsideUpdatesItem",props:{icon:{type:String,default:null},status:{type:String,default:"is-info"},ago:{type:String,default:null}}},c=n(89),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("nav",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[t.icon?e("span",{staticClass:"tag is-small",class:t.status},[e("b-icon",{attrs:{icon:t.icon,size:"is-small"}})],1):t._e()]),t._v(" "),t.ago?e("div",{staticClass:"level-item"},[e("small",[t._v(t._s(t.ago))])]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},937:function(t,e,n){"use strict";n.r(e);var l={name:"AsideUpdates",data:function(){return{items:[]}},mounted:function(){this.getData()},methods:{getData:function(){}}},c=n(89),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",t._l(t.items,(function(n){return e("aside-updates-item",{key:n.id,attrs:{status:n.status,icon:n.icon,ago:n.ago}},[e("p",[t._v(t._s(n.text))])])})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideUpdatesItem:n(744).default})}}]);