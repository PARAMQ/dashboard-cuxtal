(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{905:function(t,e,n){"use strict";n.r(e);n(128),n(58),n(188);var r=n(5),o=(n(34),n(136),n(498),n(38),n(59),n(60),n(117),n(129),n(497),n(389),n(388),n(685)),c=(n(686),n(684)),l={name:"ViewBinnacle",props:{binnacleObject:{type:Object,default:{}},activeModal:{type:Boolean,default:!1},isExtraordinary:{type:Boolean,default:!1},disableForm:{type:Boolean,default:!0}},data:function(){return{form:{date:new Date,participant:null,participants:[],hourInit:new Date,hourEnd:new Date,temporalZoning:[],list_operative_zones:[],vegetableAffected:[],list_vehicle:[],list_incidents:[]},isLoading:!1,hourInit:new Date,hourEnd:new Date,isSwitched:!0,validateHours:!1,formCoord:{},temporalPoint:[224190.791,2311022.379],ViewPoint:[-89.60984537598705,20.85610769792424],pointsMap:[[-89.60984537598705,20.85610769792424]],viewPoints:!1,points:[],idPoints:[],zoom:12,center:[-89.60984537598705,20.85610769792424],rotation:0,zoning:[],charges:[],features:[{type:"Feature",geometry:{type:"Polygon",coordinates:o}}],estados:[{label:"Revisado",value:"revisado"},{label:"En revisión",value:"en-revision"},{label:"Por revisar",value:"por-revisar"}]}},watch:{activeModal:function(t,e){t&&this.getOneMoment(this.binnacleObject.idbinnacle)}},mounted:function(){this.getCharges(),this.getParticipants(),this.getZoning()},methods:{close:function(){this.form={date:new Date,participant:null,participants:[],participantsTemp:[],hourInit:new Date,hourEnd:new Date,temporalZoning:[],list_operative_zones:[],vegetableAffected:[],list_vehicle:[]},this.temporalPoint=[224190.791,2311022.379],this.ViewPoint=[-89.60984537598705,20.85610769792424],this.pointsMap=[[-89.60984537598705,20.85610769792424]],this.$emit("close")},getOneMoment:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.isLoading=!0,n.next=4,e.$store.dispatch("modules/binnacles/getBinnacle",t);case 4:(r=n.sent).date=new Date(r.date),r.hourInit=new Date(r.hour_init),r.hourEnd=new Date(r.hour_end),o=r.participants.map((function(t){var n=e.charges.find((function(e){return e.idcharge===t.idcharge}));return t.charge=n,t})),r.temporalParticipants=o,c={},l=r.list_vegetable_affected.filter((function(t){var e=t.idva;return!c[e]&&(c[e]=!0,!0)})),r.idparticipants&&(r.responsable=e.participants.find((function(t){return t.idparticipants===r.idparticipants}))),r.vegetableAffected=l,d=r.list_subzones.map((function(t){var n=e.zoning.find((function(e){return e.idzoning===t.idzoning}));return t.zoning=n,t})),r.temporalZoning=d,e.viewPoints=!1,r.coordinates_binnacle&&r.coordinates_binnacle.length>0?(r.coordinates_binnacle.forEach((function(object){var t=[object.x,object.y],n=e.convertCoordinatesToUtm(t);r.points=[],r.points.push(n)})),e.pointsMap=r.points,e.viewPoints=!0):e.viewPoints=!1,e.isLoading=!1,r.isprocessed=r.isprocessed&&"1"===r.isprocessed?"Si":(r.isprocessed&&r.isprocessed,"No"),e.form=r,n.next=25;break;case 23:n.prev=23,n.t0=n.catch(0);case 25:case"end":return n.stop()}}),n,null,[[0,23]])})))()},convertCoordinatesToUtm:function(t){var e=c.toLatLon(t[0],t[1],"16","T");return[e.longitude,e.latitude]},getCharges:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("modules/charges/getCharges");case 3:t.charges=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))()},getZoning:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("modules/zones/getZones");case 3:t.zoning=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))()},getParticipants:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("modules/participants/getParticipants");case 3:n=e.sent,t.participants=n,t.participantsFilter=n,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},viewIamge:function(image){this.imageUrl=URL.createObjectURL(image)},deleteImage:function(object,t){var e=this;this.$swal.fire({title:"¿Deseas eliminar esta evidencia?",text:"No podrás revertir el cambio",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.isConfirmed){n.next=14;break}return e.form.list_image_deleted&&e.list_image_deleted.length>0?(e.form.list_image_deleted.push(object),e.form.list_image.splice(t,1)):(e.form.list_image_deleted=[],e.form.list_image_deleted.push(object),e.form.list_image.splice(t,1)),n.prev=2,n.next=5,e.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",e.form);case 5:e.getOneMoment(e.binnacleObject.idbinnacle),e.$buefy.toast.open({message:"Imágen borrada correctamente",type:"is-success"}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 12:n.next=15;break;case 14:r.isDismissed;case 15:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(t){return n.apply(this,arguments)}}())},deletePoint:function(object,t){var e=this;this.$swal.fire({title:"¿Deseas eliminar esta coordenada?",text:"No podrás revertir el cambio",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isConfirmed){t.next=14;break}return e.form.list_coordinates_deleted&&e.list_coordinates_deleted.length>0||(e.form.list_coordinates_deleted=[]),e.form.list_coordinates_deleted.push(object),t.prev=2,t.next=5,e.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",e.form);case 5:e.getOneMoment(e.binnacleObject.idbinnacle),e.$buefy.toast.open({message:"Imágen borrada correctamente",type:"is-success"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 12:t.next=15;break;case 14:n.isDismissed;case 15:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}())},updateStatusBinnacle:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.isprocessed="Si"===t.form.isprocessed?1:0,e.prev=1,e.next=4,t.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",t.form);case 4:t.getOneMoment(t.binnacleObject.idbinnacle),t.$buefy.toast.open({message:"Actualizado correctamente",type:"is-success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},convertCoordinatesFromUtm:function(t){},viewPoint:function(){this.ViewPoint=this.convertCoordinatesToUtm(this.temporalPoint)}}},d=l,v=n(89),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{"has-modal-card":"","can-cancel":!1,"full-screen":""},model:{value:t.activeModal,callback:function(e){t.activeModal=e},expression:"activeModal"}},[e("b-loading",{attrs:{"is-full-page":!1,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),t._v(" "),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s("Bitácora "+t.form.number)+"\n      ")])]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Estado de la bitácora")])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Estado de la bitácora"}},[e("b-select",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.estados,(function(option){return e("option",{key:option.value,domProps:{value:option.value}},[t._v("\n                      "+t._s(option.label)+"\n                    ")])})),0)],1)],1),t._v(" "),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"¿Fue procesado?"}},[e("b-checkbox",{attrs:{"true-value":"Si","false-value":"No"},model:{value:t.form.isprocessed,callback:function(e){t.$set(t.form,"isprocessed",e)},expression:"form.isprocessed"}},[t._v("\n                    "+t._s(t.form.isprocessed)+"\n                  ")])],1)],1),t._v(" "),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Area (Ha)"}},[e("p",[t._v("\n                    "+t._s(t.form.ha?t.form.ha:"Hectáreas no registradas")+"\n                  ")])])],1),t._v(" "),e("div",{staticClass:"column"},[e("b-button",{attrs:{type:"is-success"},on:{click:t.updateStatusBinnacle}},[t._v("\n                  Guardar\n                ")])],1)])])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Relatoría")])]),t._v(" "),e("div",{staticClass:"container"},[e("p",[t._v("\n                "+t._s(t.form.rapporteur?t.form.rapporteur:"No tiene relatoría")+"\n              ")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Datos generales")])]),t._v(" "),e("div",{staticClass:"container is-flex is-justify-content-center"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-datepicker",{attrs:{inline:""},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),t._v(" "),e("div",{staticClass:"column has-text-centered"},[e("div",[e("b-field",{attrs:{label:"Hora de inicio"}},[e("b-timepicker",{attrs:{inline:""},model:{value:t.form.hourInit,callback:function(e){t.$set(t.form,"hourInit",e)},expression:"form.hourInit"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("div",[e("b-field",{attrs:{label:"Hora de finalización"}},[e("b-timepicker",{attrs:{inline:""},model:{value:t.form.hourEnd,callback:function(e){t.$set(t.form,"hourEnd",e)},expression:"form.hourEnd"}})],1)],1)])])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Responsable")])]),t._v(" "),t.form.responsable?e("div",{staticClass:"container"},[e("p",[e("strong",[t._v("Nombre completo: ")]),t._v(t._s(t.form.responsable.name+" "+t.form.responsable.lastname)+"\n              ")])]):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("No se registró el responsable")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Participantes")])]),t._v(" "),t.form.participants.length>0?e("div",{staticClass:"container"},t._l(t.form.participants,(function(n){return e("div",{key:n.idparticipants,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.name+" "+n.lastname)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-success is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.charge?n.charge.description:"Sin cargo")+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin participantes")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Vehículos")])]),t._v(" "),t.form.list_vehicle.length>0?e("div",{staticClass:"container"},t._l(t.form.list_vehicle,(function(n){return e("div",{key:n.idvehicle,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.number)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-info is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.plates)+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin vehículos")])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Vegetación")])]),t._v(" "),t.form.vegetableAffected.length>0?e("div",{staticClass:"container"},t._l(t.form.vegetableAffected,(function(n){return e("div",{key:n.idva,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.description)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-success is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.cientificName?n.cientificName:"Sin nombre científico")+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin vegetación")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Zonas de vigilancia")])]),t._v(" "),t.form.list_operative_zones.length>0?e("div",{staticClass:"container"},t._l(t.form.list_operative_zones,(function(n){return e("div",{key:n.idoperative_zones,staticClass:"m-2"},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                  "+t._s(n.description)+"\n                ")])],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin zonas de vigilancia")])])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Zonificación y Subzonificación PM")])]),t._v(" "),t.form.temporalZoning.length>0?e("div",{staticClass:"container"},t._l(t.form.temporalZoning,(function(n){return e("div",{key:n.idsubzoning,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.description)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-info is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.zoning?n.zoning.description:"Sin zoníficacion asignada")+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin zonificación y subzonificación PM")])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Ilícitos")])]),t._v(" "),t.form.list_incidents.length>0?e("div",{staticClass:"container"},t._l(t.form.list_incidents,(function(n){return e("div",{key:n.idincidents,staticClass:"m-2"},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                  "+t._s(n.description)+"\n                ")])],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin vegetación")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Zonas de vigilancia")])]),t._v(" "),t.form.list_operative_zones.length>0?e("div",{staticClass:"container"},t._l(t.form.list_operative_zones,(function(n){return e("div",{key:n.idoperative_zones,staticClass:"m-2"},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                  "+t._s(n.description)+"\n                ")])],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin zonas de vigilancia")])])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Zonificación y Subzonificación PM")])]),t._v(" "),t.form.temporalZoning.length>0?e("div",{staticClass:"container"},t._l(t.form.temporalZoning,(function(n){return e("div",{key:n.idsubzoning,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.description)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-info is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.zoning?n.zoning.description:"Sin zoníficacion asignada")+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin zonificación y subzonificación PM")])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Coordenadas registradas")])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-2"},t._l(t.form.coordinates_binnacle,(function(n){return e("div",{key:n.name,staticClass:"container m-3"},[e("div",{staticClass:"control"},[e("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""},on:{close:function(e){return t.deletePoint(n)}}},[t._v("\n                  "+t._s(n.name)+"\n                ")])],1)])})),0),t._v(" "),e("div",{staticClass:"column"},[e("vl-map",{staticStyle:{height:"600px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[e("vl-view",{attrs:{zoom:t.zoom,center:t.center,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},"update:rotation":function(e){t.rotation=e}}}),t._v(" "),e("vl-layer-tile",[e("vl-source-osm")],1),t._v(" "),t.viewPoints?e("vl-feature",[e("vl-geom-multi-point",{attrs:{coordinates:t.pointsMap}}),t._v(" "),e("vl-style",[e("vl-style-circle",{attrs:{radius:5}},[e("vl-style-fill",{attrs:{color:"red"}}),t._v(" "),e("vl-style-stroke",{attrs:{color:"red"}})],1)],1)],1):t._e(),t._v(" "),e("vl-layer-vector",[e("vl-source-vector",{attrs:{features:t.features},on:{"update:features":function(e){t.features=e}}})],1)],1)],1)])]),t._v(" "),t.form.list_image&&t.form.list_image.length>0?e("div",[e("div",{staticClass:"divider"},[e("strong",[t._v("Evidencias")])]),t._v(" "),t._l(t.form.list_image,(function(image,n){return e("div",{key:n,staticClass:"columns"},[e("div",{staticClass:"column is-2"},[image.path?e("figure",{staticClass:"image is-128x128"},[e("img",{attrs:{src:image.path}})]):t._e()]),t._v(" "),e("div",{staticClass:"column"},[e("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:function(e){return t.deleteImage(image,n)}}})],1)])}))],2):e("div",{staticClass:"container"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Evidencias")])]),t._v(" "),e("div",{staticClass:"has-text-centered"},[e("p",[t._v("Sin evidencias")])])]),t._v(" "),e("div",{staticClass:"has-text-centered m-2",staticStyle:{width:"100%"}},[e("b-button",{on:{click:t.close}},[e("strong",[t._v("Cerrar")])])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);