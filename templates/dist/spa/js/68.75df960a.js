(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{"393d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("refreshtip")))])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"bin_name",attrs:{props:t}},[e._v(e._s(t.row.bin_name))]),a("q-td",{key:"goods_code",attrs:{props:t}},[e._v(e._s(t.row.goods_code))]),a("q-td",{key:"goods_desc",attrs:{props:t}},[e._v(e._s(t.row.goods_desc))]),a("q-td",{key:"goods_qty",attrs:{props:t}},[e._v(e._s(t.row.goods_qty))]),a("q-td",{key:"pick_qty",attrs:{props:t}},[e._v(e._s(t.row.pick_qty))]),a("q-td",{key:"picked_qty",attrs:{props:t}},[e._v(e._s(t.row.picked_qty))]),a("q-td",{key:"bin_size",attrs:{props:t}},[e._v(e._s(t.row.bin_size))]),a("q-td",{key:"bin_property",attrs:{props:t}},[e._v(e._s(t.row.bin_property))]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v(e._s(t.row.create_time))]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v(e._s(t.row.update_time))]),a("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:t}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Inbound"!==e.$q.localStorage.getItem("staff_type")&&"Outbound"!==e.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Inbound' && $q.localStorage.getItem('staff_type') !== 'Outbound'"}],attrs:{round:"",flat:"",push:"",color:"purple",icon:"move_to_inbox"},on:{click:function(a){return e.BinMove(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("movetobin")))])],1)],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("previous")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("next")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.moveForm,callback:function(t){e.moveForm=t},expression:"moveForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.movedata.goods_code)+" "+e._s(e.$t("frombin"))+" "+e._s(e.movedata.bin_name))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:e.$t("stock.view_stocklist.goods_qty"),rules:[function(t){return t&&t>0||e.error1}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.MoveToBinSubmit()}},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:e.$t("warehouse.view_binset.bin_name"),options:e.options},on:{filter:e.filterFn,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.MoveToBinSubmit()}},scopedSlots:e._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[e._v("No results")])],1)]},proxy:!0},e.movedata.move_to_bin?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.movedata.move_to_bin=""}}})]},proxy:!0}:null],null,!0),model:{value:e.movedata.move_to_bin,callback:function(t){e.$set(e.movedata,"move_to_bin",t)},expression:"movedata.move_to_bin"}})]},proxy:!0}]),model:{value:e.movedata.move_qty,callback:function(t){e.$set(e.movedata,"move_qty",e._n(t))},expression:"movedata.move_qty"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.MoveToBinCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.MoveToBinSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},n=[],i=a("3004"),s=(a("bd4c"),a("a357"),a("a639")),r=a("18d6"),l={name:"Pagestockbinlist",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/bin/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],warehouse_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"goods_desc",label:this.$t("stock.view_stocklist.goods_desc"),field:"onhand_stock",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.onhand_stock"),field:"goods_qty",align:"center"},{name:"pick_qty",label:this.$t("stock.view_stocklist.pick_stock"),field:"pick_qty",align:"center"},{name:"picked_qty",label:this.$t("stock.view_stocklist.picked_stock"),field:"picked_qty",align:"center"},{name:"bin_size",label:this.$t("warehouse.view_binset.bin_size"),field:"bin_size",align:"center"},{name:"bin_property",label:this.$t("warehouse.view_binset.bin_property"),field:"bin_property",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},options:[],moveForm:!1,movedata:{},error1:this.$t("inbound.view_sortstock.error1")}},methods:{getList(){var e=this;r["a"].has("auth")&&Object(i["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;r["a"].has("auth")&&Object(i["e"])(e.pathname+"?bin_name__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;r["a"].has("auth")&&Object(i["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;r["a"].has("auth")&&Object(i["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},BinMove(e){var t=this;t.moveForm=!0,t.movedata=e},MoveToBinCancel(){var e=this;e.moveForm=!1,e.movedata={}},MoveToBinSubmit(){var e=this;Object(i["h"])(e.pathname+e.movedata.id+"/",e.movedata).then((t=>{e.getList(),e.MoveToBinCancel(),e.$q.notify({message:"Bin Moving Success",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},filterFn(e,t,a){var o=this;e.length<1?a():t((()=>{const t=e.toLowerCase();Object(i["e"])("binset/?bin_name__icontains="+t).then((e=>{var t=[];e.results.forEach((e=>{t.push(e.bin_name)})),s["a"].set("bin_name",t),o.options=s["a"].getItem("bin_name")})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))}))}},created(){var e=this;r["a"].has("openid")?e.openid=r["a"].getItem("openid"):(e.openid="",r["a"].set("openid","")),r["a"].has("login_name")?e.login_name=r["a"].getItem("login_name"):(e.login_name="",r["a"].set("login_name","")),r["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},c=l,p=a("42e1"),d=a("b8b7"),_=a("eaac"),u=a("e7a9"),m=a("9c40"),h=a("05c0"),b=a("2c91"),v=a("27f9"),f=a("0016"),g=a("bd08"),y=a("db86"),k=a("24e8"),q=a("f09f"),x=a("d847"),w=a("a370"),$=a("ddd8"),S=a("66e5"),C=a("4074"),Q=a("7f67"),I=a("eebe"),B=a.n(I),L=Object(p["a"])(c,o,n,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(L);t["default"]=L.exports;B()(L,"components",{QTable:_["a"],QBtnGroup:u["a"],QBtn:m["a"],QTooltip:h["a"],QSpace:b["a"],QInput:v["a"],QIcon:f["a"],QTr:g["a"],QTd:y["a"],QDialog:k["a"],QCard:q["a"],QBar:x["a"],QCardSection:w["a"],QSelect:$["a"],QItem:S["a"],QItemSection:C["a"]}),B()(L,"directives",{ClosePopup:Q["a"]})},"5d1c":function(e,t){},b8b7:function(e,t,a){"use strict";var o=a("5d1c"),n=a.n(o);t["default"]=n.a}}]);