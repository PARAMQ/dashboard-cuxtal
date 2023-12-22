(window.webpackJsonp=window.webpackJsonp||[]).push([[137,21,32,35,77,79,83,85,92],{1220:function(e,t,r){"use strict";r.r(t);r(61),r(58),r(59),r(38),r(70),r(60),r(71);var n=r(26),o=r(152);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Profile",fetch:function(){this.$store.commit("setTitleStack",["Mi cuenta"])},data:function(){return{plan:"BASIC"}},computed:c(c(c({},Object(o.b)(["userName","userEmail","userFullName","user"])),Object(o.b)(["isDarkModeActive"])),{},{getRol:function(){return 1===this.$store.state.user.groups[0]?"Agente":2===this.$store.state.user.groups[0]?"Administrador":""}}),head:function(){return{title:"Mi cuenta — ParamQ"}}},m=r(89),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"container m-3"},[t("tiles",[t("profile-update-form",{staticClass:"tile is-child"}),e._v(" "),t("card-component",{staticClass:"tile is-child",attrs:{title:"Perfil",icon:"account"}},[t("user-avatar",{staticClass:"has-max-width is-aligned-center"}),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Nombre"}},[t("b-input",{attrs:{value:e.userFullName,"custom-class":"is-static",readonly:""}})],1),e._v(" "),t("hr"),e._v(" "),t("b-field",{attrs:{label:"Correo electrónico"}},[t("b-input",{attrs:{value:e.userEmail,"custom-class":"is-static",readonly:""}})],1),e._v(" "),t("hr"),e._v(" "),t("b-field",{attrs:{label:"Empresa"}},[t("figure",{staticClass:"media-left image is-48x48"},[(e.isDarkModeActive,t("img",{attrs:{src:r(697)}}))]),e._v(" "),t("div",{staticClass:"media-content"},[t("div",{staticClass:"content has-text-left"},[t("span",{staticClass:"title is-7"},[e._v("\n                    "+e._s(e.user.license.business_name)+"\n                  ")]),e._v(" "),t("br"),e._v(" "),t("small",{staticClass:"has-text-weight-light"},[e._v("ParamQ")])])])])],1),e._v(" "),t("div",{staticClass:"column"},[t("b-field",{attrs:{label:"Usuario"}},[t("b-input",{attrs:{value:e.userName,"custom-class":"is-static",readonly:""}})],1),e._v(" "),t("hr"),e._v(" "),t("b-field",{attrs:{label:"Rol"}},[t("b-input",{attrs:{value:e.getRol,"custom-class":"is-static",readonly:""}})],1),e._v(" "),t("hr"),e._v(" "),t("b-field",{attrs:{label:"Licencia"}},["PREMIUM"===e.user.license.plan?t("b-icon",{staticClass:"has-text-primary",attrs:{icon:"license"}}):"BASIC"===e.user.license.plan?t("b-icon",{staticClass:"has-text-grey",attrs:{icon:"license"}}):"FREE"===e.user.license.plan?t("b-icon",{staticClass:"has-text-success",attrs:{icon:"license"}}):e._e(),e._v("\n               \n              "),t("div",{staticClass:"media-content"},[t("div",{staticClass:"content has-text-left"},[t("span",{staticClass:"title is-7"},[e._v("\n                    Plan "+e._s(e.user.license.plan)+"\n                  ")]),e._v(" "),t("b-collapse",{attrs:{open:!1,position:"is-bottom","aria-id":"contentIdForA11y1"},scopedSlots:e._u([{key:"trigger",fn:function(r){return[t("a",{staticClass:"has-text-info",attrs:{"aria-controls":"contentIdForA11y1"}},[t("small",[e._v(e._s(r.open?"Ocultar detalles":"Ver detalles"))]),e._v(" "),t("b-icon",{attrs:{size:"is-small",icon:r.open?"menu-up":"menu-down"}})],1)]}}])},[e._v(" "),t("small",{staticClass:"has-text-weight-light"},[e._v("\n                      Finalización: "+e._s(e._f("shortDate")(e.user.license.end_date))+"\n                    ")]),e._v(" "),t("br"),e._v(" "),t("small",{staticClass:"has-text-weight-light"},[e._v("\n                      No. "+e._s(e.user.license.id.toUpperCase())+"\n                    ")])])],1)])],1)],1)])],1)],1),e._v(" "),t("password-update-form")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProfileUpdateForm:r(909).default,UserAvatar:r(708).default,CardComponent:r(482).default,Tiles:r(746).default,PasswordUpdateForm:r(910).default})},689:function(e,t){e.exports={props:{value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}}},690:function(e,t,r){"use strict";r.r(t);r(128);var input=r(689),n={mixins:[r.n(input).a],props:{vid:{type:String},rules:{type:[Object,String],default:""},normal:Boolean,margin:{type:String,default:"mb-3"}},methods:{getMessage:function(e,t,r){return e[0]?e[0]:r}}},o=r(89),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors,o=r.valid;return[t("b-field",e._b({class:e.margin,attrs:{type:{"is-danger":n[0],"is-success":o&&!e.$attrs.readonly},message:e.getMessage(n,o,e.$attrs.message)}},"b-field",e.$attrs,!1),[e._t("input",(function(){return[e.normal?t("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1)):t("b-input",e._b({on:{input:function(t){e.innerValue=e.innerValue.toUpperCase()}},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);t.default=component.exports},697:function(e,t,r){e.exports=r.p+"img/logo.5f07e1d.png"},708:function(e,t,r){"use strict";r.r(t);r(61),r(58),r(59),r(38),r(70),r(60),r(71);var n=r(26),o=(r(101),r(167),r(152));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var e="somename";return this.userName&&(e=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(e,".svg?options[mood][]=happy")}},Object(o.b)(["userAvatar","userName"]))},d=c,m=r(89),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"is-user-avatar"},[t("img",{attrs:{src:e.newUserAvatar,alt:e.userName}})])}),[],!1,null,null,null);t.default=component.exports},746:function(e,t,r){"use strict";r.r(t);r(116),r(136);var n=r(747),o=r.n(n),filter=r(752),l=r.n(filter),c={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},data:function(){return{windowOuterWidth:0}},computed:{newMaxPerRow:function(){return this.windowOuterWidth>=769&&this.windowOuterWidth<=1024?2:this.maxPerRow}},mounted:function(){this.updateWindowOuterWidth(),window.addEventListener("resize",this.updateWindowOuterWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.updateWindowOuterWidth)},methods:{renderAncestor:function(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map((function(element){return e("div",{attrs:{class:"tile is-parent"}},[element])})))},updateWindowOuterWidth:function(){this.windowOuterWidth=window.outerWidth}},render:function(e){var t=this,r=l()(this.$slots.default,(function(slot){return!!slot.tag}));return r.length<=this.newMaxPerRow?this.renderAncestor(e,r):e("div",{attrs:{class:"is-tiles-wrapper"}},o()(r,this.newMaxPerRow).map((function(r){return t.renderAncestor(e,r)})))}},d=r(89),component=Object(d.a)(c,undefined,undefined,!1,null,null,null);t.default=component.exports},909:function(e,t,r){"use strict";r.r(t);r(61),r(58),r(59),r(38),r(70),r(60),r(71);var n=r(5),o=r(26),l=(r(35),r(152));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"ProfileUpdateForm",data:function(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)(["user"])),watch:{user:function(e){this.form=e}},mounted:function(){this.form=this.user},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$store.dispatch("modules/auth/updateAccount",e.form);case 4:e.$store.commit("user",e.form),e.$buefy.snackbar.open({message:"Perfil actualizado",queue:!1}),e.isLoading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),e.isLoading=!1,e.$buefy.snackbar.open({message:"No sé puede actualizar en este momento",type:"is-danger",queue:!1});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}},m=d,f=r(89),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("card-component",{attrs:{title:"Editar Perfil",icon:"account-circle"}},[t("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[t("form",{on:{submit:function(t){return t.preventDefault(),n(e.submit)}}},[t("b-field",{attrs:{label:"Nombre completo",horizontal:""}},[t("BInputWithValidation",{attrs:{rules:"required",name:"first_name",label:"Nombre(s)","label-position":"on-border",normal:""},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),e._v(" "),t("BInputWithValidation",{attrs:{rules:"required",name:"last_name",label:"Apellido(s)","label-position":"on-border",normal:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1),e._v(" "),t("hr"),e._v(" "),t("BInputWithValidation",{attrs:{rules:"required",name:"username",label:"Usuario",horizontal:"",normal:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e._v(" "),t("hr"),e._v(" "),t("BInputWithValidation",{attrs:{rules:"required",name:"email",label:"E-mail",horizontal:"",normal:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),t("hr"),e._v(" "),t("b-field",{attrs:{horizontal:""}},[t("div",{staticClass:"control"},[t("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"submit"}},[e._v("\n            Guardar\n          ")])])])],1)]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BInputWithValidation:r(690).default,CardComponent:r(482).default})},910:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(35),{name:"PasswordUpdateForm",data:function(){return{isLoading:!1,form:{old_password:null,password:null,password_confirm:null}}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$store.dispatch("modules/auth/changePassword",e.form);case 4:e.$buefy.snackbar.open({message:"Contraseña actualizada",queue:!1}),e.isLoading=!1,t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(1),e.isLoading=!1,e.form={old_password:null,password:null,password_confirm:null},t.t0.data.old_password)e.$buefy.snackbar.open({message:"La contraseña actual es incorrecta",type:"is-danger",queue:!1});else if(t.t0.data.password)for(r in t.t0.data.password)"This password is too common."===t.t0.data.password[r]?e.$buefy.snackbar.open({message:"La contraseña es muy común.",type:"is-danger",queue:!1}):"This password is entirely numeric."===t.t0.data.password[r]?e.$buefy.snackbar.open({message:"La nueva contraseña no puede ser completamente numérica.",type:"is-danger",queue:!1}):"The password is too similar to the username."===t.t0.data.password[r]?e.$buefy.snackbar.open({message:"La nueva contraseña no puede ser similar al nombre de usuario.",type:"is-danger",queue:!1}):e.$buefy.snackbar.open({message:t.t0.data.password[r],type:"is-danger",queue:!1});else e.$buefy.snackbar.open({message:"No sé puede actualizar en este momento",type:"is-danger",queue:!1});case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}}),l=r(89),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card-component",{attrs:{title:"Cambiar contraseña",icon:"lock"}},[t("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[t("form",{on:{submit:function(t){return t.preventDefault(),n(e.submit)}}},[t("BInputWithValidation",{attrs:{rules:"required",name:"old_password",type:"password",label:"Contraseña actual",horizontal:"",normal:""},model:{value:e.form.old_password,callback:function(t){e.$set(e.form,"old_password",t)},expression:"form.old_password"}}),e._v(" "),t("hr"),e._v(" "),t("BInputWithValidation",{attrs:{rules:"required|min:8",name:"password",type:"password",vid:"password",label:"Nueva contraseña",horizontal:"",normal:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),t("br"),e._v(" "),t("BInputWithValidation",{attrs:{rules:"required|confirmed:password",name:"password_confirm",type:"password",label:"Confirmar contraseña",horizontal:"",normal:""},model:{value:e.form.password_confirm,callback:function(t){e.$set(e.form,"password_confirm",t)},expression:"form.password_confirm"}}),e._v(" "),t("hr"),e._v(" "),t("b-field",{attrs:{horizontal:""}},[t("div",{staticClass:"control"},[t("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"submit"}},[e._v("\n            Guardar\n          ")])])])],1)]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BInputWithValidation:r(690).default,CardComponent:r(482).default})}}]);