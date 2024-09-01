(window.webpackJsonp=window.webpackJsonp||[]).push([[91,22,25,33,36,94],{694:function(e,t){e.exports={props:{value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}}},695:function(e,t,n){"use strict";n.r(t);n(128);var input=n(694),r={mixins:[n.n(input).a],props:{vid:{type:String},rules:{type:[Object,String],default:""},normal:Boolean,margin:{type:String,default:"mb-3"}},methods:{getMessage:function(e,t,n){return e[0]?e[0]:n}}},o=n(76),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors,o=n.valid;return[t("b-field",e._b({class:e.margin,attrs:{type:{"is-danger":r[0],"is-success":o&&!e.$attrs.readonly},message:e.getMessage(r,o,e.$attrs.message)}},"b-field",e.$attrs,!1),[e._t("input",(function(){return[e.normal?t("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1)):t("b-input",e._b({on:{input:function(t){e.innerValue=e.innerValue.toUpperCase()}},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);t.default=component.exports},701:function(e,t,n){"use strict";n.r(t);n(61),n(58),n(59),n(38),n(70),n(60),n(71);var r=n(26),o=n(154);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={props:{handleSubmit:Function,saving:Boolean,firstStep:Boolean,saveLabel:{type:String,default:"Guardar"},saveType:{type:String,default:"is-success"},cancel:{type:Boolean,default:!0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)(["buttonLoading"])),methods:{save:function(){this.$emit("save")},previous:function(){this.$emit("previous")},next:function(){this.$emit("next")}}},m=c,f=n(76),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column buttons"},[e.saving?t("b-field",{attrs:{position:"is-right"}},[t("b-button",{attrs:{type:"is-danger","native-type":"submit",outlined:""},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n        Cancelar\n      ")]),e._v(" "),t("b-button",{attrs:{type:e.saveType,"native-type":"submit",outlined:"",loading:e.buttonLoading},on:{click:function(t){return t.preventDefault(),e.handleSubmit(e.save)}}},[e._v("\n        "+e._s(e.saveLabel)+"\n      ")])],1):t("b-field",{attrs:{position:"is-right"}},[t("b-button",{attrs:{disabled:e.firstStep,type:"is-dark","native-type":"submit",outlined:""},on:{click:e.previous}},[e._v("\n        Anterior\n      ")]),e._v(" "),t("b-button",{attrs:{type:"is-info","native-type":"submit",outlined:""},on:{click:function(t){return e.handleSubmit(e.next)}}},[e._v("\n        Siguiente\n      ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports},954:function(e,t,n){"use strict";n.r(t);var r={name:"UserForm",props:{form:Object},data:function(){return{isLoading:!1}},methods:{save:function(){this.$emit("save",this.form)},cancel:function(){this.$emit("cancel")},next:function(){this.$emit("next")},previous:function(){this.$emit("previous")}}},o=n(76),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{on:{submit:function(e){return e.preventDefault(),r.apply(null,arguments)}}},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("BInputWithValidation",{attrs:{label:"Nombre",name:"first_name","label-position":"on-border",rules:"required",normal:""},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),e._v(" "),t("br"),e._v(" "),t("BInputWithValidation",{attrs:{label:"Usuario",name:"username","label-position":"on-border",rules:"required",normal:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e._v(" "),t("br"),e._v(" "),t("BInputWithValidation",{attrs:{rules:"min:8","label-position":"on-border","password-reveal":"",type:"password",name:"password",vid:"password",label:"Contraseña",normal:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),t("div",{staticClass:"column"},[t("BInputWithValidation",{attrs:{label:"Apellido",name:"last_name","label-position":"on-border",rules:"required",normal:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}}),e._v(" "),t("br"),e._v(" "),t("BInputWithValidation",{attrs:{"label-position":"on-border",name:"e-mail",label:"E-mail",rules:"required",normal:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),t("br"),e._v(" "),t("BInputWithValidation",{attrs:{rules:"confirmed:password","label-position":"on-border","password-reveal":"",type:"password",name:"password_confirm",label:"Confirmar contraseña",normal:""},model:{value:e.form.password_confirm,callback:function(t){e.$set(e.form,"password_confirm",t)},expression:"form.password_confirm"}})],1)]),e._v(" "),t("ButtonGroup",{attrs:{"handle-submit":r,saving:""},on:{save:e.save,cancel:e.cancel}})],1)]}}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BInputWithValidation:n(695).default,ButtonGroup:n(701).default})}}]);