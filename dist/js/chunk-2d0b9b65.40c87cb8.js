(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9b65"],{"33b1":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e._self._c;return a("a-card",{attrs:{bordered:!1}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.rules},on:{submit:e.handleSubmit}},[a("a-row",[a("a-col",{attrs:{md:24,sm:24}},[a("a-form-model-item",{attrs:{label:"Note",prop:"note",labelCol:{span:7},wrapperCol:{span:15}}},[a("a-input",{model:{value:e.model.note,callback:function(a){e.$set(e.model,"note",a)},expression:"model.note"}})],1)],1)],1),a("a-row",[a("a-col",{attrs:{md:24,sm:24}},[a("a-form-model-item",{attrs:{label:"Gender",prop:"gender",labelCol:{span:7},wrapperCol:{span:15}}},[a("a-select",{attrs:{placeholder:"Select a option and change input text above"},on:{change:e.handleSelectChange},model:{value:e.model.gender,callback:function(a){e.$set(e.model,"gender",a)},expression:"model.gender"}},[a("a-select-option",{attrs:{value:"male"}},[e._v("male")]),a("a-select-option",{attrs:{value:"female"}},[e._v("female")])],1)],1)],1)],1),a("a-row",[a("a-col",{attrs:{md:24,sm:24}},[a("a-form-model-item",{attrs:{label:"Gender",prop:"cascader",labelCol:{span:7},wrapperCol:{span:15}}},[a("a-cascader",{attrs:{options:e.areaOptions,showSearch:{filter:e.filter},placeholder:"Please select"},on:{change:e.onChange}})],1)],1)],1),a("a-form-model-item",{attrs:{wrapperCol:{span:12,offset:5}}},[a("a-col",{attrs:{md:24,sm:24}},[a("a-form-model-item",{attrs:{wrapperCol:{span:12,offset:5}}},[a("a-button",{attrs:{type:"primary",htmlType:"submit"}},[e._v("Submit")])],1)],1)],1)],1)],1)},r=[],n=t("0fea"),l={props:["sex","name"],data:function(){return{formLayout:"horizontal",model:{},rules:{note:[{required:!0,message:"Please input your note!"}],gender:[{required:!0,message:"Please select your gender!"}]},areaOptions:[]}},methods:{handleSubmit:function(e){var a=this;e.preventDefault(),this.$refs.form.validate((function(e,t){e&&a.$message.success("succeed!")}))},handleSelectChange:function(e){this.model.note="Hi, ".concat("male"===e?"man":"lady","!")},onChange:function(e,a){},filter:function(e,a){return a.some((function(a){return a.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},created:function(){var e=this;Object(n["c"])("/mock/api/area").then((function(a){e.areaOptions=a}))},watch:{$route:{immediate:!0,handler:function(){this.$route.query.sex}}}},s=l,m=t("2877"),c=Object(m["a"])(s,o,r,!1,null,null,null);a["default"]=c.exports}}]);