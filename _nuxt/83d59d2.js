(window.webpackJsonp=window.webpackJsonp||[]).push([[106,75],{1053:function(t,e,n){"use strict";n(808)},1054:function(t,e,n){var o=n(166),r=n(494),c=n(679),l=o((function(i){return i[1]})),d=r(c);l.push([t.i,".scroll{height:400px;overflow-y:scroll}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}#slice-card{min-width:200px}#info-vehicle{min-width:400px}#info-vehicle .level{width:100%}",""]),l.locals={},t.exports=l},1228:function(t,e,n){"use strict";n.r(e);n(128);var o=n(5),r=(n(34),{name:"Coordinates",data:function(){return{selectCoordinate:!1,isActive:!1,coordenadas:[],coordinate:{},hasEdit:!1,zoom:13,center:[-89.6095127687108,20.867135753904403],point:[-89.6095127687108,20.867135753904403],rotation:0}},created:function(){this.getData()},mounted:function(){this.getData()},methods:{viewCoordinate:function(t){this.point=[t.x,t.y],this.center=this.coordinate,this.selectCoordinate=!0},cancelEdit:function(){this.coordinate={},this.selectCoordinate=!1,this.hasEdit=!1},saveEdit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("modules/coordinates/createOrUpdateZone",t.zone);case 4:t.zone={},t.selectCoordinate=!1,t.hasEdit=!1,t.$buefy.toast.open({message:"Zona guardada!",type:"is-success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteZone:function(t){var e=this;this.$swal({title:"¿Deseas borrar esta zona?",showDenyButton:!0,confirmButtonText:"Borrar",denyButtonText:"Cancelar"}).then(function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(o){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o.isConfirmed){n.next=13;break}return n.prev=1,n.next=4,e.$store.dispatch("modules/coordinates/deleteZone",t);case 4:e.getData(),e.zone={},e.selectCoordinate=!1,e.$buefy.toast.open({message:"Zona eliminada!",type:"is-success"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),e.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t){return n.apply(this,arguments)}}())},edit:function(){this.hasEdit=!0},updateView:function(){this.isActive=!1,this.getData()},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.coordenadas=[],e.next=4,t.$store.dispatch("modules/coordinates/getCoordinates");case 4:n=e.sent,t.coordenadas=n,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),c=r,l=(n(1053),n(89)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero is-cuxtal"},[e("div",{staticClass:"container mt-4"},[e("div",{staticClass:"card p-2"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content scroll"},t._l(t.coordenadas,(function(n){return e("div",{key:n.idcoordinates,staticClass:"container"},[e("div",{staticClass:"card",on:{click:function(e){return t.viewCoordinate(n)}}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column has-text-centered"},[e("p",[e("b-icon",{attrs:{icon:"map-marker","custom-size":"default"}}),t._v("\n                              "+t._s(n.name)+"\n                            ")],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("p",[t._v(t._s(n.x)+" - "+t._s(n.y))])])])])])])])})),0)])]),t._v(" "),e("div",{staticClass:"column is-8 is-flex is-justify-content-center has-text-centered"},[t.selectCoordinate&&!t.hasEdit?e("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",{staticClass:"card-header-title"},[t._v("\n                        ID: "+t._s(t.coordinate.idcoordinates)+"\n                      ")])])])])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("vl-map",{staticStyle:{height:"400px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[e("vl-view",{attrs:{zoom:t.zoom,center:t.point,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.point=e},"update:rotation":function(e){t.rotation=e}}}),t._v(" "),e("vl-layer-tile",{attrs:{id:"osm"}},[e("vl-source-osm")],1),t._v(" "),e("vl-feature",{attrs:{id:"point",properties:{prop:"value",prop2:"value"}}},[e("vl-geom-point",{attrs:{coordinates:t.point}})],1)],1)],1)])])]):t.selectCoordinate&&t.hasEdit?e("div",{staticClass:"card",attrs:{id:"info-vehicle"}},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",{staticClass:"card-header-title"},[t._v("\n                        ID: "+t._s(t.coordinate.idcoordinates)+"\n                      ")])])]),t._v(" "),e("div",{staticClass:"level-right has-text-left"},[e("div",{staticClass:"level-item"},[e("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"keyboard-return"},on:{click:t.cancelEdit}})],1),t._v(" "),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:t.saveEdit}})],1)])])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-field",{attrs:{horizontal:"",label:"Nombre"}},[e("b-input",{attrs:{name:"Nombre de la zona",type:"text",required:""},model:{value:t.coordinate.name,callback:function(e){t.$set(t.coordinate,"name",e)},expression:"coordinate.name"}})],1)],1)])])]):e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[t._m(0),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("vl-map",{staticStyle:{height:"400px"},attrs:{"data-projection":"EPSG:4326"}},[e("vl-view",{attrs:{zoom:t.zoom,center:t.point,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.point=e},"update:rotation":function(e){t.rotation=e}}}),t._v(" "),e("vl-layer-tile",[e("vl-source-osm")],1),t._v(" "),e("vl-feature",[e("vl-geom-point",{attrs:{coordinates:t.point}})],1)],1)],1)])])])])])])])]),t._v(" "),e("new-zone",{attrs:{"active-modal":t.isActive},on:{close:function(e){t.isActive=!1},create:t.updateView}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",{staticClass:"is-size-3"},[t._v("\n                    Selecciona un punto\n                  ")]),t._v(" "),e("p",{staticClass:"is-size-5"},[t._v("\n                    Haz click sobre un punto de la lista y lo verás en el\n                    mapa.\n                  ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NewZone:n(732).default})},679:function(t,e,n){t.exports=n.p+"img/background.461462f.jpg"},732:function(t,e,n){"use strict";n.r(e);n(58),n(188);var o=n(5),r=(n(34),{name:"NewZone",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{}}},methods:{createZone:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("modules/zones/createOrUpdateZone",t.form);case 4:t.form={},t.isLoading=!1,t.$buefy.toast.open({message:"Zona guardada!",type:"is-success"}),t.$emit("create"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}}),c=n(89),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:t.activeModal,callback:function(e){t.activeModal=e},expression:"activeModal"}},[e("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n        Nueva zonificación PM\n      ")])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-field",{attrs:{horizontal:"",label:"Descripción breve"}},[e("b-input",{attrs:{name:"Nombre de indentificación",type:"text",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)]),t._v(" "),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"card-footer-item"},[e("b-button",{on:{click:function(e){return t.$emit("close")}}},[t._v("\n            Cancelar\n          ")])],1),t._v(" "),e("div",{staticClass:"card-footer-item"},[e("b-button",{attrs:{type:"is-success"},on:{click:t.createZone}},[t._v("\n            Guardar\n          ")])],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports},808:function(t,e,n){var content=n(1054);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(167).default)("25df8972",content,!0,{sourceMap:!1})}}]);