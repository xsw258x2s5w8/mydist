(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46d44fee","chunk-2d2107ed"],{"494a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"角色ID"}},[t("a-input",{attrs:{placeholder:"请输入"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"状态"}},[t("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[t("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),t("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),t("a-select-option",{attrs:{value:"2"}},[e._v("禁用")])],1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons"},[t("a-button",{attrs:{type:"primary"}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("重置")])],1)])],1)],1)],1),t("s-table",{ref:"table",attrs:{size:"default",columns:e.columns,data:e.loadData,scroll:{}},scopedSlots:e._u([{key:"expandedRowRender",fn:function(a){return t("div",{staticStyle:{margin:"0"}},[t("a-row",{style:{marginBottom:"12px"},attrs:{gutter:24}},e._l(a.permissions,(function(a,n){return t("a-col",{key:n,style:{marginBottom:"12px"},attrs:{span:12}},[t("a-col",{attrs:{span:4}},[t("span",[e._v(e._s(a.permissionName)+"：")])]),a.actionEntitySet.length>0?t("a-col",{attrs:{span:20}},e._l(a.actionEntitySet,(function(a,n){return t("a-tag",{key:n,attrs:{color:"cyan"}},[e._v(e._s(a.describe))])})),1):t("a-col",{attrs:{span:20}},[e._v("-")])],1)})),1)],1)}},{key:"action",fn:function(a,n){return t("span",{},[t("a",{on:{click:function(t){return e.$refs.modal.edit(n)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-dropdown",[t("a",{staticClass:"ant-dropdown-link"},[e._v("\n          更多 "),t("a-icon",{attrs:{type:"down"}})],1),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[e._v("详情")])]),t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[e._v("禁用")])]),t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)],1)],1)}}])}),t("role-modal",{ref:"modal",on:{ok:e.handleOk}})],1)},s=[],r=a("e8c4"),i=a("b7ac"),o={name:"TableList",components:{STable:r["a"],RoleModal:i["default"]},data:function(){var e=this;return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"角色名称",dataIndex:"name"},{title:"状态",dataIndex:"status"},{title:"创建时间",dataIndex:"createTime",sorter:!0},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(t){return e.$http.get("/mock/api/role",{params:Object.assign(t,e.queryParam)}).then((function(e){return e.result}))},selectedRowKeys:[],selectedRows:[]}},methods:{handleEdit:function(e){this.mdl=Object.assign({},e),this.mdl.permissions.forEach((function(e){e.actionsOptions=e.actionEntitySet.map((function(e){return{label:e.describe,value:e.action,defaultCheck:e.defaultCheck}}))})),this.visible=!0},handleOk:function(){this.$refs.table.refresh()},onChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},l=o,c=a("2877"),d=Object(c["a"])(l,n,s,!1,null,null,null);t["default"]=d.exports},b7ac:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"操作",width:800,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"唯一识别码",hasFeedback:""}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{rules:[]}],expression:"[ 'id', {rules: []} ]"}],attrs:{placeholder:"唯一识别码",disabled:"disabled"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称",hasFeedback:""}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"不起一个名字吗？"}]}],expression:"[ 'name', {rules: [{ required: true, message: '不起一个名字吗？' }] }]"}],attrs:{placeholder:"起一个名字"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态",hasFeedback:""}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{rules:[]}],expression:"[ 'status', {rules: []} ]"}]},[t("a-select-option",{attrs:{value:1}},[e._v("正常")]),t("a-select-option",{attrs:{value:2}},[e._v("禁用")])],1)],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述",hasFeedback:""}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe",{rules:[]}],expression:"[ 'describe', { rules: [] } ]"}],attrs:{rows:5,placeholder:"..."}})],1),t("a-divider"),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"拥有权限",hasFeedback:""}},e._l(e.permissions,(function(a,n){return t("a-row",{key:n,attrs:{gutter:16}},[t("a-col",{attrs:{span:4}},[e._v("\n            "+e._s(a.name)+"：\n          ")]),t("a-col",{attrs:{span:20}},[a.actionsOptions.length>0?t("a-checkbox",{attrs:{indeterminate:a.indeterminate,checked:a.checkedAll},on:{change:function(t){return e.onChangeCheckAll(t,a)}}},[e._v("\n              全选\n            ")]):e._e(),t("a-checkbox-group",{attrs:{options:a.actionsOptions},on:{change:function(t){return e.onChangeCheck(a)}},model:{value:a.selected,callback:function(t){e.$set(a,"selected",t)},expression:"permission.selected"}})],1)],1)})),1)],1)],1)],1)},s=[],r=a("0fea");function i(e){try{return JSON.parse(e)}catch(t){}return[]}var o=a("88bc"),l=a.n(o),c={name:"RoleModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,mdl:{},form:this.$form.createForm(this),permissions:[]}},created:function(){this.loadPermissions()},methods:{add:function(){this.edit({id:0})},edit:function(e){var t=this;if(this.mdl=Object.assign({},e),this.visible=!0,this.mdl.permissions&&this.permissions){var a={};this.mdl.permissions.forEach((function(e){a[e.permissionId]=e.actionEntitySet.map((function(e){return e.action}))})),this.permissions.forEach((function(e){e.selected=a[e.id]}))}this.$nextTick((function(){t.form.setFieldsValue(l()(t.mdl,"id","name","status","describe"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(t,a){t||(e.confirmLoading=!0,new Promise((function(e){setTimeout((function(){return e()}),2e3)})).then((function(){e.$message.success("保存成功"),e.$emit("ok")})).catch((function(){})).finally((function(){e.confirmLoading=!1,e.close()})))}))},handleCancel:function(){this.close()},onChangeCheck:function(e){e.indeterminate=!!e.selected.length&&e.selected.length<e.actionsOptions.length,e.checkedAll=e.selected.length===e.actionsOptions.length},onChangeCheckAll:function(e,t){Object.assign(t,{selected:e.target.checked?t.actionsOptions.map((function(e){return e.value})):[],indeterminate:!1,checkedAll:e.target.checked})},loadPermissions:function(){var e=this;Object(r["e"])().then((function(t){var a=t.result;e.permissions=a.map((function(e){var t=i(e.actionData);return e.checkedAll=!1,e.selected=[],e.indeterminate=!1,e.actionsOptions=t.map((function(e){return{label:e.describe,value:e.action}})),e}))}))}}},d=c,u=a("2877"),m=Object(u["a"])(d,n,s,!1,null,"46bbfa96",null);t["default"]=m.exports}}]);