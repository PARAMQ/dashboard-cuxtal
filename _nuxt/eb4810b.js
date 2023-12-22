(window.webpackJsonp=window.webpackJsonp||[]).push([[37,24],{1278:function(t,e,o){"use strict";o.r(e);o(128);var n={name:"ExcelModal",props:{form:Object,isComponentModalActive:Boolean,type:String},data:function(){return{dropFile:null,clientData:[{numero:"232342",nombre:"Jesse",apellido:"Simmons",email:"jesse_25@correo.com",tel:"9999999999"},{numero:"12323",nombre:"John",apellido:"Doe",email:"john_doe@correo.com",tel:"8888888888"}],clientColumns:[{field:"numero",label:"Número"},{field:"nombre",label:"Nombre"},{field:"apellido",label:"Apellido"},{field:"email",label:"Email",centered:!0},{field:"tel",label:"Teléfono"}],policyData:[{numero:"2021V300Y67",cliente:"12323",producto:"SDR45",aseguradora:"QUALITAS",prima:500,sumaaseg:5e6,forma:"M",conducto:"C"},{numero:"2020V20056",cliente:"232342",producto:"AAI23431MX",aseguradora:"ARGOS",prima:200,sumaaseg:18e5,forma:"S",conducto:"A"}],policyColumns:[{field:"numero",label:"Número"},{field:"cliente",label:"Cliente"},{field:"producto",label:"Producto",centered:!0},{field:"aseguradora",label:"Aseguradora"},{field:"prima",label:"Prima"},{field:"sumaaseg",label:"Suma"},{field:"forma",label:"Forma"},{field:"conducto",label:"Conducto"}]}},watch:{form:function(t){this.form=t}},methods:{save:function(){var t={type:this.type,file:this.dropFile};this.$emit("save",t),this.dropFile=null},cancel:function(){this.$refs.ExcelForm.reset(),this.$emit("close")}}},l=o(89),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1},on:{close:t.cancel},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[e("div",{staticClass:"modal-card",staticStyle:{width:"100%"}},[e("header",{staticClass:"modal-card-head"},[e("span",{staticClass:"modal-card-title"},["clients"===t.type?e("p",{staticClass:"title is-5"},[t._v("\n          Registrar clientes por excel\n        ")]):"policies"===t.type?e("p",{staticClass:"title is-5"},[t._v("\n          Registrar pólizas por excel\n        ")]):e("p",[t._v("Registrar por excel")])]),t._v(" "),e("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}})]),t._v(" "),e("ValidationObserver",{ref:"ExcelForm",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.handleSubmit;return[e("section",{staticClass:"modal-card-body"},[e("div",[e("ValidationProvider",{attrs:{name:"archivo"},scopedSlots:t._u([{key:"default",fn:function(o){var n=o.errors,l=o.valid;return[e("b-field",{attrs:{message:n,type:{"is-danger":n[0],"is-success":l},icon:"upload",size:"is-large"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n                Archivo CSV (\n                "),"clients"===t.type||"policies"===t.type?e("a",{staticClass:"has-text-primary"},[e("small",[t._v("Descargar formato")])]):e("p",{staticClass:"has-text-primary"},[e("small",[t._v("Archivo no disponible")])]),t._v("\n                )\n              ")]},proxy:!0}],null,!0)},[t._v(" "),e("div",[e("b-upload",{attrs:{expanded:"","drag-drop":""},model:{value:t.dropFile,callback:function(e){t.dropFile=e},expression:"dropFile"}},[e("section",{staticClass:"section"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Arrastra tu archivo o haz click aquí")])])])])],1)])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"tags"},[t.dropFile?e("span",{staticClass:"tag is-primary"},[t._v("\n              "+t._s(t.dropFile.name)+"\n              "),e("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(e){t.dropFile=null}}})]):t._e()])],1),t._v(" "),e("hr",{staticClass:"navbar-divider"}),t._v(" "),e("b-collapse",{attrs:{open:!1,position:"is-top","aria-id":"contentIdForA11y1"},scopedSlots:t._u([{key:"trigger",fn:function(o){return[e("a",{staticClass:"has-text-primary",attrs:{"aria-controls":"contentIdForA11y1"}},[e("b-icon",{attrs:{icon:o.open?"menu-up":"menu-down"}}),t._v(" "),e("small",[t._v(t._s(o.open?"Ocultar formato":"Ver formato"))])],1)]}}],null,!0)},[t._v(" "),"clients"===t.type?e("b-table",{staticStyle:{"font-size":"15px"},attrs:{data:t.clientData,columns:t.clientColumns}}):"policies"===t.type?e("b-table",{staticStyle:{"font-size":"15px"},attrs:{data:t.policyData,columns:t.policyColumns}}):t._e(),t._v(" "),e("strong",{staticClass:"has-text-info",staticStyle:{"font-size":"12px"}},[t._v("* Todos los campos son obligatorios")])],1)],1),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("ButtonGroup",{attrs:{"handle-submit":n,saving:""},on:{save:t.save,cancel:t.cancel}})],1)]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonGroup:o(696).default})},696:function(t,e,o){"use strict";o.r(e);o(61),o(58),o(59),o(38),o(70),o(60),o(71);var n=o(26),l=o(152);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={props:{handleSubmit:Function,saving:Boolean,firstStep:Boolean,saveLabel:{type:String,default:"Guardar"},saveType:{type:String,default:"is-success"},cancel:{type:Boolean,default:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["buttonLoading"])),methods:{save:function(){this.$emit("save")},previous:function(){this.$emit("previous")},next:function(){this.$emit("next")}}},d=c,m=o(89),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column buttons"},[t.saving?e("b-field",{attrs:{position:"is-right"}},[e("b-button",{attrs:{type:"is-danger","native-type":"submit",outlined:""},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n        Cancelar\n      ")]),t._v(" "),e("b-button",{attrs:{type:t.saveType,"native-type":"submit",outlined:"",loading:t.buttonLoading},on:{click:function(e){return e.preventDefault(),t.handleSubmit(t.save)}}},[t._v("\n        "+t._s(t.saveLabel)+"\n      ")])],1):e("b-field",{attrs:{position:"is-right"}},[e("b-button",{attrs:{disabled:t.firstStep,type:"is-dark","native-type":"submit",outlined:""},on:{click:t.previous}},[t._v("\n        Anterior\n      ")]),t._v(" "),e("b-button",{attrs:{type:"is-info","native-type":"submit",outlined:""},on:{click:function(e){return t.handleSubmit(t.next)}}},[t._v("\n        Siguiente\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);