webpackJsonp([26],{"6xfk":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'\n.plus {\n  height: 460px;\n  width: 360px;\n}\n.text {\n  font-size: 14px;\n}\n.item {\n  margin-bottom: 18px;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: "";\n}\n.clearfix:after {\n  clear: both\n}\n.box-card {\n  height: 550px;\n  width: 400px;\n}\n',""])},XulI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("niQ6"),a={methods:{open:function(t){var e=this;console.log(t),console.log(this.items[0]),Object(i.a)({type:"open",building_id:t}).then(function(t){console.log(t.data)}),setTimeout(function(){e.items[t-1].state=!1},4e3)}},data:function(){return{items:[{building_id:1,inout_num:35,unregistered:5,fix_name:"小陈",state:!1},{building_id:2,inout_num:12,unregistered:5,fix_name:"小陈",state:!1},{building_id:3,inout_num:54,unregistered:5,fix_name:"小陈",state:!1},{building_id:4,inout_num:66,unregistered:5,fix_name:"小陈",state:!1},{building_id:5,inout_num:26,unregistered:5,fix_name:"小陈",state:!1},{building_id:6,inout_num:77,unregistered:5,fix_name:"小陈",state:!1},{building_id:7,inout_num:46,unregistered:5,fix_name:"小陈",state:!1},{building_id:8,inout_num:12,unregistered:5,fix_name:"小陈",state:!1},{building_id:9,inout_num:33,unregistered:5,fix_name:"小陈",state:!1}]}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{gutter:20}},t._l(t.items,function(e){return n("el-col",{key:e.key,staticStyle:{"margin-top":"5%"},attrs:{span:10,offset:2}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(e.building_id)+"幢")]),t._v(" "),n("el-switch",{staticStyle:{display:"block",float:"right",padding:"3px 0"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"开","inactive-text":"关"},on:{change:function(n){t.open(e.building_id)}},model:{value:e.state,callback:function(n){t.$set(e,"state",n)},expression:"item.state"}})],1),t._v(" "),1==e.building_id?n("div",{staticClass:"text item "},[n("iframe",{ref:"iframe",refInFor:!0,staticClass:"plus",attrs:{src:"http://118.24.0.78:8082/index.html"}})]):n("div",[n("img",{attrs:{src:"http://otj6w86xd.bkt.clouddn.com/images.png",alt:""}})])])],1)}))},staticRenderFns:[]};var r=n("VU/8")(a,s,!1,function(t){n("dMah")},null,null);e.default=r.exports},dMah:function(t,e,n){var i=n("6xfk");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("170523ad",i,!0)},niQ6:function(t,e,n){"use strict";e.a=function(t){return Object(i.a)({url:"/switch_auth",method:"post",data:t})};var i=n("vLgD")}});