(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{913:function(e,t,n){"use strict";n.r(t);n(58),n(188);var r=n(5),o=(n(34),{name:"NewAdscription",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{},personas:[{id:1,name:"Alice"},{id:2,name:"Bob"},{id:3,name:"Charlie"},{id:4,name:"David"},{id:5,name:"Emily"}],vehiculos:[{id:1,brand:"Toyota",model:"Camry"},{id:2,brand:"Honda",model:"Civic"},{id:3,brand:"Ford",model:"F-150"},{id:4,brand:"Chevrolet",model:"Silverado"},{id:5,brand:"Jeep",model:"Wrangler"}]}},methods:{createZone:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/adscriptions/createOrUpdateAdscription",e.form);case 4:e.form={},e.isLoading=!1,e.$buefy.toast.open({message:"Área guardada!",type:"is-success"}),e.$emit("create"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),c=n(89),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nueva área\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[t("b-input",{attrs:{name:"Nombre de la área",type:"text",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createZone}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);