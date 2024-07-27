(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20770e"],{a119:function(e,l,o){"use strict";o.r(l);var a=function(){var e=this,l=e._self._c;return l("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"roleName",label:"部门角色名称"}},[l("a-input",{attrs:{placeholder:"请输入部门角色名称"},model:{value:e.model.roleName,callback:function(l){e.$set(e.model,"roleName",l)},expression:"model.roleName"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"roleCode",label:"部门角色编码"}},[l("a-input",{attrs:{placeholder:"请输入部门角色编码","read-only":e.roleCodeRead},model:{value:e.model.roleCode,callback:function(l){e.$set(e.model,"roleCode",l)},expression:"model.roleCode"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"description",label:"描述"}},[l("a-input",{attrs:{placeholder:"请输入描述"},model:{value:e.model.description,callback:function(l){e.$set(e.model,"description",l)},expression:"model.description"}})],1)],1)],1)],1)},t=[],s=o("0fea"),i=o("4ec3"),r={name:"SysDepartRoleModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{roleName:[{required:!0,message:"请输入部门角色名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}],roleCode:[{required:!0,message:"请输入部门角色编码!"},{min:0,max:64,message:"长度不超过 64 个字符",trigger:"blur"},{validator:this.validateRoleCode}],description:[{min:0,max:126,message:"长度不超过 126 个字符",trigger:"blur"}]},url:{add:"/sys/sysDepartRole/add",edit:"/sys/sysDepartRole/edit"},roleCodeRead:!1}},created:function(){},methods:{add:function(e){this.edit({},e)},edit:function(e,l){this.departId=l,this.model=Object.assign({},e),this.roleCodeRead=!!this.model.roleCode,this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,l=this;this.$refs.form.validate((function(o){if(!o)return!1;l.confirmLoading=!0;var a="",t="";e.model.id?(a+=e.url.edit,t="put"):(a+=e.url.add,t="post"),e.model.departId=e.departId,Object(s["h"])(a,e.model,t).then((function(e){e.success?(l.$message.success(e.message),l.$emit("ok")):l.$message.warning(e.message)})).finally((function(){l.confirmLoading=!1,l.close()}))}))},handleCancel:function(){this.close()},validateRoleCode:function(e,l,o){if(/[\u4E00-\u9FA5]/g.test(l))o("部门角色编码不可输入汉字!");else{var a={tableName:"sys_depart_role",fieldName:"role_code",fieldVal:l,dataId:this.model.id};Object(i["m"])(a).then((function(e){e.success?o():o(e.message)}))}}}},d=r,n=o("2877"),m=Object(n["a"])(d,a,t,!1,null,"396747b2",null);l["default"]=m.exports}}]);