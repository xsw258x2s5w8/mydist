(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50551e34"],{"5f46":function(o,i,t){"use strict";t("d64c")},"8d90":function(o,i,t){"use strict";t.r(i);var e=function(){var o=this,i=o._self._c;return i("a-modal",{attrs:{visible:o.visible,title:"修改头像",maskClosable:!1,confirmLoading:o.confirmLoading,width:800},on:{cancel:o.cancelHandel}},[i("a-row",[i("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[i("vue-cropper",{ref:"cropper",attrs:{img:o.options.img,info:!0,autoCrop:o.options.autoCrop,autoCropWidth:o.options.autoCropWidth,autoCropHeight:o.options.autoCropHeight,fixedBox:o.options.fixedBox},on:{realTime:o.realTime}})],1),i("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[i("div",{staticClass:"avatar-upload-preview"},[i("img",{style:o.previews.img,attrs:{src:o.previews.url}})])])],1),i("template",{slot:"footer"},[i("a-button",{key:"back",on:{click:o.cancelHandel}},[o._v("取消")]),i("a-button",{key:"submit",attrs:{type:"primary",loading:o.confirmLoading},on:{click:o.okHandel}},[o._v("保存")])],1)],2)},n=[],a=t("7e79"),s={components:{VueCropper:a["VueCropper"]},data:function(){return{visible:!1,id:null,confirmLoading:!1,options:{img:"/avatar2.jpg",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(o){this.visible=!0,this.id=o},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},okHandel:function(){var o=this;o.confirmLoading=!0,setTimeout((function(){o.confirmLoading=!1,o.close(),o.$message.success("上传头像成功")}),2e3)},realTime:function(o){this.previews=o}}},r=s,c=(t("5f46"),t("2877")),l=Object(c["a"])(r,e,n,!1,null,"385c74f1",null);i["default"]=l.exports},d64c:function(o,i,t){}}]);