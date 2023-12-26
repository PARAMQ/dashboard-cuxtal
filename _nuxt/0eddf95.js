(window.webpackJsonp=window.webpackJsonp||[]).push([[138,26,31,42,45,74,81,84],{1201:function(t,e,l){"use strict";l.r(e);var n=l(777),o=l(778),r=l(695),c={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},d=l(89),f=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section is-title-bar"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("ul",t._l(t.titleStack,(function(title,l){return e("li",{key:l},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"},[e("a",{staticClass:"button is-light",attrs:{href:"https://justboil.me/bulma-admin-template/null-nuxt",target:"_blank"}},[e("b-icon",{attrs:{icon:"credit-card","custom-size":"default"}}),t._v(" "),e("span",[t._v("Buy theme")])],1)])])])])])}),[],!1,null,null,null).exports,v={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},h=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[t._t("default")],2)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[t._t("right")],2)])])])])}),[],!1,null,null,null).exports,m={name:"RefreshButton",props:{icon:{type:String,default:"refresh"},label:{type:String,default:"Refresh"},isLoading:{type:Boolean,default:!1}},methods:{click:function(t){this.$emit("button-click",t)}}},_=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"button is-small",class:{"is-loading":t.isLoading},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.click.apply(null,arguments)}}},[e("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}),t._v(" "),e("span",[t._v(t._s(t.label))])],1)}),[],!1,null,null,null),C=_.exports,y={name:"CardToolbar",props:{isMobile:{type:Boolean,default:!1}}},k={name:"Tables",components:{CardToolbar:Object(d.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification is-card-toolbar"},[e("div",{staticClass:"level",class:{"is-mobile":t.isMobile}},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[t._t("left")],2)]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[t._t("right")],2)])])])}),[],!1,null,null,null).exports,RefreshButton:C,HeroBar:h,TitleBar:f,CardComponent:r.a,ClientsTableSample:o.default,Notification:n.default},computed:{titleStack:function(){return["Admin","Tables"]}},methods:{actionSample:function(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}},head:function(){return{title:"Tables — Admin Null Nuxt.js Bulma"}}},O=Object(d.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e("title-bar",{attrs:{"title-stack":t.titleStack}}),t._v(" "),e("hero-bar",[t._v("\n    Tables\n    "),e("nuxt-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v("\n      Dashboard\n    ")])],1),t._v(" "),e("section",{staticClass:"section is-main-section"},[e("notification",{staticClass:"is-info"},[e("div",[e("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),t._v(" "),e("b",[t._v("Sorted and paginated table.")]),t._v(" Based on Buefy's table.\n      ")],1)]),t._v(" "),e("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients",icon:"account-multiple"}},[e("refresh-button",{attrs:{slot:"button"},slot:"button"}),t._v(" "),e("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[e("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[e("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v("\n            Active\n          ")]),t._v(" "),e("button",{staticClass:"button",attrs:{disabled:""}},[t._v("\n            Recent\n          ")]),t._v(" "),e("button",{staticClass:"button",attrs:{disabled:""}},[t._v("\n            Archived\n          ")])]),t._v(" "),e("form",{attrs:{slot:"right"},on:{submit:function(e){return e.preventDefault(),t.actionSample.apply(null,arguments)}},slot:"right"},[e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Sample field..."}})]),t._v(" "),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e("b-icon",{attrs:{icon:"dots-horizontal","custom-size":"default"}})],1)])])])]),t._v(" "),e("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),t._v(" "),e("hr"),t._v(" "),e("notification",{staticClass:"is-info"},[e("div",[e("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),t._v(" "),e("b",[t._v("Tightly wrapped")]),t._v(" — table header becomes card header\n      ")],1)]),t._v(" "),e("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[e("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),t._v(" "),e("hr"),t._v(" "),e("notification",{staticClass:"is-info"},[e("div",[e("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),t._v(" "),e("b",[t._v("Empty table.")]),t._v(" When there's nothing to show\n      ")],1)]),t._v(" "),e("card-component",{staticClass:"has-table has-thead-hidden"},[e("clients-table-sample")],1)],1)],1)}),[],!1,null,null,null);e.default=O.exports;installComponents(O,{TitleBar:l(903).default,HeroBar:l(904).default,Notification:l(777).default,RefreshButton:l(905).default,CardToolbar:l(731).default,ClientsTableSample:l(778).default,CardComponent:l(496).default})},689:function(t,e,l){t.exports=l.p+"img/logo.5f07e1d.png"},695:function(t,e,l){"use strict";var n=l(390),o={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},hasTitleSlot:{type:Boolean,default:!1},hasButtonSlot:{type:Boolean,default:!1},hasFooterSlot:{type:Boolean,default:!1},hasCardHeaderBackground:{type:Boolean,default:!1},isScrollable:{type:Boolean,default:!1}},mounted:function(){this.isScrollable&&(this.ps=new n.a(this.$refs.cardContent),this.$emit("ps-ready",this.ps))},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},r=l(89),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:{"has-height-medium":t.isScrollable,"has-card-header-background":t.hasCardHeaderBackground}},[t.title||t.hasTitleSlot?e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t.icon?e("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v(" "),t.hasTitleSlot?t._t("title"):t.title?e("span",[t._v(t._s(t.title))]):t._e()],2),t._v(" "),t.hasButtonSlot?t._t("button"):t.headerIcon?e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick.apply(null,arguments)}}},[e("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()],2):t._e(),t._v(" "),t._t("toolbar"),t._v(" "),e("div",{ref:"cardContent",staticClass:"card-content"},[t._t("default")],2),t._v(" "),t.hasFooterSlot?e("footer",{staticClass:"card-footer"},[t._t("footer")],2):t._e()],2)}),[],!1,null,null,null);e.a=component.exports},708:function(t,e,l){"use strict";l.r(e);var n={name:"ModalBox",props:{title:{type:String,default:"Confirmación de acción"},isFullpage:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}},o=l(89),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{active:t.isModalActive,"full-screen":t.isFullpage,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[e("b",[t._v(" "+t._s(t.title))])])]),t._v(" "),e("section",{staticClass:"modal-card-body"},[t._t("default",(function(){return[e("p",[t._v("\n          Se borrar permanentemente el registro "),e("b",[t._v(t._s(t.trashObjectName))])]),t._v(" "),e("p",[t._v("Esta acción es irreversible.")])]}))],2),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("\n        Cancelar\n      ")]),t._v(" "),e("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("\n        Eliminar\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},731:function(t,e,l){"use strict";l.r(e);l(61),l(58),l(59),l(38),l(70),l(60),l(71);var n=l(26),o=l(152);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var c={name:"CardToolbar",props:{isMobile:{type:Boolean,default:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["isDarkModeActive"]))},d=c,f=l(89),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"is-card-toolbar",class:{notification:!t.isDarkModeActive,"m-4":t.isDarkModeActive}},[e("div",{staticClass:"level",class:{"is-mobile":t.isMobile}},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[t._t("left")],2)]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[t._t("right")],2)])])])}),[],!1,null,null,null);e.default=component.exports},777:function(t,e,l){"use strict";l.r(e);var n={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},o=l(89),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.isDismissed?t._e():e("div",{staticClass:"notification"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[t._t("default")],2)]),t._v(" "),e("div",{staticClass:"level-right"},[e("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("\n        Dismiss\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},778:function(t,e,l){"use strict";l.r(e);l(128);var n=l(196),o=l.n(n),r={name:"ClientsTableSample",components:{ModalBox:l(708).default},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){var t=this;this.dataUrl&&(this.isLoading=!0,o.a.get(this.dataUrl).then((function(e){t.isLoading=!1,e.data&&e.data.data&&(e.data.data.length>t.perPage&&(t.paginated=!0),t.clients=e.data.data)})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger"})})))},methods:{trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},c=l(89),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),t._v(" "),e("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,paginated:t.paginated,"per-page":t.perPage,striped:!0,hoverable:!0,"default-sort":"name",data:t.clients},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}}},[e("b-table-column",{attrs:{"cell-class":"has-no-head-mobile is-image-cell"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{staticClass:"image"},[e("img",{staticClass:"is-rounded",attrs:{src:t.row.avatar}})])]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"Name",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.name)+"\n    ")]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"Company",field:"company",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.company)+"\n    ")]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"City",field:"city",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.city)+"\n    ")]}}])}),t._v(" "),e("b-table-column",{attrs:{"cell-class":"is-progress-col",label:"Progress",field:"progress",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){return[e("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:l.row.progress}},[t._v("\n        "+t._s(l.row.progress)+"\n      ")])]}}])}),t._v(" "),e("b-table-column",{attrs:{label:"Created"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:l.row.created}},[t._v(t._s(l.row.created))])]}}])}),t._v(" "),e("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("div",{staticClass:"buttons is-right"},[e("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:l.row.id}}}},[e("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),t._v(" "),e("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.trashModal(l.row)}}},[e("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),t._v(" "),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Fetching data...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Nothing's here…")])]],2)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ModalBox:l(708).default})},903:function(t,e,l){"use strict";l.r(e);l(61),l(58),l(59),l(38),l(70),l(60),l(71);var n=l(26),o=l(152);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var c={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["isDarkModeActive"]))},d=c,f=l(89),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section is-title-bar"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("ul",[e("li",[(t.isDarkModeActive,e("img",{staticStyle:{width:"40px"},attrs:{src:l(689),alt:"ParamQ logo"}}))]),t._v(" "),t._l(t.titleStack,(function(title,l){return e("li",{key:l},[t._v("\n            "+t._s(title)+"\n          ")])}))],2)])]),t._v(" "),e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"},[t._t("right",(function(){return[e("nuxt-link",{staticClass:"button is-light",attrs:{to:"/"}},[e("b-icon",{attrs:{icon:"home","custom-size":"default"}}),t._v(" "),e("span",[t._v("Dashboard")])],1)]}))],2)])])])])}),[],!1,null,null,null);e.default=component.exports},904:function(t,e,l){"use strict";l.r(e);var n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=l(89),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[t._t("default")],2)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[t._t("right")],2)])])])])}),[],!1,null,null,null);e.default=component.exports},905:function(t,e,l){"use strict";l.r(e);var n={name:"RefreshButton",props:{icon:{type:String,default:"refresh"},label:{type:String,default:"Refresh"},isLoading:{type:Boolean,default:!1}},methods:{click:function(t){this.$emit("button-click",t)}}},o=l(89),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("b-button",{class:{"is-loading":t.isLoading},attrs:{outlined:"",type:"is-info",size:"is-small"},on:{click:function(e){return e.preventDefault(),t.click.apply(null,arguments)}}},[e("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}),t._v(" "),e("span",[t._v(t._s(t.label))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);