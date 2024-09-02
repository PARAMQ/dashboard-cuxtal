(window.webpackJsonp=window.webpackJsonp||[]).push([[128,24,79],{1269:function(t,e,n){"use strict";n.r(e);n(208);var l=n(5),r=(n(266),n(34),n(397)),o=n.n(r),c={name:"ClientDetail",fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:t.$store.commit("setTitleStack",["Clientes","Detalle"]);case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{id:null,isClientModalActive:!1,isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isEdit:!1,activeStep:0,activeClient:{person:{},family:[{}]}}},computed:{getFullName:function(){return"".concat(this.form.nombre_persona," ").concat(this.form.apellido_persona)},titleStack:function(){return["Admin","Clientes",this.isEdit?this.getFullName:"Nuevo cliente"]},heroTitle:function(){return this.isEdit?this.getFullName:"Crear Cliente"},heroRouterLinkTo:function(){return this.isEdit?"/client":"/"},heroRouterLinkLabel:function(){return this.isEdit?"Nuevo cliente":"Dashboard"},formCardTitle:function(){return this.isEdit?"Editar Cliente":"Nuevo Cliente"}},methods:{nextStep:function(){this.activeStep=this.activeStep+1},previousStep:function(){this.activeStep-=this.activeStep},createOrEditClient:function(t){this.activeClient=t||{person:{},family:[{}]},this.isClientModalActive=!0},saveForm:function(form){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("buttonLoadingToggle"),e.next=4,t.$store.dispatch("modules/clients/createOrUpdate",form);case 4:t.$buefy.snackbar.open({message:"Cliente guardado",type:"is-success",queue:!1}),t.$router.push("/clients"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,t.$store.commit("buttonLoadingToggle"),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})))()},cancelForm:function(){},getData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$route.params.id){e.next=15;break}return t.$store.commit("loadingToggle"),e.prev=2,e.next=5,t.$store.dispatch("modules/clients/getDetailsById",t.$route.params.id);case 5:(n=e.sent)?(t.isEdit=!0,t.form=n):t.$router.push({name:"clients"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.$buefy.toast.open({message:"Error: ".concat(e.t0.message),type:"is-danger",queue:!1});case 12:return e.prev=12,t.$store.commit("loadingToggle"),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))()},getClearFormObject:function(){return{}},input:function(t){this.createdReadable=o()(t).format("MMM D, YYYY")},submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Demo only",queue:!1})}),500)}},head:function(){return{title:"Client — ParamQ"}}},d=n(76),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("ClientModal",{attrs:{"is-active":t.isClientModalActive,"active-client":t.activeClient},on:{refresh:function(e){return t.getData()},close:function(e){t.isClientModalActive=!1}}}),t._v(" "),e("section",{staticClass:"container m-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"title"},[t._v("\n          Cliente #"+t._s(t.form.number)+"\n        ")]),t._v(" "),e("client-card",{attrs:{item:t.form},on:{edit:t.createOrEditClient}}),t._v(" "),e("div",{staticClass:"content"},[e("client-details",{attrs:{client:t.form}})],1),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"content"},[t.form.id?e("base-table",{attrs:{"list-text":"Familiares","sticky-header":"",narrowed:"",striped:"","view-mode":"table","actions-enabled":["update"],total:t.form.family.length,"list-query":{},data:t.form.family}},[e("b-table-column",{attrs:{field:"id","cell-class":"has-no-head-mobile is-image-cell"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("figure",{staticClass:"image is-32x32"},[e("img",{staticClass:"is-rounded",attrs:{src:"https://avatars.dicebear.com/v2/initials/".concat(t.row.first_name,"-").concat(t.row.last_name,".svg")}})])]}}],null,!1,2457534349)}),t._v(" "),e("b-table-column",{attrs:{sortable:"",field:"name",label:"Nombre"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.first_name)+"\n            ")]}}],null,!1,2648485247)}),t._v(" "),e("b-table-column",{attrs:{sortable:"",field:"last_name",label:"Apellido"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.last_name)+"\n            ")]}}],null,!1,658542671)}),t._v(" "),e("b-table-column",{attrs:{sortable:"",field:"relationship",label:"Parentezco"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.relationship)+"\n            ")]}}],null,!1,1154853273)}),t._v(" "),e("b-table-column",{attrs:{sortable:"",field:"birthday",label:"Cumpleaños"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t._f("birthdate")(e.row.birthday))+"\n            ")]}}],null,!1,2772740492)}),t._v(" "),e("b-table-column",{attrs:{"custom-key":"actions",centered:"",label:"Acciones"}},[e("b-icon",{attrs:{icon:"dots-vertical"}})],1)],1):t._e()],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTable:n(948).default})},752:function(t,e,n){"use strict";n.r(e);n(107);var l={props:{total:{type:Number,default:0},listQuery:{type:Object},counters:{type:Array,default:function(){return[5,10,25,50,100]}}}},r=n(76),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns m-1 is-mobile"},[e("div",{staticClass:"column is-flex is-justify-content-flex-end"},[e("b-pagination",{attrs:{total:t.total,simple:!0,rounded:!1,order:"is-centered",size:"is-small","per-page":t.listQuery.limit,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:t.listQuery.page,callback:function(e){t.$set(t.listQuery,"page",e)},expression:"listQuery.page"}})],1),t._v(" "),e("div",{staticClass:"column is-flex is-justify-content-flex-end"},[e("b-dropdown",{attrs:{"append-to-body":"",position:"is-top-right","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(n){var l=n.active;return e("button",{staticClass:"button is-secondary is-small"},[e("span",[t._v("Por página: "+t._s(t.listQuery.limit))]),t._v(" "),e("b-icon",{attrs:{icon:l?"menu-up":"menu-down"}})],1)}}]),model:{value:t.listQuery.limit,callback:function(e){t.$set(t.listQuery,"limit",e)},expression:"listQuery.limit"}},[t._v(" "),t._l(t.counters,(function(n){return e("b-dropdown-item",{key:n,class:t.listQuery.limit===n?"has-text-info":"",attrs:{value:n,"aria-role":"listitem"}},[e("span",[t._v(t._s(n))])])}))],2)],1),t._v(" "),e("div",{staticClass:"column is-1 is-hidden-desktop"})])}),[],!1,null,null,null);e.default=component.exports},948:function(t,e,n){"use strict";n.r(e);n(96),n(396),n(207),n(238),n(107);var l={props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0},listQuery:{type:Object,default:null},isLoading:{type:Boolean,default:!1},viewMode:{type:String,default:"grid"},deleteLabel:{type:String,default:"Archivados"},activeLabel:{type:String,default:"Activos"},actionsEnabled:{type:Array,default:function(){return["update","cards"]}},onOpenDetails:{type:Function,default:function(t){return console.log(t)}},checkedRows:{type:Array,default:function(){return[]}}},data:function(){return{search:""}},computed:{slotPassed:function(){return!!this.$slots.filters||!!this.$slots.actions}},methods:{onChecked:function(t){this.$emit("checked",t),this.checkedRows=t}}},r=n(76),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",{staticClass:"subtitle is-6"},[e("strong",[t._v(t._s(t.total))]),t._v(" "+t._s(t.$attrs["list-text"]||"items")+"\n        ")])]),t._v(" "),null!=t.listQuery.is_active?e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons has-addons"},[e("b-button",{staticClass:"button",class:{"is-success":1===t.listQuery.is_active},attrs:{size:"is-small","icon-left":"check",disabled:t.isLoading},on:{click:function(e){t.listQuery.is_active=1}}},[t._v("\n            "+t._s(t.activeLabel)+"\n          ")]),t._v(" "),t._t("extraTab"),t._v(" "),e("b-button",{staticClass:"button",class:{"is-danger":0===t.listQuery.is_active},attrs:{size:"is-small","icon-left":"delete",disabled:t.isLoading},on:{click:function(e){t.listQuery.is_active=0}}},[t._v("\n            "+t._s(t.deleteLabel)+"\n          ")])],2)]):t._e(),t._v(" "),e("p",{staticClass:"level-item"},[t._t("new-actions")],2)]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"field has-addons"},[e("p",{staticClass:"control"},[e("b-input",{attrs:{type:"search",placeholder:"Buscar...",size:"is-small"},nativeOn:{change:function(e){t.listQuery.search=t.search}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("p",{staticClass:"control"},[e("b-button",{attrs:{type:"is-primary",size:"is-small","icon-left":"magnify",disabled:t.isLoading}})],1)])]),t._v(" "),t.actionsEnabled.includes("update")?e("p",{staticClass:"level-item"},[e("a",{staticClass:"has-text-primary",attrs:{title:"Actualizar"},on:{click:function(e){return t.$emit("update")}}},[e("b-icon",{attrs:{icon:"autorenew"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("\n            Actualizar\n          ")])],1)]):t._e(),t._v(" "),t.actionsEnabled.includes("export")?e("p",{staticClass:"level-item"},[e("b-dropdown",{ref:"export",attrs:{"append-to-body":"","aria-role":"menu","trap-focus":""},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("a",{staticClass:"has-text-primary",attrs:{title:"Descargar reporte"},on:{click:function(e){return t.$emit("export")}}},[e("b-icon",{attrs:{icon:"download"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Descargar reporte")])],1)]},proxy:!0}],null,!1,1997274498)},[t._v(" "),t._t("export-actions")],2)],1):t._e(),t._v(" "),t.actionsEnabled.includes("filters")?e("p",{staticClass:"level-item"},[e("b-dropdown",{attrs:{position:"is-bottom-left","append-to-body":"","aria-role":"menu","trap-focus":""},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("a",{staticClass:"has-text-primary",attrs:{title:"Filtros"},on:{click:function(e){return t.$emit("filters")}}},[e("b-icon",{attrs:{icon:"filter"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Filtros")])],1)]},proxy:!0}],null,!1,1720412353)},[t._v(" "),e("b-dropdown-item",{attrs:{"aria-role":"menu-item",focusable:!1,custom:"",paddingless:""}},[e("div",{staticStyle:{width:"300px"}},[e("section",{staticClass:"card-content"},[t._t("filter-form")],2),t._v(" "),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item"},[e("b-button",{attrs:{"icon-left":"close",label:"Limpiar filtros",size:"is-small",type:"is-warning"},on:{click:function(e){return t.$emit("clearFilters")}}})],1)])])])],1)],1):t._e(),t._v(" "),t.actionsEnabled.includes("cards")?e("p",{staticClass:"level-item"},["grid"===t.viewMode?e("a",{staticClass:"has-text-primary",attrs:{title:"Vista de tabla"},on:{click:function(e){t.viewMode="table",t.onChecked([]),t.$emit("change-view","table")}}},[e("b-icon",{attrs:{icon:"table-large"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Vista de tabla")])],1):t._e(),t._v(" "),"table"===t.viewMode?e("a",{staticClass:"has-text-primary",attrs:{title:"Vista de tarjetas"},on:{click:function(e){t.viewMode="grid",t.onChecked([]),t.$emit("change-view","grid")}}},[e("b-icon",{attrs:{icon:"view-grid"}}),t._v(" "),e("span",{staticClass:"is-hidden-desktop"},[t._v("Vista de tarjetas")])],1):t._e()]):t._e(),t._v(" "),e("p",{staticClass:"level-item"},[t._t("extra-actions")],2),t._v(" "),e("p",{staticClass:"level-item"},[t.$attrs["create-text"]?e("b-button",{staticClass:"button",attrs:{tag:"button",type:"is-success",size:"is-small",outlined:""},on:{click:function(e){return t.$emit("create")}}},[e("b-icon",{attrs:{icon:"plus",size:"is-small"}}),e("span",[t._v(t._s(t.$attrs["create-text"]))])],1):t._e()],1),t._v(" "),e("p",{staticClass:"level item"})])]),t._v(" "),t.slotPassed?e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[t._t("filters")],2),t._v(" "),e("p",{staticClass:"level item"})]),t._v(" "),e("div",{staticClass:"level-right"},[t._t("actions")],2)]):t._e(),t._v(" "),t._t("toolbars"),t._v(" "),"table"===t.viewMode?e("b-table",t._b({attrs:{narrowed:"","sticky-header":"",checkable:"",striped:"","show-detail-icon":"","backend-filtering":"","backend-sorting":"","backend-pagination":"",loading:t.isLoading,data:t.data,"checked-rows":t.checkedRows},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},check:t.onChecked,"details-open":t.onOpenDetails},scopedSlots:t._u([{key:"detail",fn:function(e){return[t._t("detail",null,{row:e.row})]}}],null,!0)},"b-table",t.$attrs,!1),[t._t("default"),t._v(" "),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Cargando registros...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),e("p",[t._v("No se encontraron resultados…")])]],2)])],2):[e("b-loading",{attrs:{"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),t._v(" "),t._t("cardView")],t._v(" "),e("div",{staticClass:"columns mt-1 is-mobile"},[e("Pagination",t._b({attrs:{"list-query":t.listQuery,total:t.total}},"Pagination",t.$attrs,!1)),t._v(" "),e("div",{staticClass:"column"})],1)],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(752).default})}}]);