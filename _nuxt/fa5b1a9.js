(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1199:function(e,t,n){"use strict";n.r(t);var o=n(5),r=(n(59),n(38),n(207),n(237),n(60),n(117),n(129),n(497),n(389),n(35),n(684)),c=n(683),l={name:"Binnacle",data:function(){return{activeModal:!1,activeViewModal:!1,activeEditModal:!1,downloadFile:!1,idBinnacle:"",binnacleSelect:{},isActive:!1,isLoadingBinnacles:!1,binnacles:[],binnaclesFilter:[],dateSelect:new Date,zoom:12,center:[-89.60984537598705,20.85610769792424],viewBinnacle:!1,temporalPoints:[[-89.60984537598705,20.85610769792424]],rotation:0,geolocPosition:void 0,arrayCoordinates:[],features:[{type:"Feature",geometry:{type:"Polygon",coordinates:r}}]}},created:function(){this.getData()},methods:{openModal:function(){this.isActive=!0},updateView:function(){this.activeViewModal=!1,this.activeEditModal=!1,this.activeModal=!1,this.getData()},openBinnacle:function(e){this.binnacleSelect=e,this.activeViewModal=!0},editBinnacle:function(e){this.binnacleSelect=e,this.activeEditModal=!0},deleteBinnacle:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,data={idbinnacle:e},n.next=4,t.$store.dispatch("modules/binnacles/deleteBinnacle",data);case 4:t.$buefy.notification.open({message:"Bitácora eliminada",duration:2500,position:"is-bottom-right",type:"is-success",hasIcon:!0}),t.getData(),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},getData:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoadingBinnacles=!0,t.next=4,e.$store.dispatch("modules/binnacles/getBinnacles");case 4:e.binnacles=t.sent,e.binnaclesFilter=e.binnacles,e.isLoadingBinnacles=!1,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getBinnacle:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/getBinnacle",e);case 3:return o=n.sent,n.abrupt("return",o);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},filterBinnacle:function(text){text&&text.length>0?this.binnaclesFilter=this.binnacles.filter((function(e){if(e.number.toUpperCase().includes(text.toUpperCase()))return e})):this.binnaclesFilter=this.binnacles},viewInMap:function(option){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.viewBinnacle=!1,e.temporalPoints=[[-89.60984537598705,20.85610769792424]],t.next=4,e.getBinnacle(option);case 4:(n=t.sent).points=[],n.coordinates_binnacle.forEach((function(object){var t=[object.x,object.y],o=e.convertCoordinatesToUtm(t);n.points.push(o)})),n.points.length>0?(e.temporalPoints=n.points,e.viewBinnacle=!0):e.$buefy.notification.open({message:"La bitácora no contiene coordenadas.",duration:2500,position:"is-bottom-right",type:"is-warning",hasIcon:!0});case 9:case"end":return t.stop()}}),t)})))()},convertCoordinatesToUtm:function(e){var t=c.toLatLon(e[0],e[1],"16","T");return[t.longitude,t.latitude]},getWord:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r,c,l,link,d,v,f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,n.isLoadingBinnacles=!0,n.downloadFile=!0,o.next=5,n.$store.dispatch("modules/binnacles/getWordBinnacle",e);case 5:r=o.sent,c=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),l=window.URL.createObjectURL(c),link=document.createElement("a"),d=t.substring(t.length-4,t.length),v=t.substring(0,t.length-4),f="bitácora_"+v+"-"+d+".docx",link.href=l,link.setAttribute("download",f),link.click(),window.URL.revokeObjectURL(l),n.isLoadingBinnacles=!1,n.downloadFile=!1,o.next=23;break;case 20:o.prev=20,o.t0=o.catch(0),n.downloadFile=!1;case 23:return o.prev=23,n.downloadFile=!1,o.finish(23);case 26:case"end":return o.stop()}}),o,null,[[0,20,23,26]])})))()}}},d=(n(933),n(89)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"columns",attrs:{id:"map"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoadingBinnacles,callback:function(t){e.isLoadingBinnacles=t},expression:"isLoadingBinnacles"}}),e._v(" "),t("div",{staticClass:"column is-4"},[t("section",{staticClass:"m-2 has-text-centered"},[t("b-tooltip",{attrs:{label:"Crea una nueva bitácora sin la necesidad de un recorrido",position:"is-right"}},[t("b-button",{attrs:{label:"Nueva bitácora extraordinaria",type:"is-light"},on:{click:function(t){e.activeModal=!0}}})],1)],1),e._v(" "),t("section",{staticClass:"m-2 has-text-centered"},[t("b-field",{attrs:{label:"Buscar bitácoras por folio"}},[t("b-autocomplete",{attrs:{placeholder:"Ejemplo: CIV/0012023",data:e.binnaclesFilter,clearable:e.clearable},on:{typing:e.filterBinnacle,select:function(option){return e.openBinnacle(option)}},scopedSlots:e._u([{key:"default",fn:function(n){return[t("div",{staticClass:"media"},[t("div",{staticClass:"media-content"},[t("h1",[e._v(e._s(n.option.number))])])])]}}])})],1)],1),e._v(" "),t("div",{staticClass:"columns m-2 binnalces"},[t("div",{staticClass:"column"},e._l(e.binnaclesFilter,(function(n){return t("div",{key:n.idbinnacle},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"level m-1 full-w"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("p",[e._v(e._s(n.number))])]),e._v(" "),t("div",{staticClass:"level-item"},["revisado"===n.status?t("b-tooltip",{attrs:{label:"Revisado",position:"is-left"}},[t("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}})],1):"en-revision"===n.status?t("b-tooltip",{attrs:{label:"En revisión",position:"is-left"}},[t("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-warning"}})],1):"por-revisar"===n.status?t("b-tooltip",{attrs:{label:"Por revisar",position:"is-left"}},[t("b-icon",{attrs:{icon:"clock",size:"is-small",type:"is-light"}})],1):t("b-tooltip",{attrs:{label:"Sin estado",position:"is-left"}},[t("b-icon",{attrs:{icon:"alert",size:"is-small",type:"is-danger"}})],1)],1)]),e._v(" "),t("div",{staticClass:"level-right"},[t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-info is-light","icon-right":"eye-outline"},on:{click:function(t){return e.openBinnacle(n)}}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-danger is-light","icon-right":"delete-empty-outline"},on:{click:function(t){return e.deleteBinnacle(n.idbinnacle)}}})],1),e._v(" "),t("div",{staticClass:"level-item"},[t("b-button",{attrs:{type:"is-success is-light","icon-right":"file-word"},on:{click:function(t){return e.getWord(n.idbinnacle,n.number)}}})],1)])])]),e._v(" "),t("div",{staticClass:"card-content",on:{click:function(t){return e.viewInMap(n.idbinnacle)}}},[t("p",[t("strong",[e._v("Fecha: ")]),e._v("\n                "+e._s(n.date?n.date:"No hay fecha registrada")+"\n              ")]),e._v(" "),t("br"),e._v(" "),t("p",[t("strong",[e._v("Relatoría: ")]),e._v("\n                "+e._s(n.rapporteur?n.rapporteur:"No hay relatoría")+"\n              ")])]),e._v(" "),t("div",{staticClass:"m-2"},[t("p",{staticClass:"has-text-grey"},[e._v("\n                "+e._s(n.isextraordinary?"Bitácora extraordinaria":"Bitácora relacionada a un recorrido programado")+"\n              ")])])])])})),0)])]),e._v(" "),t("div",{staticClass:"column is-8"},[t("vl-map",{staticStyle:{height:"100%"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",[t("vl-source-osm")],1),e._v(" "),e.viewBinnacle?t("vl-feature",[t("vl-geom-multi-point",{attrs:{coordinates:e.temporalPoints}})],1):e._e(),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1)],1)],1),e._v(" "),t("new-binnacle",{attrs:{"active-modal":e.activeModal,plannification:null,"is-extraordinary":!0},on:{close:e.updateView,save:e.updateView}}),e._v(" "),t("view-binnacle",{attrs:{"active-modal":e.activeViewModal,"binnacle-object":e.binnacleSelect,"disable-form":!0},on:{close:e.updateView}}),e._v(" "),t("edit-binnacle",{attrs:{"active-modal":e.activeEditModal,"binnacle-object":e.binnacleSelect},on:{close:e.updateView,save:e.updateView}}),e._v(" "),t("b-notification",{attrs:{type:"is-info is-light",closable:!1},model:{value:e.downloadFile,callback:function(t){e.downloadFile=t},expression:"downloadFile"}},[e._v("\n    Descargando bitácora\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NewBinnacle:n(775).default,ViewBinnacle:n(897).default,EditBinnacle:n(898).default})},678:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},779:function(e,t,n){var content=n(934);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(166).default)("3585d500",content,!0,{sourceMap:!1})},933:function(e,t,n){"use strict";n(779)},934:function(e,t,n){var o=n(165),r=n(494),c=n(678),l=o((function(i){return i[1]})),d=r(c);l.push([e.i,".full-w{width:100%!important}.binnalces{height:650px;overflow-y:scroll}#map{min-height:75vh}.card{background-color:#fff!important}.hero.is-cuxtal{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:100%}.modal-background{background-color:rgba(0,0,0,.568)}",""]),l.locals={},e.exports=l}}]);