(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{934:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(35),{name:"NewVehicle",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{}}},methods:{createVehicle:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/vehicles/createOrUpdateVehicle",e.form);case 4:e.isLoading=!1,e.$buefy.toast.open({message:"¡Guardado correctamente!",type:"is-success"}),e.$emit("create"),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}}),l=r(89),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nuevo vehículo\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Número de identificación"}},[t("b-input",{attrs:{name:"Nº identificación",type:"text",required:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Placa del vehículo"}},[t("b-input",{attrs:{name:"placa",type:"text",required:""},model:{value:e.form.plates,callback:function(t){e.$set(e.form,"plates",t)},expression:"form.plates"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Modelo del vehículo"}},[t("b-input",{attrs:{name:"modelo",type:"text",required:""},model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Marca del vehículo"}},[t("b-input",{attrs:{name:"marca",type:"text",required:""},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Línea del vehículo",message:"Ejemplo: Pickup, Sedan"}},[t("b-input",{attrs:{name:"marca",type:"text",required:""},model:{value:e.form.subbrand,callback:function(t){e.$set(e.form,"subbrand",t)},expression:"form.subbrand"}})],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createVehicle}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);