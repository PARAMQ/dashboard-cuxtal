(window.webpackJsonp=window.webpackJsonp||[]).push([[118,68],{1077:function(e,t,n){"use strict";n(820)},1078:function(e,t,n){var r=n(166),o=n(494),c=n(679),l=r((function(i){return i[1]})),d=o(c);l.push([e.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),l.locals={},e.exports=l},1240:function(e,t,n){"use strict";n.r(t);n(58),n(188);var r=n(5),o=(n(34),n(116),n(59),n(38),n(207),n(237),n(238),{name:"SubZone",data:function(){return{text:"",legalZones:[],options:[],selectSub:!1,isActive:!1,subzonas:[],subzone:{},hasEdit:!1,params:{_t:Date.now()}}},mounted:function(){this.getData(),this.getZones()},methods:{viewSubZone:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.subzone={},o=e,r.next=4,n.getLegalZone(e.idzoning);case 4:o.legalZone=r.sent,o.index=Number(t)+1,n.subzone=o,n.selectSub=!0;case 8:case"end":return r.stop()}}),r)})))()},cancelEdit:function(){this.subzone={},this.selectSub=!1,this.hasEdit=!1},getLegalZone:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/zones/getInfoZone",e);case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},saveEdit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/zones/createOrUpdateSubZone",e.subzone);case 4:e.subzone={},e.selectSub=!1,e.hasEdit=!1,e.$buefy.toast.open({message:"Subzona guardada!",type:"is-success"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},deleteSubZone:function(e){var t=this;this.$swal({title:"¿Deseas borrar esta vegetación?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.isConfirmed){n.next=13;break}return n.prev=1,n.next=4,t.$store.dispatch("modules/zones/deleteSubZone",e);case 4:t.getData(),t.subzone={},t.selectSub=!1,t.$buefy.toast.open({message:"Subzona eliminada!",type:"is-success"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),t.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}())},edit:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.subzonas=[],t.next=4,e.$store.dispatch("modules/zones/getSubZones");case 4:n=t.sent,e.subzonas=n,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getZones:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:n=t.sent,e.legalZones=n,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},filteredDataArray:function(){var e=this;this.options=this.legalZones.filter((function(option){return option.description.toString().toLowerCase().includes(e.text.toLowerCase())}))}}}),c=o,l=(n(1077),n(89)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero is-cuxtal"},[t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"card p-2"},[t("div",{staticClass:"card-content"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"}),e._v(" "),t("div",{staticClass:"level-right"},[t("p",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:function(t){e.isActive=!0}}},[e._v("\n                Nueva subzonificación PM\n              ")])],1)])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content scroll"},e._l(e.subzonas,(function(n,r){return t("div",{key:n.idsubzoning,staticClass:"container"},[t("div",{staticClass:"card",on:{click:function(t){return e.viewSubZone(n,r)}}},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"account","custom-size":"default"}}),e._v("\n                              "+e._s(n.description)+"\n                            ")],1)])])])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[e.selectSub&&!e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.subzone.index)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-info is-light","icon-right":"pencil-outline"},on:{click:e.edit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-danger is-light","icon-right":"delete"},on:{click:function(t){return e.deleteSubZone(e.subzone)}}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("p",{staticClass:"is-size-2"},[e._v("\n                  Descripción:\n                ")]),e._v(" "),t("p",{staticClass:"is-size-3"},[e._v("\n                  "+e._s(e.subzone.description)+"\n                ")]),e._v(" "),t("br"),e._v(" "),t("p",{staticClass:"is-size-2"},[e._v("\n                  Zonificación PM relacionada:\n                ")]),e._v(" "),t("p",{staticClass:"is-size-3"},[e._v("\n                  "+e._s(e.subzone.legalZone?e.subzone.legalZone.description:"No tiene relacionado una zona legal")+"\n                ")])])]):e.selectSub&&e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.subzone.idsubzoning)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:e.cancelEdit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.saveEdit}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[t("b-input",{attrs:{name:"Descripcion de la subzona",type:"text",required:""},model:{value:e.subzone.description,callback:function(t){e.$set(e.subzone,"description",t)},expression:"subzone.description"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Zona legal relacionada"}},[t("b-autocomplete",{attrs:{data:e.options,icon:"magnify",clearable:"",field:"description"},on:{typing:e.filteredDataArray,select:function(option){return e.subzone.idzoning=option?option.idzoning:null}},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v("\n                          No hay resultados\n                        ")]},proxy:!0}]),model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1)])])]):t("div",{staticClass:"card"},[e._m(0)])])])])])]),e._v(" "),t("new-sub-zone",{attrs:{"active-modal":e.isActive},on:{close:function(t){e.isActive=!1},create:e.updateView}})],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-content"},[t("h1",{staticClass:"is-size-3"},[e._v("\n                  Selecciona un registro\n                ")]),e._v(" "),t("p",{staticClass:"is-size-5"},[e._v("\n                  Si deseas ver la información de un registro haz click\n                  sobre su tarjeta.\n                ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NewSubZone:n(925).default})},679:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},820:function(e,t,n){var content=n(1078);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(167).default)("4af41c73",content,!0,{sourceMap:!1})},925:function(e,t,n){"use strict";n.r(t);n(58),n(188);var r=n(5),o=(n(59),n(38),n(207),n(237),n(238),n(34),{name:"NewSubZone",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{},legalZones:[],text:"",options:[]}},mounted:function(){this.getZones()},methods:{createZone:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/zones/createOrUpdateSubZone",e.form);case 4:e.form={},e.text="",e.isLoading=!1,e.$buefy.toast.open({message:"Zona guardada!",type:"is-success"}),e.$emit("create"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},getZones:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:n=t.sent,e.legalZones=n,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},filteredDataArray:function(){var e=this;this.options=this.legalZones.filter((function(option){return option.description.toString().toLowerCase().includes(e.text.toLowerCase())}))},selectZone:function(option){option&&""!==option&&(this.form.idzoning=option.idzoning)}}}),c=n(89),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nueva subzonificación PM\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[t("b-input",{attrs:{name:"Nombre de indentificación",type:"text",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Zona legal relacionada"}},[t("b-autocomplete",{attrs:{data:e.options,icon:"magnify",clearable:"",field:"description"},on:{typing:e.filteredDataArray,select:e.selectZone},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v("\n                No hay resultados\n              ")]},proxy:!0}]),model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createZone}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);