(window.webpackJsonp=window.webpackJsonp||[]).push([[106,56],{1064:function(e,t,r){"use strict";r(820)},1065:function(e,t,r){var n=r(136),c=r(498),o=r(691),l=n((function(i){return i[1]})),d=c(o);l.push([e.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),l.locals={},e.exports=l},1240:function(e,t,r){"use strict";r.r(t);r(58),r(188);var n=r(5),c=(r(34),{name:"Charges",data:function(){return{selectCharge:!1,isActive:!1,cargos:[],charge:{},hasEdit:!1}},created:function(){this.getData()},mounted:function(){this.getData()},methods:{viewCharge:function(e){this.charge=e,this.selectCharge=!0},cancelEdit:function(){this.zone={},this.selectCharge=!1,this.hasEdit=!1},saveEdit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/charges/createOrUpdateCharge",e.charge);case 4:e.charge={},e.selectCharge=!1,e.hasEdit=!1,e.$buefy.toast.open({message:"Cargo guardado!",type:"is-success"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},deleteCharge:function(e){var t=this;this.$swal({title:"¿Deseas borrar este cargo?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.isConfirmed){r.next=13;break}return r.prev=1,r.next=4,t.$store.dispatch("modules/charges/deleteCharge",e);case 4:t.getData(),t.charge={},t.selectCharge=!1,t.$buefy.toast.open({message:"Cargo eliminado!",type:"is-success"}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),t.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}())},edit:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.cargos=[],t.next=4,e.$store.dispatch("modules/charges/getCharges");case 4:r=t.sent,e.cargos=r,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}}),o=c,l=(r(1064),r(76)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero is-cuxtal"},[t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"card p-2"},[t("div",{staticClass:"card-content"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"}),e._v(" "),t("div",{staticClass:"level-right"},[t("p",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:function(t){e.isActive=!0}}},[e._v("\n                Nuevo cargo\n              ")])],1)])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content scroll"},e._l(e.cargos,(function(r){return t("div",{key:r.idcharge,staticClass:"container"},[t("div",{staticClass:"card",on:{click:function(t){return e.viewCharge(r)}}},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"account","custom-size":"default"}}),e._v("\n                              "+e._s(r.description)+"\n                            ")],1)])])])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[e.selectCharge&&!e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.charge.idcharge)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-info is-light","icon-right":"pencil-outline"},on:{click:e.edit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-danger is-light","icon-right":"delete"},on:{click:function(t){return e.deleteCharge(e.charge)}}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("p",{staticClass:"is-size-2"},[e._v("\n                  Descripción:\n                ")]),e._v(" "),t("p",{staticClass:"is-size-3"},[e._v("\n                  "+e._s(e.charge.description)+"\n                ")])])]):e.selectCharge&&e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.charge.idcharge)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:e.cancelEdit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.saveEdit}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Nombre"}},[t("b-input",{attrs:{name:"Nombre del cargo",type:"text",required:""},model:{value:e.charge.description,callback:function(t){e.$set(e.charge,"description",t)},expression:"charge.description"}})],1)],1)])])]):t("div",{staticClass:"card"},[e._m(0)])])])])])]),e._v(" "),t("new-charge",{attrs:{"active-modal":e.isActive},on:{close:function(t){e.isActive=!1},create:e.updateView}})],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-content"},[t("h1",{staticClass:"is-size-3"},[e._v("\n                  Selecciona un cargo\n                ")]),e._v(" "),t("p",{staticClass:"is-size-5"},[e._v("\n                  Si deseas ver la información de un cargo haz click\n                  sobre su tarjeta\n                ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NewCharge:r(929).default})},691:function(e,t,r){e.exports=r.p+"img/background.461462f.jpg"},820:function(e,t,r){var content=r(1065);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(137).default)("ed57ad02",content,!0,{sourceMap:!1})},929:function(e,t,r){"use strict";r.r(t);r(58),r(188);var n=r(5),c=(r(34),{name:"NewCharge",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{},personas:[{id:1,name:"Alice"},{id:2,name:"Bob"},{id:3,name:"Charlie"},{id:4,name:"David"},{id:5,name:"Emily"}],vehiculos:[{id:1,brand:"Toyota",model:"Camry"},{id:2,brand:"Honda",model:"Civic"},{id:3,brand:"Ford",model:"F-150"},{id:4,brand:"Chevrolet",model:"Silverado"},{id:5,brand:"Jeep",model:"Wrangler"}]}},methods:{createCharge:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/charges/createOrUpdateCharge",e.form);case 4:e.form={},e.isLoading=!1,e.$buefy.toast.open({message:"Cargo guardado!",type:"is-success"}),e.$emit("create"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),o=r(76),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nuevo cargo\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[t("b-input",{attrs:{name:"Nº identificación",type:"text",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createCharge}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);