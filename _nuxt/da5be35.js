(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{756:function(t,e,n){"use strict";n.r(e);n(107),n(138);var r=n(757),d=n.n(r),filter=n(762),o=n.n(filter),w={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},data:function(){return{windowOuterWidth:0}},computed:{newMaxPerRow:function(){return this.windowOuterWidth>=769&&this.windowOuterWidth<=1024?2:this.maxPerRow}},mounted:function(){this.updateWindowOuterWidth(),window.addEventListener("resize",this.updateWindowOuterWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.updateWindowOuterWidth)},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(element){return t("div",{attrs:{class:"tile is-parent"}},[element])})))},updateWindowOuterWidth:function(){this.windowOuterWidth=window.outerWidth}},render:function(t){var e=this,n=o()(this.$slots.default,(function(slot){return!!slot.tag}));return n.length<=this.newMaxPerRow?this.renderAncestor(t,n):t("div",{attrs:{class:"is-tiles-wrapper"}},d()(n,this.newMaxPerRow).map((function(n){return e.renderAncestor(t,n)})))}},h=n(76),component=Object(h.a)(w,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);