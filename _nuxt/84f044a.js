(window.webpackJsonp=window.webpackJsonp||[]).push([[90,89],{1210:function(t,e,n){"use strict";n(917)},1211:function(t,e,n){var l=n(136)((function(i){return i[1]}));l.push([t.i,".media[data-v-2a49d0d1]{margin-bottom:0}",""]),l.locals={},t.exports=l},1295:function(t,e,n){"use strict";n.r(e);n(208);var l={components:{UserActions:n(953).default},props:{item:Object,active:Boolean},methods:{openPopupWindow:function(t){return window.open(t,"popup","width=800,height=600"),!1}}},o=(n(1210),n(76)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"card media box"},[e("figure",{staticClass:"media-left image is-32x32"},[e("img",{staticClass:"is-rounded",attrs:{src:t.item.first_name&&t.item.last_name?"https://avatars.dicebear.com/v2/initials/".concat(t.item.first_name,"-").concat(t.item.last_name,".svg"):"https://avatars.dicebear.com/v2/initials/".concat(t.item.username,".svg")}})]),t._v(" "),e("div",{staticClass:"media-content"},[e("div",{staticClass:"content has-text-left"},[e("a",{staticClass:"title is-7"},[t._v("\n        "+t._s(t.item.first_name)+"\n        "+t._s(t.item.last_name)+"\n      ")]),t._v(" "),e("small",{staticClass:"has-text-weight-light"},[t._v("("+t._s(t.item.username)+")")]),t._v(" "),1===t.item.groups[0]?e("small",{staticClass:"has-text-weight-light"},[e("b-tag",{attrs:{type:"is-dark"}},[t._v("Agente")])],1):2===t.item.groups[0]?e("small",{staticClass:"has-text-weight-light"},[e("b-tag",{attrs:{type:"is-primary"}},[t._v("Administrador")])],1):t._e(),t._v(" "),e("br"),t._v(" "),e("small",{staticClass:"has-text-weight-light has-text-info"},[t._v(t._s(t.item.email))]),t._v(" "),e("br"),t._v(" "),e("small",{staticClass:"has-text-weight-light"},[t._v("Registrado el: "+t._s(t._f("shortDate")(t.item.date_joined)))])]),t._v(" "),e("nav",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-left"},[t.item.email?e("a",{staticClass:"level-item",attrs:{title:"Correo a "+t.item.email},on:{click:function(e){return t.openPopupWindow("mailto:"+t.item.email)}}},[e("b-icon",{attrs:{icon:"email",type:"is-info"}})],1):t._e(),t._v(" "),e("a",{staticClass:"level-item",attrs:{title:"Editar"},on:{click:function(e){return t.$emit("edit",t.item)}}},[e("b-icon",{attrs:{icon:"pencil",type:"is-primary"}})],1)])])]),t._v(" "),e("div",{staticClass:"media-right"},[e("UserActions",{staticClass:"media-right",attrs:{item:t.item,"can-edit":!1,active:t.active},on:{delete:function(e){return t.$emit("delete",t.item.id)}}})],1)])}),[],!1,null,"2a49d0d1",null);e.default=component.exports},736:function(t,e,n){var content=n(793);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(137).default)("44401772",content,!0,{sourceMap:!1})},792:function(t,e,n){"use strict";n(736)},793:function(t,e,n){var l=n(136)((function(i){return i[1]}));l.push([t.i,".but[data-v-6a32f33e]:hover{cursor:pointer}",""]),l.locals={},t.exports=l},917:function(t,e,n){var content=n(1211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(137).default)("338cd8ff",content,!0,{sourceMap:!1})},953:function(t,e,n){"use strict";n.r(e);var l={props:{item:{type:Object,default:function(){}},canEdit:{type:Boolean,default:!0},tableMode:{type:Boolean,default:!1},active:Boolean}},o=(n(792),n(76)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.tableMode?e("div",[[e("span",{staticClass:"but clickable",attrs:{title:"Editar usuario",size:"is-small"},on:{click:function(e){return t.$emit("edit",t.item)}}},[e("b-icon",{attrs:{pack:"uil",icon:"pen"}})],1)]],2):e("b-dropdown",{attrs:{"aria-role":"list",position:"is-bottom-left","append-to-body":""},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("span",{staticClass:"but clickable",attrs:{size:"is-small"},on:{click:function(e){return t.$emit("toggle")}}},[e("b-icon",{attrs:{icon:"dots-vertical"}})],1)]},proxy:!0}],null,!1,3622153536)},[t._v(" "),[t.canEdit?e("div",{staticClass:"has-text-dark",on:{click:function(e){return t.$emit("edit",t.item)}}},[e("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e("b-icon",{attrs:{pack:"uil",icon:"pen"}}),t._v("\n          Editar usuario\n        ")],1)],1):t._e()]],2)],1)}),[],!1,null,"6a32f33e",null);e.default=component.exports}}]);