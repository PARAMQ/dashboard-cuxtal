(window.webpackJsonp=window.webpackJsonp||[]).push([[114,62],{1069:function(e,t,n){"use strict";n(816)},1070:function(e,t,n){var r=n(166),o=n(494),c=n(679),l=r((function(i){return i[1]})),d=o(c);l.push([e.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),l.locals={},e.exports=l},1236:function(e,t,n){"use strict";n.r(t);n(58),n(188);var r=n(5),o=(n(34),{name:"Zones",data:function(){return{selectZone:!1,isActive:!1,zonas:[],zone:{},hasEdit:!1,params:{_t:Date.now()}}},created:function(){this.getData()},mounted:function(){this.getData()},methods:{viewZone:function(e){this.zone=e,this.selectZone=!0},cancelEdit:function(){this.zone={},this.selectZone=!1,this.hasEdit=!1},saveEdit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/operativeZones/createOrUpdateZone",e.zone);case 4:e.zone={},e.selectZone=!1,e.hasEdit=!1,e.$buefy.toast.open({message:"Zona guardada!",type:"is-success"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},deleteZone:function(e){var t=this,n={idoperative_zones:e.idoperative_zones};this.$swal({title:"¿Deseas borrar esta zona?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isConfirmed){e.next=13;break}return e.prev=1,e.next=4,t.$store.dispatch("modules/operativeZones/deleteZone",n);case 4:t.getData(),t.zone={},t.selectZone=!1,t.$buefy.toast.open({message:"Zona eliminada!",type:"is-success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())},edit:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.zonas=[],t.next=4,e.$store.dispatch("modules/operativeZones/getZones");case 4:n=t.sent,e.zonas=n,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}}),c=o,l=(n(1069),n(89)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero is-cuxtal"},[t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"card p-2"},[t("div",{staticClass:"card-content"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"}),e._v(" "),t("div",{staticClass:"level-right"},[t("p",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:function(t){e.isActive=!0}}},[e._v("\n                Nueva zona operativa\n              ")])],1)])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content scroll"},e._l(e.zonas,(function(n){return t("div",{key:n.idoperative_zones,staticClass:"container"},[t("div",{staticClass:"card",on:{click:function(t){return e.viewZone(n)}}},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"account","custom-size":"default"}}),e._v("\n                              "+e._s(n.description)+"\n                            ")],1)])])])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[e.selectZone&&!e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.zone.idoperative_zones)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-info is-light","icon-right":"pencil-outline"},on:{click:e.edit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-danger is-light","icon-right":"delete"},on:{click:function(t){return e.deleteZone(e.zone)}}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("p",{staticClass:"is-size-2"},[e._v("\n                  Descripción:\n                ")]),e._v(" "),t("p",{staticClass:"is-size-3"},[e._v("\n                  "+e._s(e.zone.description)+"\n                ")])])]):e.selectZone&&e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.zone.idoperative_zones)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:e.cancelEdit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.saveEdit}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Nombre"}},[t("b-input",{attrs:{name:"Nombre de la zona",type:"text",required:""},model:{value:e.zone.description,callback:function(t){e.$set(e.zone,"description",t)},expression:"zone.description"}})],1)],1)])])]):t("div",{staticClass:"card"},[e._m(0)])])])])])]),e._v(" "),t("new-op-zone",{attrs:{"active-modal":e.isActive},on:{close:function(t){e.isActive=!1},create:e.updateView}})],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-content"},[t("h1",{staticClass:"is-size-3"},[e._v("\n                  Selecciona una zona operativa\n                ")]),e._v(" "),t("p",{staticClass:"is-size-5"},[e._v("\n                  Si deseas ver la información de una zona operativa haz click\n                  sobre su tarjeta\n                ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NewOpZone:n(923).default})},679:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},816:function(e,t,n){var content=n(1070);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(167).default)("aa46ac94",content,!0,{sourceMap:!1})},923:function(e,t,n){"use strict";n.r(t);n(58),n(188);var r=n(5),o=(n(34),{name:"NewOpZone",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{}}},methods:{createZone:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/operativeZones/createOrUpdateZone",e.form);case 4:e.form={},e.isLoading=!1,e.$buefy.toast.open({message:"Zona guardada!",type:"is-success"}),e.$emit("create"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),c=n(89),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nueva zona operativa\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[t("b-input",{attrs:{name:"Nombre de indentificación",type:"text",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createZone}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);