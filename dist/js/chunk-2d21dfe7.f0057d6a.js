(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21dfe7"],{d456:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:t.visible},on:{close:t.onClose}},[e("a-tabs",{attrs:{defaultActiveKey:"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[t.dataruleList.length>0?e("a-checkbox-group",{model:{value:t.dataruleChecked,callback:function(e){t.dataruleChecked=e},expression:"dataruleChecked"}},[e("a-row",[t._l(t.dataruleList,(function(a,s){return e("a-col",{key:"dr"+s,attrs:{span:24}},[e("a-checkbox",{attrs:{value:a.id}},[t._v(t._s(a.ruleName))])],1)})),e("a-col",{attrs:{span:24}},[e("div",{staticStyle:{width:"100%","margin-top":"15px"}},[e("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:t.saveDataruleForRole}},[t._v("点击保存")])],1)])],2)],1):e("div",[e("h3",[t._v("无配置信息!")])])],1)],1)],1)},i=[],n=a("290c"),r=a("da05"),l=a("0fea"),o={name:"DeptRoleDataruleModal",components:{ACol:r["b"],ARow:n["a"]},data:function(){return{departId:"",functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartRole/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var t=this;Object(l["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId,"/").concat(this.roleId)).then((function(e){if(e.success){t.dataruleList=e.result.datarule;var a=e.result.drChecked;a&&(t.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var t=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var e={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};Object(l["i"])(this.url.datarule,e).then((function(e){e.success?t.$message.success(e.message):t.$message.error(e.message)}))},show:function(t,e,a){this.onReset(),this.departId=e,this.functionId=t,this.roleId=a,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(t){this.activeTabKey=t},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},d=o,c=a("2877"),u=Object(c["a"])(d,s,i,!1,null,"776b339a",null);e["default"]=u.exports}}]);