(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1183:function(e,t,n){"use strict";n(894)},1184:function(e,t,n){var r=n(166),o=n(494),c=n(679),l=r((function(i){return i[1]})),d=o(c);l.push([e.i,".card{background:#fff}#home{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:repeat;background-size:100%;width:100%}",""]),l.locals={},e.exports=l},1252:function(e,t,n){"use strict";n.r(t);n(58),n(188);var r=n(5),o=(n(498),n(38),n(116),n(59),n(117),n(129),n(60),n(34),{name:"Concentrado",data:function(){return{isLoading:!1,optionsMetas:[],selectYear:{},formMeta:{},planifications:[],zones:[],subZones:[],selectZone:null,selectSubZone:null,optionsPlanification:{labels:["En proceso","Finalizado","Por comenzar"],chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"recorridos-por-año",columnDelimiter:",",headerCategory:"Estado",headerValue:"Recorridos",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"recorridos-por-año"},png:{filename:"recorridos-por-año"}}}}},seriesPlanification:[],optionsPlansPerMonth:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" recorridos"}}},noData:{text:"Cargando..."},chart:{toolbar:{export:{csv:{filename:"recorridos-por-mes",columnDelimiter:",",headerCategory:"Mes",headerValue:"Recorridos",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"recorridos-por-mes"},png:{filename:"recorridos-por-mes"}}}}},seriesPlansPerMoth:[{name:"Recorridos",data:[]}],seriesBinnacles:[],optionsBinnacle:{labels:["Revisado","En revisión","Por revisar"],chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"bitácoras-por-estado",columnDelimiter:",",headerCategory:"Estado",headerValue:"Bitácoras",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"bitácoras-por-estado"},png:{filename:"bitácoras-por-estado"}}}}},binnacles:[],optionsComplaintsPerMonth:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" registros"}}},chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"bitácoras-por-zona-y-subzona",columnDelimiter:",",headerCategory:"Mes",headerValue:"Bitácoras",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"bitácoras-por-zona-y-subzona"},png:{filename:"bitácoras-por-zona-y-subzona"}}}}},seriesComplaintsPerMonth:[{name:"Denuncias",data:[]}],complaints:[],complaintsIlicits:[],ilicits:[],selectIlicit:null,optionsComplaintsIlicitsPerMonth:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" registros"}}},chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"denuncias-por-ilícito",columnDelimiter:",",headerCategory:"Mes",headerValue:"Denuncias",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"denuncias-por-ilícito"},png:{filename:"denuncias-por-ilícito"}}}}},seriesComplaintsIlicitsPerMonth:[{name:"Denuncias",data:[]}],resOps:[],filterOps:[],optionsOp:{labels:["Positivo","Negativo","Condicionado","Otro"],chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"opiniones-tecnicas-por-respuesta",columnDelimiter:",",headerCategory:"Respuesta",headerValue:"Opiniones técnicas",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"opiniones-tecnicas-por-respuesta"},png:{filename:"opiniones-tecnicas-por-respuesta"}}}}},seriesOp:[],optionsComplaintsFinish:{labels:["En proceso","Finalizado"],chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"denuncias-concluidas-y-no-concluidas",columnDelimiter:",",headerCategory:"Respuesta",headerValue:"Opiniones técnicas",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"denuncias-concluidas-y-no-concluidas"},png:{filename:"denuncias-concluidas-y-no-concluidas"}}}}},seriesComplaintsFinish:[],optionsComplaintsPerIlicit:{labels:[],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" registros"}}},chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"denuncias-por-ilícito",columnDelimiter:",",headerCategory:"Mes",headerValue:"Denuncias",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"denuncias-por-ilícito"},png:{filename:"denuncias-por-ilícito"}}}}},seriesComplaintsPerIllicit:[],resComplaint:[],optionsComplaintsPerResponseOptions:{labels:[],yaxis:{labels:{formatter:function(e){return parseInt(e)}}},tooltip:{y:{formatter:function(e){return parseInt(e)+" registros"}}},chart:{toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:"denuncias-por-tipo-respuesta",columnDelimiter:",",headerCategory:"Mes",headerValue:"Denuncias",dateFormatter:function(e){return new Date(e).toDateString()}},svg:{filename:"denuncias-por-tipo-respuesta"},png:{filename:"denuncias-por-tipo-respuesta"}}}}},seriesComplaintsPerResponseOptions:[]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.getResponsesComplaint(),e.getZonings(),e.getSubZonings(),e.getIlicits(),e.getResponsesOp(),t.next=7,e.getMetas();case 7:return t.next=9,e.viewYearData();case 9:case"end":return t.stop()}}),t)})))()},methods:{getMetas:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/getMetas");case 3:n=t.sent,e.optionsMetas=n,r=new Date,n.find((function(e){return Number(e.fecha_captura)===r.getFullYear()}))?e.selectYear=n.find((function(e){return Number(e.fecha_captura)===r.getFullYear()})):e.selectYear=null,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},editMeta:function(){this.formMeta=this.selectYear},createMeta:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.formMeta.idmeta||!e.optionsMetas.find((function(t){return t.fecha_captura===e.formMeta.fecha_captura}))){t.next=4;break}e.$buefy.toast.open({duration:5e3,message:"Ya existe un registro con ese año",type:"is-danger"}),t.next=13;break;case 4:return t.prev=4,t.next=7,e.$store.dispatch("modules/plans/createOrUpdateMeta",e.formMeta);case 7:e.formMeta={},e.getMetas(),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(4);case 13:case"end":return t.stop()}}),t,null,[[4,11]])})))()},viewYearData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.seriesPlansPerMoth[0].data=[],t.next=4,e.getBinnacles(e.selectYear.fecha_captura);case 4:return t.next=6,e.getPlanifications(e.selectYear.fecha_captura);case 6:return t.next=8,e.getComplaintsPerZones(null,null,e.selectYear.fecha_captura);case 8:return t.next=10,e.getComplaintsPerIlicits(null,e.selectYear.fecha_captura);case 10:return t.next=12,e.getOp(e.selectYear.fecha_captura);case 12:return t.next=14,e.getComplaintsPerResposne(e.selectYear.fecha_captura);case 14:return t.next=16,e.complaintsPerIlicit(e.selectYear.fecha_captura);case 16:return t.next=18,e.getComplaintsPerResponseOptions(e.selectYear.fecha_captura);case 18:e.isLoading=!1;case 19:case"end":return t.stop()}}),t)})))()},getBinnacles:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/getBinnacles");case 3:r=n.sent,o=new Date,t.binnacles=r.filter((function(t){var n=new Date(t.date);if(e){if(n.getFullYear()===Number(e))return t}else if(n.getFullYear()===o.getFullYear())return t})),c=t.binnacles.filter((function(e){return"revisado"===e.status})),l=t.binnacles.filter((function(e){return"en-revision"===e.status})),d=t.binnacles.filter((function(e){return"por-revisar"===e.status})),t.seriesBinnacles=[Number(c.length),Number(l.length),Number(d.length)],n.next=14;break;case 12:n.prev=12,n.t0=n.catch(0);case 14:case"end":return n.stop()}}),n,null,[[0,12]])})))()},getPlanifications:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d,f,i,m,h,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new Date,o=r.getFullYear(),c="",l="",e?(c=new Date(e,0,1),l=new Date(e,11,31)):(c=new Date(o,0,1),l=new Date(o,11,31)),n.prev=5,n.next=8,t.$store.dispatch("modules/plans/getPlans",[c,l]);case 8:d=n.sent,t.planifications=d,t.seriesPlansPerMoth[0].data=[],f=regeneratorRuntime.mark((function e(i){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=d.filter((function(e){if(new Date(e.start_date).getMonth()===i)return e})),t.seriesPlansPerMoth[0].data.push(parseInt(n.length));case 2:case"end":return e.stop()}}),e)})),i=0;case 13:if(!(i<12)){n.next=18;break}return n.delegateYield(f(i),"t0",15);case 15:i++,n.next=13;break;case 18:m=d.filter((function(e){return"process"===e.estatus})),h=d.filter((function(e){return"finally"===e.estatus})),v=d.filter((function(e){return"active"===e.estatus})),t.seriesPlanification=[Number(m.length),Number(h.length),Number(v.length)],n.next=26;break;case 24:n.prev=24,n.t1=n.catch(5);case 26:case"end":return n.stop()}}),n,null,[[5,24]])})))()},getComplaintsPerZones:function(e,t,n){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,l,d,f,m,i,h,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.seriesComplaintsPerMonth[0].data=[],c=!1,c=!(!e&&!t),r.prev=3,r.next=6,o.$store.dispatch("modules/complaint/getComplaints");case 6:if(l=r.sent,o.complaints=[],d=[],f=l.filter((function(e){if(n){if(new Date(e.date_reception).getFullYear()===Number(n))return e}else{var t=new Date(e.date_reception),r=new Date;if(t.getFullYear()===r.getFullYear())return e}})),e&&(d=f.filter((function(t){if(t.list_subzoning_complaint&&t.list_subzoning_complaint.filter((function(t){return t.idzoning===e})).length>0)return t}))),t&&(d=d.length>0?d.filter((function(e){if(e.list_subzoning_complaint.filter((function(e){return e.idsubzoning===t})).length>0)return e})):f.filter((function(e){if(e.list_subzoning_complaint.filter((function(e){return e.idsubzoning===t})).length>0)return e}))),!(d.length>0)){r.next=23;break}m=regeneratorRuntime.mark((function e(i){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=d.filter((function(e){if(new Date(e.date_reception).getMonth()===i)return e})),o.seriesComplaintsPerMonth[0].data.push(parseInt(t.length));case 2:case"end":return e.stop()}}),e)})),i=0;case 15:if(!(i<12)){r.next=20;break}return r.delegateYield(m(i),"t0",17);case 17:i++,r.next=15;break;case 20:o.complaints=d,r.next=36;break;case 23:if(c){r.next=34;break}h=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=f.filter((function(e){if(new Date(e.date_reception).getMonth()===t)return e})),o.seriesComplaintsPerMonth[0].data.push(parseInt(n.length));case 2:case"end":return e.stop()}}),e)})),v=0;case 26:if(!(v<12)){r.next=31;break}return r.delegateYield(h(v),"t1",28);case 28:v++,r.next=26;break;case 31:o.complaints=f,r.next=36;break;case 34:o.complaints=[],o.seriesComplaintsPerMonth[0].data=[];case 36:r.next=40;break;case 38:r.prev=38,r.t2=r.catch(3);case 40:case"end":return r.stop()}}),r,null,[[3,38]])})))()},getComplaintsPerIlicits:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,f,i,m,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.seriesComplaintsIlicitsPerMonth[0].data=[],o=!1,o=!!e,r.prev=3,r.next=6,n.$store.dispatch("modules/complaint/getComplaints");case 6:if(c=r.sent,n.complaints=[],l=[],d=c.filter((function(e){if(t){if(new Date(e.date_reception).getFullYear()===Number(t))return e}else{var n=new Date(e.date_reception),r=new Date;if(n.getFullYear()===r.getFullYear())return e}})),e&&(l=d.filter((function(t){return parseInt(t.idilicit_denounced)===parseInt(e)}))),!(l.length>0)){r.next=22;break}f=regeneratorRuntime.mark((function e(i){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.filter((function(e){if(new Date(e.date_reception).getMonth()===i)return e})),n.seriesComplaintsIlicitsPerMonth[0].data.push(parseInt(t.length));case 2:case"end":return e.stop()}}),e)})),i=0;case 14:if(!(i<12)){r.next=19;break}return r.delegateYield(f(i),"t0",16);case 16:i++,r.next=14;break;case 19:n.complaintsIlicits=l,r.next=35;break;case 22:if(o){r.next=33;break}m=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=d.filter((function(e){if(new Date(e.date_reception).getMonth()===t)return e})),n.seriesComplaintsIlicitsPerMonth[0].data.push(parseInt(r.length));case 2:case"end":return e.stop()}}),e)})),h=0;case 25:if(!(h<12)){r.next=30;break}return r.delegateYield(m(h),"t1",27);case 27:h++,r.next=25;break;case 30:n.complaintsIlicits=d,r.next=35;break;case 33:n.complaintsIlicits=[],n.seriesComplaintsIlicitsPerMonth[0].data=[];case 35:r.next=39;break;case 37:r.prev=37,r.t2=r.catch(3);case 39:case"end":return r.stop()}}),r,null,[[3,37]])})))()},complaintsPerIlicit:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/complaint/getComplaints");case 3:r=n.sent,o=r.filter((function(t){if(e){if(new Date(t.date_reception).getFullYear()===Number(e))return t}else{var n=new Date(t.date_reception),r=new Date;if(n.getFullYear()===r.getFullYear())return t}})),t.optionsComplaintsPerIlicit.labels=[],t.seriesComplaintsPerIllicit=[],t.ilicits.forEach((function(e){t.optionsComplaintsPerIlicit.labels.push(e.description);var n=o.filter((function(t){return t.idilicit_denounced===e.idilicit_denounced}));t.seriesComplaintsPerIllicit.push(n.length)})),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getComplaintsPerResponseOptions:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/complaint/getComplaints");case 3:r=n.sent,o=r.filter((function(t){if(e){if(new Date(t.date_reception).getFullYear()===Number(e))return t}else{var n=new Date(t.date_reception),r=new Date;if(n.getFullYear()===r.getFullYear())return t}})),t.optionsComplaintsPerResponseOptions.labels=[],t.seriesComplaintsPerResponseOptions=[],t.resComplaint.forEach((function(e){t.optionsComplaintsPerResponseOptions.labels.push(e.description);var n=o.filter((function(t){return console.log(t),t.response===e.description}));t.seriesComplaintsPerResponseOptions.push(n.length)})),console.log(t.seriesComplaintsPerResponseOptions),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})))()},getComplaintsPerResposne:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.seriesComplaintsFinish=[],n.prev=1,n.next=4,t.$store.dispatch("modules/complaint/getComplaints");case 4:r=n.sent,o=r.filter((function(t){if(e){if(new Date(t.date_reception).getFullYear()===Number(e))return t}else{var n=new Date(t.date_reception),r=new Date;if(n.getFullYear()===r.getFullYear())return t}})),c=o.filter((function(e){if(e.response_date)return e})),(l=o.filter((function(e){if(!e.response_date)return e}))).length>0?t.seriesComplaintsFinish.push(l.length):t.seriesComplaintsFinish.push(0),c.length>0?t.seriesComplaintsFinish.push(c.length):t.seriesComplaintsFinish.push(0),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},getSubZonings:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getSubZones");case 3:n=t.sent,e.subZones=n,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getZonings:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/zones/getZones");case 3:n=t.sent,e.zones=n,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getIlicits:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/ilicitDenounced/getIlicitDenounceds");case 3:e.ilicits=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getResponsesOp:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/responseOp/getResponseOps");case 3:e.resOps=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getResponsesComplaint:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/response/getResponses");case 3:e.resComplaint=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getOp:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.seriesOp=[],n.prev=1,n.next=4,t.$store.dispatch("modules/technicalOp/getTechnicalOps");case 4:r=n.sent,o=r.filter((function(t){if(new Date(t.application_date).getFullYear()===Number(e))return t})),c=regeneratorRuntime.mark((function e(i){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.resOps[i]),(n=o.filter((function(e){if(t.resOps[i].description===e.response_op)return e}))).length>0?t.seriesOp.push(n.length):t.seriesOp.push(0);case 3:case"end":return e.stop()}}),e)})),n.t0=regeneratorRuntime.keys(t.resOps);case 8:if((n.t1=n.t0()).done){n.next=13;break}return i=n.t1.value,n.delegateYield(c(i),"t2",11);case 11:n.next=8;break;case 13:n.next=17;break;case 15:n.prev=15,n.t3=n.catch(1);case 17:case"end":return n.stop()}}),n,null,[[1,15]])})))()}},head:function(){return{title:"Concentrado - Cuxtal"}}}),c=(n(1183),n(89)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"columns mt-2"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Año"}},[t("b-select",{attrs:{placeholder:"Seleccione un año"},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}},e._l(e.optionsMetas,(function(option){return t("option",{key:option.idmeta,domProps:{value:option}},[e._v("\n                    "+e._s(option.fecha_captura)+" - "+e._s(option.dato)+"\n                  ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{type:"is-info is-light"},on:{click:e.viewYearData}},[e._v("\n                Visualizar\n              ")]),e._v(" "),t("b-button",{attrs:{type:"is-warning is-light"},on:{click:e.editMeta}},[e._v("\n                Editar\n              ")])],1)])])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("b-field",{attrs:{horizontal:"",label:"Nuevo registro"}},[t("b-input",{attrs:{placeholder:"Año",expanded:""},model:{value:e.formMeta.fecha_captura,callback:function(t){e.$set(e.formMeta,"fecha_captura",t)},expression:"formMeta.fecha_captura"}}),e._v(" "),t("b-input",{attrs:{placeholder:"Meta",type:"text",expanded:""},model:{value:e.formMeta.dato,callback:function(t){e.$set(e.formMeta,"dato",t)},expression:"formMeta.dato"}}),e._v(" "),t("b-button",{attrs:{type:"is-success is-light"},on:{click:e.createMeta}},[e._v("\n              Guardar\n            ")])],1)],1)])])]),e._v(" "),t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(0),e._v(" "),t("div",{staticClass:"card-content"},[e.seriesPlanification.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.optionsPlanification,series:e.seriesPlanification}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(1),e._v(" "),t("div",{staticClass:"card-content"},[e.seriesBinnacles.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.optionsBinnacle,series:e.seriesBinnacles}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(2),e._v(" "),t("div",{staticClass:"card-content"},[e.seriesPlansPerMoth[0].data.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"800",type:"bar",options:e.optionsPlansPerMonth,series:e.seriesPlansPerMoth}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])])]),e._v(" "),t("div",{staticClass:"columns"}),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(3),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-navbar",{scopedSlots:e._u([{key:"end",fn:function(){return[t("b-navbar-item",[t("b-field",[t("b-button",{on:{click:function(t){return e.getComplaintsPerZones(e.selectZone,e.selectSubZone,e.selectYear.fecha_captura)}}},[e._v("\n                          Filtrar\n                        ")])],1)],1)]},proxy:!0}])},[t("template",{slot:"brand"},[t("b-navbar-item",[t("b-field",{attrs:{horizontal:"",label:"Zonas"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.selectZone,callback:function(t){e.selectZone=t},expression:"selectZone"}},e._l(e.zones,(function(option){return t("option",{key:option.idzoning,domProps:{value:option.idzoning}},[e._v("\n                            "+e._s(option.description)+"\n                          ")])})),0)],1)],1),e._v(" "),t("b-navbar-item",[t("b-field",{attrs:{horizontal:"",label:"Subzonas"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción"},model:{value:e.selectSubZone,callback:function(t){e.selectSubZone=t},expression:"selectSubZone"}},e._l(e.subZones,(function(option){return t("option",{key:option.idsubzoning,domProps:{value:option.idsubzoning}},[e._v("\n                            "+e._s(option.description)+"\n                          ")])})),0)],1)],1)],1)],2),e._v(" "),e.seriesComplaintsPerMonth[0].data.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"800",type:"bar",options:e.optionsComplaintsPerMonth,series:e.seriesComplaintsPerMonth}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])],1)])])])])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(4),e._v(" "),t("div",{staticClass:"card-content"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-navbar",{scopedSlots:e._u([{key:"end",fn:function(){return[t("b-navbar-item",[t("b-field",[t("b-button",{on:{click:function(t){return e.getComplaintsPerIlicits(e.selectIlicit,e.selectYear.fecha_captura)}}},[e._v("\n                          Filtrar\n                        ")])],1)],1)]},proxy:!0}])},[t("template",{slot:"brand"},[t("b-navbar-item",[t("b-field",{attrs:{horizontal:"",label:"Ilícitos"}},[t("b-select",{attrs:{placeholder:"Seleccione una opción",expanded:!0},model:{value:e.selectIlicit,callback:function(t){e.selectIlicit=t},expression:"selectIlicit"}},e._l(e.ilicits,(function(option){return t("option",{key:option.idilicit_denounced,domProps:{value:option.idilicit_denounced}},[e._v("\n                            "+e._s(option.description)+"\n                          ")])})),0)],1)],1)],1)],2),e._v(" "),e.seriesComplaintsIlicitsPerMonth[0].data.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"800",type:"bar",options:e.optionsComplaintsIlicitsPerMonth,series:e.seriesComplaintsIlicitsPerMonth}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])],1)])])])])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(5),e._v(" "),t("div",{staticClass:"card-content"},[e.seriesComplaintsPerIllicit.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"700",type:"donut",options:e.optionsComplaintsPerIlicit,series:e.seriesComplaintsPerIllicit}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(6),e._v(" "),t("div",{staticClass:"card-content"},[e.seriesComplaintsFinish.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.optionsComplaintsFinish,series:e.seriesComplaintsFinish}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(7),e._v(" "),t("div",{staticClass:"card-content"},[e.seriesComplaintsPerResponseOptions.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.optionsComplaintsPerResponseOptions,series:e.seriesComplaintsPerResponseOptions}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])])]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[e._m(8),e._v(" "),t("div",{staticClass:"card-content"},[e.seriesOp.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.optionsOp,series:e.seriesOp}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])])])])],1)}),[function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Recorridos al año\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Bitácoras\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Recorridos por mes\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Denuncias por zonas y subzonas\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Denuncias por ilícito denunciado\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Denuncias por ilícito\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Denuncias si son o no concluidas\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Denuncias por tipo de respuesta\n            ")])])},function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n              Opiniones técnicas por tipo de respuesta\n            ")])])}],!1,null,null,null);t.default=component.exports},679:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},894:function(e,t,n){var content=n(1184);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(167).default)("43032d5f",content,!0,{sourceMap:!1})}}]);