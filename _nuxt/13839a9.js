(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1185:function(e,t,n){"use strict";n(895)},1186:function(e,t,n){var r=n(166),o=n(494),c=n(679),l=r((function(i){return i[1]})),f=o(c);l.push([e.i,"#home{background-color:rgba(4,3,3,.604);background-image:url("+f+");background-origin:content-box;background-position:50%;background-repeat:repeat;background-size:cover}.card{background:#fff}",""]),l.locals={},e.exports=l},1253:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(59),n(38),n(116),n(117),n(129),n(498),n(34),{name:"ConcentradoOld",data:function(){return{isLoading:!1,techOps:[],complaints:[],TechsOp:[],binnacles:[],zones:[],selectZone:null,selectSubZone:null,subZones:[],optionsMetas:[],formMeta:{},selectYear:{},optionsComplaintsPerMonth:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" registros"}}},noData:{text:"Cargando..."}},seriesComplaintsPerMonth:[{name:"Denuncias",data:[]}],optionsTechPerMonth:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" registros"}}},noData:{text:"Cargando..."}},seriesTechPerMonth:[{name:"Denuncias",data:[]}],optionsBinnaclesPerMonth:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" registros"}}},noData:{text:"Cargando..."}},seriesBinnaclesPerMonth:[{name:"Denuncias",data:[]}]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.getMetas(),e.getZonings(),e.getSubZonings(),t.next=6,e.getBinnacles(null,null,null);case 6:e.getComplaints(null,null,null),e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},methods:{getSubZonings:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getSubZones");case 3:n=t.sent,console.log(n),e.subZones=n,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getZonings:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:n=t.sent,console.log(n),e.zones=n,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getComplaints:function(e,t,n){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,l,f,d,m,i,h,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!1,c=!(!e&&!t),r.prev=2,r.next=5,o.$store.dispatch("modules/complaint/getComplaints");case 5:if(l=r.sent,o.complaints=[],f=[],d=l.filter((function(e){if(n){if(new Date(e.date_reception).getFullYear()===Number(n))return e}else{var t=new Date(e.date_reception),r=new Date;if(t.getFullYear()===r.getFullYear())return e}})),e&&(f=d.filter((function(t){if(t.list_subzoning_complaint&&t.list_subzoning_complaint.filter((function(t){return t.idzoning===e})).length>0)return t}))),t&&(f=f.length>0?f.filter((function(e){if(e.list_subzoning_complaint.filter((function(e){return e.idsubzoning===t})).length>0)return e})):d.filter((function(e){if(e.list_subzoning_complaint.filter((function(e){return e.idsubzoning===t})).length>0)return e}))),!(f.length>0)){r.next=22;break}m=regeneratorRuntime.mark((function e(i){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=f.filter((function(e){if(new Date(e.date_reception).getMonth()===i)return e})),o.seriesComplaintsPerMonth[0].data.push(parseInt(t.length));case 2:case"end":return e.stop()}}),e)})),i=0;case 14:if(!(i<12)){r.next=19;break}return r.delegateYield(m(i),"t0",16);case 16:i++,r.next=14;break;case 19:o.complaints=f,r.next=35;break;case 22:if(c){r.next=33;break}h=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=d.filter((function(e){if(new Date(e.date_reception).getMonth()===t)return e})),o.seriesComplaintsPerMonth[0].data.push(parseInt(n.length));case 2:case"end":return e.stop()}}),e)})),v=0;case 25:if(!(v<12)){r.next=30;break}return r.delegateYield(h(v),"t1",27);case 27:v++,r.next=25;break;case 30:o.complaints=d,r.next=35;break;case 33:o.complaints=[],o.seriesComplaintsPerMonth[0].data=[];case 35:r.next=39;break;case 37:r.prev=37,r.t2=r.catch(2);case 39:case"end":return r.stop()}}),r,null,[[2,37]])})))()},getTechOp:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$store.dispatch("modules/technicalOp/getTechnicalOps");case 3:t=e.sent,n.techOps=[],n.techOps=t.filter((function(e){})),n.techOp=n.techOps.length,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getBinnacles:function(e,t,n){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,l,f,d,i,m,h,v,x;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!1,c=!(!e&&!t),r.prev=2,r.next=5,o.$store.dispatch("modules/binnacles/getBinnacles");case 5:l=r.sent,o.binnacles=[],f=[],d=l.filter((function(e){var t=new Date(e.date);if(n){if(t.getFullYear()===Number(n))return e}else{var r=new Date;if(t.getFullYear()===r.getFullYear())return e}})),i=0;case 10:if(!(i<d.length)){r.next=17;break}return r.next=13,o.getBinnacle(d[i].idbinnacle);case 13:d[i]=r.sent;case 14:i++,r.next=10;break;case 17:if(e&&(f=d.filter((function(t){if(t.list_subzones&&t.list_subzones.filter((function(t){return t.idzoning===e})).length>0)return t}))),t&&(f=f.length>0?f.filter((function(e){if(e.list_subzones.filter((function(e){return e.idsubzoning===t})).length>0)return e})):d.filter((function(e){if(e.list_subzones.filter((function(e){return e.idsubzoning===t})).length>0)return e}))),!(f.length>0)){r.next=30;break}m=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=f.filter((function(e){if(new Date(e.date).getMonth()===t)return e})),o.seriesBinnaclesPerMonth[0].data.push(parseInt(n.length));case 2:case"end":return e.stop()}}),e)})),h=0;case 22:if(!(h<12)){r.next=27;break}return r.delegateYield(m(h),"t0",24);case 24:h++,r.next=22;break;case 27:o.binnacles=f,r.next=43;break;case 30:if(c){r.next=41;break}v=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=d.filter((function(e){if(new Date(e.date).getMonth()===t)return e})),o.seriesBinnaclesPerMonth[0].data.push(parseInt(n.length));case 2:case"end":return e.stop()}}),e)})),x=0;case 33:if(!(x<12)){r.next=38;break}return r.delegateYield(v(x),"t1",35);case 35:x++,r.next=33;break;case 38:o.binnacles=d,r.next=43;break;case 41:o.binnacles=[],o.seriesBinnaclesPerMonth[0].data=[];case 43:r.next=48;break;case 45:r.prev=45,r.t2=r.catch(2),console.log(r.t2);case 48:case"end":return r.stop()}}),r,null,[[2,45]])})))()},getBinnacle:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/getBinnacle",e);case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.seriesBinnaclesPerMonth[0].data=[],e.seriesComplaintsPerMonth[0].data=[],n=e.selectZone?e.selectZone:null,r=e.selectSubZone?e.selectSubZone:null,o=e.selectYear?e.selectYear.fecha_captura:null,t.next=8,e.getBinnacles(n,r,o);case 8:return t.next=10,e.getComplaints(n,r,o);case 10:e.isLoading=!1;case 11:case"end":return t.stop()}}),t)})))()},cleanFilters:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.getMetas();case 3:return e.selectSubZone=null,e.selectZone=null,e.seriesBinnaclesPerMonth[0].data=[],e.seriesComplaintsPerMonth[0].data=[],t.next=9,e.getBinnacles(null,null,null);case 9:return t.next=11,e.getComplaints(null,null,null);case 11:e.isLoading=!1;case 12:case"end":return t.stop()}}),t)})))()},getMetas:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/getMetas");case 3:n=t.sent,e.optionsMetas=n,r=new Date,n.find((function(e){return Number(e.fecha_captura)===r.getFullYear()}))?e.selectYear=n.find((function(e){return Number(e.fecha_captura)===r.getFullYear()})):e.selectYear=null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},editMeta:function(){this.formMeta=this.selectYear},createMeta:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.formMeta.idmeta||!e.optionsMetas.find((function(t){return t.fecha_captura===e.formMeta.fecha_captura}))){t.next=4;break}e.$buefy.toast.open({duration:5e3,message:"Ya existe un registro con ese año",type:"is-danger"}),t.next=14;break;case 4:return t.prev=4,t.next=7,e.$store.dispatch("modules/plans/createOrUpdateMeta",e.formMeta);case 7:e.formMeta={},e.getMetas(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))()}}}),c=(n(1185),n(89)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Año de visualización"}},[t("b-select",{attrs:{placeholder:"Seleccione un año"},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}},e._l(e.optionsMetas,(function(option){return t("option",{key:option.idmeta,domProps:{value:option}},[e._v("\n                    "+e._s(option.fecha_captura)+" - "+e._s(option.dato)+"\n                  ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{type:"is-info is-light"},on:{click:e.viewYearData}},[e._v("\n                Visualizar\n              ")]),e._v(" "),t("b-button",{attrs:{type:"is-warning is-light"},on:{click:e.editMeta}},[e._v("\n                Editar\n              ")])],1)])])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("b-field",{attrs:{horizontal:"",label:"Nuevo registro"}},[t("b-input",{attrs:{placeholder:"Año",expanded:""},model:{value:e.formMeta.fecha_captura,callback:function(t){e.$set(e.formMeta,"fecha_captura",t)},expression:"formMeta.fecha_captura"}}),e._v(" "),t("b-input",{attrs:{placeholder:"Meta",type:"text",expanded:""},model:{value:e.formMeta.dato,callback:function(t){e.$set(e.formMeta,"dato",t)},expression:"formMeta.dato"}}),e._v(" "),t("b-button",{attrs:{type:"is-success is-light"},on:{click:e.createMeta}},[e._v("\n              Guardar\n            ")])],1)],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports},679:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},895:function(e,t,n){var content=n(1186);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(167).default)("685acf14",content,!0,{sourceMap:!1})}}]);