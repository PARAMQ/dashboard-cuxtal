(window.webpackJsonp=window.webpackJsonp||[]).push([[120,70],{1092:function(e,t,n){"use strict";n(834)},1093:function(e,t,n){var r=n(136),c=n(498),o=n(691),l=r((function(i){return i[1]})),d=c(o);l.push([e.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),l.locals={},e.exports=l},1254:function(e,t,n){"use strict";n.r(t);n(128);var r=n(5),c=(n(34),n(107),{name:"Tablaje",data:function(){return{selectVeg:!1,isActive:!1,tablaje:[],vegetation:{},hasEdit:!1,params:{_t:Date.now()},file:null,loadingGetCoordinates:!1}},watch:{file:function(e,t){e&&this.getCoordinates()}},mounted:function(){this.getData()},methods:{viewVeg:function(e,t){this.vegetation=e,this.vegetation.possition=Number(t)+1,this.selectVeg=!0},cancelEdit:function(){this.vegetation={},this.selectVeg=!1,this.hasEdit=!1},saveEdit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/tablaje/createOrUpdateTablaje",e.vegetation);case 4:e.vegetation={},e.selectVeg=!1,e.hasEdit=!1,e.$buefy.toast.open({message:"Tablaje guardado!",type:"is-success"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},deleteVeg:function(e){var t=this;this.$swal({title:"¿Deseas borrar este tablaje?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.isConfirmed){n.next=13;break}return n.prev=1,n.next=4,t.$store.dispatch("modules/tablaje/deleteTablaje",e);case 4:t.getData(),t.vegetation={},t.selectVeg=!1,t.$buefy.toast.open({message:"Tablaje eliminado!",type:"is-success"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),t.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}())},edit:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getCoordinates:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loadingGetCoordinates=!0,(n=new FormData).append("file",e.file),t.next=6,e.$axios.post("https://vectors-cuxtal-api.onrender.com/procesar_dbf",n);case 6:r=t.sent,e.vegetation.coordinates=JSON.stringify(r.data.coordinates),e.loadingGetCoordinates=!1,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.tablaje=[],t.next=4,e.$store.dispatch("modules/tablaje/getTablajes");case 4:n=t.sent,e.tablaje=n,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}}),o=c,l=(n(1092),n(76)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero is-cuxtal"},[t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"card p-2"},[t("div",{staticClass:"card-content"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"}),e._v(" "),t("div",{staticClass:"level-right"},[t("p",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:function(t){e.isActive=!0}}},[e._v("\n                Nueva tablaje\n              ")])],1)])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content scroll"},e._l(e.tablaje,(function(n,r){return t("div",{key:n.idcadastral_record,staticClass:"container"},[t("div",{staticClass:"card",on:{click:function(t){return e.viewVeg(n,r)}}},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"pencil","custom-size":"default"}}),e._v("\n                              "+e._s(n.name)+"\n                            ")],1)])])])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[e.selectVeg&&!e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.vegetation.possition)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-info is-light","icon-right":"pencil-outline"},on:{click:e.edit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-danger is-light","icon-right":"delete"},on:{click:function(t){return e.deleteVeg(e.vegetation)}}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",[t("p",{staticClass:"is-size-2"},[e._v("\n                    Descripción:\n                  ")]),e._v(" "),t("p",{staticClass:"is-size-3"},[e._v("\n                    "+e._s(e.vegetation.name)+"\n                  ")])]),e._v(" "),t("div",[t("p",{staticClass:"is-size-2"},[e._v("\n                    Polígono cargado?\n                  ")]),e._v(" "),e.vegetation.coordinates?t("b-icon",{attrs:{icon:"check-bold",size:"is-large",type:"is-success"}}):t("b-icon",{attrs:{icon:"close-octagon",size:"is-large",type:"is-danger"}})],1)])]):e.selectVeg&&e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",{staticClass:"card-header-title"},[e._v("\n                        ID: "+e._s(e.vegetation.idcadastral_record)+"\n                      ")])])]),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:e.cancelEdit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.saveEdit}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[t("b-input",{attrs:{name:"Descripcion del tablaje",type:"text",required:""},model:{value:e.vegetation.name,callback:function(t){e.$set(e.vegetation,"name",t)},expression:"vegetation.name"}})],1),e._v(" "),t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.file}},[t("b-upload",{staticClass:"file-label",model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v("Subir archivo (solo DBF)")])],1),e._v(" "),e.loadingGetCoordinates?t("span",[e._v("\n                          Procesando archivo...\n                        ")]):e._e(),e._v(" "),e.file?t("span",{staticClass:"file-name"},[e._v("\n                          "+e._s(e.file.name)+"\n                        ")]):e._e()])],1)],1)])])]):t("div",{staticClass:"card"},[e._m(0)])])])])])]),e._v(" "),t("new-tablaje",{attrs:{"active-modal":e.isActive},on:{close:function(t){e.isActive=!1},create:e.updateView}})],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-content"},[t("h1",{staticClass:"is-size-3"},[e._v("\n                  Selecciona un registro\n                ")]),e._v(" "),t("p",{staticClass:"is-size-5"},[e._v("\n                  Si deseas ver la información de un registro haz click\n                  sobre su tarjeta\n                ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NewTablaje:n(939).default})},691:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},834:function(e,t,n){var content=n(1093);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(137).default)("d896ad46",content,!0,{sourceMap:!1})},939:function(e,t,n){"use strict";n.r(t);n(128);var r=n(5),c=(n(34),{name:"NewTablaje",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{},file:null,loadingGetCoordinates:!1}},watch:{file:function(e,t){e&&this.getCoordinates()}},methods:{createOrUpdate:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/tablaje/createOrUpdateTablaje",e.form);case 4:e.form={},e.isLoading=!1,e.$buefy.toast.open({message:"Tablaje guardado!",type:"is-success"}),e.$emit("create"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),e.isLoading=!1,e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 14:return t.prev=14,e.isLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})))()},getCoordinates:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loadingGetCoordinates=!0,(n=new FormData).append("file",e.file),t.next=6,e.$axios.post("https://vectors-cuxtal-api.onrender.com/procesar_dbf",n);case 6:r=t.sent,e.form.coordinates=JSON.stringify(r.data.coordinates),e.loadingGetCoordinates=!1,console.log(r.data.coordinates),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}}}),o=n(76),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nuevo tablaje\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{horizontal:"",label:"Nombre"}},[t("b-input",{attrs:{name:"descripción breve",type:"text",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.file}},[t("b-upload",{staticClass:"file-label",model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v("Subir archivo (solo DBF)")])],1),e._v(" "),e.loadingGetCoordinates?t("span",[e._v("\n                Procesando archivo...\n              ")]):e._e(),e._v(" "),e.file?t("span",{staticClass:"file-name"},[e._v("\n                "+e._s(e.file.name)+"\n              ")]):e._e()])],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createOrUpdate}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);