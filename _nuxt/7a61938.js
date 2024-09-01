(window.webpackJsonp=window.webpackJsonp||[]).push([[127,75],{1190:function(e,t,c){"use strict";c(908)},1191:function(e,t,c){var l=c(136),n=c(498),r=c(691),o=l((function(i){return i[1]})),d=n(r);o.push([e.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),o.locals={},e.exports=o},1261:function(e,t,c){"use strict";c.r(t);var l=c(5),n=(c(34),{name:"Vehicles",data:function(){return{selectVehicle:!1,isActive:!1,vehiculos:[],hasEdit:!1,vehicle:{},isLoading:!1}},created:function(){this.getData()},mounted:function(){this.getData()},methods:{viewVehicle:function(e){this.vehicle=e,this.selectVehicle=!0},saveEdit:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/vehicles/createOrUpdateVehicle",e.vehicle);case 4:e.hasEdit=!1,e.selectVehicle=!1,e.vehicle={},e.getData(),e.$buefy.toast.open({message:"¡Cambios guardados!",type:"is-success"}),e.isLoading=!1,t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})))()},cancelEdit:function(){this.hasEdit=!1,this.selectVehicle=!1,this.vehicle={},this.getData()},deleteVehicle:function(){var e=this;this.$swal({title:"¿Deseas borrar ese vehículo?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(c){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.isConfirmed){t.next=12;break}return t.prev=1,t.next=4,e.$store.dispatch("modules/vehicles/deleteVehicle",e.vehicle);case 4:e.getData(),e.selectVehicle=!1,e.vehicle={},e.$buefy.toast.open({message:"Eliminado!",type:"is-success"}),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}())},editVehicle:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getData:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.vehiculos=[],t.next=5,e.$store.dispatch("modules/vehicles/getVehicles");case 5:c=t.sent,e.vehiculos=c,e.isLoading=!1,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),r=n,o=(c(1190),c(76)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero is-cuxtal"},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!0},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"card p-2"},[t("div",{staticClass:"card-content"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"}),e._v(" "),t("div",{staticClass:"level-right"},[t("p",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:function(t){e.isActive=!0}}},[e._v("\n                Nuevo vehículo\n              ")])],1)])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content scroll"},e._l(e.vehiculos,(function(c){return t("div",{key:c.idvehicle,staticClass:"container"},[t("div",{staticClass:"card",on:{click:function(t){return e.viewVehicle(c)}}},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"car-estate","custom-size":"default"}}),e._v("\n                              "+e._s(c.number)+" - "+e._s(c.subbrand)+"\n                            ")],1)])])])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[e.selectVehicle&&!e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        Número de identificación: "+e._s(e.vehicle.number)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-info is-light","icon-right":"pencil-outline"},on:{click:e.editVehicle}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-danger is-light","icon-right":"delete"},on:{click:e.deleteVehicle}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("p",{staticClass:"is-size-3"},[e._v("\n                  Modelo: "+e._s(e.vehicle.model)+"\n                ")]),e._v(" "),t("p",{staticClass:"is-size-4"},[e._v("\n                  Marca: "+e._s(e.vehicle.brand)+" - "+e._s(e.vehicle.subbrand)+"\n                ")]),e._v(" "),t("p",{staticClass:"is-size-4"},[e._v("\n                  Placa: "+e._s(e.vehicle.plates)+"\n                ")])])]):e.selectVehicle&&e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        Número de identificación: "+e._s(e.vehicle.number)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:e.cancelEdit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.saveEdit}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("section",[t("b-field",{attrs:{label:"Número de identificación"}},[t("b-input",{attrs:{name:"Nº identificación",type:"text",required:""},model:{value:e.vehicle.number,callback:function(t){e.$set(e.vehicle,"number",t)},expression:"vehicle.number"}})],1),e._v(" "),t("b-field",{attrs:{label:"Placa del vehículo"}},[t("b-input",{attrs:{name:"placa",type:"text",required:""},model:{value:e.vehicle.plates,callback:function(t){e.$set(e.vehicle,"plates",t)},expression:"vehicle.plates"}})],1),e._v(" "),t("b-field",{attrs:{label:"Modelo del vehículo"}},[t("b-input",{attrs:{name:"modelo",type:"text",required:""},model:{value:e.vehicle.model,callback:function(t){e.$set(e.vehicle,"model",t)},expression:"vehicle.model"}})],1),e._v(" "),t("b-field",{attrs:{label:"Marca del vehículo"}},[t("b-input",{attrs:{name:"marca",type:"text",required:""},model:{value:e.vehicle.brand,callback:function(t){e.$set(e.vehicle,"brand",t)},expression:"vehicle.brand"}})],1),e._v(" "),t("b-field",{attrs:{label:"Línea del vehículo",message:"Ejemplo: Pickup, Sedan"}},[t("b-input",{attrs:{name:"marca",type:"text",required:""},model:{value:e.vehicle.subbrand,callback:function(t){e.$set(e.vehicle,"subbrand",t)},expression:"vehicle.subbrand"}})],1)],1)])]):t("div",{staticClass:"card"},[e._m(0)])])])])])]),e._v(" "),t("new-vehicle",{attrs:{"active-modal":e.isActive},on:{close:function(t){e.isActive=!1},create:e.updateView}})],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-content"},[t("h1",{staticClass:"is-size-3"},[e._v("\n                  Selecciona un vehículo\n                ")]),e._v(" "),t("p",{staticClass:"is-size-5"},[e._v("\n                  Si deseas ver la información de un vehículo haz click sobre\n                  su tarjeta\n                ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NewVehicle:c(946).default})},691:function(e,t,c){e.exports=c.p+"img/background.461462f.jpg"},908:function(e,t,c){var content=c(1191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(137).default)("46af81b8",content,!0,{sourceMap:!1})},946:function(e,t,c){"use strict";c.r(t);var l=c(5),n=(c(34),{name:"NewVehicle",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{}}},methods:{createVehicle:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/vehicles/createOrUpdateVehicle",e.form);case 4:e.isLoading=!1,e.$buefy.toast.open({message:"¡Guardado correctamente!",type:"is-success"}),e.$emit("create"),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}}),r=c(76),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nuevo vehículo\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Número de identificación"}},[t("b-input",{attrs:{name:"Nº identificación",type:"text",required:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Placa del vehículo"}},[t("b-input",{attrs:{name:"placa",type:"text",required:""},model:{value:e.form.plates,callback:function(t){e.$set(e.form,"plates",t)},expression:"form.plates"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Modelo del vehículo"}},[t("b-input",{attrs:{name:"modelo",type:"text",required:""},model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Marca del vehículo"}},[t("b-input",{attrs:{name:"marca",type:"text",required:""},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Línea del vehículo",message:"Ejemplo: Pickup, Sedan"}},[t("b-input",{attrs:{name:"marca",type:"text",required:""},model:{value:e.form.subbrand,callback:function(t){e.$set(e.form,"subbrand",t)},expression:"form.subbrand"}})],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createVehicle}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);