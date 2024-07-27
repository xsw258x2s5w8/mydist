(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5acb4828","chunk-2d0e1b62"],{"25cd":function(e,t,a){},"56cd1":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{title:"数据权限规则",width:e.drawerWidth,visible:e.visible},on:{close:e.onClose}},[t("div",{style:{padding:"10px",border:"1px solid #e9e9e9",background:"#fff"}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:8,sm:8}},[t("a-form-item",{attrs:{label:"规则名称",labelCol:{span:8},wrapperCol:{span:14,offset:1}}},[t("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:e.queryParam.ruleName,callback:function(t){e.$set(e.queryParam,"ruleName",t)},expression:"queryParam.ruleName"}})],1)],1),t("a-col",{attrs:{md:8,sm:8}},[t("a-form-item",{attrs:{label:"规则值",labelCol:{span:8},wrapperCol:{span:14,offset:1}}},[t("a-input",{attrs:{placeholder:"请输入规则值"},model:{value:e.queryParam.ruleValue,callback:function(t){e.$set(e.queryParam,"ruleValue",t)},expression:"queryParam.ruleValue"}})],1)],1),t("a-col",{attrs:{md:7,sm:8}},[t("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[t("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1),t("a-row",[t("a-col",{attrs:{md:24,sm:24}},[t("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"plus"},on:{click:e.addPermissionRule}},[e._v("添加")])],1)],1)],1),t("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",columns:e.columns,dataSource:e.dataSource,loading:e.loading,rowClassName:e.getRowClassname},scopedSlots:e._u([{key:"ruleValueText",fn:function(e,a){return[t("j-ellipsis",{attrs:{value:e,length:15}})]}},{key:"action",fn:function(a,l){return t("span",{},[t("a",{on:{click:function(t){return e.handleEdit(l)}}},[t("a-icon",{attrs:{type:"edit"}}),e._v("编辑\n          ")],1),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(l.id)}}},[t("a",[e._v("删除")])])],1)}}])})],1)]),t("permission-data-rule-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],s=a("4ec3"),o=a("b65a"),r=a("7c33"),n=[{title:"规则名称",dataIndex:"ruleName",key:"ruleName",width:150},{title:"规则字段",dataIndex:"ruleColumn",key:"ruleColumn",width:150},{title:"规则值",dataIndex:"ruleValue",key:"ruleValue",width:150,scopedSlots:{customRender:"ruleValueText"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center"}],u={name:"PermissionDataRuleList",mixins:[o["a"]],components:{PermissionDataRuleModal:r["default"]},data:function(){return{queryParam:{},drawerWidth:650,columns:n,permId:"",visible:!1,form:this.$form.createForm(this),loading:!1,url:{list:"/sys/permission/getPermRuleListByPermId",delete:"/sys/permission/deletePermissionRule"}}},created:function(){this.resetScreenSize()},methods:{loadData:function(){if(this.permId){var e=this;this.dataSource=[];var t=this.getQueryParams();Object(s["w"])(t).then((function(t){t.success&&(e.dataSource=t.result)}))}},edit:function(e){e.id&&(this.visible=!0,this.permId=e.id),this.queryParam={},this.queryParam.permissionId=e.id,this.visible=!0,this.loadData(),this.resetScreenSize()},addPermissionRule:function(){this.$refs.modalForm.add(this.permId),this.$refs.modalForm.title="新增"},searchQuery:function(){var e=this,t=this.getQueryParams();t.permissionId=this.permId,Object(s["I"])(t).then((function(t){t.success&&(e.dataSource=t.result)}))},searchReset:function(){this.queryParam={},this.queryParam.permissionId=this.permId,this.loadData(1)},onClose:function(){this.visible=!1},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:650},getRowClassname:function(e){if(1!=e.status)return"data-rule-invalid"}}},d=u,m=(a("a44f"),a("2877")),c=Object(m["a"])(d,l,i,!1,null,null,null);t["default"]=c.exports},"7c33":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleName",label:"规则名称"}},[t("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:e.model.ruleName,callback:function(t){e.$set(e.model,"ruleName",t)},expression:"model.ruleName"}})],1),t("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:e.showRuleColumn,expression:"showRuleColumn"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleColumn",label:"规则字段"}},[t("a-input",{attrs:{placeholder:"请输入规则字段"},model:{value:e.model.ruleColumn,callback:function(t){e.$set(e.model,"ruleColumn","string"===typeof t?t.trim():t)},expression:"model.ruleColumn"}})],1),t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleConditions",label:"条件规则"}},[t("j-dict-select-tag",{attrs:{placeholder:"请输入条件规则",dictCode:"rule_conditions"},on:{input:e.handleChangeRuleCondition},model:{value:e.model.ruleConditions,callback:function(t){e.$set(e.model,"ruleConditions",t)},expression:"model.ruleConditions"}})],1),t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleValue",label:"规则值"}},[t("a-input",{attrs:{placeholder:"请输入规则值"},model:{value:e.model.ruleValue,callback:function(t){e.$set(e.model,"ruleValue",t)},expression:"model.ruleValue"}})],1),t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[t("a-radio-group",{attrs:{buttonStyle:"solid"},model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}},[t("a-radio-button",{attrs:{value:"1"}},[e._v("有效")]),t("a-radio-button",{attrs:{value:"0"}},[e._v("无效")])],1)],1)],1)],1)],1)},i=[],s=a("0fea"),o={name:"PermissionDataRuleModal",data:function(){return{queryParam:{},title:"操作",visible:!1,model:{},ruleConditionList:[],labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,permissionId:"",validatorRules:{ruleConditions:[{required:!0,message:"请选择条件!"}],ruleName:[{required:!0,message:"请输入规则名称!"}],ruleValue:[{required:!0,message:"请输入规则值!"}],ruleColumn:[]},url:{list:"/sys/dictItem/list",add:"/sys/permission/addPermissionRule",edit:"/sys/permission/editPermissionRule"},showRuleColumn:!0}},created:function(){},methods:{add:function(e){this.permissionId=e,this.edit({status:"1"})},edit:function(e){this.model=Object.assign({},e),e.permissionId?this.model.permissionId=e.permissionId:this.model.permissionId=this.permissionId,this.visible=!0,this.initRuleCondition()},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0;var l="",i="";e.model.id?(l+=e.url.edit,i="put"):(l+=e.url.add,i="post"),Object(s["h"])(l,e.model,i).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},initRuleCondition:function(){this.model.ruleConditions&&"USE_SQL_RULES"==this.model.ruleConditions?this.showRuleColumn=!1:this.showRuleColumn=!0},handleChangeRuleCondition:function(e){"USE_SQL_RULES"==e?(this.model.ruleColumn="",this.showRuleColumn=!1):this.showRuleColumn=!0}}},r=o,n=a("2877"),u=Object(n["a"])(r,l,i,!1,null,"4d8b72ec",null);t["default"]=u.exports},a44f:function(e,t,a){"use strict";a("25cd")}}]);