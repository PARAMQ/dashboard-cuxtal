(window.webpackJsonp=window.webpackJsonp||[]).push([[136,90],{1175:function(e,t,n){"use strict";n(891)},1176:function(e,t,n){var r=n(165),o=n(494),c=n(678),l=r((function(i){return i[1]})),d=o(c);l.push([e.i,".full-w{width:100%!important}.binnalces{height:650px;overflow-y:scroll}#map{min-height:75vh}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}",""]),l.locals={},e.exports=l},1244:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(38),n(117),n(129),n(497),n(389),n(60),n(35),n(684)),c=n(683),l={name:"EditPlanification",data:function(){return{idPlanification:this.$route.query.id,isLoadingBinnacles:!1,downloadFile:!1,activeViewModal:!1,activeModal:!1,plan:{},hasEdit:!1,indexBinnacle:0,idBinnacle:"",binnacleSelect:{},viewBinnacle:!1,zoom:12,center:[-89.60984537598705,20.85610769792424],temporalPoints:[[-89.60984537598705,20.85610769792424]],rotation:0,geolocPosition:void 0,arrayCoordinates:[],options:[{label:"En proceso",value:"process"},{label:"Finalizado",value:"finally"},{label:"Por comenzar",value:"active"}],features:[{type:"Feature",geometry:{type:"Polygon",coordinates:o}}]}},created:function(){},mounted:function(){this.getPlan()},methods:{getPlan:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoadingBinnacles=!0,t.next=4,e.$store.dispatch("modules/plans/readPlan",e.idPlanification);case 4:n=t.sent,e.plan=n,e.isLoadingBinnacles=!1,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.isLoadingBinnacles=!1;case 12:return t.prev=12,e.isLoadingBinnacles=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},refresh:function(){this.activeModal=!1,this.activeViewModal=!1,this.binnacleSelect={},this.plan={},this.getPlan()},editBinnacle:function(){},deleteBinnacle:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,data={idbinnacle:e},n.next=4,t.$store.dispatch("modules/binnacles/deleteBinnacle",data);case 4:t.$buefy.notification.open({message:"Bitácora eliminada",duration:2500,position:"is-bottom-right",type:"is-success",hasIcon:!0}),t.getPlan(),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},viewBinnalceObject:function(e){this.activeViewModal=!0,this.binnacleSelect=e},getWord:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,link,d,v,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n.isLoadingBinnacles=!0,n.downloadFile=!0,r.next=5,n.$store.dispatch("modules/binnacles/getWordBinnacle",e);case 5:o=r.sent,c=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),l=window.URL.createObjectURL(c),link=document.createElement("a"),d=t.substring(t.length-4,t.length),v=t.substring(0,t.length-4),m="bitácora_"+v+"-"+d+".docx",link.href=l,link.setAttribute("download",m),link.click(),window.URL.revokeObjectURL(l),n.isLoadingBinnacles=!1,n.downloadFile=!1,r.next=23;break;case 20:r.prev=20,r.t0=r.catch(0),n.downloadFile=!1;case 23:return r.prev=23,n.downloadFile=!1,r.finish(23);case 26:case"end":return r.stop()}}),r,null,[[0,20,23,26]])})))()},updateStatus:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/createOrUpdatePlan",e.plan);case 3:e.$buefy.toast.open({message:"¡Estado actualizado!",type:"is-success"}),e.getPlan(),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getBinnacle:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/getBinnacle",e);case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},viewInMap:function(option){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.viewBinnacle=!1,e.temporalPoints=[[-89.60984537598705,20.85610769792424]],t.next=4,e.getBinnacle(option);case 4:(n=t.sent).points=[],n.coordinates_binnacle.forEach((function(object){var t=[object.x,object.y],r=e.convertCoordinatesToUtm(t);n.points.push(r)})),n.points.length>0?(e.temporalPoints=n.points,e.viewBinnacle=!0):e.$buefy.notification.open({message:"La bitácora no contiene coordenadas.",duration:2500,position:"is-bottom-right",type:"is-warning",hasIcon:!0});case 9:case"end":return t.stop()}}),t)})))()},convertCoordinatesToUtm:function(e){var t=c.toLatLon(e[0],e[1],"16","T");return[t.longitude,t.latitude]},deletePlan:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/deletePlan",e.plan);case 3:e.$buefy.toast.open({message:"¡Planificación eliminada!",type:"is-success"}),e.$router.push("/calendar"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},d=(n(1175),n(89)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"section"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("strong",[e._v("Fecha de inicio: ")]),e._v(e._s(e._f("shortDate")(e.plan.start_date))+"\n        "),t("br"),e._v(" "),t("strong",[e._v("Fecha de finalización: ")]),e._v(e._s(e._f("shortDate")(e.plan.end_date))+"\n      ")]),e._v(" "),t("div",{staticClass:"column"},[t("strong",[e._v("Estado del recorrido: ")]),e._v(" "+e._s(e.plan.estatus&&"process"===e.plan.estatus?"En proceso":e.plan.estatus&&"finally"===e.plan.estatus?"Finalizado":e.plan.estatus&&"active"===e.plan.estatus?"Por comenzar":"Sin estado")+"\n      ")]),e._v(" "),t("div",{staticClass:"column"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",[t("b-label",{attrs:{label:"Cambiar estado del recorrido"}},[t("b-select",{model:{value:e.plan.estatus,callback:function(t){e.$set(e.plan,"estatus",t)},expression:"plan.estatus"}},e._l(e.options,(function(option){return t("option",{key:option.value,domProps:{value:option.value}},[e._v("\n                    "+e._s(option.label)+"\n                  ")])})),0)],1)],1),e._v(" "),t("div",[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.updateStatus}})],1)]),e._v(" "),t("div",{staticClass:"level-right"})])]),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{label:"Nueva bitácora",type:"is-light"},on:{click:function(t){e.activeModal=!0}}})],1)])]),e._v(" "),t("div",{staticClass:"columns",attrs:{id:"map"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoadingBinnacles,callback:function(t){e.isLoadingBinnacles=t},expression:"isLoadingBinnacles"}}),e._v(" "),t("div",{staticClass:"column is-4"},[t("div",{staticClass:"columns m-2"},[t("div",{staticClass:"column"},e._l(e.plan.binnacles,(function(n){return t("div",{key:n.idbinnacle},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level m-1 full-w"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",[e._v(e._s(n.number))])]),e._v(" "),t("div",{staticClass:"level-item"},["revisado"===n.status?t("b-tooltip",{attrs:{label:"Revisado",position:"is-left"}},[t("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}})],1):"en-revision"===n.status?t("b-tooltip",{attrs:{label:"En revisión",position:"is-left"}},[t("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-warning"}})],1):"por-revisar"===n.status?t("b-tooltip",{attrs:{label:"Por revisar",position:"is-left"}},[t("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-light"}})],1):t("b-tooltip",{attrs:{label:"Sin estado",position:"is-left"}},[t("b-icon",{attrs:{icon:"alert",size:"is-small",type:"is-danger"}})],1)],1)]),e._v(" "),t("div",{staticClass:"level-right"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-info is-light","icon-right":"eye-outline"},on:{click:function(t){return e.viewBinnalceObject(n)}}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-danger is-light","icon-right":"delete-empty-outline"},on:{click:function(t){return e.deleteBinnacle(n.idbinnacle)}}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-success is-light","icon-right":"file-word"},on:{click:function(t){return e.getWord(n.idbinnacle,n.number)}}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content",on:{click:function(t){return e.viewInMap(n.idbinnacle)}}},[t("p",[t("strong",[e._v("Fecha: ")]),e._v("\n                  "+e._s(n.date?n.date:"No hay fecha registrada")+"\n                ")]),e._v(" "),t("br"),e._v(" "),t("p",[t("strong",[e._v("Relatoría: ")]),e._v("\n                  "+e._s(n.rapporteur?n.rapporteur:"No hay relatoría")+"\n                ")])]),e._v(" "),t("div",{staticClass:"m-2"},[t("p",{staticClass:"has-text-grey"},[e._v("\n                  "+e._s(n.isextraordinary?"Bitácora extraordinaria":"Bitácora relacionada a un recorrido programado")+"\n                ")])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8"},[t("vl-map",{staticStyle:{height:"100%"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),e.viewBinnacle?t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.temporalPoints}})],1):e._e(),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1)],1)],1)],1),e._v(" "),t("view-binnacle",{attrs:{"active-modal":e.activeViewModal,"binnacle-object":e.binnacleSelect,"disable-form":!0},on:{close:e.refresh}}),e._v(" "),t("new-binnacle",{attrs:{"active-modal":e.activeModal,plannification:e.idPlanification,"is-extraordinary":!1},on:{close:e.refresh,save:e.refresh}}),e._v(" "),t("b-notification",{attrs:{type:"is-info is-light",closable:!1},model:{value:e.downloadFile,callback:function(t){e.downloadFile=t},expression:"downloadFile"}},[e._v("\n    Descargando bitácora\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ViewBinnacle:n(730).default,NewBinnacle:n(776).default})},678:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},730:function(e,t,n){"use strict";n.r(t);n(128),n(58),n(187);var r=n(5),o=(n(35),n(136),n(498),n(38),n(59),n(60),n(117),n(129),n(497),n(389),n(388),n(684)),c=(n(685),n(683)),l={name:"ViewBinnacle",props:{binnacleObject:{type:Object,default:{}},activeModal:{type:Boolean,default:!1},isExtraordinary:{type:Boolean,default:!1},disableForm:{type:Boolean,default:!0}},data:function(){return{form:{date:new Date,participant:null,participants:[],hourInit:new Date,hourEnd:new Date,temporalZoning:[],list_operative_zones:[],vegetableAffected:[],list_vehicle:[]},isLoading:!1,hourInit:new Date,hourEnd:new Date,isSwitched:!0,validateHours:!1,formCoord:{},temporalPoint:[224190.791,2311022.379],ViewPoint:[-89.60984537598705,20.85610769792424],pointsMap:[[-89.60984537598705,20.85610769792424]],viewPoints:!1,points:[],idPoints:[],zoom:12,center:[-89.60984537598705,20.85610769792424],rotation:0,zoning:[],charges:[],features:[{type:"Feature",geometry:{type:"Polygon",coordinates:o}}],estados:[{label:"Revisado",value:"revisado"},{label:"En revisión",value:"en-revision"},{label:"Por revisar",value:"por-revisar"}]}},watch:{activeModal:function(e,t){e&&this.getOneMoment(this.binnacleObject.idbinnacle)}},mounted:function(){this.getCharges(),this.getParticipants(),this.getZoning()},methods:{close:function(){this.form={date:new Date,participant:null,participants:[],participantsTemp:[],hourInit:new Date,hourEnd:new Date,temporalZoning:[],list_operative_zones:[],vegetableAffected:[],list_vehicle:[]},this.temporalPoint=[224190.791,2311022.379],this.ViewPoint=[-89.60984537598705,20.85610769792424],this.pointsMap=[[-89.60984537598705,20.85610769792424]],this.$emit("close")},getOneMoment:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.isLoading=!0,n.next=4,t.$store.dispatch("modules/binnacles/getBinnacle",e);case 4:r=n.sent,console.log(r),r.date=new Date(r.date),r.hourInit=new Date(r.hour_init),r.hourEnd=new Date(r.hour_end),o=r.participants.map((function(e){var n=t.charges.find((function(t){return t.idcharge===e.idcharge}));return e.charge=n,e})),r.temporalParticipants=o,c={},l=r.list_vegetable_affected.filter((function(e){var t=e.idva;return!c[t]&&(c[t]=!0,!0)})),r.idparticipants&&(r.responsable=t.participants.find((function(e){return e.idparticipants===r.idparticipants}))),r.vegetableAffected=l,d=r.list_subzones.map((function(e){var n=t.zoning.find((function(t){return t.idzoning===e.idzoning}));return e.zoning=n,e})),r.temporalZoning=d,t.viewPoints=!1,r.coordinates_binnacle&&r.coordinates_binnacle.length>0?(v=r.coordinates_binnacle,console.log(v),v.forEach((function(object){var e=[object.x,object.y],n=t.convertCoordinatesToUtm(e);r.points=[],r.points.push(n)})),t.pointsMap=r.points,t.viewPoints=!0):t.viewPoints=!1,t.isLoading=!1,r.is_processed=r.is_processed&&"Si"===r.is_processed?r.is_processed:"No",t.form=r,console.log(t.form),n.next=27;break;case 25:n.prev=25,n.t0=n.catch(0);case 27:case"end":return n.stop()}}),n,null,[[0,25]])})))()},convertCoordinatesToUtm:function(e){var t=c.toLatLon(e[0],e[1],"16","T");return[t.longitude,t.latitude]},getCharges:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/charges/getCharges");case 3:e.charges=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getZoning:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:e.zoning=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getParticipants:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/participants/getParticipants");case 3:n=t.sent,e.participants=n,e.participantsFilter=n,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},viewIamge:function(image){this.imageUrl=URL.createObjectURL(image)},deleteImage:function(object,e){var t=this;this.$swal.fire({title:"¿Deseas eliminar esta evidencia?",text:"No podrás revertir el cambio",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.isConfirmed){n.next=15;break}return t.form.list_image_deleted&&t.list_image_deleted.length>0?(t.form.list_image_deleted.push(object),t.form.list_image.splice(e,1)):(t.form.list_image_deleted=[],t.form.list_image_deleted.push(object),t.form.list_image.splice(e,1)),console.log(t.form),n.prev=3,n.next=6,t.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",t.form);case 6:t.getOneMoment(t.binnacleObject.idbinnacle),t.$buefy.toast.open({message:"Imágen borrada correctamente",type:"is-success"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),t.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 13:n.next=16;break;case 15:r.isDismissed;case 16:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}())},deletePoint:function(e){console.log(e)},updateStatusBinnacle:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.is_processed="Si"===e.form.is_processed?"1":"0",console.log(e.form),t.prev=2,t.next=5,e.$store.dispatch("modules/binnacles/createOrUpdateBinnacle",e.form);case 5:e.getOneMoment(e.binnacleObject.idbinnacle),e.$buefy.toast.open({message:"Actualizado correctamente",type:"is-success"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()},convertCoordinatesFromUtm:function(e){},viewPoint:function(){this.ViewPoint=this.convertCoordinatesToUtm(this.temporalPoint)}}},d=l,v=n(89),component=Object(v.a)(d,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"has-modal-card":"","can-cancel":!1,"full-screen":""},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!1,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"modal-card"},[t("header",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title"},[e._v("\n        "+e._s("Bitácora "+e.form.number)+"\n      ")])]),e._v(" "),t("section",{staticClass:"modal-card-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Estado de la bitácora")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Estado de la bitácora"}},[t("b-select",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.estados,(function(option){return t("option",{key:option.value,domProps:{value:option.value}},[e._v("\n                      "+e._s(option.label)+"\n                    ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"¿Fue procesado?"}},[t("b-checkbox",{attrs:{"true-value":"Si","false-value":"No"},model:{value:e.form.is_processed,callback:function(t){e.$set(e.form,"is_processed",t)},expression:"form.is_processed"}},[e._v("\n                    "+e._s(e.form.is_processed)+"\n                  ")])],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.updateStatusBinnacle}},[e._v("Guardar")])],1)])])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Relatoría")])]),e._v(" "),t("div",{staticClass:"container"},[t("p",[e._v("\n                "+e._s(e.form.rapporteur?e.form.rapporteur:"No tiene relatoría")+"\n              ")])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Datos generales")])]),e._v(" "),t("div",{staticClass:"container is-flex is-justify-content-center"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-datepicker",{attrs:{inline:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),t("div",{staticClass:"column has-text-centered"},[t("div",[t("b-field",{attrs:{label:"Hora de inicio"}},[t("b-timepicker",{attrs:{inline:""},model:{value:e.form.hourInit,callback:function(t){e.$set(e.form,"hourInit",t)},expression:"form.hourInit"}})],1)],1),e._v(" "),t("br"),e._v(" "),t("div",[t("b-field",{attrs:{label:"Hora de finalización"}},[t("b-timepicker",{attrs:{inline:""},model:{value:e.form.hourEnd,callback:function(t){e.$set(e.form,"hourEnd",t)},expression:"form.hourEnd"}})],1)],1)])])])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Responsable")])]),e._v(" "),e.form.responsable?t("div",{staticClass:"container"},[t("p",[t("strong",[e._v("Nombre completo: ")]),e._v(e._s(e.form.responsable.name+" "+e.form.responsable.lastname)+"\n              ")])]):t("div",{staticClass:"container has-text-centered"},[t("p",[e._v("No se registró el responsable")])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Participantes")])]),e._v(" "),e.form.participants.length>0?t("div",{staticClass:"container"},e._l(e.form.participants,(function(n){return t("div",{key:n.idparticipants,staticClass:"m-2"},[t("b-taglist",{attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.name+" "+n.lastname)+"\n                  ")]),e._v(" "),t("b-tag",{attrs:{type:"is-success is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.charge?n.charge.description:"Sin cargo")+"\n                  ")])],1)],1)})),0):t("div",{staticClass:"container has-text-centered"},[t("p",[e._v("Sin participantes")])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Vehículos")])]),e._v(" "),e.form.list_vehicle.length>0?t("div",{staticClass:"container"},e._l(e.form.list_vehicle,(function(n){return t("div",{key:n.idvehicle,staticClass:"m-2"},[t("b-taglist",{attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.number)+"\n                  ")]),e._v(" "),t("b-tag",{attrs:{type:"is-info is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.plates)+"\n                  ")])],1)],1)})),0):t("div",{staticClass:"container has-text-centered"},[t("p",[e._v("Sin vehículos")])])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Vegetación")])]),e._v(" "),e.form.vegetableAffected.length>0?t("div",{staticClass:"container"},e._l(e.form.vegetableAffected,(function(n){return t("div",{key:n.idva,staticClass:"m-2"},[t("b-taglist",{attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.description)+"\n                  ")]),e._v(" "),t("b-tag",{attrs:{type:"is-success is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.cientificName?n.cientificName:"Sin nombre científico")+"\n                  ")])],1)],1)})),0):t("div",{staticClass:"container has-text-centered"},[t("p",[e._v("Sin vegetación")])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Zonas de vigilancia")])]),e._v(" "),e.form.list_operative_zones.length>0?t("div",{staticClass:"container"},e._l(e.form.list_operative_zones,(function(n){return t("div",{key:n.idoperative_zones,staticClass:"m-2"},[t("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[e._v("\n                  "+e._s(n.description)+"\n                ")])],1)})),0):t("div",{staticClass:"container has-text-centered"},[t("p",[e._v("Sin zonas de vigilancia")])])]),e._v(" "),t("div",{staticClass:"column is-6"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Zonificación y Subzonificación PM")])]),e._v(" "),e.form.temporalZoning.length>0?t("div",{staticClass:"container"},e._l(e.form.temporalZoning,(function(n){return t("div",{key:n.idsubzoning,staticClass:"m-2"},[t("b-taglist",{attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.description)+"\n                  ")]),e._v(" "),t("b-tag",{attrs:{type:"is-info is-light",size:"is-medium"}},[e._v("\n                    "+e._s(n.zoning?n.zoning.description:"Sin zoníficacion asignada")+"\n                  ")])],1)],1)})),0):t("div",{staticClass:"container has-text-centered"},[t("p",[e._v("Sin zonificación y subzonificación PM")])])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"columns"},e._l(e.points,(function(n){return t("div",{key:n.name,staticClass:"container m-3"},[t("div",{staticClass:"control"},[t("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""},on:{close:e.deletePoint}},[e._v("\n                    "+e._s(n.name)+"\n                  ")])],1)])})),0),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Coordenadas registradas")])]),e._v(" "),t("vl-map",{staticStyle:{height:"600px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),e.viewPoints?t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.pointsMap}}),e._v(" "),t("vl-style",[t("vl-style-circle",{attrs:{radius:5}},[t("vl-style-fill",{attrs:{color:"red"}}),e._v(" "),t("vl-style-stroke",{attrs:{color:"red"}})],1)],1)],1):e._e(),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1)],1)],1)])]),e._v(" "),e.form.list_image&&e.form.list_image.length>0?t("div",[t("div",{staticClass:"divider"},[t("strong",[e._v("Evidencias")])]),e._v(" "),e._l(e.form.list_image,(function(image,n){return t("div",{key:n,staticClass:"columns"},[t("div",{staticClass:"column is-2"},[image.path?t("figure",{staticClass:"image is-128x128"},[t("img",{attrs:{src:image.path}})]):e._e()]),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:function(t){return e.deleteImage(image,n)}}})],1)])}))],2):t("div",{staticClass:"container"},[t("div",{staticClass:"divider"},[t("strong",[e._v("Evidencias")])]),e._v(" "),t("div",{staticClass:"has-text-centered"},[t("p",[e._v("Sin evidencias")])])]),e._v(" "),t("div",{staticClass:"has-text-centered m-2",staticStyle:{width:"100%"}},[t("b-button",{on:{click:e.close}},[t("strong",[e._v("Cerrar")])])],1)])])],1)}),[],!1,null,null,null);t.default=component.exports},891:function(e,t,n){var content=n(1176);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(166).default)("4ac62584",content,!0,{sourceMap:!1})}}]);