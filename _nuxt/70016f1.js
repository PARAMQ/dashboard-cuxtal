(window.webpackJsonp=window.webpackJsonp||[]).push([[8,21,24,32,35,92],{1203:function(e,t,n){"use strict";n.r(t);n(58),n(186),n(128);var o=n(5),r=(n(35),n(59),n(38),n(206),n(236),n(237),n(375),n(60),n(692)),l=(n(693),n(691)),c={name:"NewOpinion",props:{activeModal:{default:!1,type:Boolean}},data:function(){return{isParticular:!1,isLoading:!1,form:{},tenenciaPredio:[],dependences:[],fileOficio:{},fileRespuesta:{},vegetation:[],tablaje:[],filterTablaje:[],filterVegetable:[],legalEntity:[],typeLegalEntity:[],appMethod:[],appType:[],requestMotive:[],motiveDescription:[],responseOp:[],tenure:[],isSwitched:!0,formCoord:{},temporalPoint:[224190.791,2311022.379],ViewPoint:[-89.60984537598705,20.85610769792424],pointsMap:[[-89.60984537598705,20.85610769792424]],points:[],idPoints:[],zoom:12,center:[-89.60984537598705,20.85610769792424],rotation:0,features:[{type:"Feature",geometry:{type:"Polygon",coordinates:r}}]}},watch:{activeModal:function(e,t){e&&this.$buefy.snackbar.open("Recuerda subir los documentos en PDF.")}},mounted:function(){this.getVegetation(),this.getTablaje(),this.getLegalEntity(),this.getTypeLegalEntity(),this.getAppMethod(),this.getAppType(),this.getRequestMotive(),this.getMotiveDescription(),this.getTenure(),this.getResponseOp()},methods:{close:function(){this.form={},this.$emit("close")},createOrUpdate:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,console.log(e.form),e.form.list_coordinates=e.points?e.points:null,t.next=6,e.$store.dispatch("modules/technicalOp/createOrUpdateTechnicalOp",e.form);case 6:if(n=t.sent,!e.fileOficio.name&&!e.fileRespuesta.name){t.next=10;break}return t.next=10,e.uploadFiles(n);case 10:e.form={},e.points=[],e.fileOficio={},e.fileRespuesta={},e.isLoading=!1,e.$buefy.toast.open({message:"Guardado!",type:"is-success"}),e.$emit("save"),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),e.isLoading=!1,e.$buefy.toast.open({message:"Ocurrió un error, intente nuevamente",type:"is-danger"});case 23:return t.prev=23,e.isLoading=!1,t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[0,19,23,26]])})))()},uploadFiles:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=new FormData).append("idtechnical_opinion",e),console.log(t.fileOficio),t.fileOficio.name&&o.append("request_doc",t.fileOficio),t.fileRespuesta.name&&o.append("response_doc",t.fileRespuesta),n.prev=5,n.next=8,t.$store.dispatch("modules/technicalOp/uploadFiles",o);case 8:n.next=12;break;case 10:n.prev=10,n.t0=n.catch(5);case 12:case"end":return n.stop()}}),n,null,[[5,10]])})))()},getVegetation:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/vegetation/getVegetations");case 3:e.vegetation=t.sent,e.filterVegetable=e.vegetation,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getDependences:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/coordinations/getCoordinations");case 3:e.dependences=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},filterVegetableFun:function(text){this.filterVegetable=this.vegetation.filter((function(option){if(option.description&&option.description.toString().toLowerCase().includes(text.toLowerCase()))return option}))},getLegalEntity:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/legalEntity/getLegalEntitys");case 3:e.legalEntity=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getTypeLegalEntity:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/legalEntity/getTypeLegalEntitys");case 3:e.typeLegalEntity=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getAppMethod:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/apMethod/getApplicationMethods");case 3:e.appMethod=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getAppType:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/apType/getApplicantTypes");case 3:e.appType=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getRequestMotive:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/requestMotive/getRequestMotives");case 3:e.requestMotive=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getMotiveDescription:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/motiveDescription/getMotiveDescriptions");case 3:e.motiveDescription=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getTenure:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/tenure/getTenures");case 3:e.tenure=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getResponseOp:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/responseOp/getResponseOps");case 3:e.responseOp=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},addPoint:function(){if(this.formCoord.description&&""!==this.formCoord.description){if(0===this.points.length){var e=this.convertCoordinatesToUtm([this.temporalPoint[0],this.temporalPoint[1]]);this.pointsMap=[e]}else{var t=this.convertCoordinatesToUtm([this.temporalPoint[0],this.temporalPoint[1]]);this.pointsMap.push(t)}this.formCoord.x=this.temporalPoint[0],this.formCoord.y=this.temporalPoint[1],this.points.push(this.formCoord),this.formCoord={description:"",x:0,y:0},this.temporalPoint=[224190.791,2311022.379]}else this.$buefy.toast.open({duration:4e3,message:"Es necesario asignar un nombre a las coordenadas",position:"is-bottom",type:"is-danger"})},deletePoint:function(e){1===this.pointsMap.length?(this.points=[],this.pointsMap=[[-89.60984537598705,20.85610769792424]]):(this.points.splice(e,1),this.pointsMap.splice(e,1))},createPoints:function(e,t){var n=this,r=e;try{r.forEach(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$store.dispatch("modules/coordinates/createOrUpdateCoordinate",o);case 2:r=e.sent,n.idPoints.push({idcoordinates:r,idbinnacle:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(e){this.$buefy.toast.open({message:"No se pudieron agregar las coordenadas, intente nuevamente",type:"is-danger"})}},getTablaje:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.tablaje=[],t.next=4,e.$store.dispatch("modules/tablaje/getTablajes");case 4:n=t.sent,e.tablaje=n,e.filterTablaje=n,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},filterTablajeFun:function(text){this.filterTablaje=this.tablaje.filter((function(option){if(option.name&&option.name.toString().toLowerCase().includes(text.toLowerCase()))return option}))},convertCoordinatesToUtm:function(e){var t=l.toLatLon(e[0],e[1],"16","T");return[t.longitude,t.latitude]},convertCoordinatesFromUtm:function(e){},viewPoint:function(){this.ViewPoint=this.convertCoordinatesToUtm(this.temporalPoint)}}},d=c,f=n(89),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"full-screen":!0,"destroy-on-hide":!1,"can-cancel":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"modal-card"},[t("div",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title"},[e._v("\n        Nueva opinión técnica\n      ")])]),e._v(" "),t("div",{staticClass:"modal-card-body"},[t("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(n){var o=n.handleSubmit;return[t("form",{on:{submit:function(e){return e.preventDefault(),o.apply(null,arguments)}}},[t("div",{staticClass:"divider"},[t("strong",[e._v("Datos generales del solicitante")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("BInputWithValidation",{attrs:{label:"Nombre de la persona física",name:"persona física",rules:"required",normal:""},model:{value:e.form.individual,callback:function(t){e.$set(e.form,"individual",t)},expression:"form.individual"}})],1),e._v(" "),t("div"),e._v(" "),e.isParticular?e._e():t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Nombre de la persona moral"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idlegal_entity,callback:function(t){e.$set(e.form,"idlegal_entity",t)},expression:"form.idlegal_entity"}},e._l(e.legalEntity,(function(option){return t("option",{key:option.idlegal_entity,domProps:{value:option.idlegal_entity}},[e._v("\n                    "+e._s(option.description)+"\n                  ")])})),0)],1)],1)]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("BInputWithValidation",{attrs:{label:"Nombre del titular/representante de la persona moral",name:"titular/representante de la persona moral",rules:"required",normal:""},model:{value:e.form.holder_name,callback:function(t){e.$set(e.form,"holder_name",t)},expression:"form.holder_name"}})],1)])]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("BInputWithValidation",{attrs:{label:"Número de oficio",name:"número de oficio",rules:"required",normal:""},model:{value:e.form.folium,callback:function(t){e.$set(e.form,"folium",t)},expression:"form.folium"}})],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Medio de solicitud"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idapplication_method,callback:function(t){e.$set(e.form,"idapplication_method",t)},expression:"form.idapplication_method"}},e._l(e.appMethod,(function(option){return t("option",{key:option.idapplication_method,domProps:{value:option.idapplication_method}},[e._v("\n                      "+e._s(option.description)+"\n                    ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha de solicitud"}},[t("b-datepicker",{attrs:{placeholder:"Selecciona una fecha",icon:"calendar-today"},model:{value:e.form.application_date,callback:function(t){e.$set(e.form,"application_date",t)},expression:"form.application_date"}})],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha de recepción de solicitud"}},[t("b-datepicker",{attrs:{placeholder:"Selecciona una fecha",icon:"calendar-today"},model:{value:e.form.reception_date,callback:function(t){e.$set(e.form,"reception_date",t)},expression:"form.reception_date"}})],1)],1)])]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Información extra")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-9"},[t("BInputWithValidation",{attrs:{label:"Nombre del promovente",name:"nombre del promovente",rules:"required",normal:""},model:{value:e.form.applicant_name,callback:function(t){e.$set(e.form,"applicant_name",t)},expression:"form.applicant_name"}})],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Tipo de promovente"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idapplicant_type,callback:function(t){e.$set(e.form,"idapplicant_type",t)},expression:"form.idapplicant_type"}},e._l(e.appType,(function(option){return t("option",{key:option.idapplicant_type,domProps:{value:option.idapplicant_type}},[e._v("\n                    "+e._s(option.description)+"\n                  ")])})),0)],1)],1)]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Motivo de la solicitud"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idrequest_motive,callback:function(t){e.$set(e.form,"idrequest_motive",t)},expression:"form.idrequest_motive"}},e._l(e.requestMotive,(function(option){return t("option",{key:option.idrequest_motive,domProps:{value:option.idrequest_motive}},[e._v("\n                    "+e._s(option.description)+"\n                  ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Descripción del motivo"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idmotive_description,callback:function(t){e.$set(e.form,"idmotive_description",t)},expression:"form.idmotive_description"}},e._l(e.motiveDescription,(function(option){return t("option",{key:option.idmotive_description,domProps:{value:option.idmotive_description}},[e._v("\n                    "+e._s(option.description)+"\n                  ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("BInputWithValidation",{attrs:{label:"Superficie solicitada(Ha)",name:"superficie solicitada(Ha)",normal:""},model:{value:e.form.surface_affected,callback:function(t){e.$set(e.form,"surface_affected",t)},expression:"form.surface_affected"}})],1)]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-9"},[t("BInputWithValidation",{attrs:{label:"Dirección del predio",name:"dirección del predio",normal:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Tenencia del predio"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idtenure,callback:function(t){e.$set(e.form,"idtenure",t)},expression:"form.idtenure"}},e._l(e.tenure,(function(option){return t("option",{key:option.idtenure,domProps:{value:option.idtenure}},[e._v("\n                    "+e._s(option.description)+"\n                  ")])})),0)],1)],1)]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Tablajes")])]),e._v(" "),t("div",[t("b-field",{attrs:{label:"tablajes"}},[t("b-taginput",{attrs:{data:e.filterTablaje,field:"name",autocomplete:"","open-on-focus":!0},on:{typing:e.filterTablajeFun},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.name))])]}},{key:"empty",fn:function(){return[e._v("\n                  Sin resultados\n                ")]},proxy:!0}],null,!0),model:{value:e.form.list_techop_cadastral_record,callback:function(t){e.$set(e.form,"list_techop_cadastral_record",t)},expression:"form.list_techop_cadastral_record"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Vegetación")])]),e._v(" "),t("div",[t("b-field",{attrs:{label:"Vegetación"}},[t("b-taginput",{attrs:{data:e.filterVegetable,field:"description",autocomplete:"","open-on-focus":!0},on:{typing:e.filterVegetableFun},scopedSlots:e._u([{key:"default",fn:function(n){return[t("strong",[e._v(e._s(n.option.description))])]}},{key:"empty",fn:function(){return[e._v("\n                  Sin resultados\n                ")]},proxy:!0}],null,!0),model:{value:e.form.list_va,callback:function(t){e.$set(e.form,"list_va",t)},expression:"form.list_va"}})],1)],1),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Coordenadas")])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("b-notification",{attrs:{type:"is-info","has-icon":"",closable:!1}},[e._v("\n                Ingrese las coordenadas en formato UTM.\n              ")]),e._v(" "),t("div",{staticClass:"container"},[t("b-field",{attrs:{label:"Descripción breve de la coordenada"}},[t("b-input",{model:{value:e.formCoord.description,callback:function(t){e.$set(e.formCoord,"description",t)},expression:"formCoord.description"}})],1),e._v(" "),t("b-field",{attrs:{label:e.isSwitched?"Longitud":"Coordenada X"}},[t("b-numberinput",{attrs:{step:"0.000000000000000001",controls:!1},model:{value:e.temporalPoint[0],callback:function(t){e.$set(e.temporalPoint,0,t)},expression:"temporalPoint[0]"}})],1),e._v(" "),t("b-field",{attrs:{label:e.isSwitched?"Latitud":"Coordenada Y"}},[t("b-numberinput",{attrs:{step:"0.000000000000000001",controls:!1},model:{value:e.temporalPoint[1],callback:function(t){e.$set(e.temporalPoint,1,t)},expression:"temporalPoint[1]"}})],1)],1),e._v(" "),t("div",{staticClass:"container m-3 has-text-centered"},[t("b-button",{attrs:{type:"is-success is-light"},on:{click:e.addPoint}},[e._v("\n                  Agregar coordenada\n                ")]),e._v(" "),t("b-button",{attrs:{type:"is-info is-light"},on:{click:e.viewPoint}},[e._v("\n                  Ver punto\n                ")])],1),e._v(" "),e._l(e.points,(function(n){return t("div",{key:n.description,staticClass:"container m-3"},[t("div",{staticClass:"control"},[t("b-tag",{attrs:{type:"is-primary",attached:"","aria-close-label":"Close tag",closable:""},on:{close:e.deletePoint,click:function(t){return e.viewPoint(n)}}},[e._v("\n                    "+e._s(n.description)+"\n                  ")])],1)])}))],2),e._v(" "),t("div",{staticClass:"column is-8"},[t("vl-map",{staticStyle:{height:"400px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),t("vl-feature",[t("vl-geom-point",{attrs:{coordinates:e.ViewPoint}}),e._v(" "),t("vl-style",[t("vl-style-circle",{attrs:{radius:5}},[t("vl-style-fill",{attrs:{color:"red"}}),e._v(" "),t("vl-style-stroke",{attrs:{color:"red"}})],1)],1)],1),e._v(" "),e.points.length>0?t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.pointsMap}}),e._v(" "),t("vl-style",[t("vl-style-circle",{attrs:{radius:5}},[t("vl-style-fill",{attrs:{color:"blue"}}),e._v(" "),t("vl-style-stroke",{attrs:{color:"green"}})],1)],1)],1):e._e(),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1)],1)],1)]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Respuesta")])]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Respuesta"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.form.idresponse_op,callback:function(t){e.$set(e.form,"idresponse_op",t)},expression:"form.idresponse_op"}},e._l(e.responseOp,(function(option){return t("option",{key:option.idresponse_op,domProps:{value:option.idresponse_op}},[e._v("\n                      "+e._s(option.description)+"\n                    ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fecha de respuesta"}},[t("b-datepicker",{attrs:{placeholder:"Selecciona una fecha",icon:"calendar-today"},model:{value:e.form.response_date,callback:function(t){e.$set(e.form,"response_date",t)},expression:"form.response_date"}})],1)],1)]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("BInputWithValidation",{attrs:{label:"Otro",name:"otro",normal:""},model:{value:e.form.other,callback:function(t){e.$set(e.form,"other",t)},expression:"form.other"}})],1)])]),e._v(" "),t("div",{staticClass:"divider"},[t("strong",[e._v("Documentos")])]),e._v(" "),t("div",{staticClass:"columns has-text-centered"},[t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Oficio/escrito de solicitud"}},[t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.fileOficio}},[t("b-upload",{staticClass:"file-label",attrs:{rounded:""},model:{value:e.fileOficio,callback:function(t){e.fileOficio=t},expression:"fileOficio"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v(e._s(e.fileOficio.name||"Subir archivo"))])],1)])],1)],1)],1),e._v(" "),t("div",{staticClass:"column is-flex is-justify-content-center"},[t("b-field",{attrs:{label:"Oficio de respuesta"}},[t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.fileRespuesta}},[t("b-upload",{staticClass:"file-label",attrs:{rounded:""},model:{value:e.fileRespuesta,callback:function(t){e.fileRespuesta=t},expression:"fileRespuesta"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v(e._s(e.fileRespuesta.name||"Subir archivo"))])],1)])],1)],1)],1)]),e._v(" "),t("br"),e._v(" "),t("ButtonGroup",{attrs:{"handle-submit":o,saving:""},on:{save:e.createOrUpdate,cancel:e.close}})],1)]}}])})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BInputWithValidation:n(690).default,ButtonGroup:n(696).default})},689:function(e,t){e.exports={props:{value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}}},690:function(e,t,n){"use strict";n.r(t);n(128);var input=n(689),o={mixins:[n.n(input).a],props:{vid:{type:String},rules:{type:[Object,String],default:""},normal:Boolean,margin:{type:String,default:"mb-3"}},methods:{getMessage:function(e,t,n){return e[0]?e[0]:n}}},r=n(89),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors,r=n.valid;return[t("b-field",e._b({class:e.margin,attrs:{type:{"is-danger":o[0],"is-success":r&&!e.$attrs.readonly},message:e.getMessage(o,r,e.$attrs.message)}},"b-field",e.$attrs,!1),[e._t("input",(function(){return[e.normal?t("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1)):t("b-input",e._b({on:{input:function(t){e.innerValue=e.innerValue.toUpperCase()}},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);t.default=component.exports},696:function(e,t,n){"use strict";n.r(t);n(61),n(58),n(59),n(38),n(70),n(60),n(71);var o=n(26),r=n(152);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={props:{handleSubmit:Function,saving:Boolean,firstStep:Boolean,saveLabel:{type:String,default:"Guardar"},saveType:{type:String,default:"is-success"},cancel:{type:Boolean,default:!0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)(["buttonLoading"])),methods:{save:function(){this.$emit("save")},previous:function(){this.$emit("previous")},next:function(){this.$emit("next")}}},d=c,f=n(89),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column buttons"},[e.saving?t("b-field",{attrs:{position:"is-right"}},[t("b-button",{attrs:{type:"is-danger","native-type":"submit",outlined:""},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n        Cancelar\n      ")]),e._v(" "),t("b-button",{attrs:{type:e.saveType,"native-type":"submit",outlined:"",loading:e.buttonLoading},on:{click:function(t){return t.preventDefault(),e.handleSubmit(e.save)}}},[e._v("\n        "+e._s(e.saveLabel)+"\n      ")])],1):t("b-field",{attrs:{position:"is-right"}},[t("b-button",{attrs:{disabled:e.firstStep,type:"is-dark","native-type":"submit",outlined:""},on:{click:e.previous}},[e._v("\n        Anterior\n      ")]),e._v(" "),t("b-button",{attrs:{type:"is-info","native-type":"submit",outlined:""},on:{click:function(t){return e.handleSubmit(e.next)}}},[e._v("\n        Siguiente\n      ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);