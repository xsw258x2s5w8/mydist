(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3d24"],{"048b":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("j-vxe-table",{ref:"vTable",staticStyle:{"margin-top":"8px"},attrs:{toolbar:"","row-number":"","row-selection":"","drag-sort":"","keep-source":"",height:580,loading:e.loading,dataSource:e.dataSource,columns:e.columns},on:{valueChange:e.handleValueChange},scopedSlots:e._u([{key:"toolbarSuffix",fn:function(){return[t("a-button",{on:{click:e.handleTableCheck}},[e._v("表单验证")]),t("a-tooltip",{attrs:{placement:"top",title:"获取值，忽略表单验证",autoAdjustOverflow:!0}},[t("a-button",{on:{click:e.handleTableGet}},[e._v("获取值")])],1),t("a-tooltip",{attrs:{placement:"top",title:"模拟加载1000条数据",autoAdjustOverflow:!0}},[t("a-button",{on:{click:e.handleTableSet}},[e._v("设置值")])],1)]},proxy:!0},{key:"action",fn:function(a){return[t("a",{on:{click:function(t){return e.handleCK(a)}}},[e._v("查看")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(t){return e.handleDL(a)}}},[t("a",[e._v("删除")])])]}}])})},n=[],o=a("c1df"),i=a.n(o),c=a("ca00"),u=a("2475"),r={name:"JVxeDemo1",data:function(){return{loading:!1,columns:[{title:"不可编辑",key:"normal",type:u["b"].normal,width:"180px",fixed:"left",defaultValue:"normal-new"},{title:"单行文本",key:"input",type:u["b"].input,width:"180px",defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"请输入${title}"},{pattern:/^[a-z|A-Z][a-z|A-Z\d_-]*$/,message:"${title}必须以字母开头，可包含数字、下划线、横杠"},{unique:!0,message:"${title}不能重复"},{handler:function(e,t,a){var l=e.cellValue;e.row,e.column;"abc"===l?t(!1,"${title}不能是abc"):t(!0)},message:"${title}默认提示"}]},{title:"多行文本",key:"textarea",type:u["b"].textarea,width:"200px"},{title:"数字",key:"number",type:u["b"].inputNumber,width:"80px",defaultValue:32,statistics:["sum","average"]},{title:"下拉框",key:"select",type:u["b"].select,width:"180px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowInput:!0,placeholder:"请选择"},{title:"下拉框_字典",key:"select_dict",type:u["b"].select,width:"180px",options:[],dictCode:"sex",placeholder:"请选择"},{title:"下拉框_多选",key:"select_multiple",type:u["b"].selectMultiple,width:"205px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],defaultValue:["int","boolean"],placeholder:"多选"},{title:"下拉框_搜索",key:"select_search",type:u["b"].selectSearch,width:"180px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}]},{title:"日期时间",key:"datetime",type:u["b"].datetime,width:"200px",defaultValue:"2019-4-30 14:52:22",placeholder:"请选择"},{title:"复选框",key:"checkbox",type:u["b"].checkbox,width:"100px",customValue:["Y","N"],defaultChecked:!1},{title:"操作",key:"action",type:u["b"].slot,fixed:"right",minWidth:"100px",align:"center",slotName:"action"}],dataSource:[]}},created:function(){this.randomPage(0,20,!0)},methods:{handleCK:function(e){this.$message.success("请在控制台查看输出")},handleDL:function(e){e.target.removeRows(e.row)},handleValueChange:function(e){},handleTableCheck:function(){var e=this;this.$refs.vTable.validateTable().then((function(t){t?e.$message.error("验证未通过，请在控制台查看详细"):e.$message.success("验证通过")}))},handleTableGet:function(){this.$refs.vTable.getTableData();this.$message.success("获取值成功，请看控制台输出")},handleTableSet:function(){this.randomPage(1,1e3,!0)},randomPage:function(e,t){var a=this,l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l&&(this.loading=!0);for(var n=function(){var e=Object(c["l"])(1e3,9999999999999);return i()(new Date(e)).format("YYYY-MM-DD HH:mm:ss")},o=(e-1)*t,u=["string","int","double","boolean"],r=Date.now(),s=[],d=0;d<t;d++)s.push({id:Object(c["n"])(),normal:"normal-".concat(o+d+1),input:"text-".concat(o+d+1),textarea:"textarea-".concat(o+d+1),number:Object(c["l"])(0,233),select:u[Object(c["l"])(0,3)],select_dict:Object(c["l"])(1,2).toString(),select_multiple:function(){for(var e=Object(c["l"])(1,4),t=[],a=0;a<e;a++)Object(c["k"])(t,u[Object(c["l"])(0,3)]);return t}(),select_search:u[Object(c["l"])(0,3)],datetime:n(),checkbox:["Y","N"][Object(c["l"])(0,1)]});this.dataSource=s;var b=Date.now(),h=b-r;l&&h<t&&setTimeout((function(){a.loading=!1}),t-h)}}},s=r,d=a("2877"),b=Object(d["a"])(s,l,n,!1,null,"30b1e721",null);t["default"]=b.exports}}]);