(window.webpackJsonp=window.webpackJsonp||[]).push([[8,22,25,33,36,92],{1190:function(e,t,n){"use strict";n.r(t);n(58),n(187),n(128);var o=n(5),r=(n(59),n(38),n(207),n(237),n(238),n(136),n(388),n(60),n(498),n(35),n(684)),l=(n(685),n(683)),c={name:"NewIncident",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isLoading:!1,form:{},tenenciaPredio:[{id:1,description:"Privado"},{id:2,description:"Publico"}],tablaje:[],filterTablaje:[],activeViewPoint:!1,fileRespuesta:{},fileTramite:{},fileDenuncia:{},vegetation:[],filterVegetable:[],dependences:[],legalZones:[],legalZone:{},subZones:[],opZones:[],filteredOpZone:[],filteredLegalZones:[],filteredSubZones:[],binnacles:[],filterBinnacles:[],ilicits:[],govLevels:[],tenures:[],responses:[],formCoord:{},isSwitched:!0,temporalPoint:[224190.791,2311022.379],ViewPoint:[-89.60984537598705,20.85610769792424],pointsMap:[[-89.60984537598705,20.85610769792424]],points:[],idPoints:[],zoom:12,center:[-89.60984537598705,20.85610769792424],rotation:0,features:[{type:"Feature",geometry:{type:"Polygon",coordinates:r}}]}},watch:{activeModal:function(e,t){e&&this.$buefy.snackbar.open("Recuerda subir los documentos en PDF.")}},mounted:function(){this.getBinnacles(),this.getVegetation(),this.getDependences(),this.getLegalZones(),this.getSubZones(),this.getOpZones(),this.getTenures(),this.getGovLevels(),this.getIlicitsDenounced(),this.getResponses(),this.getUser(),this.getTablaje()},methods:{getTablaje:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.tablaje=[],t.next=4,e.$store.dispatch("modules/tablaje/getTablajes");case 4:n=t.sent,e.tablaje=n,e.filterTablaje=n,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},filterTablajeFun:function(text){this.filterTablaje=this.tablaje.filter((function(option){if(option.name&&option.name.toString().toLowerCase().includes(text.toLowerCase()))return option}))},close:function(){this.form={},this.fileDenuncia={},this.fileRespuesta={},this.fileTramite={},this.activeViewPoint=!1,this.pointsMap=[[-89.60984537598705,20.85610769792424]],this.points=[],this.$emit("close")},getUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/users/getData");case 3:n=t.sent,e.form.iduser=n.idusers,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},createOrUpdate:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.form.complaint_coordinates=e.points,n=e.form.complaint_va,delete e.form.complaint_va,t.next=7,e.$store.dispatch("modules/complaint/createOrUpdateComplaint",e.form);case 7:if(o=t.sent,!(n&&n.length>0)){t.next=16;break}return t.next=11,e.$store.dispatch("modules/complaint/getInfoComplaint",o);case 11:return(r=t.sent).complaint_va=n.map((function(e){return{idva:e.idva,idcomplaint:o}})),r.idcomplaint=o,t.next=16,e.$store.dispatch("modules/complaint/createOrUpdateComplaint",r);case 16:if(!(e.fileDenuncia.name||e.fileRespuesta.name||e.fileTramite.name)){t.next=19;break}return t.next=19,e.uploadFiles(e.form.code,o);case 19:e.form={},e.fileDenuncia={},e.fileRespuesta={},e.fileTramite={},e.activeViewPoint=!1,e.isLoading=!1,e.$buefy.toast.open({message:"Denuncia guardada!",type:"is-success"}),e.$emit("save"),t.next=33;break;case 29:t.prev=29,t.t0=t.catch(0),e.isLoading=!1,e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 33:return t.prev=33,e.isLoading=!1,t.finish(33);case 36:case"end":return t.stop()}}),t,null,[[0,29,33,36]])})))()},uploadFiles:function(code,e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,l,c,d,f,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(o=new FormData).append("idcomplaint",e),t.fileDenuncia.name&&(r="oficioDenuncia_"+code+"_"+t.fileDenuncia.name,l=new File([t.fileDenuncia],r,{type:t.fileDenuncia.type}),o.append("complaint_doc",l),t.fileDenuncia={}),t.fileRespuesta.name&&(c="oficioRespuesta_"+code+"_"+t.fileRespuesta.name,d=new File([t.fileRespuesta],c,{type:t.fileRespuesta.type}),o.append("response_doc",d),t.fileRespuesta={}),t.fileTramite.name&&(f="oficioTramite_"+code+"_"+t.fileTramite.name,m=new File([t.fileTramite],f,{type:t.fileTramite.type}),o.append("tramit_conlusion",m),t.fileTramite={}),n.next=8,t.$store.dispatch("modules/complaint/updateFilesComplaint",o);case 8:n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getVegetation:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/vegetation/getVegetations");case 3:e.vegetation=t.sent,e.filterVegetable=e.vegetation,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getDependences:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/coordinations/getCoordinations");case 3:e.dependences=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getResponses:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/response/getResponses");case 3:e.responses=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getTenures:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/tenure/getTenures");case 3:e.tenures=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getGovLevels:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/gobLevel/getGobLevels");case 3:e.govLevels=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getIlicitsDenounced:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/ilicitDenounced/getIlicitDenounceds");case 3:e.ilicits=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getLegalZones:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:e.legalZones=t.sent,e.filteredLegalZones=e.legalZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getSubZones:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getSubZones");case 3:e.subZones=t.sent,e.filteredSubZones=e.subZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getOpZones:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/operativeZones/getZones");case 3:e.opZones=t.sent,e.filteredOpZone=e.opZones,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},filterVegetableFun:function(text){this.filterVegetable=this.vegetation.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterOpZone:function(text){this.filteredOpZone=this.opZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterLegalZone:function(text){this.filteredLegalZones=this.legalZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},filterSubzone:function(text){this.filteredSubZone=this.subZones.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},addPoint:function(){if(this.activeViewPoint=!1,this.formCoord.description&&""!==this.formCoord.description){if(0===this.points.length){var e=this.convertCoordinatesToUtm([this.temporalPoint[0],this.temporalPoint[1]]);this.pointsMap=[e]}else{var t=this.convertCoordinatesToUtm([this.temporalPoint[0],this.temporalPoint[1]]);this.pointsMap.push(t)}this.formCoord.x=this.temporalPoint[0],this.formCoord.y=this.temporalPoint[1],this.points.push(this.formCoord),this.formCoord={name:"",x:0,y:0},this.temporalPoint=[224190.791,2311022.379]}else this.$buefy.toast.open({duration:4e3,message:"Es necesario asignar un nombre a las coordenadas",position:"is-bottom",type:"is-danger"})},deletePoint:function(e){1===this.pointsMap.length?(this.points=[],this.pointsMap=[[-89.60984537598705,20.85610769792424]]):(this.points.splice(e,1),this.pointsMap.splice(e,1))},createPoints:function(e,t){var n=this,r=e;try{r.forEach(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$store.dispatch("modules/coordinates/createOrUpdateCoordinate",o);case 2:r=e.sent,n.idPoints.push({idcoordinates:r,idbinnacle:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(e){this.$buefy.toast.open({message:"No se pudieron agregar las coordenadas, intente nuevamente",type:"is-danger"})}},convertCoordinatesToUtm:function(e){var t=l.toLatLon(e[0],e[1],"16","T");return[t.longitude,t.latitude]},convertCoordinatesFromUtm:function(e){},viewPoint:function(){this.activeViewPoint=!1,this.ViewPoint=this.convertCoordinatesToUtm(this.temporalPoint),this.activeViewPoint=!0},getBinnacles:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/binnacles/getBinnacles");case 3:n=t.sent,e.binnacles=n,e.filterBinnacles=n,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},filterBinnacle:function(text){this.filterBinnacles=this.binnacles.filter((function(option){if(option.number&&option.number.toString().toLowerCase().includes(text.toLowerCase()))return option}))},selectOption:function(e){this.filteredSubZones=this.subZones.filter((function(option){if(option.idzoning&&option.idzoning===e)return option}))},selectBinnacle:function(option){var e=this;option&&(this.form.idbinnacle=option.idbinnacle,option.list_operative_zones&&(this.form.list_complaint_operative_zone=option.list_operative_zones.map((function(e){return delete e.idbinnacle,delete e.idoperative_zones_binnacle,e}))),option.list_subzones&&(this.form.list_subzoning_complaint=option.list_subzones.map((function(e){return delete e.idbinnacle,delete e.idsubzoning_binnacle,e}))),option.list_vegetable_affected&&(this.form.complaint_va=option.list_vegetable_affected.map((function(e){return delete e.idbinnacle,delete e.idva_binnacle,delete e.ischecked,e}))),option.coordinates_binnacle&&(this.points=[],option.coordinates_binnacle.forEach((function(t){if(0===e.points.length){t.description=t.name,delete t.idbinnacle,delete t.idcoordinates;var n=e.convertCoordinatesToUtm([t.x,t.y]);e.pointsMap=[n],e.points.push(t)}else if(!option.coordinates_binnacle.find((function(e){return e.x===t.x&&e.y===t.y}))){t.description=t.name,delete t.idbinnacle,delete t.idcoordinates;var o=e.convertCoordinatesToUtm([t.x,t.y]);e.pointsMap.push(o),e.points.push(t)}}))))}}},d=c,f=n(89),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"full-screen":!0,"destroy-on-hide":!1,"can-cancel":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"modal-card"},[t("div",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title"},[e._v("\n        Nueva denuncia\n      ")])]),e._v(" "),t("div",{staticClass:"modal-card-body"},[t("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(n){var o=n.handleSubmit;return[t("form",{on:{submit:function(e){return e.preventDefault(),o.apply(null,arguments)}}},[t("div",{staticClass:"divider"},[t("strong",[e._v("Datos generales")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("BInputWithValidation",{attrs:{label:"Número de oficio",name:"número de oficio",rules:"required",normal:""},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Bitácora"}},[t("b-autocomplete",{attrs:{data:e.filterBinnacles,icon:"magnify",clearable:"",field:"number","open-on-focus":""},on:{typing:e.filterBinnacle,select:e.selectBinnacle},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v("\n                    No hay resultados\n                  ")]},proxy:!0}],null,!0)})],1),e._v(" "),t("b-tooltip",{attrs:{label:"Si vinculas una bitácora, usará las zonas operativas, zonificación y subzonificación PM registrado en el.",position:"is-right"}},[t("b-icon",{attrs:{icon:"help",size:"is-small"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha de oficio de denuncia"}},[t("b-datepicker",{attrs:{placeholder:"Haz click aquí para seleccionar fecha",icon:"calendar-today"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha de recepción de denuncia"}},[t("b-datepicker",{attrs:{placeholder:"Haz click aquí para seleccionar fecha",icon:"calendar-today"},model:{value:e.form.date_reception,callback:function(t){e.$set(e.form,"date_reception",t)},expression:"form.date_reception"}})],1)],1)]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-9"},[t("b-field",{attrs:{label:"Dirección del predio"}},[t("b-input",{attrs:{name:"predio",type:"text",required:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Tenencia del predio"}},[t("b-select",{attrs:{placeholder:"Selecciona una opción"},model:{value:e.form.idtenure,callback:function(t){e.$set(e.form,"idtenure",t)},expression:"form.idtenure"}},e._l(e.tenures,(function(option){return t("option",{key:option.idtenure,domProps:{value:option.idtenure}},[e._v("\n                      "+e._s(option.description)+"\n                    ")])})),0)],1)],1)]),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Denuncia presentada ante"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.iddepto,callback:function(t){e.$set(e.form,"iddepto",t)},expression:"form.iddepto"}},e._l(e.dependences,(function(option){return t("option",{key:option.idcoordination,domProps:{value:option.idcoordination}},[e._v("\n                  "+e._s(option.description)+"\n                ")])})),0)],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Nivel de gobierno"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idgov_level,callback:function(t){e.$set(e.form,"idgov_level",t)},expression:"form.idgov_level"}},e._l(e.govLevels,(function(option){return t("option",{key:option.idgov_level,domProps:{value:option.idgov_level}},[e._v("\n                  "+e._s(option.description)+"\n                ")])})),0)],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Ilícito ambiental denunciado"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idilicit_denounced,callback:function(t){e.$set(e.form,"idilicit_denounced",t)},expression:"form.idilicit_denounced"}},e._l(e.ilicits,(function(option){return t("option",{key:option.idilicit_denounced,domProps:{value:option.idilicit_denounced}},[e._v("\n                  "+e._s(option.description)+"\n                ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Tablajes")])]),e._v(" "),t("div",[t("b-field",{attrs:{label:"tablajes"}},[t("b-taginput",{attrs:{data:e.filterTablaje,field:"name",autocomplete:"","open-on-focus":!0},on:{typing:e.filterTablajeFun},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.name))])]}},{key:"empty",fn:function(){return[e._v("\n                  Sin resultados\n                ")]},proxy:!0}],null,!0),model:{value:e.form.list_complaint_cadastral_record,callback:function(t){e.$set(e.form,"list_complaint_cadastral_record",t)},expression:"form.list_complaint_cadastral_record"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Vegetación")])]),e._v(" "),t("div",[t("b-field",{attrs:{label:"Vegetación afectada"}},[t("b-taginput",{attrs:{data:e.filterVegetable,field:"cientificName",autocomplete:"","open-on-focus":!0},on:{typing:e.filterVegetableFun},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description?n.option.description:"sin nombre")+"/"+e._s(n.option.cientificName?n.option.cientificName:"sin nombre"))])]}},{key:"empty",fn:function(){return[e._v("\n                  Sin resultados\n                ")]},proxy:!0}],null,!0),model:{value:e.form.complaint_va,callback:function(t){e.$set(e.form,"complaint_va",t)},expression:"form.complaint_va"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Zonas")])]),e._v(" "),t("div",[t("b-field",{attrs:{horizontal:"",label:"Zonas de vigilancia"}},[t("b-taginput",{attrs:{data:e.filteredOpZone,field:"description",autocomplete:"","open-on-focus":!0},on:{typing:e.filterOpZone},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                  Sin resultados\n                ")]},proxy:!0}],null,!0),model:{value:e.form.list_complaint_operative_zone,callback:function(t){e.$set(e.form,"list_complaint_operative_zone",t)},expression:"form.list_complaint_operative_zone"}})],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Zonificación PM"}},[t("b-select",{attrs:{placeholder:"Seleccciona una opción"},on:{input:e.selectOption},model:{value:e.legalZone,callback:function(t){e.legalZone=t},expression:"legalZone"}},e._l(e.legalZones,(function(option){return t("option",{key:option.idzoning,domProps:{value:option.idzoning}},[e._v("\n                  "+e._s(option.description)+"\n                ")])})),0)],1),e._v(" "),t("b-field",{attrs:{horizontal:"",label:"Subzoninifcación PM"}},[t("b-taginput",{attrs:{data:e.filteredSubZones,field:"description",autocomplete:"","open-on-focus":!0},on:{typing:e.filterSubzone},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                  Sin resultados\n                ")]},proxy:!0}],null,!0),model:{value:e.form.list_subzoning_complaint,callback:function(t){e.$set(e.form,"list_subzoning_complaint",t)},expression:"form.list_subzoning_complaint"}})],1),e._v(" "),t("b-tooltip",{attrs:{label:"La zonificación se obtiene de las subzonificaciones.",position:"is-right"}},[t("b-icon",{attrs:{icon:"help",size:"is-small"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Coordenadas")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("b-notification",{attrs:{type:"is-info","has-icon":"",closable:!1}},[e._v("\n                Ingrese las coordenadas en formato UTM.\n              ")]),e._v(" "),t("div",{staticClass:"container"},[t("b-field",{attrs:{label:"Descripción breve de la coordenada"}},[t("b-input",{model:{value:e.formCoord.description,callback:function(t){e.$set(e.formCoord,"description",t)},expression:"formCoord.description"}})],1),e._v(" "),t("b-field",{attrs:{label:e.isSwitched?"Longitud":"Coordenada X"}},[t("b-numberinput",{attrs:{step:"0.000000000000000001",controls:!1},model:{value:e.temporalPoint[0],callback:function(t){e.$set(e.temporalPoint,0,t)},expression:"temporalPoint[0]"}})],1),e._v(" "),t("b-field",{attrs:{label:e.isSwitched?"Latitud":"Coordenada Y"}},[t("b-numberinput",{attrs:{step:"0.000000000000000001",controls:!1},model:{value:e.temporalPoint[1],callback:function(t){e.$set(e.temporalPoint,1,t)},expression:"temporalPoint[1]"}})],1)],1),e._v(" "),t("div",{staticClass:"container m-3 has-text-centered"},[t("b-button",{attrs:{type:"is-success is-light"},on:{click:e.addPoint}},[e._v("\n                  Agregar coordenada\n                ")]),e._v(" "),t("b-button",{attrs:{type:"is-info is-light"},on:{click:e.viewPoint}},[e._v("\n                  Ver punto\n                ")])],1),e._v(" "),e._l(e.points,(function(n){return t("div",{key:n.description,staticClass:"container m-3"},[t("div",{staticClass:"control"},[t("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""},on:{close:e.deletePoint,click:function(t){return e.viewPoint(n)}}},[e._v("\n                    "+e._s(n.description)+"\n                  ")])],1)])}))],2),e._v(" "),t("div",{staticClass:"column is-8"},[t("vl-map",{staticStyle:{height:"400px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),e.activeViewPoint?t("vl-feature",[t("vl-geom-point",{attrs:{coordinates:e.ViewPoint}}),e._v(" "),t("vl-style",[t("vl-style-circle",{attrs:{radius:5}},[t("vl-style-fill",{attrs:{color:"red"}}),e._v(" "),t("vl-style-stroke",{attrs:{color:"red"}})],1)],1)],1):e._e(),e._v(" "),e.points.length>0?t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.pointsMap}}),e._v(" "),t("vl-style",[t("vl-style-circle",{attrs:{radius:5}},[t("vl-style-fill",{attrs:{color:"green"}}),e._v(" "),t("vl-style-stroke",{attrs:{color:"green"}})],1)],1)],1):e._e(),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1)],1)],1)]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Seguimiento")])]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Oficio de respuesta"}},[t("b-input",{attrs:{name:"oficio de respuesta",type:"text",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Fecha de respuesta"}},[t("b-datepicker",{attrs:{placeholder:"Seleccione una fecha",icon:"calendar-today",editable:""},model:{value:e.form.response_date,callback:function(t){e.$set(e.form,"response_date",t)},expression:"form.response_date"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Respuesta"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.response,callback:function(t){e.$set(e.form,"response",t)},expression:"form.response"}},e._l(e.responses,(function(option){return t("option",{key:option.idresponse,domProps:{value:option.idresponse}},[e._v("\n                      "+e._s(option.description)+"\n                    ")])})),0)],1)],1)])]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Documentos")])]),e._v(" "),t("div",{staticClass:"columns has-text-centered"},[t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Oficio de denuncia"}},[t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.fileDenuncia}},[t("b-upload",{staticClass:"file-label",attrs:{rounded:""},model:{value:e.fileDenuncia,callback:function(t){e.fileDenuncia=t},expression:"fileDenuncia"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v(e._s(e.fileDenuncia.name||"Subir archivo"))])],1)])],1)],1)],1),e._v(" "),t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Oficio de respuesta"}},[t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.fileRespuesta}},[t("b-upload",{staticClass:"file-label",attrs:{rounded:""},model:{value:e.fileRespuesta,callback:function(t){e.fileRespuesta=t},expression:"fileRespuesta"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v(e._s(e.fileRespuesta.name||"Subir archivo"))])],1)])],1)],1)],1),e._v(" "),t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Conclusión de trámite"}},[t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.fileTramite}},[t("b-upload",{staticClass:"file-label",attrs:{rounded:""},model:{value:e.fileTramite,callback:function(t){e.fileTramite=t},expression:"fileTramite"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v(e._s(e.fileTramite.name||"Subir archivo"))])],1)])],1)],1)],1)]),e._v(" "),t("ButtonGroup",{attrs:{"handle-submit":o,saving:""},on:{save:e.createOrUpdate,cancel:e.close}})],1)]}}])})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BInputWithValidation:n(682).default,ButtonGroup:n(688).default})},681:function(e,t){e.exports={props:{value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}}},682:function(e,t,n){"use strict";n.r(t);n(128);var input=n(681),o={mixins:[n.n(input).a],props:{vid:{type:String},rules:{type:[Object,String],default:""},normal:Boolean,margin:{type:String,default:"mb-3"}},methods:{getMessage:function(e,t,n){return e[0]?e[0]:n}}},r=n(89),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors,r=n.valid;return[t("b-field",e._b({class:e.margin,attrs:{type:{"is-danger":o[0],"is-success":r&&!e.$attrs.readonly},message:e.getMessage(o,r,e.$attrs.message)}},"b-field",e.$attrs,!1),[e._t("input",(function(){return[e.normal?t("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1)):t("b-input",e._b({on:{input:function(t){e.innerValue=e.innerValue.toUpperCase()}},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);t.default=component.exports},688:function(e,t,n){"use strict";n.r(t);n(61),n(58),n(59),n(38),n(70),n(60),n(71);var o=n(26),r=n(152);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={props:{handleSubmit:Function,saving:Boolean,firstStep:Boolean,saveLabel:{type:String,default:"Guardar"},saveType:{type:String,default:"is-success"},cancel:{type:Boolean,default:!0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)(["buttonLoading"])),methods:{save:function(){this.$emit("save")},previous:function(){this.$emit("previous")},next:function(){this.$emit("next")}}},d=c,f=n(89),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column buttons"},[e.saving?t("b-field",{attrs:{position:"is-right"}},[t("b-button",{attrs:{type:"is-danger","native-type":"submit",outlined:""},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n        Cancelar\n      ")]),e._v(" "),t("b-button",{attrs:{type:e.saveType,"native-type":"submit",outlined:"",loading:e.buttonLoading},on:{click:function(t){return t.preventDefault(),e.handleSubmit(e.save)}}},[e._v("\n        "+e._s(e.saveLabel)+"\n      ")])],1):t("b-field",{attrs:{position:"is-right"}},[t("b-button",{attrs:{disabled:e.firstStep,type:"is-dark","native-type":"submit",outlined:""},on:{click:e.previous}},[e._v("\n        Anterior\n      ")]),e._v(" "),t("b-button",{attrs:{type:"is-info","native-type":"submit",outlined:""},on:{click:function(t){return e.handleSubmit(e.next)}}},[e._v("\n        Siguiente\n      ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);