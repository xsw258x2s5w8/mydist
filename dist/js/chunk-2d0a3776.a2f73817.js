(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3776"],{"01fe":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e._self._c;return l("j-editable-table",{attrs:{columns:e.columns,dataSource:e.dataSource,rowNumber:!0,actionButton:!0,rowSelection:!0,maxHeight:400},on:{valueChange:e.handleValueChange}})},n=[],u=a("e2e0"),r=a("7550"),o={name:"ThreeLinkage",components:{JEditableTable:r["default"]},data:function(){return{columns:[{title:"省/直辖市/自治区",key:"s1",type:u["a"].select,width:"240px",options:[],placeholder:"请选择${title}"},{title:"市",key:"s2",type:u["a"].select,width:"240px",options:[],placeholder:"请选择${title}"},{title:"县/区",key:"s3",type:u["a"].select,width:"240px",options:[],placeholder:"请选择${title}"}],dataSource:[],mockData:[{label:"北京市",value:"110000",parent:null},{label:"天津市",value:"120000",parent:null},{label:"河北省",value:"130000",parent:null},{label:"上海市",value:"310000",parent:null},{label:"北京市",value:"110100",parent:"110000"},{label:"天津市市",value:"120100",parent:"120000"},{label:"石家庄市",value:"130100",parent:"130000"},{label:"唐山市",value:"130200",parent:"130000"},{label:"秦皇岛市",value:"130300",parent:"130000"},{label:"上海市",value:"310100",parent:"310000"},{label:"东城区",value:"110101",parent:"110100"},{label:"西城区",value:"110102",parent:"110100"},{label:"朝阳区",value:"110105",parent:"110100"},{label:"和平区",value:"120101",parent:"120000"},{label:"河东区",value:"120102",parent:"120000"},{label:"河西区",value:"120103",parent:"120000"},{label:"黄浦区",value:"310101",parent:"310100"},{label:"徐汇区",value:"310104",parent:"310100"},{label:"长宁区",value:"310105",parent:"310100"},{label:"长安区",value:"130102",parent:"130100"},{label:"桥西区",value:"130104",parent:"130100"},{label:"新华区",value:"130105",parent:"130100"},{label:"路南区",value:"130202",parent:"130200"},{label:"路北区",value:"130203",parent:"130200"},{label:"古冶区",value:"130204",parent:"130200"},{label:"海港区",value:"130302",parent:"130300"},{label:"山海关区",value:"130303",parent:"130300"},{label:"北戴河区",value:"130304",parent:"130300"}]}},mounted:function(){this.columns[0].options=this.request(null)},methods:{request:function(e){return this.mockData.filter((function(l){return l.parent===e}))},handleValueChange:function(e){var l=e.type,a=e.row,t=e.column,n=e.value,r=e.target;l===u["a"].select&&("s1"===t.key?(this.columns[1].options=this.request(n),r.setValues([{rowKey:a.id,values:{s2:"",s3:""}}]),this.columns[2].options=[]):"s2"===t.key&&(this.columns[2].options=this.request(n),r.setValues([{rowKey:a.id,values:{s3:""}}])))}}},s=o,p=a("2877"),i=Object(p["a"])(s,t,n,!1,null,"bd50bcca",null);l["default"]=i.exports}}]);