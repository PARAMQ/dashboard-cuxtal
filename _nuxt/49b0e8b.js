(window.webpackJsonp=window.webpackJsonp||[]).push([[23,76],{742:function(t,e,l){"use strict";l.r(e);l(116);var n={props:{total:{type:Number,default:0},listQuery:{type:Object},counters:{type:Array,default:function(){return[5,10,25,50,100]}}}},o=l(89),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns m-1 is-mobile"},[e("div",{staticClass:"column is-flex is-justify-content-flex-end"},[e("b-pagination",{attrs:{total:t.total,simple:!0,rounded:!1,order:"is-centered",size:"is-small","per-page":t.listQuery.limit,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:t.listQuery.page,callback:function(e){t.$set(t.listQuery,"page",e)},expression:"listQuery.page"}})],1),t._v(" "),e("div",{staticClass:"column is-flex is-justify-content-flex-end"},[e("b-dropdown",{attrs:{"append-to-body":"",position:"is-top-right","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(l){var n=l.active;return e("button",{staticClass:"button is-secondary is-small"},[e("span",[t._v("Por página: "+t._s(t.listQuery.limit))]),t._v(" "),e("b-icon",{attrs:{icon:n?"menu-up":"menu-down"}})],1)}}]),model:{value:t.listQuery.limit,callback:function(e){t.$set(t.listQuery,"limit",e)},expression:"listQuery.limit"}},[t._v(" "),t._l(t.counters,(function(l){return e("b-dropdown-item",{key:l,class:t.listQuery.limit===l?"has-text-info":"",attrs:{value:l,"aria-role":"listitem"}},[e("span",[t._v(t._s(l))])])}))],2)],1),t._v(" "),e("div",{staticClass:"column is-1 is-hidden-desktop"})])}),[],!1,null,null,null);e.default=component.exports},935:function(t,e,l){"use strict";l.r(e);l(101),l(377),l(206),l(236),l(116);var n={props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0},listQuery:{type:Object,default:null},isLoading:{type:Boolean,default:!1},viewMode:{type:String,default:"grid"},deleteLabel:{type:String,default:"Archivados"},activeLabel:{type:String,default:"Activos"},actionsEnabled:{type:Array,default:function(){return["update","cards"]}},onOpenDetails:{type:Function,default:function(t){return console.log(t)}},checkedRows:{type:Array,default:function(){return[]}}},data:function(){return{search:""}},computed:{slotPassed:function(){return!!this.$slots.filters||!!this.$slots.actions}},methods:{onChecked:function(t){this.$emit("checked",t),this.checkedRows=t}}},o=l(89),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",{staticClass:"subtitle is-6"},[e("strong",[t._v(t._s(t.total))]),t._v(" "+t._s(t.$attrs["list-text"]||"items")+"\n        ")])]),t._v(" "),null!=t.listQuery.is_active?e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons has-addons"},[e("b-button",{staticClass:"button",class:{"is-success":1===t.listQuery.is_active},attrs:{size:"is-small","icon-left":"check",disabled:t.isLoading},on:{click:function(e){t.listQuery.is_active=1}}},[t._v("\n            "+t._s(t.activeLabel)+"\n          ")]),t._v(" "),t._t("extraTab"),t._v(" "),e("b-button",{staticClass:"button",class:{"is-danger":0===t.listQuery.is_active},attrs:{size:"is-small","icon-left":"delete",disabled:t.isLoading},on:{click:function(e){t.listQuery.is_active=0}}},[t._v("\n            "+t._s(t.deleteLabel)+"\n          ")])],2)]):t._e(),t._v(" "),e("p",{staticClass:"level-item"},[t._t("new-actions")],2)]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"field has-addons"},[e("p",{staticClass:"control"},[e("b-input",{attrs:{type:"search",placeholder:"Buscar...",size:"is-small"},nativeOn:{change:function(e){t.listQuery.search=t.search}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("p",{staticClass:"control"},[e("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"magnify",disabled:t.isLoading}})],1)])]),t._v(" "),t.actionsEnabled.includes("update")?e("p",{staticClass:"level-item"},[e("a",{staticClass:"has-text-primary",attrs:{title:"Actualizar"},on:{click:function(e){return t.$emit("update")}}},[e("b-icon",{attrs:{icon:"autorenew"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("\n            Actualizar\n          ")])],1)]):t._e(),t._v(" "),t.actionsEnabled.includes("export")?e("p",{staticClass:"level-item"},[e("b-dropdown",{ref:"export",attrs:{"append-to-body":"","aria-role":"menu","trap-focus":""},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("a",{staticClass:"has-text-primary",attrs:{title:"Descargar reporte"},on:{click:function(e){return t.$emit("export")}}},[e("b-icon",{attrs:{icon:"download"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Descargar reporte")])],1)]},proxy:!0}],null,!1,1997274498)},[t._v(" "),t._t("export-actions")],2)],1):t._e(),t._v(" "),t.actionsEnabled.includes("filters")?e("p",{staticClass:"level-item"},[e("b-dropdown",{attrs:{position:"is-bottom-left","append-to-body":"","aria-role":"menu","trap-focus":""},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("a",{staticClass:"has-text-primary",attrs:{title:"Filtros"},on:{click:function(e){return t.$emit("filters")}}},[e("b-icon",{attrs:{icon:"filter"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Filtros")])],1)]},proxy:!0}],null,!1,1720412353)},[t._v(" "),e("b-dropdown-item",{attrs:{"aria-role":"menu-item",focusable:!1,custom:"",paddingless:""}},[e("div",{staticStyle:{width:"300px"}},[e("section",{staticClass:"card-content"},[t._t("filter-form")],2),t._v(" "),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item"},[e("b-button",{attrs:{"icon-left":"close",label:"Limpiar filtros",size:"is-small",type:"is-warning"},on:{click:function(e){return t.$emit("clearFilters")}}})],1)])])])],1)],1):t._e(),t._v(" "),t.actionsEnabled.includes("cards")?e("p",{staticClass:"level-item"},["grid"===t.viewMode?e("a",{staticClass:"has-text-primary",attrs:{title:"Vista de tabla"},on:{click:function(e){t.viewMode="table",t.onChecked([]),t.$emit("change-view","table")}}},[e("b-icon",{attrs:{icon:"table-large"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Vista de tabla")])],1):t._e(),t._v(" "),"table"===t.viewMode?e("a",{staticClass:"has-text-primary",attrs:{title:"Vista de tarjetas"},on:{click:function(e){t.viewMode="grid",t.onChecked([]),t.$emit("change-view","grid")}}},[e("b-icon",{attrs:{icon:"view-grid"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Vista de tarjetas")])],1):t._e()]):t._e(),t._v(" "),e("p",{staticClass:"level-item"},[t._t("extra-actions")],2),t._v(" "),e("p",{staticClass:"level-item"},[t.$attrs["create-text"]?e("b-button",{staticClass:"button",attrs:{tag:"button",type:"is-success",size:"is-small",outlined:""},on:{click:function(e){return t.$emit("create")}}},[e("b-icon",{attrs:{icon:"plus",size:"is-small"}}),e("span",[t._v(t._s(t.$attrs["create-text"]))])],1):t._e()],1),t._v(" "),e("p",{staticClass:"level item"})])]),t._v(" "),t.slotPassed?e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[t._t("filters")],2),t._v(" "),e("p",{staticClass:"level item"})]),t._v(" "),e("div",{staticClass:"level-right"},[t._t("actions")],2)]):t._e(),t._v(" "),t._t("toolbars"),t._v(" "),"table"===t.viewMode?e("b-table",t._b({attrs:{narrowed:"","sticky-header":"",checkable:"",striped:"","show-detail-icon":"","backend-filtering":"","backend-sorting":"","backend-pagination":"",loading:t.isLoading,data:t.data,"checked-rows":t.checkedRows},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},check:t.onChecked,"details-open":t.onOpenDetails},scopedSlots:t._u([{key:"detail",fn:function(e){return[t._t("detail",null,{row:e.row})]}}],null,!0)},"b-table",t.$attrs,!1),[t._t("default"),t._v(" "),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Cargando registros...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),e("p",[t._v("No se encontraron resultados…")])]],2)])],2):[e("b-loading",{attrs:{"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),t._v(" "),t._t("cardView")],t._v(" "),e("div",{staticClass:"columns mt-1 is-mobile"},[e("Pagination",t._b({attrs:{"list-query":t.listQuery,total:t.total}},"Pagination",t.$attrs,!1)),t._v(" "),e("div",{staticClass:"column"})],1)],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:l(742).default})}}]);