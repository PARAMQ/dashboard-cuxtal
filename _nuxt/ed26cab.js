(window.webpackJsonp=window.webpackJsonp||[]).push([[108,57],{1068:function(t,e,n){"use strict";n(822)},1069:function(t,e,n){var o=n(136),r=n(498),c=n(691),l=o((function(i){return i[1]})),d=r(c);l.push([t.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),l.locals={},t.exports=l},1242:function(t,e,n){"use strict";n.r(e);n(58),n(188);var o=n(5),r=(n(34),{name:"Coordinations",data:function(){return{selectCoord:!1,isActive:!1,coordinaciones:[],coordination:{},hasEdit:!1,params:{_t:Date.now()}}},mounted:function(){this.getData()},methods:{viewCoord:function(t){this.coordination=t,this.selectCoord=!0},cancelEdit:function(){this.coordination={},this.selectCoord=!1,this.hasEdit=!1},saveEdit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("modules/coordinations/createOrUpdateCoordination",t.coordination);case 4:t.coordination={},t.selectCoord=!1,t.hasEdit=!1,t.$buefy.toast.open({message:"Dependencia guardada!",type:"is-success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteCoord:function(t){var e=this;this.$swal({title:"¿Deseas borrar esta dependencia?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(o){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o.isConfirmed){n.next=14;break}return r={idcoordination:t.idcoordination},n.prev=2,n.next=5,e.$store.dispatch("modules/coordinations/deleteCoordination",r);case 5:e.getData(),e.coordination={},e.selectCoord=!1,e.$buefy.toast.open({message:"Dependencia eliminada!",type:"is-success"}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),e.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(t){return n.apply(this,arguments)}}())},edit:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.coordinaciones=[],e.next=4,t.$store.dispatch("modules/coordinations/getCoordinations");case 4:n=e.sent,t.coordinaciones=n,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),c=r,l=(n(1068),n(76)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero is-cuxtal"},[e("div",{staticClass:"container mt-4"},[e("div",{staticClass:"card p-2"},[e("div",{staticClass:"card-content"},[e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"}),t._v(" "),e("div",{staticClass:"level-right"},[e("p",{staticClass:"level-item"},[e("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:function(e){t.isActive=!0}}},[t._v("\n                Nueva dependencia\n              ")])],1)])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content scroll"},t._l(t.coordinaciones,(function(n){return e("div",{key:n.idcoordination,staticClass:"container"},[e("div",{staticClass:"card",on:{click:function(e){return t.viewCoord(n)}}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column has-text-centered"},[e("p",[e("b-icon",{attrs:{icon:"briefcase","custom-size":"default"}}),t._v("\n                              "+t._s(n.description)+"\n                            ")],1)])])])])])])})),0)])]),t._v(" "),e("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[t.selectCoord&&!t.hasEdit?e("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",{staticClass:"card-header-title"},[t._v("\n                        ID: "+t._s(t.coordination.idcoordination)+"\n                      ")])])]),t._v(" "),e("div",{staticClass:"level-right has-text-left"},[e("div",{staticClass:"level-item"},[e("b-button",{attrs:{size:"is-small",type:"is-info is-light","icon-right":"pencil-outline"},on:{click:t.edit}})],1),t._v(" "),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{size:"is-small",type:"is-danger is-light","icon-right":"delete"},on:{click:function(e){return t.deleteCoord(t.coordination)}}})],1)])])]),t._v(" "),e("div",{staticClass:"card-content"},[e("p",{staticClass:"is-size-2"},[t._v("\n                  Descripción:\n                ")]),t._v(" "),e("p",{staticClass:"is-size-3"},[t._v("\n                  "+t._s(t.coordination.description)+"\n                ")])])]):t.selectCoord&&t.hasEdit?e("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",{staticClass:"card-header-title"},[t._v("\n                        ID: "+t._s(t.coordination.idcoordination)+"\n                      ")])])]),t._v(" "),e("div",{staticClass:"level-right has-text-left"},[e("div",{staticClass:"level-item"},[e("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:t.cancelEdit}})],1),t._v(" "),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:t.saveEdit}})],1)])])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[e("b-input",{attrs:{name:"Descripcion de la dependencia",type:"text",required:""},model:{value:t.coordination.description,callback:function(e){t.$set(t.coordination,"description",e)},expression:"coordination.description"}})],1)],1)])])]):e("div",{staticClass:"card"},[t._m(0)])])])])])]),t._v(" "),e("new-coordination",{attrs:{"active-modal":t.isActive},on:{close:function(e){t.isActive=!1},create:t.updateView}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-content"},[e("h1",{staticClass:"is-size-3"},[t._v("\n                  Selecciona una dependencia\n                ")]),t._v(" "),e("p",{staticClass:"is-size-5"},[t._v("\n                  Si deseas ver la información de una dependencia haz click\n                  sobre su tarjeta\n                ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NewCoordination:n(930).default})},691:function(t,e,n){t.exports=n.p+"img/background.461462f.jpg"},822:function(t,e,n){var content=n(1069);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(137).default)("ab9ef99c",content,!0,{sourceMap:!1})},930:function(t,e,n){"use strict";n.r(e);n(58),n(188);var o=n(5),r=(n(59),n(38),n(207),n(238),n(239),n(34),[{id:42,type:"ruido"},{id:17,type:"suelo"},{id:89,type:"agua"},{id:53,type:"electricidad"},{id:71,type:"aire"}]),c={name:"NewZone",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{},tags:[],text:"",filteredTypes:r}},methods:{createVeg:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("modules/coordinations/createOrUpdateCoordination",t.form);case 4:t.form={},t.isLoading=!1,t.$buefy.toast.open({message:"Dependencia guardada!",type:"is-success"}),t.$emit("create"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.isLoading=!1,t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 14:return e.prev=14,t.isLoading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})))()},getFilteredTypes:function(text){this.filteredTypes=this.filteredTypes.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))}}},l=n(76),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:t.activeModal,callback:function(e){t.activeModal=e},expression:"activeModal"}},[e("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n        Nueva dependencia\n      ")])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[e("b-input",{attrs:{name:"Descripción de la dependencia",type:"text",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),e("b-field",{attrs:{horizontal:"",label:"Incidencias que atieneden"}},[e("b-taginput",{attrs:{data:t.filteredTypes,icon:"label",field:"type","open-on-focus":!0,placeholder:"Escoje al menos una",autocomplete:"","aria-close-label":"Delete this tag"},on:{typing:t.getFilteredTypes},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1)],1)]),t._v(" "),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"card-footer-item"},[e("b-button",{on:{click:function(e){return t.$emit("close")}}},[t._v("\n            Cancelar\n          ")])],1),t._v(" "),e("div",{staticClass:"card-footer-item"},[e("b-button",{attrs:{type:"is-success"},on:{click:t.createVeg}},[t._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);