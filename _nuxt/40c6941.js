(window.webpackJsonp=window.webpackJsonp||[]).push([[98,90],{1210:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(38),n(60),n(117),n(129),n(483),n(374),n(35),n(692)),c=n(691),l={name:"Binnacle",data:function(){return{activeModal:!1,activeViewModal:!1,activeEditModal:!1,downloadFile:!1,idBinnacle:"",binnacleSelect:{},isActive:!1,isLoadingBinnacles:!1,binnacles:[],dateSelect:new Date,zoom:12,center:[-89.60984537598705,20.85610769792424],viewBinnacle:!1,temporalPoints:[[-89.60984537598705,20.85610769792424]],rotation:0,geolocPosition:void 0,arrayCoordinates:[],features:[{type:"Feature",geometry:{type:"Polygon",coordinates:r}}]}},created:function(){this.getData()},methods:{openModal:function(){this.isActive=!0},updateView:function(){this.activeViewModal=!1,this.activeEditModal=!1,this.activeModal=!1,this.getData()},openBinnacle:function(t){this.binnacleSelect=t,this.activeViewModal=!0},editBinnacle:function(t){this.binnacleSelect=t,this.activeEditModal=!0},deleteBinnacle:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,data={idbinnacle:t},n.next=4,e.$store.dispatch("modules/binnacles/deleteBinnacle",data);case 4:e.$buefy.notification.open({message:"Bitácora eliminada",duration:2500,position:"is-bottom-right",type:"is-success",hasIcon:!0}),e.getData(),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoadingBinnacles=!0,e.next=4,t.$store.dispatch("modules/binnacles/getBinnacles");case 4:t.binnacles=e.sent,t.isLoadingBinnacles=!1,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getBinnacle:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$store.dispatch("modules/binnacles/getBinnacle",t);case 3:return o=n.sent,n.abrupt("return",o);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},viewInMap:function(option){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.viewBinnacle=!1,t.temporalPoints=[[-89.60984537598705,20.85610769792424]],e.next=4,t.getBinnacle(option);case 4:(n=e.sent).points=[],n.coordinates_binnacle.forEach((function(object){var e=[object.x,object.y],o=t.convertCoordinatesToUtm(e);n.points.push(o)})),n.points.length>0?(t.temporalPoints=n.points,t.viewBinnacle=!0):t.$buefy.notification.open({message:"La bitácora no contiene coordenadas.",duration:2500,position:"is-bottom-right",type:"is-warning",hasIcon:!0});case 9:case"end":return e.stop()}}),e)})))()},convertCoordinatesToUtm:function(t){var e=c.toLatLon(t[0],t[1],"16","T");return[e.longitude,e.latitude]},getWord:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r,c,l,link,d,v,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,n.isLoadingBinnacles=!0,n.downloadFile=!0,o.next=5,n.$store.dispatch("modules/binnacles/getWordBinnacle",t);case 5:r=o.sent,c=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),l=window.URL.createObjectURL(c),link=document.createElement("a"),d=e.substring(e.length-4,e.length),v=e.substring(0,e.length-4),m="bitácora_"+v+"-"+d+".docx",link.href=l,link.setAttribute("download",m),link.click(),window.URL.revokeObjectURL(l),n.isLoadingBinnacles=!1,n.downloadFile=!1,o.next=23;break;case 20:o.prev=20,o.t0=o.catch(0),n.downloadFile=!1;case 23:return o.prev=23,n.downloadFile=!1,o.finish(23);case 26:case"end":return o.stop()}}),o,null,[[0,20,23,26]])})))()}}},d=(n(942),n(89)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns",attrs:{id:"map"}},[e("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoadingBinnacles,callback:function(e){t.isLoadingBinnacles=e},expression:"isLoadingBinnacles"}}),t._v(" "),e("div",{staticClass:"column is-4"},[e("section",{staticClass:"m-2 has-text-centered"},[e("b-tooltip",{attrs:{label:"Crea una nueva bitácora sin la necesidad de un recorrido",position:"is-right"}},[e("b-button",{attrs:{label:"Nueva bitácora extraordinaria",type:"is-light"},on:{click:function(e){t.activeModal=!0}}})],1)],1),t._v(" "),e("div",{staticClass:"columns m-2 binnalces"},[e("div",{staticClass:"column"},t._l(t.binnacles,(function(n){return e("div",{key:n.idbinnacle},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"level m-1 full-w"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",[t._v(t._s(n.number))])]),t._v(" "),e("div",{staticClass:"level-item"},["revisado"===n.status?e("b-tooltip",{attrs:{label:"Revisado",position:"is-left"}},[e("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}})],1):"en-revision"===n.status?e("b-tooltip",{attrs:{label:"En revisión",position:"is-left"}},[e("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-warning"}})],1):"por-revisar"===n.status?e("b-tooltip",{attrs:{label:"Por revisar",position:"is-left"}},[e("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-light"}})],1):e("b-tooltip",{attrs:{label:"Sin estado",position:"is-left"}},[e("b-icon",{attrs:{icon:"alert",size:"is-small",type:"is-danger"}})],1)],1)]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("b-button",{attrs:{type:"is-info is-light","icon-right":"eye-outline"},on:{click:function(e){return t.openBinnacle(n)}}})],1),t._v(" "),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{type:"is-danger is-light","icon-right":"delete-empty-outline"},on:{click:function(e){return t.deleteBinnacle(n.idbinnacle)}}})],1),t._v(" "),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{type:"is-success is-light","icon-right":"file-word"},on:{click:function(e){return t.getWord(n.idbinnacle,n.number)}}})],1)])])]),t._v(" "),e("div",{staticClass:"card-content",on:{click:function(e){return t.viewInMap(n.idbinnacle)}}},[e("p",[e("strong",[t._v("Fecha: ")]),t._v("\n                "+t._s(n.date?n.date:"No hay fecha registrada")+"\n              ")]),t._v(" "),e("br"),t._v(" "),e("p",[e("strong",[t._v("Relatoría: ")]),t._v("\n                "+t._s(n.rapporteur?n.rapporteur:"No hay relatoría")+"\n              ")])]),t._v(" "),e("div",{staticClass:"m-2"},[e("p",{staticClass:"has-text-grey"},[t._v("\n                "+t._s(n.isextraordinary?"Bitácora extraordinaria":"Bitácora relacionada a un recorrido programado")+"\n              ")])])])])})),0)])]),t._v(" "),e("div",{staticClass:"column is-8"},[e("vl-map",{staticStyle:{height:"100%"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[e("vl-view",{attrs:{zoom:t.zoom,center:t.center,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},"update:rotation":function(e){t.rotation=e}}}),t._v(" "),e("vl-layer-tile",[e("vl-source-osm")],1),t._v(" "),t.viewBinnacle?e("vl-feature",[e("vl-geom-multi-point",{attrs:{coordinates:t.temporalPoints}})],1):t._e(),t._v(" "),e("vl-layer-vector",[e("vl-source-vector",{attrs:{features:t.features},on:{"update:features":function(e){t.features=e}}})],1)],1)],1),t._v(" "),e("new-binnacle",{attrs:{"active-modal":t.activeModal,plannification:null,"is-extraordinary":!0},on:{close:t.updateView,save:t.updateView}}),t._v(" "),e("view-binnacle",{attrs:{"active-modal":t.activeViewModal,"binnacle-object":t.binnacleSelect,"disable-form":!0},on:{close:t.updateView}}),t._v(" "),e("edit-binnacle",{attrs:{"active-modal":t.activeEditModal,"binnacle-object":t.binnacleSelect},on:{close:t.updateView,save:t.updateView}}),t._v(" "),e("b-notification",{attrs:{type:"is-info is-light",closable:!1},model:{value:t.downloadFile,callback:function(e){t.downloadFile=e},expression:"downloadFile"}},[t._v("\n    Descargando bitácora\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewBinnacle:n(784).default,ViewBinnacle:n(738).default,EditBinnacle:n(907).default})},686:function(t,e,n){t.exports=n.p+"img/background.461462f.jpg"},738:function(t,e,n){"use strict";n.r(e);n(128),n(58),n(186);var o=n(5),r=(n(35),n(136),n(484),n(38),n(59),n(60),n(117),n(129),n(483),n(374),n(692)),c=(n(693),n(691)),l={name:"ViewBinnacle",props:{binnacleObject:{type:Object,default:{}},activeModal:{type:Boolean,default:!1},isExtraordinary:{type:Boolean,default:!1},disableForm:{type:Boolean,default:!0}},data:function(){return{form:{date:new Date,participant:null,participants:[],hourInit:new Date,hourEnd:new Date,temporalZoning:[],list_operative_zones:[],vegetableAffected:[],list_vehicle:[]},isLoading:!1,hourInit:new Date,hourEnd:new Date,isSwitched:!0,validateHours:!1,formCoord:{},temporalPoint:[224190.791,2311022.379],ViewPoint:[-89.60984537598705,20.85610769792424],pointsMap:[[-89.60984537598705,20.85610769792424]],viewPoints:!1,points:[],idPoints:[],zoom:12,center:[-89.60984537598705,20.85610769792424],rotation:0,zoning:[],charges:[],features:[{type:"Feature",geometry:{type:"Polygon",coordinates:r}}],options:[{label:"Revisado",value:"Revisado"},{label:"En revisión",value:"en-revision"},{label:"Por revisar",value:"por-revisar"}]}},watch:{activeModal:function(t,e){t&&this.getOneMoment(this.binnacleObject.idbinnacle)}},mounted:function(){this.getCharges(),this.getParticipants(),this.getZoning()},methods:{close:function(){this.form={date:new Date,participant:null,participants:[],participantsTemp:[],hourInit:new Date,hourEnd:new Date,temporalZoning:[],list_operative_zones:[],vegetableAffected:[],list_vehicle:[]},this.temporalPoint=[224190.791,2311022.379],this.ViewPoint=[-89.60984537598705,20.85610769792424],this.pointsMap=[[-89.60984537598705,20.85610769792424]],this.$emit("close")},getOneMoment:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,l,d,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.isLoading=!0,n.next=4,e.$store.dispatch("modules/binnacles/getBinnacle",t);case 4:o=n.sent,console.log(o),o.date=new Date(o.date),o.hourInit=new Date(o.hour_init),o.hourEnd=new Date(o.hour_end),r=o.participants.map((function(t){var n=e.charges.find((function(e){return e.idcharge===t.idcharge}));return t.charge=n,t})),o.temporalParticipants=r,c={},l=o.list_vegetable_affected.filter((function(t){var e=t.idva;return!c[e]&&(c[e]=!0,!0)})),o.idparticipants&&(o.responsable=e.participants.find((function(t){return t.idparticipants===o.idparticipants}))),o.vegetableAffected=l,d=o.list_subzones.map((function(t){var n=e.zoning.find((function(e){return e.idzoning===t.idzoning}));return t.zoning=n,t})),o.temporalZoning=d,e.viewPoints=!1,o.coordinates_binnacle&&o.coordinates_binnacle.length>0?(v=o.coordinates_binnacle,console.log(v),v.forEach((function(object){var t=[object.x,object.y],n=e.convertCoordinatesToUtm(t);o.points=[],o.points.push(n)})),e.pointsMap=o.points,e.viewPoints=!0):e.viewPoints=!1,e.isLoading=!1,e.form=o,n.next=25;break;case 23:n.prev=23,n.t0=n.catch(0);case 25:case"end":return n.stop()}}),n,null,[[0,23]])})))()},convertCoordinatesToUtm:function(t){var e=c.toLatLon(t[0],t[1],"16","T");return[e.longitude,e.latitude]},getCharges:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("modules/charges/getCharges");case 3:t.charges=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))()},getZoning:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("modules/zones/getZones");case 3:t.zoning=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))()},getParticipants:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("modules/participants/getParticipants");case 3:n=e.sent,t.participants=n,t.participantsFilter=n,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},viewIamge:function(image){this.imageUrl=URL.createObjectURL(image)},updateStatusBinnacle:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",t.form);case 3:t.$buefy.toast.open({message:"Actualizado correctamente",type:"is-success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},convertCoordinatesFromUtm:function(t){},viewPoint:function(){this.ViewPoint=this.convertCoordinatesToUtm(this.temporalPoint)}}},d=n(89),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{"has-modal-card":"","can-cancel":!1,"full-screen":""},model:{value:t.activeModal,callback:function(e){t.activeModal=e},expression:"activeModal"}},[e("b-loading",{attrs:{"is-full-page":!1,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),t._v(" "),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s("Bitácora "+t.form.number)+"\n      ")])]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Estado de la bitácora")])]),t._v(" "),e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",[e("b-label",{attrs:{label:"Cambiar estado del recorrido"}},[e("b-select",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.options,(function(option){return e("option",{key:option.value,domProps:{value:option.value}},[t._v("\n                        "+t._s(option.label)+"\n                      ")])})),0)],1)],1),t._v(" "),e("div",[e("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:t.updateStatusBinnacle}})],1)]),t._v(" "),e("div",{staticClass:"level-right"})])])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Relatoría")])]),t._v(" "),e("div",{staticClass:"container"},[e("p",[t._v("\n                "+t._s(t.form.rapporteur?t.form.rapporteur:"No tiene relatoría")+"\n              ")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Datos generales")])]),t._v(" "),e("div",{staticClass:"container is-flex is-justify-content-center"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-datepicker",{attrs:{inline:""},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),t._v(" "),e("div",{staticClass:"column has-text-centered"},[e("div",[e("b-field",{attrs:{label:"Hora de inicio"}},[e("b-timepicker",{attrs:{inline:""},model:{value:t.form.hourInit,callback:function(e){t.$set(t.form,"hourInit",e)},expression:"form.hourInit"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("div",[e("b-field",{attrs:{label:"Hora de finalización"}},[e("b-timepicker",{attrs:{inline:""},model:{value:t.form.hourEnd,callback:function(e){t.$set(t.form,"hourEnd",e)},expression:"form.hourEnd"}})],1)],1)])])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Responsable")])]),t._v(" "),t.form.responsable?e("div",{staticClass:"container"},[e("p",[e("strong",[t._v("Nombre completo: ")]),t._v(t._s(t.form.responsable.name+" "+t.form.responsable.lastname))])]):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("No se registró el responsable")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Participantes")])]),t._v(" "),t.form.participants.length>0?e("div",{staticClass:"container"},t._l(t.form.participants,(function(n){return e("div",{key:n.idparticipants,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.name+" "+n.lastname)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-success is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.charge?n.charge.description:"Sin cargo")+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin participantes")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Vehículos")])]),t._v(" "),t.form.list_vehicle.length>0?e("div",{staticClass:"container"},t._l(t.form.list_vehicle,(function(n){return e("div",{key:n.idvehicle,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v(t._s(n.number))]),t._v(" "),e("b-tag",{attrs:{type:"is-info is-light",size:"is-medium"}},[t._v(t._s(n.plates))])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin vehículos")])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Vegetación")])]),t._v(" "),t.form.vegetableAffected.length>0?e("div",{staticClass:"container"},t._l(t.form.vegetableAffected,(function(n){return e("div",{key:n.idva,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.description)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-success is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.cientificName?n.cientificName:"Sin nombre científico")+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin vegetación")])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Zonas de vigilancia")])]),t._v(" "),t.form.list_operative_zones.length>0?e("div",{staticClass:"container"},t._l(t.form.list_operative_zones,(function(n){return e("div",{key:n.idoperative_zones,staticClass:"m-2"},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                  "+t._s(n.description)+"\n                ")])],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin zonas de vigilancia")])])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Zonificación y Subzonificación PM")])]),t._v(" "),t.form.temporalZoning.length>0?e("div",{staticClass:"container"},t._l(t.form.temporalZoning,(function(n){return e("div",{key:n.idsubzoning,staticClass:"m-2"},[e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.description)+"\n                  ")]),t._v(" "),e("b-tag",{attrs:{type:"is-info is-light",size:"is-medium"}},[t._v("\n                    "+t._s(n.zoning?n.zoning.description:"Sin zoníficacion asignada")+"\n                  ")])],1)],1)})),0):e("div",{staticClass:"container has-text-centered"},[e("p",[t._v("Sin zonificación y subzonificación PM")])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Coordenadas registradas")])]),t._v(" "),e("vl-map",{staticStyle:{height:"600px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[e("vl-view",{attrs:{zoom:t.zoom,center:t.center,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},"update:rotation":function(e){t.rotation=e}}}),t._v(" "),e("vl-layer-tile",[e("vl-source-osm")],1),t._v(" "),t.viewPoints?e("vl-feature",[e("vl-geom-multi-point",{attrs:{coordinates:t.pointsMap}})],1):t._e(),t._v(" "),e("vl-layer-vector",[e("vl-source-vector",{attrs:{features:t.features},on:{"update:features":function(e){t.features=e}}})],1)],1)],1)])]),t._v(" "),t.form.list_image&&t.form.list_image.length>0?e("div",{staticClass:"container"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Evidencias")])]),t._v(" "),t._l(t.form.list_image,(function(image){return e("div",{key:image,staticClass:"columns"},[image.path?e("figure",{staticClass:"image is-128x128"},[e("img",{attrs:{src:image.path}})]):t._e()])}))],2):e("div",{staticClass:"container"},[e("div",{staticClass:"divider"},[e("strong",[t._v("Evidencias")])]),t._v(" "),e("div",{staticClass:"has-text-centered"},[e("p",[t._v("Sin evidencias")])])]),t._v(" "),e("div",{staticClass:"has-text-centered m-2",staticStyle:{width:"100%"}},[e("b-button",{on:{click:t.close}},[e("strong",[t._v("Cerrar")])])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},788:function(t,e,n){var content=n(943);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(166).default)("21d9db90",content,!0,{sourceMap:!1})},942:function(t,e,n){"use strict";n(788)},943:function(t,e,n){var o=n(165),r=n(480),c=n(686),l=o((function(i){return i[1]})),d=r(c);l.push([t.i,".full-w{width:100%!important}.binnalces{height:650px;overflow-y:scroll}#map{min-height:75vh}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}",""]),l.locals={},t.exports=l}}]);