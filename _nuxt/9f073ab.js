(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{700:function(t,e,r){"use strict";r.r(e);r(61),r(58),r(59),r(38),r(70),r(60),r(71);var n=r(26),c=(r(101),r(167),r(152));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var t="somename";return this.userName&&(t=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(t,".svg?options[mood][]=happy")}},Object(c.b)(["userAvatar","userName"]))},v=l,f=r(89),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"is-user-avatar"},[e("img",{attrs:{src:t.newUserAvatar,alt:t.userName}})])}),[],!1,null,null,null);e.default=component.exports}}]);