(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{734:function(t,e,l){"use strict";l.r(e);l(116);var n={props:{total:{type:Number,default:0},listQuery:{type:Object},counters:{type:Array,default:function(){return[5,10,25,50,100]}}}},r=l(89),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns m-1 is-mobile"},[e("div",{staticClass:"column is-flex is-justify-content-flex-end"},[e("b-pagination",{attrs:{total:t.total,simple:!0,rounded:!1,order:"is-centered",size:"is-small","per-page":t.listQuery.limit,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:t.listQuery.page,callback:function(e){t.$set(t.listQuery,"page",e)},expression:"listQuery.page"}})],1),t._v(" "),e("div",{staticClass:"column is-flex is-justify-content-flex-end"},[e("b-dropdown",{attrs:{"append-to-body":"",position:"is-top-right","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(l){var n=l.active;return e("button",{staticClass:"button is-secondary is-small"},[e("span",[t._v("Por página: "+t._s(t.listQuery.limit))]),t._v(" "),e("b-icon",{attrs:{icon:n?"menu-up":"menu-down"}})],1)}}]),model:{value:t.listQuery.limit,callback:function(e){t.$set(t.listQuery,"limit",e)},expression:"listQuery.limit"}},[t._v(" "),t._l(t.counters,(function(l){return e("b-dropdown-item",{key:l,class:t.listQuery.limit===l?"has-text-info":"",attrs:{value:l,"aria-role":"listitem"}},[e("span",[t._v(t._s(l))])])}))],2)],1),t._v(" "),e("div",{staticClass:"column is-1 is-hidden-desktop"})])}),[],!1,null,null,null);e.default=component.exports}}]);