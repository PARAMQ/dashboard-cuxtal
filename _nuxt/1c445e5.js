(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1194:function(e,t,n){"use strict";n.r(t);n(58),n(187),n(128);var o=n(5),r=(n(498),n(38),n(60),n(136),n(59),n(207),n(237),n(238),n(117),n(129),n(497),n(389),n(388),n(35),n(684)),c=(n(685),n(683)),l={name:"NewIncident",props:{activeModal:{default:!1,type:Boolean},incidentObject:{type:Object,default:{}}},data:function(){return{isLoading:!1,form:{},tenenciaPredio:[{id:1,description:"Privado"},{id:2,description:"Publico"}],fileRespuesta:{},fileTramite:{},fileDenuncia:{},vegetation:[],filterVegetable:[],dependences:[],legalZones:[],subZones:[],opZones:[],filteredOpZone:[],filteredLegalZones:[],tablaje:[],filteredSubZones:[],ilicits:[],govLevels:[],tenures:[],responses:[],formCoord:{},isSwitched:!0,temporalPoint:[224190.791,2311022.379],ViewPoint:[-89.60984537598705,20.85610769792424],pointsMap:[[-89.60984537598705,20.85610769792424]],points:[],idPoints:[],activePoints:!1,zoom:12,filterTablaje:[],center:[-89.60984537598705,20.85610769792424],rotation:0,features:[{type:"Feature",geometry:{type:"Polygon",coordinates:r}}]}},watch:{activeModal:function(e,t){e&&this.getIncident(this.incidentObject)}},mounted:function(){this.getTablaje(),this.getVegetation(),this.getDependences(),this.getLegalZones(),this.getSubZones(),this.getOpZones(),this.getTenures(),this.getGovLevels(),this.getIlicitsDenounced(),this.getResponses(),this.getUser()},methods:{close:function(){this.form={},this.fileDenuncia={},this.fileRespuesta={},this.fileTramite={},this.activePoints=!1,this.pointsMap=[],this.$emit("close")},getUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/users/getData");case 3:n=t.sent,e.form.iduser=n.idusers,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getIncident:function(object){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,console.log(object),t.next=5,e.$store.dispatch("modules/complaint/getInfoComplaint",object.idcomplaint);case 5:if(n=t.sent,console.log(n),n.date=n.date?new Date(n.date):null,n.date_reception=n.date_reception?new Date(n.date_reception):null,n.response_date=n.response_date?new Date(n.response_date):null,n.tenure=n.idtenure?e.tenures.find((function(e){return e.idtenure===n.idtenure})):null,n.depto=n.iddepto?e.dependences.find((function(e){return e.idcoordination===n.iddepto})):null,n.level=n.idgov_level?e.govLevels.find((function(e){return e.idgov_level===n.idgov_level})):null,n.ilicit=n.idilicit_denounced?e.ilicits.find((function(e){return e.idilicit_denounced===n.idilicit_denounced})):null,n.list_subzoning_complaint&&n.list_subzoning_complaint.length>0&&(n.zoning=[],console.log(e.legalZones),e.legalZones.forEach((function(e){console.log(e),n.list_subzoning_complaint.find((function(t){return t.idzoning===e.idzoning}))&&n.zoning.push(e)}))),n.list_complaint_cadastral_record&&n.list_complaint_cadastral_record.length>0&&(o=n.list_complaint_cadastral_record.map((function(object){return e.tablaje.find((function(e){return e.idcadastral_record===object.idcadastral_record}))})),n.list_complaint_cadastral_record=o),!(n.complaint_coordinates&&n.complaint_coordinates.length>0)){t.next=25;break}if(e.pointsMap=n.complaint_coordinates.map((function(t){return e.convertCoordinatesToUtm([t.x,t.y])})),!n.idbinnacle){t.next=23;break}return t.next=21,e.$store.dispatch("modules/binnacles/getBinnacle",n.idbinnacle);case 21:r=t.sent,n.binnacle=r.number;case 23:console.log(e.pointsMap),e.activePoints=!0;case 25:e.form=n,console.log(e.form),e.isLoading=!1,t.next=33;break;case 30:t.prev=30,t.t0=t.catch(0),console.log(t.t0);case 33:case"end":return t.stop()}}),t,null,[[0,30]])})))()},getTablaje:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.tablaje=[],t.next=4,e.$store.dispatch("modules/tablaje/getTablajes");case 4:n=t.sent,e.tablaje=n,e.filterTablaje=n,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},filterTablajeFun:function(text){this.filterTablaje=this.tablaje.filter((function(option){if(option.name&&option.name.toString().toLowerCase().includes(text.toLowerCase()))return option}))},createOrUpdate:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.form.complaint_coordinates=e.points,n=e.form.complaint_va,delete e.form.complaint_va,t.next=7,e.$store.dispatch("modules/complaint/createOrUpdateComplaint",e.form);case 7:if(o=t.sent,!(n&&n.length>0)){t.next=13;break}return e.form.complaint_va=n.map((function(e){return{idva:e.idva,idcomplaint:o}})),e.form.idcomplaint=o,t.next=13,e.$store.dispatch("modules/complaint/createOrUpdateComplaint",e.form);case 13:if(!(e.fileDenuncia.name||e.fileRespuesta.name||e.fileTramite.name)){t.next=16;break}return t.next=16,e.uploadFiles(e.form.code,o);case 16:e.form={},e.fileDenuncia={},e.fileRespuesta={},e.fileTramite={},e.isLoading=!1,e.$buefy.toast.open({message:"Denuncia guardada!",type:"is-success"}),e.$emit("save"),t.next=29;break;case 25:t.prev=25,t.t0=t.catch(0),e.isLoading=!1,e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 29:return t.prev=29,e.isLoading=!1,t.finish(29);case 32:case"end":return t.stop()}}),t,null,[[0,25,29,32]])})))()},uploadFiles:function(code,e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,l,d,f,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(o=new FormData).append("idcomplaint",e),t.fileDenuncia.name&&(r="oficioDenuncia_"+code+"_"+t.fileDenuncia.name,c=new File([t.fileDenuncia],r,{type:t.fileDenuncia.type}),o.append("complaint_doc",c),t.fileDenuncia={}),t.fileRespuesta.name&&(l="oficioRespuesta_"+code+"_"+t.fileRespuesta.name,d=new File([t.fileRespuesta],l,{type:t.fileRespuesta.type}),o.append("response_doc",d),t.fileRespuesta={}),t.fileTramite.name&&(f="oficioTramite_"+code+"_"+t.fileTramite.name,m=new File([t.fileTramite],f,{type:t.fileTramite.type}),o.append("tramit_conlusion",m),t.fileTramite={}),n.next=8,t.$store.dispatch("modules/complaint/updateFilesComplaint",o);case 8:n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()},downloadFile:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e);case 3:return o=n.sent,n.next=6,o.blob();case 6:r=n.sent,c=window.URL.createObjectURL(r),(a=document.createElement("a")).href=c,a.download=t,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(c),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.error("Error al descargar el archivo:",n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()},getVegetation:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/vegetation/getVegetations");case 3:e.vegetation=t.sent,e.filterVegetable=e.vegetation,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getDependences:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/coordinations/getCoordinations");case 3:e.dependences=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getResponses:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/response/getResponses");case 3:e.responses=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getTenures:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/tenure/getTenures");case 3:e.tenures=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getGovLevels:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/gobLevel/getGobLevels");case 3:e.govLevels=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getIlicitsDenounced:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/ilicitDenounced/getIlicitDenounceds");case 3:e.ilicits=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getLegalZones:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:e.legalZones=t.sent,e.filteredLegalZones=e.legalZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getSubZones:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getSubZones");case 3:e.subZones=t.sent,e.filteredSubZones=e.subZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getOpZones:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/operativeZones/getZones");case 3:e.opZones=t.sent,e.filteredOpZone=e.opZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},filterVegetableFun:function(text){this.filterVegetable=this.vegetation.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterOpZone:function(text){this.filteredOpZone=this.opZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterLegalZone:function(text){this.filteredLegalZones=this.legalZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterSubzone:function(text){this.filteredSubZone=this.subZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},addPoint:function(){if(this.formCoord.name&&""!==this.formCoord.name){if(0===this.points.length){var e=this.convertCoordinatesToUtm([this.temporalPoint[0],this.temporalPoint[1]]);this.pointsMap=[e]}else{var t=this.convertCoordinatesToUtm([this.temporalPoint[0],this.temporalPoint[1]]);this.pointsMap.push(t)}this.formCoord.x=this.temporalPoint[0],this.formCoord.y=this.temporalPoint[1],this.points.push(this.formCoord),this.formCoord={name:"",x:0,y:0},this.temporalPoint=[224190.791,2311022.379]}else this.$buefy.toast.open({duration:4e3,message:"Es necesario asignar un nombre a las coordenadas",position:"is-bottom",type:"is-danger"})},deletePoint:function(e){1===this.pointsMap.length?(this.points=[],this.pointsMap=[[-89.60984537598705,20.85610769792424]]):(this.points.splice(e,1),this.pointsMap.splice(e,1))},createPoints:function(e,t){var n=this,r=e;try{r.forEach(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$store.dispatch("modules/coordinates/createOrUpdateCoordinate",o);case 2:r=e.sent,n.idPoints.push({idcoordinates:r,idbinnacle:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(e){this.$buefy.toast.open({message:"No se pudieron agregar las coordenadas, intente nuevamente",type:"is-danger"})}},viewPoints:function(option){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.viewComplaint=!1,e.temporalPoints=[[-89.60984537598705,20.85610769792424]],t.next=4,e.getComplaint(option);case 4:(n=t.sent).points=[],n.complaint_coordinates&&n.complaint_coordinates.length>0?(n.complaint_coordinates.forEach((function(object){var t=[object.x,object.y],o=e.convertCoordinatesToUtm(t);n.points.push(o)})),e.temporalPoints=n.points,e.viewComplaint=!0):e.$buefy.notification.open({message:"La denuncia no contiene coordenadas.",duration:2500,position:"is-bottom-right",type:"is-warning",hasIcon:!0});case 7:case"end":return t.stop()}}),t)})))()},convertCoordinatesToUtm:function(e){var t=c.toLatLon(e[0],e[1],"16","T");return[t.longitude,t.latitude]},convertCoordinatesFromUtm:function(e){},viewPoint:function(){this.ViewPoint=this.convertCoordinatesToUtm(this.temporalPoint)}}},d=l,f=n(89),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"full-screen":!0,"destroy-on-hide":!1,"can-cancel":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"modal-card"},[t("div",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title"},[e._v("\n        Visualizar Denuncia\n      ")])]),e._v(" "),t("div",{staticClass:"modal-card-body"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"divider"},[t("strong",[e._v("Datos generales")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Número de oficio"}},[t("p",[e._v(e._s(e.form.code))])])],1),e._v(" "),t("div",{staticClass:"column"},[e.form.binnacle?t("p",[t("strong",[e._v("Bitácora relacionada")]),e._v(": "+e._s(e.form.binnacle)+"\n            ")]):t("p",[e._v("\n              No hay relación con alguna bitácora\n            ")])]),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha de oficio de denuncia"}},[t("b-datepicker",{attrs:{placeholder:"Haz click aquí para seleccionar fecha",icon:"calendar-today"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha de recepción de denuncia"}},[t("b-datepicker",{attrs:{placeholder:"Haz click aquí para seleccionar fecha",icon:"calendar-today"},model:{value:e.form.date_reception,callback:function(t){e.$set(e.form,"date_reception",t)},expression:"form.date_reception"}})],1)],1)]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-9"},[t("b-field",{attrs:{label:"Dirección del predio"}},[t("p",[e._v(e._s(e.form.address))])])],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Tenencia del predio"}},[t("b-tag",{attrs:{size:"is-medium"}},[e._v(e._s(e.form.idtenure?e.form.tenure.description:"Sin tenencia de predio"))])],1)],1)]),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Denuncia presentada ante"}},[t("b-tag",{attrs:{size:"is-medium"}},[e._v(e._s(e.form.iddepto?e.form.depto.description:"Sin dependencia seleccionada"))])],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Nivel de gobierno"}},[t("b-tag",{attrs:{size:"is-medium"}},[e._v(e._s(e.form.idgov_level?e.form.level.description:"Sin dependencia seleccionada"))])],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Ilícito ambiental denunciado"}},[t("b-tag",{attrs:{size:"is-medium"}},[e._v(e._s(e.form.idilicit_denounced?e.form.ilicit.description:"Sin dependencia seleccionada"))])],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Tablajes")])]),e._v(" "),t("div",[t("b-field",{attrs:{label:"tablajes"}},[t("b-taginput",{attrs:{data:e.filterTablaje,field:"name",autocomplete:"","open-on-focus":!0,closable:!1},on:{typing:e.filterTablajeFun},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.name))])]}},{key:"empty",fn:function(){return[e._v("\n                  Sin resultados\n                ")]},proxy:!0}]),model:{value:e.form.list_complaint_cadastral_record,callback:function(t){e.$set(e.form,"list_complaint_cadastral_record",t)},expression:"form.list_complaint_cadastral_record"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Vegetación")])]),e._v(" "),t("div",[t("b-field",{attrs:{label:"Vegetación afectada"}},[t("b-taginput",{attrs:{data:e.filterVegetable,field:"description",autocomplete:"","open-on-focus":!0,closable:!1},on:{typing:e.filterVegetableFun},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                Sin resultados\n              ")]},proxy:!0}]),model:{value:e.form.complaint_va,callback:function(t){e.$set(e.form,"complaint_va",t)},expression:"form.complaint_va"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Zonas")])]),e._v(" "),t("div",[t("b-field",{attrs:{horizontal:"",label:"Zonas de vigilancia"}},[t("b-taginput",{attrs:{data:e.filteredOpZone,field:"description",autocomplete:"","open-on-focus":!0,closable:!1},on:{typing:e.filterOpZone},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                Sin resultados\n              ")]},proxy:!0}]),model:{value:e.form.list_complaint_operative_zone,callback:function(t){e.$set(e.form,"list_complaint_operative_zone",t)},expression:"form.list_complaint_operative_zone"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Zonificación PM"}},[t("b-taginput",{attrs:{data:e.filteredLegalZones,field:"description",autocomplete:"","open-on-focus":!0,closable:!1},on:{typing:e.filterLegalZone},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                Sin resultados\n              ")]},proxy:!0}]),model:{value:e.form.zoning,callback:function(t){e.$set(e.form,"zoning",t)},expression:"form.zoning"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Subzoninifcación PM"}},[t("b-taginput",{attrs:{data:e.filteredSubZones,field:"description",autocomplete:"","open-on-focus":!0,closable:!1},on:{typing:e.filterSubzone},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                Sin resultados\n              ")]},proxy:!0}]),model:{value:e.form.list_subzoning_complaint,callback:function(t){e.$set(e.form,"list_subzoning_complaint",t)},expression:"form.list_subzoning_complaint"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Coordenadas")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("vl-map",{staticStyle:{height:"600px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),e.activePoints?t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.pointsMap}}),e._v(" "),t("vl-style",[t("vl-style-circle",{attrs:{radius:5}},[t("vl-style-fill",{attrs:{color:"red"}}),e._v(" "),t("vl-style-stroke",{attrs:{color:"red"}})],1)],1)],1):e._e(),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1)],1)],1)]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Seguimiento")])]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Oficio de respuesta"}},[t("b-input",{attrs:{name:"nivel",type:"text",required:"",disabled:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Fecha de respuesta"}},[t("b-datepicker",{attrs:{placeholder:"Seleccione una fecha",icon:"calendar-today",editable:""},model:{value:e.form.response_date,callback:function(t){e.$set(e.form,"response_date",t)},expression:"form.response_date"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Respuesta"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.response,callback:function(t){e.$set(e.form,"response",t)},expression:"form.response"}},e._l(e.responses,(function(option){return t("option",{key:option.idresponse,domProps:{value:option.idresponse}},[e._v("\n                    "+e._s(option.description)+"\n                  ")])})),0)],1)],1)])]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Documentos")])]),e._v(" "),t("div",{staticClass:"columns has-text-centered"},[t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Oficio de denuncia"}},[e.form.complaint_doc?t("b-button",{on:{click:function(t){return e.downloadFile(e.form.complaint_doc,"denuncia")}}},[e._v("Descargar archivo")]):t("b-tag",[e._v("Sin archivo")])],1)],1),e._v(" "),t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Oficio de respuesta"}},[e.form.response_doc?t("b-button",{on:{click:function(t){return e.downloadFile(e.form.response_doc,"respuesta")}}},[e._v("Descargar archivo")]):t("b-tag",[e._v("Sin archivo")])],1)],1),e._v(" "),t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Conclusión de trámite"}},[e.form.tramit_conclusion?t("b-button",{on:{click:function(t){return e.downloadFile(e.form.tramit_conclusion,"tramite")}}},[e._v("Descargar archivo")]):t("b-tag",[e._v("Sin archivo")])],1)],1)]),e._v(" "),t("div",{staticClass:"container m-2 has-text-centered"},[t("b-button",{on:{click:e.close}},[t("strong",[e._v("Cerrar")])])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);