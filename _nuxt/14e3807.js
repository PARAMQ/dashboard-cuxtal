(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{701:function(t,e,n){"use strict";n.r(e);n(61),n(58),n(59),n(38),n(70),n(60),n(71);var r=n(26),o=n(154);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{handleSubmit:Function,saving:Boolean,firstStep:Boolean,saveLabel:{type:String,default:"Guardar"},saveType:{type:String,default:"is-success"},cancel:{type:Boolean,default:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["buttonLoading"])),methods:{save:function(){this.$emit("save")},previous:function(){this.$emit("previous")},next:function(){this.$emit("next")}}},v=l,f=n(76),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column buttons"},[t.saving?e("b-field",{attrs:{position:"is-right"}},[e("b-button",{attrs:{type:"is-danger","native-type":"submit",outlined:""},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n        Cancelar\n      ")]),t._v(" "),e("b-button",{attrs:{type:t.saveType,"native-type":"submit",outlined:"",loading:t.buttonLoading},on:{click:function(e){return e.preventDefault(),t.handleSubmit(t.save)}}},[t._v("\n        "+t._s(t.saveLabel)+"\n      ")])],1):e("b-field",{attrs:{position:"is-right"}},[e("b-button",{attrs:{disabled:t.firstStep,type:"is-dark","native-type":"submit",outlined:""},on:{click:t.previous}},[t._v("\n        Anterior\n      ")]),t._v(" "),e("b-button",{attrs:{type:"is-info","native-type":"submit",outlined:""},on:{click:function(e){return t.handleSubmit(t.next)}}},[t._v("\n        Siguiente\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);