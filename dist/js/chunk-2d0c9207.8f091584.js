(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9207"],{"588f":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e._self._c;return n("div",{staticStyle:{display:"none"}},[n("iframe",{attrs:{id:e.id,src:e.url,frameborder:"0",width:"100%",height:"550px",scrolling:"auto"}})])},i=[],d=t("2b0e"),s=t("9fb0"),r={name:"PdfPreviewModal",data:function(){return{url:window._CONFIG["pdfDomainURL"],id:"pdfPreviewIframe",headers:{}}},created:function(){var e=d["default"].ls.get(s["a"]);this.headers={"X-Access-Token":e}},computed:{},mounted:function(){window.addEventListener("message",this.handleScanFileMessage)},methods:{handleScanFileMessage:function(e){e.data},previewFiles:function(e,n){var t=document.getElementById("pdfPreviewIframe"),a={title:e,token:n};t.contentWindow.postMessage(a,"*")}}},o=r,c=t("2877"),l=Object(c["a"])(o,a,i,!1,null,"5088ac45",null);n["default"]=l.exports}}]);