(window.webpackJsonp=window.webpackJsonp||[]).push([[123,70],{1085:function(e,t,r){"use strict";r(821)},1086:function(e,t,r){var n=r(165),c=r(494),o=r(678),l=n((function(i){return i[1]})),d=c(o);l.push([e.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),l.locals={},e.exports=l},1240:function(e,t,r){"use strict";r.r(t);r(128);var n=r(5),c=(r(35),{name:"Users",data:function(){return{selectUser:!1,isActive:!1,usuarios:[],hasEdit:!1,user:{},isLoading:!1}},mounted:function(){this.getData()},methods:{viewUser:function(e){this.user=e,this.selectUser=!0},saveEdit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("modules/vehicles/createOrUpdateVehicle",e.user);case 4:e.hasEdit=!1,e.selectUser=!1,e.user={},e.getData(),e.$buefy.toast.open({message:"¡Cambios guardados!",type:"is-success"}),e.isLoading=!1,t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})))()},cancelEdit:function(){this.hasEdit=!1,this.selectUser=!1,this.user={},this.getData()},deleteUser:function(){var e=this;this.$swal({title:"¿Deseas borrar este usuario?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isConfirmed){t.next=13;break}return n={idusers:e.user.idusers},t.prev=2,t.next=5,e.$store.dispatch("modules/users/deleteUser",n);case 5:e.getData(),e.selectUser=!1,e.user={},e.$buefy.toast.open({message:"Eliminado!",type:"is-success"}),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(2);case 13:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}())},editUser:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.vehiculos=[],t.next=5,e.$store.dispatch("modules/users/getUsers");case 5:r=t.sent,e.usuarios=r,e.isLoading=!1,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),o=c,l=(r(1085),r(89)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero is-cuxtal"},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!0},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"card p-2"},[t("div",{staticClass:"card-content"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"}),e._v(" "),t("div",{staticClass:"level-right"},[t("p",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:function(t){e.isActive=!0}}},[e._v("\n                Nuevo usuario\n              ")])],1)])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content scroll"},e._l(e.usuarios,(function(r){return t("div",{key:r.idusers,staticClass:"container"},[t("div",{staticClass:"card",on:{click:function(t){return e.viewUser(r)}}},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"account-circle","custom-size":"default"}}),e._v("\n                              "+e._s(r.name)+" "+e._s(r.lastname)+"\n                            ")],1)])])])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[e.selectUser&&!e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"}),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-info is-light","icon-right":"pencil-outline"},on:{click:e.editUser}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-danger is-light","icon-right":"delete"},on:{click:e.deleteUser}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("p",[t("strong",[e._v("Nombre completo:")]),e._v(" "+e._s(e.user.name)+" "+e._s(e.user.lastname))]),e._v(" "),t("p",[t("strong",[e._v("Correo electrónico:")]),e._v(" "+e._s(e.user.email))]),e._v(" "),t("p",[t("strong",[e._v("Día de registro:")]),e._v(" "+e._s(e._f("shortDate")(e.user.date_register)))])])]):e.selectUser&&e.hasEdit?t("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level"},[e._m(0),e._v(" "),t("div",{staticClass:"level-right has-text-left"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:e.cancelEdit}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.saveEdit}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content"},[t("section",[t("b-field",{attrs:{label:"Nombre de usuario"}},[t("b-input",{attrs:{name:"Nombre de usuario",type:"text",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),t("b-field",{attrs:{label:"Nombre(s)"}},[t("b-input",{attrs:{name:"placa",type:"text",required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),t("b-field",{attrs:{label:"Apellido(s)"}},[t("b-input",{attrs:{name:"modelo",type:"text",required:""},model:{value:e.user.lastname,callback:function(t){e.$set(e.user,"lastname",t)},expression:"user.lastname"}})],1),e._v(" "),t("b-field",{attrs:{label:"Correo electrónico"}},[t("b-input",{attrs:{name:"marca",type:"text",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)])]):t("div",{staticClass:"card"},[e._m(1)])])])])])]),e._v(" "),t("new-user",{attrs:{"active-modal":e.isActive},on:{close:function(t){e.isActive=!1},create:e.updateView}})],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-content"},[t("h1",{staticClass:"is-size-3"},[e._v("\n                  Selecciona un usuario\n                ")]),e._v(" "),t("p",{staticClass:"is-size-5"},[e._v("\n                  Si deseas ver la información de un usuario haz click sobre\n                  su tarjeta\n                ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NewUser:r(924).default})},678:function(e,t,r){e.exports=r.p+"img/background.461462f.jpg"},821:function(e,t,r){var content=r(1086);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(166).default)("0d756143",content,!0,{sourceMap:!1})},826:function(e,t){},827:function(e,t){},836:function(e,t){},837:function(e,t){},857:function(e,t){},859:function(e,t){},860:function(e,t){},863:function(e,t){},864:function(e,t){},869:function(e,t){},870:function(e,t){},878:function(e,t){},884:function(e,t){},887:function(e,t){},924:function(e,t,r){"use strict";r.r(t);r(128),r(58),r(187);var n=r(5),c=(r(35),r(822)),o={name:"NewUser",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{},departaments:[],charges:[]}},mounted:function(){this.getDepartaments(),this.getCharges()},methods:{getDepartaments:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/deptos/getDeptos");case 3:e.departaments=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getCharges:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/charges/getCharges");case 3:e.charges=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},createUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.generate({length:10,numbers:!0}),t.prev=1,e.form.password=r,e.isLoading=!0,t.next=6,e.$store.dispatch("modules/users/createUser",e.form);case 6:e.form={},e.isLoading=!1,e.$buefy.toast.open({message:"Usuario guardado!",type:"is-success"}),e.$emit("create"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),e.isLoading=!1,e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 16:return t.prev=16,e.isLoading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,12,16,19]])})))()}}},l=r(89),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nuevo usuario\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-field",{attrs:{label:"Nombre de usuario"}},[t("b-input",{attrs:{name:"usuario",type:"text",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),t("b-field",{attrs:{label:"Nombre(s)"}},[t("b-input",{attrs:{name:"nombres(s)",type:"text",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("b-field",{attrs:{label:"Apellido(s)"}},[t("b-input",{attrs:{name:"apellido(s)",type:"text",required:""},model:{value:e.form.lastname,callback:function(t){e.$set(e.form,"lastname",t)},expression:"form.lastname"}})],1),e._v(" "),t("b-field",{attrs:{label:"Correo electrónico"}},[t("b-input",{attrs:{name:"correo electronico",type:"text",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("b-field",{attrs:{label:"Cargo (rol dentro de cuxtal)"}},[t("b-select",{attrs:{placeholder:"Selecciona uno"}},e._l(e.charges,(function(option){return t("option",{key:option.idcharge,domProps:{value:option.idcharge}},[e._v("\n                "+e._s(option.description)+"\n              ")])})),0)],1),e._v(" "),t("b-field",{attrs:{label:"Coordinaciones"}},[t("b-select",{attrs:{placeholder:"Selecciona una"}},e._l(e.departaments,(function(option){return t("option",{key:option.iddepto,domProps:{value:option.iddepto}},[e._v("\n                "+e._s(option.description)+"\n              ")])})),0)],1)],1)]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.createUser}},[e._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);