(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1182:function(e,t,n){var r=n(503);n(35),n(128),e.exports={data:function(){return{total:0,list:[],checkedRows:[],defaultOpenedDetails:[],trashObject:null,isModalActive:!1,isLoading:!1,sortOrder:"desc",defaultSortOrder:"desc"}},watch:{listQuery:{handler:function(){this.list=[],this.getData(),window.scrollTo(0,0)},deep:!0}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},methods:{getData:function(){var e=this;return r(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.listQuery.offset=e.listQuery.limit*(e.listQuery.page-1),t.next=5,e.$store.dispatch("modules/"+e.action,e.listQuery);case 5:data=t.sent,e.total=data.count,e.list=data.results,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.$buefy.toast.open({message:"Algo ha salido mal :(... Intenta de nuevo!",type:"is-danger",queue:!1});case 13:return t.prev=13,e.isLoading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()},onSort:function(e,t){var n=e;this.sortField=e,this.sortOrder=t,"desc"===t&&(n="-"+e),this.listQuery.ordering=n},onCollapse:function(e){this.defaultOpenedDetails=[e[this.key]]},trashModal:function(e){this.trashObject=e,this.isModalActive=!0},trashCancel:function(){this.isModalActive=!1}}}},1183:function(e,t,n){"use strict";n(894)},1184:function(e,t,n){var r=n(165),c=n(494),o=n(678),l=r((function(i){return i[1]})),d=c(o);l.push([e.i,".name:hover{cursor:pointer}tr.is-success{background:#28a745}tr.is-info{background:#000408}tr.is-danger{background:#f02516}tr.is-warning{background:#fca503}.card{background:#fff}#home{background-color:rgba(4,3,3,.604);background-image:url("+d+");background-origin:content-box;background-position:50%;background-repeat:repeat;background-size:100%;width:100%}#card-info{height:400px}",""]),l.locals={},e.exports=l},1246:function(e,t,n){"use strict";n.r(t);var r=n(5),table=(n(59),n(38),n(116),n(498),n(35),n(1182)),c={name:"Home",mixins:[n.n(table).a],fetch:function(){this.$store.commit("setTitleStack",["Inicio"])},data:function(){return{isLoading:!1,formMeta:{fecha_captura:"",dato:""},optionsMetas:[],selectYear:{},series:[],seriesBinnacles:[],seriesPlanification:[],options:{labels:["Opiniones técnicas","Denuncias"]},optionsBinnacle:{labels:["Revisado","En revisión","Por revisar"]},optionsPlanification:{labels:["En proceso","Finalizado","Por comenzar"]},dateNow:new Date,techOps:[],techOp:[],vegetation:[],complaints:[],programmed:[],planification:[],binnacles:[]}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.getMetas();case 3:if(!e.selectYear.fecha_captura){t.next=14;break}return t.next=6,e.getComplaints(e.selectYear.fecha_captura);case 6:return t.next=8,e.getTechOp(e.selectYear.fecha_captura);case 8:return t.next=10,e.getBinnacles(e.selectYear.fecha_captura);case 10:return t.next=12,e.getPlanifications(e.selectYear.fecha_captura);case 12:e.getVegetation(),e.getInfoDonnut();case 14:e.isLoading=!1;case 15:case"end":return t.stop()}}),t)})))()},methods:{getBinnacles:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,o,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/binnacles/getBinnacles");case 3:r=n.sent,c=new Date,t.binnacles=r.filter((function(t){var n=new Date(t.date);if(e){if(n.getFullYear()===Number(e))return t}else if(n.getFullYear()===c.getFullYear())return t})),o=t.binnacles.filter((function(e){return"revisado"===e.status})),l=t.binnacles.filter((function(e){return"en-revision"===e.status})),d=t.binnacles.filter((function(e){return"por-revisar"===e.status})),t.seriesBinnacles=[Number(o.length),Number(l.length),Number(d.length)],n.next=14;break;case 12:n.prev=12,n.t0=n.catch(0);case 14:case"end":return n.stop()}}),n,null,[[0,12]])})))()},getComplaints:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/complaint/getComplaints");case 3:r=n.sent,t.complaints=[],t.complaints=r.filter((function(t){if(e){if(new Date(t.date_reception).getFullYear()===Number(e))return t}else{var n=new Date(t.date_reception),r=new Date;if(n.getFullYear()===r.getFullYear())return t}})),console.log(t.complaints),t.complaint=t.complaints.length,n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getTechOp:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("modules/technicalOp/getTechnicalOps");case 3:r=n.sent,t.techOps=[],t.techOps=r.filter((function(t){if(e){if(new Date(t.application_date).getFullYear()===Number(e))return t}else{var n=new Date(t.application_date),r=new Date;if(n.getFullYear()===r.getFullYear())return t}})),t.techOp=t.techOps.length,n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})))()},getVegetation:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/vegetation/getVegetations");case 3:n=t.sent,e.vegetation=n,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getPlanifications:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,o,l,d,f,h,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new Date,c=r.getFullYear(),o="",l="",e?(o=new Date(e,0,1),l=new Date(e,11,31)):(o=new Date(c,0,1),l=new Date(c,11,31)),n.prev=5,n.next=8,t.$store.dispatch("modules/plans/getPlans",[o,l]);case 8:d=n.sent,t.planification=d,f=d.filter((function(e){return"process"===e.estatus})),h=d.filter((function(e){return"finally"===e.estatus})),v=d.filter((function(e){return"active"===e.estatus})),t.seriesPlanification=[Number(f.length),Number(h.length),Number(v.length)],n.next=18;break;case 16:n.prev=16,n.t0=n.catch(5);case 18:case"end":return n.stop()}}),n,null,[[5,16]])})))()},getInfoDonnut:function(){this.series=[Number(this.techOp),Number(this.complaint)]},viewYear:function(option){console.log(option),this.selectYear=option},viewYearData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.getComplaints(e.selectYear.fecha_captura);case 3:return t.next=5,e.getTechOp(e.selectYear.fecha_captura);case 5:return t.next=7,e.getBinnacles(e.selectYear.fecha_captura);case 7:return t.next=9,e.getPlanifications(e.selectYear.fecha_captura);case 9:e.getVegetation(),e.getInfoDonnut(),e.isLoading=!1;case 12:case"end":return t.stop()}}),t)})))()},getMetas:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("modules/plans/getMetas");case 3:n=t.sent,e.optionsMetas=n,r=new Date,n.find((function(e){return Number(e.fecha_captura)===r.getFullYear()}))?e.selectYear=n.find((function(e){return Number(e.fecha_captura)===r.getFullYear()})):e.selectYear=null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},editMeta:function(){this.formMeta=this.selectYear},createMeta:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.formMeta.idmeta||!e.optionsMetas.find((function(t){return t.fecha_captura===e.formMeta.fecha_captura}))){t.next=4;break}e.$buefy.toast.open({duration:5e3,message:"Ya existe un registro con ese año",type:"is-danger"}),t.next=14;break;case 4:return t.prev=4,t.next=7,e.$store.dispatch("modules/plans/createOrUpdateMeta",e.formMeta);case 7:e.formMeta={},e.getMetas(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))()}},head:function(){return{title:"Inicio — Cuxtal"}}},o=(n(1183),n(89)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[t("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),t("div",{staticClass:"columns mt-2"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{horizontal:"",label:"Año de visualización"}},[t("b-select",{attrs:{placeholder:"Seleccione un año"},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}},e._l(e.optionsMetas,(function(option){return t("option",{key:option.idmeta,domProps:{value:option}},[e._v("\n                    "+e._s(option.fecha_captura)+" - "+e._s(option.dato)+"\n                  ")])})),0)],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{type:"is-info is-light"},on:{click:e.viewYearData}},[e._v("\n                Visualizar\n              ")]),e._v(" "),t("b-button",{attrs:{type:"is-warning is-light"},on:{click:e.editMeta}},[e._v("\n                Editar\n              ")])],1)])])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("b-field",{attrs:{horizontal:"",label:"Nuevo registro"}},[t("b-input",{attrs:{placeholder:"Año",expanded:""},model:{value:e.formMeta.fecha_captura,callback:function(t){e.$set(e.formMeta,"fecha_captura",t)},expression:"formMeta.fecha_captura"}}),e._v(" "),t("b-input",{attrs:{placeholder:"Meta",type:"text",expanded:""},model:{value:e.formMeta.dato,callback:function(t){e.$set(e.formMeta,"dato",t)},expression:"formMeta.dato"}}),e._v(" "),t("b-button",{attrs:{type:"is-success is-light"},on:{click:e.createMeta}},[e._v("\n              Guardar\n            ")])],1)],1)])])]),e._v(" "),e.selectYear?t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"card",attrs:{id:"card-info"}},[t("header",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n            Recorridos del año "+e._s(e.selectYear?e.selectYear.fecha_captura:e.dateNow.getFullYear())+"\n          ")])]),e._v(" "),e.seriesPlanification.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.optionsPlanification,series:e.seriesPlanification}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])]),e._v(" "),t("footer",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("p",[e._v("Meta de recorridos: "),t("strong",[e._v(e._s(e.selectYear.dato))])])]),e._v(" "),t("div",{staticClass:"card-footer-item"},[t("p",[e._v("\n              Recorridos registrados:\n              "),t("strong",[e._v(e._s(e.planification.length))])])])])])]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"card",attrs:{id:"card-info"}},[t("header",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v("\n            Bitácoras del año "+e._s(e.selectYear?e.selectYear.fecha_captura:e.dateNow.getFullYear())+"\n          ")])]),e._v(" "),e.seriesBinnacles.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.optionsBinnacle,series:e.seriesBinnacles}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])]),e._v(" "),t("footer",{staticClass:"card-footer"},[t("div",{staticClass:"card-footer-item"},[t("p",[e._v("\n              Total de bitácoras registradas para el año:\n              "),t("strong",[e._v(e._s(e.binnacles.length))])])])])])])]):e._e(),e._v(" "),e.selectYear?t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6 is-offset-3"},[t("div",{staticClass:"card"},[e._m(0),e._v(" "),e.series.length>0?t("div",{staticClass:"card-content is-flex is-justify-content-center"},[t("apexchart",{attrs:{width:"380",type:"donut",options:e.options,series:e.series}})],1):t("div",{staticClass:"card-content has-text-centered"},[t("p",[e._v("No hay datos por mostrar")])])])])]):t("div",[e._m(1)])],1)}),[function(){var e=this._self._c;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n            Segumiento (denuncias y opiniones técnicas)\n          ")])])},function(){var e=this._self._c;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("h1",[this._v("Seleccione un año para visualizar su información")])])])])])}],!1,null,null,null);t.default=component.exports},678:function(e,t,n){e.exports=n.p+"img/background.461462f.jpg"},894:function(e,t,n){var content=n(1184);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(166).default)("62c0de36",content,!0,{sourceMap:!1})}}]);