(window.webpackJsonp=window.webpackJsonp||[]).push([[137,38],{1178:function(e,t,n){"use strict";n(892)},1179:function(e,t,n){var r=n(166),o=n(494),c=n(679),l=r((function(i){return i[1]})),d=o(c);l.push([e.i,".full-w{width:100%!important}.binnalces{height:650px;overflow-y:scroll}#map{min-height:75vh}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}",""]),l.locals={},e.exports=l},1247:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(59),n(38),n(207),n(237),n(117),n(129),n(497),n(389),n(60),n(34),n(685)),c=n(684),l={name:"EditPlanification",data:function(){return{dates:{startDate:new Date,endDate:new Date},activeEditPlan:!1,changeDates:!1,idPlanification:this.$route.query.id,isLoadingBinnacles:!1,downloadFile:!1,activeViewModal:!1,activeModal:!1,plan:{},binnaclesFilter:[],hasEdit:!1,indexBinnacle:0,idBinnacle:"",binnacleSelect:{},viewBinnacle:!1,zoom:12,center:[-89.60984537598705,20.85610769792424],temporalPoints:[[-89.60984537598705,20.85610769792424]],rotation:0,geolocPosition:void 0,arrayCoordinates:[],options:[{label:"En proceso",value:"process"},{label:"Finalizado",value:"finally"},{label:"Por comenzar",value:"active"}],features:[{type:"Feature",geometry:{type:"Polygon",coordinates:o}}]}},created:function(){},mounted:function(){this.getPlan()},methods:{getPlan:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoadingBinnacles=!0,t.next=4,e.$store.dispatch("modules/plans/readPlan",e.idPlanification);case 4:n=t.sent,e.plan=n,console.log(n),e.binnaclesFilter=e.plan.binnacles,e.isLoadingBinnacles=!1,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e.isLoadingBinnacles=!1;case 14:return t.prev=14,e.isLoadingBinnacles=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))()},changeDatesPlan:function(){console.log(this.plan)},refresh:function(){this.activeEditPlan=!1,this.activeModal=!1,this.activeViewModal=!1,this.binnacleSelect={},this.plan={},this.getPlan()},filterBinnacle:function(text){text&&text.length>0?this.binnaclesFilter=this.plan.binnacles.filter((function(e){if(e.number.toUpperCase().includes(text.toUpperCase()))return e})):this.binnaclesFilter=this.binnacles},editBinnacle:function(){},deleteBinnacle:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,data={idbinnacle:e},n.next=4,t.$store.dispatch("modules/binnacles/deleteBinnacle",data);case 4:t.$buefy.notification.open({message:"Bitácora eliminada",duration:2500,position:"is-bottom-right",type:"is-success",hasIcon:!0}),t.getPlan(),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},viewBinnalceObject:function(e){this.activeViewModal=!0,this.binnacleSelect=e},getWord:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,link,d,v,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n.isLoadingBinnacles=!0,n.downloadFile=!0,r.next=5,n.$store.dispatch("modules/binnacles/getWordBinnacle",e);case 5:o=r.sent,c=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),l=window.URL.createObjectURL(c),link=document.createElement("a"),d=t.substring(t.length-4,t.length),v=t.substring(0,t.length-4),f="bitácora_"+v+"-"+d+".docx",link.href=l,link.setAttribute("download",f),link.click(),window.URL.revokeObjectURL(l),n.isLoadingBinnacles=!1,n.downloadFile=!1,r.next=23;break;case 20:r.prev=20,r.t0=r.catch(0),n.downloadFile=!1;case 23:return r.prev=23,n.downloadFile=!1,r.finish(23);case 26:case"end":return r.stop()}}),r,null,[[0,20,23,26]])})))()},updateStatus:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/createOrUpdatePlan",e.plan);case 3:e.$buefy.toast.open({message:"¡Estado actualizado!",type:"is-success"}),e.getPlan(),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getBinnacle:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/getBinnacle",e);case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},viewInMap:function(option){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.viewBinnacle=!1,e.temporalPoints=[[-89.60984537598705,20.85610769792424]],t.next=4,e.getBinnacle(option);case 4:(n=t.sent).points=[],n.coordinates_binnacle.forEach((function(object){var t=[object.x,object.y],r=e.convertCoordinatesToUtm(t);n.points.push(r)})),n.points.length>0?(e.temporalPoints=n.points,e.viewBinnacle=!0):e.$buefy.notification.open({message:"La bitácora no contiene coordenadas.",duration:2500,position:"is-bottom-right",type:"is-warning",hasIcon:!0});case 9:case"end":return t.stop()}}),t)})))()},convertCoordinatesToUtm:function(e){var t=c.toLatLon(e[0],e[1],"16","T");return[t.longitude,t.latitude]},deletePlan:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/deletePlan",e.plan);case 3:e.$buefy.toast.open({message:"¡Planificación eliminada!",type:"is-success"}),e.$router.push("/calendar"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$buefy.toast.open({message:"Ocurrió un error, intente más tarde",type:"is-danger"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},d=(n(1178),n(89)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"columns m-2 has-text-centered"},[t("div",{staticClass:"column"},[t("div",[t("strong",[e._v("Fecha de inicio: ")]),e._v(e._s(e.plan.start_date)+"\n        "),t("br"),e._v(" "),t("strong",[e._v("Fecha de finalización: ")]),e._v(e._s(e.plan.end_date)+"\n      ")]),e._v(" "),t("div",[t("b-button",{attrs:{size:"is-small",type:"is-light","icon-right":"calendar-edit"},on:{click:function(t){e.activeEditPlan=!0},close:e.refresh}})],1)]),e._v(" "),t("div",{staticClass:"column"},[t("strong",[e._v("Estado del recorrido: ")]),e._v(" "+e._s(e.plan.estatus&&"process"===e.plan.estatus?"En proceso":e.plan.estatus&&"finally"===e.plan.estatus?"Finalizado":e.plan.estatus&&"active"===e.plan.estatus?"Por comenzar":"Sin estado")+"\n    ")]),e._v(" "),t("div",{staticClass:"column"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",[t("b-label",{attrs:{label:"Cambiar estado del recorrido"}},[t("b-select",{model:{value:e.plan.estatus,callback:function(t){e.$set(e.plan,"estatus",t)},expression:"plan.estatus"}},e._l(e.options,(function(option){return t("option",{key:option.value,domProps:{value:option.value}},[e._v("\n                  "+e._s(option.label)+"\n                ")])})),0)],1)],1),e._v(" "),t("div",[t("b-button",{attrs:{size:"is-small",type:"is-success is-light","icon-right":"content-save"},on:{click:e.updateStatus}})],1)]),e._v(" "),t("div",{staticClass:"level-right"})])]),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{label:"Nueva bitácora",type:"is-light"},on:{click:function(t){e.activeModal=!0}}})],1)]),e._v(" "),t("div",{staticClass:"columns",attrs:{id:"map"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoadingBinnacles,callback:function(t){e.isLoadingBinnacles=t},expression:"isLoadingBinnacles"}}),e._v(" "),t("div",{staticClass:"column is-4"},[t("section",{staticClass:"m-2 has-text-centered"},[t("b-field",{attrs:{label:"Buscar bitácoras por folio"}},[t("b-autocomplete",{attrs:{placeholder:"Ejemplo: CIV/0012023",data:e.binnaclesFilter,clearable:e.clearable},on:{typing:e.filterBinnacle,select:function(option){return e.viewBinnalceObject(option)}},scopedSlots:e._u([{key:"default",fn:function(n){return[t("div",{staticClass:"media"},[t("div",{staticClass:"media-content"},[t("h1",[e._v(e._s(n.option.number))])])])]}}])})],1)],1),e._v(" "),t("div",{staticClass:"columns m-2"},[t("div",{staticClass:"column"},e._l(e.binnaclesFilter,(function(n){return t("div",{key:n.idbinnacle},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level m-1 full-w"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",[e._v(e._s(n.number))])]),e._v(" "),t("div",{staticClass:"level-item"},["revisado"===n.status?t("b-tooltip",{attrs:{label:"Revisado",position:"is-left"}},[t("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}})],1):"en-revision"===n.status?t("b-tooltip",{attrs:{label:"En revisión",position:"is-left"}},[t("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-warning"}})],1):"por-revisar"===n.status?t("b-tooltip",{attrs:{label:"Por revisar",position:"is-left"}},[t("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-light"}})],1):t("b-tooltip",{attrs:{label:"Sin estado",position:"is-left"}},[t("b-icon",{attrs:{icon:"alert",size:"is-small",type:"is-danger"}})],1)],1)]),e._v(" "),t("div",{staticClass:"level-right"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-info is-light","icon-right":"eye-outline"},on:{click:function(t){return e.viewBinnalceObject(n)}}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-danger is-light","icon-right":"delete-empty-outline"},on:{click:function(t){return e.deleteBinnacle(n.idbinnacle)}}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-success is-light","icon-right":"file-word"},on:{click:function(t){return e.getWord(n.idbinnacle,n.number)}}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content",on:{click:function(t){return e.viewInMap(n.idbinnacle)}}},[t("p",[t("strong",[e._v("Fecha: ")]),e._v("\n                  "+e._s(n.date?n.date:"No hay fecha registrada")+"\n                ")]),e._v(" "),t("br"),e._v(" "),t("p",[t("strong",[e._v("Relatoría: ")]),e._v("\n                  "+e._s(n.rapporteur?n.rapporteur:"No hay relatoría")+"\n                ")])]),e._v(" "),t("div",{staticClass:"m-2"},[t("p",{staticClass:"has-text-grey"},[e._v("\n                  "+e._s(n.isextraordinary?"Bitácora extraordinaria":"Bitácora relacionada a un recorrido programado")+"\n                ")])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8"},[t("vl-map",{staticStyle:{height:"100%"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),e.viewBinnacle?t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.temporalPoints}})],1):e._e(),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1)],1)],1)],1),e._v(" "),t("view-binnacle",{attrs:{"active-modal":e.activeViewModal,"binnacle-object":e.binnacleSelect,"disable-form":!0},on:{close:e.refresh}}),e._v(" "),t("new-binnacle",{attrs:{"active-modal":e.activeModal,plannification:e.idPlanification,"is-extraordinary":!1},on:{close:e.refresh,save:e.refresh}}),e._v(" "),t("edit-plan",{attrs:{"active-modal":e.activeEditPlan,plan:e.plan},on:{close:e.refresh}}),e._v(" "),t("b-notification",{attrs:{type:"is-info is-light",closable:!1},model:{value:e.downloadFile,callback:function(t){e.downloadFile=t},expression:"downloadFile"}},[e._v("\n    Descargando bitácora\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ViewBinnacle:n(900).default,NewBinnacle:n(777).default,EditPlan:n(929).default})},679:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},892:function(e,t,n){var content=n(1179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(167).default)("1e0be462",content,!0,{sourceMap:!1})},929:function(e,t,n){"use strict";n.r(t);n(61),n(58),n(59),n(38),n(70),n(60),n(71);var r=n(5),o=n(26),c=(n(34),n(152));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={name:"EditPlan",props:{activeModal:{default:!1,type:Boolean},plan:{type:Object}},data:function(){return{form:{estatus:"active"},dates:[],isLoading:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["user"])),mounted:function(){this.form.idusers=this.user.idusers},methods:{updatePlan:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.plan,r=new Date(e.dates[0]),o=new Date(e.dates[1]),n.start_date=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),n.end_date=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate(),t.prev=5,e.isLoading=!0,t.next=9,e.$store.dispatch("modules/plans/createOrUpdatePlan",n);case 9:e.dates=[],e.isLoading=!1,e.$buefy.snackbar.open("¡Guardado!"),e.$emit("close"),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),e.$buefy.snackbar.open("Ocurrió un problema, intente más tarde"),e.isLoading=!1;case 19:return t.prev=19,e.isLoading=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[5,15,19,22]])})))()}}},v=d,f=n(89),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{"destroy-on-hide":!1},model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[t("div",{staticClass:"card"},[t("b-loading",{attrs:{"is-full-page":!1,"can-cancel":!0},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n        Editar recorrido\n      ")])]),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"columns has-text-centered"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Fechas del recorrido"}},[t("b-datepicker",{attrs:{inline:"",range:"",required:""},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}})],1),e._v(" "),t("p",{staticClass:"has-text-grey"},[e._v("\n                Te recordamos seleccionar primero la fecha de inicio y\n                seguidamente la de finalización.\n              ")])],1),e._v(" "),t("div",[t("b-field",{attrs:{label:"Fecha de inicio actual"}},[t("p",[e._v(e._s(e.plan.start_date))])]),e._v(" "),t("b-field",{attrs:{label:"Fecha de finalización actual"}},[t("p",[e._v(e._s(e.plan.end_date))])])],1)])])]),e._v(" "),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("b-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Cancelar\n          ")])],1),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("b-button",{attrs:{type:"is-success"},on:{click:e.updatePlan}},[e._v("\n            Guardar\n          ")])],1)])])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);