(window.webpackJsonp=window.webpackJsonp||[]).push([[127,84],{1240:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(266),n(265),n(35),n(393)),c=n.n(o),l={name:"ClientDetail",meta:{titleStack:["Clientes","Detalle"]},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{id:null,isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isEdit:!1,activeStep:0}},computed:{getFullName:function(){return"".concat(this.form.nombre_persona," ").concat(this.form.apellido_persona)},titleStack:function(){return["Admin","Clientes",this.isEdit?this.getFullName:"Nuevo cliente"]},heroTitle:function(){return this.isEdit?this.getFullName:"Crear Cliente"},heroRouterLinkTo:function(){return this.isEdit?"/client":"/"},heroRouterLinkLabel:function(){return this.isEdit?"Nuevo cliente":"Dashboard"},formCardTitle:function(){return this.isEdit?"Editar Cliente":"Nuevo Cliente"}},methods:{nextStep:function(){this.activeStep=this.activeStep+1},previousStep:function(){this.activeStep-=this.activeStep},saveForm:function(form){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$store.commit("buttonLoadingToggle"),t.next=4,e.$store.dispatch("modules/clients/createOrUpdate",form);case 4:e.$buefy.snackbar.open({message:"Cliente guardado",type:"is-success",queue:!1}),e.$router.push("/clients"),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.prev=10,e.$store.commit("buttonLoadingToggle"),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,8,10,13]])})))()},cancelForm:function(){},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.params.id){t.next=15;break}return e.$store.commit("loadingToggle"),t.prev=2,t.next=5,e.$store.dispatch("modules/clients/getById",e.$route.params.id);case 5:(n=t.sent)?(e.isEdit=!0,e.form=n):e.$router.push({name:"clients"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.$buefy.toast.open({message:"Error: ".concat(t.t0.message),type:"is-danger",queue:!1});case 12:return t.prev=12,e.$store.commit("loadingToggle"),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()},getClearFormObject:function(){return{}},input:function(e){this.createdReadable=c()(e).format("MMM D, YYYY")},submit:function(){var e=this;this.isLoading=!0,setTimeout((function(){e.isLoading=!1,e.$buefy.snackbar.open({message:"Demo only",queue:!1})}),500)}},head:function(){return{title:"Client — ParamQ"}}},d=n(89),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"container m-3"},[t("tiles",[t("card-component",{staticClass:"tile is-child",attrs:{title:e.formCardTitle,icon:"account-edit"}},[t("b-steps",{attrs:{"has-navigation":!1},model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}},[t("b-step-item",{attrs:{clickable:e.activeStep>0,label:"Datos generales",icon:"account"}},[t("h1",{staticClass:"title is-4"},[e._v("\n              Información general\n            ")]),e._v(" "),t("ClientForm",{attrs:{form:e.form},on:{save:e.saveForm,cancel:e.cancelForm,next:e.nextStep,previous:e.previousStep}})],1),e._v(" "),t("b-step-item",{attrs:{clickable:e.activeStep>1,label:"Dirección",icon:"map-marker"}},[t("h1",{staticClass:"title is-4"},[e._v("\n              Dirección\n            ")]),e._v(" "),t("ClientAddressForm",{attrs:{form:e.form},on:{save:e.saveForm,cancel:e.cancelForm,next:e.nextStep,previous:e.previousStep}})],1),e._v(" "),t("b-step-item",{attrs:{clickable:!1,label:"Datos familiares",icon:"account-group"}},[t("h1",{staticClass:"title is-4"},[e._v("\n              Información familiar\n            ")]),e._v(" "),t("ClientFamiliarForm",{attrs:{form:e.form},on:{save:e.saveForm,cancel:e.cancelForm}})],1)],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CardComponent:n(496).default,Tiles:n(737).default})},737:function(e,t,n){"use strict";n.r(t);n(116),n(136);var r=n(738),o=n.n(r),filter=n(743),c=n.n(filter),l={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},data:function(){return{windowOuterWidth:0}},computed:{newMaxPerRow:function(){return this.windowOuterWidth>=769&&this.windowOuterWidth<=1024?2:this.maxPerRow}},mounted:function(){this.updateWindowOuterWidth(),window.addEventListener("resize",this.updateWindowOuterWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.updateWindowOuterWidth)},methods:{renderAncestor:function(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map((function(element){return e("div",{attrs:{class:"tile is-parent"}},[element])})))},updateWindowOuterWidth:function(){this.windowOuterWidth=window.outerWidth}},render:function(e){var t=this,n=c()(this.$slots.default,(function(slot){return!!slot.tag}));return n.length<=this.newMaxPerRow?this.renderAncestor(e,n):e("div",{attrs:{class:"is-tiles-wrapper"}},o()(n,this.newMaxPerRow).map((function(n){return t.renderAncestor(e,n)})))}},d=n(89),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);