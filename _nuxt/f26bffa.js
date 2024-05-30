(window.webpackJsonp=window.webpackJsonp||[]).push([[32,47],{709:function(t,e,n){"use strict";n.r(e);var o={name:"ModalBox",props:{title:{type:String,default:"Confirmación de acción"},isFullpage:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}},l=n(89),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{active:t.isModalActive,"full-screen":t.isFullpage,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[e("b",[t._v(" "+t._s(t.title))])])]),t._v(" "),e("section",{staticClass:"modal-card-body"},[t._t("default",(function(){return[e("p",[t._v("\n          Se borrar permanentemente el registro "),e("b",[t._v(t._s(t.trashObjectName))])]),t._v(" "),e("p",[t._v("Esta acción es irreversible.")])]}))],2),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("\n        Cancelar\n      ")]),t._v(" "),e("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("\n        Eliminar\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},783:function(t,e,n){"use strict";n.r(e);n(128);var o=n(156),l=n.n(o),c={name:"ClientsTableSample",components:{ModalBox:n(709).default},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){var t=this;this.dataUrl&&(this.isLoading=!0,l.a.get(this.dataUrl).then((function(e){t.isLoading=!1,e.data&&e.data.data&&(e.data.data.length>t.perPage&&(t.paginated=!0),t.clients=e.data.data)})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger"})})))},methods:{trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},r=n(89),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),t._v(" "),e("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,paginated:t.paginated,"per-page":t.perPage,striped:!0,hoverable:!0,"default-sort":"name",data:t.clients},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}}},[e("b-table-column",{attrs:{"cell-class":"has-no-head-mobile is-image-cell"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{staticClass:"image"},[e("img",{staticClass:"is-rounded",attrs:{src:t.row.avatar}})])]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"Name",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.name)+"\n    ")]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"Company",field:"company",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.company)+"\n    ")]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"City",field:"city",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.city)+"\n    ")]}}])}),t._v(" "),e("b-table-column",{attrs:{"cell-class":"is-progress-col",label:"Progress",field:"progress",sortable:""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:n.row.progress}},[t._v("\n        "+t._s(n.row.progress)+"\n      ")])]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"Created"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:n.row.created}},[t._v(t._s(n.row.created))])]}}])}),t._v(" "),e("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"buttons is-right"},[e("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:n.row.id}}}},[e("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),t._v(" "),e("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.trashModal(n.row)}}},[e("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),t._v(" "),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Fetching data...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Nothing's here…")])]],2)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ModalBox:n(709).default})}}]);