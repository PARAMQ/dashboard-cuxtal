(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1274:function(e,t,n){"use strict";n.r(t);n(128),n(58),n(188),n(61),n(70),n(71);var r=n(5),o=n(26),c=(n(34),n(116),n(136),n(38),n(60),n(59),n(207),n(237),n(238),n(388),n(117),n(129),n(497),n(389),n(152)),l=n(737);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f={name:"NewBinnacleOldVersion",props:{activeModal:{default:!1,type:Boolean},idPlan:{default:"",type:String},idBinnacle:{default:null,type:Number},isExtraordinary:{default:!1,type:Boolean},type:{default:"",type:String}},data:function(){return{form:{status:"sin-revisar",date:new Date,hour_init:new Date},isLoading:!1,filteredParticipants:[],filteredVehicles:[],filteredVegetation:[],filteredLegalZones:[],filteredOpZones:[],filteredSubZones:[],participants:[],options:[],participant:"",vehicles:[],vegetation:[],legalZones:[],subZones:[],opZones:[],list_vegetable_affected:[],plan:{},binnacles:[],zoom:12,center:[0,0],point:[-89.60984537598705,20.85610769792424],rotation:0,files:[],formCoord:{},points:[],idPoints:[],idEvidences:[],pointsMap:[[-89.60984537598705,20.85610769792424]],temporalFiles:[],typeBinnacle:null,temporalFile:null,buttonDisabled:!1,imageUrl:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["user"])),created:function(){},mounted:function(){this.center=this.point?this.point:[0,0],this.form.idusers=this.user.idusers,this.form.idplanification=this.idPlan,this.isExtraordinary?(this.form.isextraordinary=!0,this.form.type=this.type):this.getPlan(),this.getVehicles(),this.getParticipants(),this.getVeg(),this.getLegalZones(),this.getSubZones(),this.getOpZones(),this.filteredParticipants=this.participants},methods:{kmlFormatFactory:function(){return new l.a},getPlan:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/readPlan",e.idPlan);case 3:n=t.sent,e.plan=n,e.binnacles=n.binnacles?n.binnacles:[],t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},createOrUpdateBinnacle:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.buttonDisabled=!0,n=JSON.parse(JSON.stringify(e.form)),t.next=5,e.createOrUpdate(n);case 5:case"end":return t.stop()}}),t)})))()},createOrUpdate:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t.idBinnacle){n.next=10;break}return o=t.idBinnacle,n.next=5,t.updateBinnacle(e);case 5:return n.next=7,t.getBinnacle(o);case 7:r=n.sent,n.next=16;break;case 10:return n.next=12,t.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",e);case 12:return o=n.sent,n.next=15,t.getBinnacle(o);case 15:r=n.sent;case 16:if(!(t.list_vegetable_affected.length>0)){n.next=20;break}return r.list_vegetable_affected=t.list_vegetable_affected.map((function(e){return e.idbinnacle=o,e})),n.next=20,t.updateBinnacle(r);case 20:if(!(t.points.length>0)){n.next=27;break}return t.points.map((function(e){var t=e;return t.idbinnacle=o,t})),n.next=24,t.createPoints(t.points,o);case 24:return r.list_coordinates=t.idPoints,n.next=27,t.updateBinnacle(r);case 27:if(!(t.files.length>0)){n.next=38;break}return c=new FormData,t.files.map((function(e){c.append("binnacle_photo[]",e)})),t.files.forEach((function(e,n){t.temporalFiles.push({description:"evidencia "+(n+1),idbinnacle:o,position:n+1})})),r.list_image=t.temporalFiles,n.next=34,t.updateBinnacle(r);case 34:return l=n.sent,t.temporalFiles.forEach((function(e,t){c.append("idimages["+t+"]",l[t])})),n.next=38,t.uploadEvidences(c);case 38:t.form={},t.temporalFiles=[],t.x=[],t.idPoints=[],t.points=[],t.pointsMap=[[-89.60984537598705,20.85610769792424]],t.$buefy.toast.open({message:"¡Bitácora guardada!",type:"is-success"}),t.buttonDisabled=!1,t.isLoading=!1,t.$emit("update"),n.next=52;break;case 50:n.prev=50,n.t0=n.catch(0);case 52:return n.prev=52,t.buttonDisabled=!1,t.isLoading=!1,n.finish(52);case 56:case"end":return n.stop()}}),n,null,[[0,50,52,56]])})))()},readFile:function(){this.temporalFile=this.$refs.file.files[0]},closeModal:function(){this.form={},this.temporalFiles=[],this.files=[],this.points=[],this.$emit("close")},selectParticipant:function(option){this.form.idparticipant=option?option.idparticipants:null},createPoints:function(e,t){var n=this,o=e;try{o.forEach(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$store.dispatch("modules/coordinates/createOrUpdateCoordinate",r);case 2:o=e.sent,n.idPoints.push({idcoordinates:o,idbinnacle:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(e){this.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"})}},uploadEvidences:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/uploadEvidences",e);case 3:r=n.sent,t.idEvidences=r,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},updateBinnacle:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",e);case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getVehicles:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/vehicles/getVehicles");case 3:n=t.sent,e.vehicles=n,e.filteredVehicles=e.vehicles,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getVeg:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/vegetation/getVegetations");case 3:n=t.sent,e.vegetation=n,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getLegalZones:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:e.legalZones=t.sent,e.filteredLegalZones=e.legalZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getSubZones:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getSubZones");case 3:e.subZones=t.sent,e.filteredSubZones=e.subZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getOpZones:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/operativeZones/getZones");case 3:e.opZones=t.sent,e.filteredOpZones=e.opZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getParticipants:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/participants/getParticipants");case 3:n=t.sent,e.options=n,e.participants=n,e.filteredParticipants=n,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},filterData:function(text){this.filteredParticipants=this.participants.filter((function(option){if(option.name&&option.name.toString().toLowerCase().includes(text.toLowerCase()))return option}))},addPoint:function(){if(this.formCoord.name&&""!==this.formCoord.name){if(0===this.points.length){var e=[[this.point[0],this.point[1]]];this.pointsMap=e}else this.pointsMap.push([this.point[0],this.point[1]]);this.formCoord.x=this.point[0],this.formCoord.y=this.point[1],this.points.push(this.formCoord),this.formCoord={name:"",x:0,y:0},this.point=[-89.60984537598705,20.85610769792424]}else this.$buefy.toast.open({duration:4e3,message:"Es necesario asignar un nombre a las coordenadas",position:"is-bottom",type:"is-danger"})},getBinnacle:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/getBinnacle",e);case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},viewPoint:function(e){this.formCoord.name=e.name,this.point[0]=e.x,this.point[1]=e.y,this.center=this.point},deletePoint:function(e){this.points.splice(e,1),this.pointsMap.splice(e,1)},removeParticipant:function(e){this.form.participants.splice(e,1)},viewIamge:function(image){this.imageUrl=URL.createObjectURL(image)},deleteDropFile:function(e){this.files.splice(e,1)},createCoord:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.formCoord.x=e.point[0],e.formCoord.y=e.point[1],t.prev=2,t.next=5,e.$store.dispatch("/modules/coordinates/createOrUpdateCoordinate",e.formCoord);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}}),t,null,[[2,7]])})))()},filterVehicles:function(text){this.filteredVehicles=this.vehicles.filter((function(option){if(option.plates&&option.plates.toString().toLowerCase().includes(text.toLowerCase())||option.number&&option.number.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterVegetation:function(text){this.filteredVegetation=this.vegetation.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterPart:function(text){this.filteredVegetation=this.vegetation.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterZones:function(text){this.filteredLegalZones=this.legalZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterSubZones:function(text){this.filteredSubZones=this.subZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterOpZone:function(text){this.filteredOpZones=this.opZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterPersonRecorrido:function(){var e=this;this.options=this.participants.filter((function(option){return option.name.toString().toLowerCase().includes(e.participant.toLowerCase())}))},deleteVehicles:function(object){}}},v=f,m=n(89),component=Object(m.a)(v,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"can-cancel":!1,"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("div",{staticClass:"card"},[t("b-loading",{attrs:{"is-full-page":!1,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Nueva bitácora "+e._s(e.isExtraordinary?" - Extraordinaria":"")+"\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"divider"},[t("strong",[e._v("Estado de la bítacora")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Estado actual de la bitácora"}},[t("b-select",{attrs:{placeholder:"Selecciona una opción"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[t("option",{attrs:{value:"sin-revisar"}},[e._v("\n                    Sin revisar\n                  ")]),e._v(" "),t("option",{attrs:{value:"en-revision"}},[e._v("\n                    En revisión\n                  ")]),e._v(" "),t("option",{attrs:{value:"revisado"}},[e._v("\n                    Revisado\n                  ")])])],1)],1),e._v(" "),t("div",{staticClass:"column"})]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Relatoría")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Escriba aquí la relatoría"}},[t("b-input",{attrs:{type:"textarea"},model:{value:e.form.rapporteur,callback:function(t){e.$set(e.form,"rapporteur",t)},expression:"form.rapporteur"}})],1)],1)]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Datos generales")])]),e._v(" "),t("div",{staticClass:"columns has-text-centered"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha"}},[t("b-datepicker",{attrs:{inline:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"container m-2"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Hora de inicio"}},[t("b-timepicker",{attrs:{inline:""},model:{value:e.form.hour_init,callback:function(t){e.$set(e.form,"hour_init",t)},expression:"form.hour_init"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Hora de finalización"}},[t("b-timepicker",{attrs:{inline:""},model:{value:e.form.hour_end,callback:function(t){e.$set(e.form,"hour_end",t)},expression:"form.hour_end"}})],1)],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"container m-2"},[t("b-field",{attrs:{label:"Vehículos"}},[t("b-taginput",{attrs:{data:e.filteredVehicles,field:"number",autocomplete:"","open-on-focus":!0},on:{typing:e.filterVehicles,remove:e.deleteVehicles},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.number)+" -\n                        "+e._s(n.option.plates?n.option.plates:"sin placas reigstradas"))])]}},{key:"empty",fn:function(){return[e._v("\n                      Sin resultados\n                    ")]},proxy:!0}]),model:{value:e.form.list_vehicle,callback:function(t){e.$set(e.form,"list_vehicle",t)},expression:"form.list_vehicle"}})],1),e._v(" "),t("b-field",{attrs:{label:"Participantes"}},[t("b-taginput",{attrs:{data:e.filteredParticipants,field:"name",autocomplete:"","open-on-focus":!0},on:{typing:e.filterData},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.name)+"\n                        "+e._s(n.option.lastname))])]}},{key:"empty",fn:function(){return[e._v("\n                      Sin resultados\n                    ")]},proxy:!0},{key:"selected",fn:function(){return e._l(e.form.participants,(function(n,r){return t("b-tag",{key:r,attrs:{closable:""},on:{close:function(t){return e.removeParticipant(r)}}},[e._v("\n                        "+e._s(n.name)+" "+e._s(n.lastname)+"\n                      ")])}))},proxy:!0}]),model:{value:e.form.participants,callback:function(t){e.$set(e.form,"participants",t)},expression:"form.participants"}})],1),e._v(" "),t("b-field",{attrs:{label:"Persona que realizó el recorrido"}},[t("b-autocomplete",{attrs:{data:e.options,icon:"magnify",clearable:"",field:"name"},on:{typing:e.filterPersonRecorrido,select:e.selectParticipant},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v("\n                      No hay resultados\n                    ")]},proxy:!0}]),model:{value:e.participant,callback:function(t){e.participant=t},expression:"participant"}})],1)],1)])]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Zonas y vegetación")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Zonas de vigilancia"}},[t("b-taginput",{attrs:{data:e.filteredOpZones,autocomplete:"",field:"description","open-on-focus":!0},on:{typing:e.filterOpZone},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v("\n                    Sin resultados\n                  ")]},proxy:!0}]),model:{value:e.form.list_operative_zones,callback:function(t){e.$set(e.form,"list_operative_zones",t)},expression:"form.list_operative_zones"}})],1)],1)]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Subzonas"}},[t("b-taginput",{attrs:{data:e.filteredSubZones,field:"description",autocomplete:"","open-on-focus":!0},on:{typing:e.filterSubZones},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v("\n                    Sin resultados\n                  ")]},proxy:!0}]),model:{value:e.form.list_subzoning,callback:function(t){e.$set(e.form,"list_subzoning",t)},expression:"form.list_subzoning"}})],1)],1)]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Vegetación"}},[t("b-taginput",{attrs:{data:e.filteredVegetation,field:"description",autocomplete:""},on:{typing:e.filterVegetation},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                    Sin resultados\n                  ")]},proxy:!0}]),model:{value:e.form.list_vegetable_affected,callback:function(t){e.$set(e.form,"list_vegetable_affected",t)},expression:"form.list_vegetable_affected"}})],1)],1)]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Coordenadas")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"container"},[t("b-field",{attrs:{label:"Descripción breve de la coordenada"}},[t("b-input",{model:{value:e.formCoord.name,callback:function(t){e.$set(e.formCoord,"name",t)},expression:"formCoord.name"}})],1),e._v(" "),t("b-field",{attrs:{label:"Coordenada X"}},[t("b-numberinput",{attrs:{step:"0.000000000000000001",controls:!1},model:{value:e.point[0],callback:function(t){e.$set(e.point,0,t)},expression:"point[0]"}})],1),e._v(" "),t("b-field",{attrs:{label:"Coordenada Y"}},[t("b-numberinput",{attrs:{step:"0.000000000000000001",controls:!1},model:{value:e.point[1],callback:function(t){e.$set(e.point,1,t)},expression:"point[1]"}})],1)],1),e._v(" "),t("div",{staticClass:"container m-3 has-text-centered"},[t("b-button",{attrs:{type:"is-success is-light"},on:{click:e.addPoint}},[e._v("\n                  Agregar coordenada\n                ")])],1),e._v(" "),e._l(e.points,(function(n){return t("div",{key:n.name,staticClass:"container m-3"},[t("div",{staticClass:"control"},[t("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""},on:{close:e.deletePoint,click:function(t){return e.viewPoint(n)}}},[e._v("\n                    "+e._s(n.name)+"\n                  ")])],1)])}))],2),e._v(" "),t("div",{staticClass:"column is-8"},[t("vl-map",{staticStyle:{height:"400px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.point,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.point=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.pointsMap}})],1)],1)],1)]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Evidencias")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6"},[t("section",[t("b-field",[t("b-upload",{attrs:{multiple:"","drag-drop":""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},[t("section",{staticClass:"section"},[t("div",{staticClass:"content has-text-centered"},[t("p",[t("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),e._v(" "),t("p",[e._v("\n                          Arrastra aquí tus imágenes o has click aquí para\n                          subirlas.\n                        ")])])])])],1),e._v(" "),e._l(e.files,(function(n,r){return t("div",{key:n,staticClass:"tags"},[t("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Borrar elemento",closable:""},on:{close:function(t){return e.deleteDropFile(r)},click:function(t){return e.viewIamge(n)}}},[e._v("\n                    "+e._s(r+1)+" - "+e._s(n.name)+"\n                  ")])],1)}))],2)]),e._v(" "),e.imageUrl?t("div",{staticClass:"column is-6"},[t("b-image",{attrs:{src:e.imageUrl,alt:"The Buefy Logo",ratio:"601by235"}})],1):e._e(),e._v(" "),t("div",{staticClass:"column is-6 has-text-centered"},[t("h1",[t("strong",[e._v("Selecciona una imágen.")])])])])])]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{disabled:e.buttonDisabled},on:{click:e.closeModal}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success",disabled:e.buttonDisabled},on:{click:e.createOrUpdateBinnacle}},[e._v("\n            Guardar\n          ")])],1)])])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);