(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1282:function(e,t,n){"use strict";n.r(t);n(107);var l={name:"RadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{type:[String,Number],default:null}},data:function(){return{newValue:null}},watch:{value:function(e){this.newValue=e}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}}},o=n(76),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(n,l){return t("div",{key:l,staticClass:"control"},[t("b-radio",{attrs:{"native-value":l,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v("\n      "+e._s(n)+"\n    ")])],1)})),0)}),[],!1,null,null,null);t.default=component.exports}}]);