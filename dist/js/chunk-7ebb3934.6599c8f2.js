(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ebb3934","chunk-2d0ddbeb"],{"00af":function(e,a,t){"use strict";t("d6ab")},"6eb7":function(e,a,t){},8360:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("j-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"recordDate",label:"手写记录日期",help:"日期可以不填，默认是今天"}},[a("a-date-picker",{attrs:{valueFormat:"YYYY-MM-DD 00:00:00",inputReadOnly:!0},model:{value:e.model.recordDate,callback:function(a){e.$set(e.model,"recordDate",a)},expression:"model.recordDate"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"orderId",label:"流转单号"}},[a("a-input",{attrs:{placeholder:"请输入流转单号"},model:{value:e.model.orderId,callback:function(a){e.$set(e.model,"orderId",a)},expression:"model.orderId"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"spec",label:"规格"}},[a("a-input",{attrs:{placeholder:"请输入规格"},model:{value:e.model.spec,callback:function(a){e.$set(e.model,"spec",a)},expression:"model.spec"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"recordNum",label:"手写记录数量"}},[a("a-input-number",{model:{value:e.model.recordNum,callback:function(a){e.$set(e.model,"recordNum",a)},expression:"model.recordNum"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"confirmedNum",label:"公司确认数量"}},[a("a-input-number",{model:{value:e.model.confirmedNum,callback:function(a){e.$set(e.model,"confirmedNum",a)},expression:"model.confirmedNum"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"orderNumber",label:"流转单数量"}},[a("a-input",{attrs:{placeholder:"请输入流转单数量"},model:{value:e.model.orderNumber,callback:function(a){e.$set(e.model,"orderNumber",a)},expression:"model.orderNumber"}})],1)],1)],1)],1)},l=[],o=t("0fea"),n=(t("c1df"),{name:"CountSalaryModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/salary/salary/add",edit:"/salary/salary/edit"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){this.model=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.clearValidate()},handleOk:function(){var e=this,a=this;this.$refs.form.validate((function(t){if(!t)return!1;a.confirmLoading=!0;var r="",l="";e.model.id?(r+=e.url.edit,l="put"):(r+=e.url.add,l="post"),Object(o["h"])(r,e.model,l).then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1,a.close()}))}))},handleCancel:function(){this.close()}}}),i=n,s=t("2877"),c=Object(s["a"])(i,r,l,!1,null,"31145a31",null);a["default"]=c.exports},c5bd:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"公司确认开始时间"}},[a("j-date",{attrs:{dateFormat:"YYYY-MM-DD 00:00:00",inputReadOnly:!0},model:{value:e.queryParam.recordDateStart,callback:function(a){e.$set(e.queryParam,"recordDateStart",a)},expression:"queryParam.recordDateStart"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"公司确认结束时间"}},[a("j-date",{attrs:{dateFormat:"YYYY-MM-DD 00:00:00",inputReadOnly:!0},model:{value:e.queryParam.recordDateEnd,callback:function(a){e.$set(e.queryParam,"recordDateEnd",a)},expression:"queryParam.recordDateEnd"}})],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"规格"}},[a("j-search-select-tag",{attrs:{placeholder:"请输入规格",dictOptions:e.searchOptions},model:{value:e.queryParam.spec,callback:function(a){e.$set(e.queryParam,"spec",a)},expression:"queryParam.spec"}})],1)],1)]:e._e(),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",[a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",bordered:"",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(a){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("salary-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},l=[],o=(t("6eb7"),t("8360")),n=t("b65a"),i=t("0fea"),s={name:"CountSalaryList",mixins:[n["a"]],components:{CountSalaryModal:o["default"]},data:function(){return{searchOptions:[],description:"妈妈计件管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,a,t){return parseInt(t)+1}},{title:"姓名",align:"center",dataIndex:"createBy"},{title:"规格",align:"center",dataIndex:"spec"},{title:"手写记录数量",align:"center",dataIndex:"recordNum"},{title:"公司确认数量",align:"center",dataIndex:"confirmedNum"},{title:"手写与公司的偏差量",align:"center",dataIndex:"orderNumber"}],url:{listSpec:"/salary/salarySpec/listSpec",list:"/salary/salary/checkList",getDefaultDateString:"/salary/salary/getDefaultDateString"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},created:function(){this.getSpecDict(),this.getDefaultDate()},methods:{getDefaultDate:function(){var e=this;Object(i["c"])(this.url.getDefaultDateString).then((function(a){e.queryParam=a.result}))},getSpecDict:function(){var e=this;Object(i["c"])(this.url.listSpec).then((function(a){e.searchOptions=a.result}))},searchReset:function(){this.queryParam={},this.loadData(1),this.getDefaultDate()}}},c=s,d=(t("00af"),t("2877")),u=Object(d["a"])(c,r,l,!1,null,"a340dbca",null);a["default"]=u.exports},d6ab:function(e,a,t){}}]);