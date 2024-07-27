(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4e25"],{"3d75":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("a-skeleton",{attrs:{active:"",loading:t.loading,paragraph:{rows:17}}},[e("a-card",{staticClass:"card-area",attrs:{bordered:!1}},[e("a-alert",{attrs:{type:"info",showIcon:!0}},[e("div",{attrs:{slot:"message"},slot:"message"},[t._v("\n        共追踪到 "+t._s(t.dataSource.length)+" 条近期HTTP请求记录\n        "),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:t.handleClickUpdate}},[t._v("立即刷新")])],1)]),e("a-table",{staticStyle:{"margin-top":"20px"},attrs:{columns:t.columns,dataSource:t.dataSource,pagination:t.pagination,loading:t.tableLoading,scroll:{x:900}},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"timeTaken",fn:function(a){return[e("a-tag",a<500?{attrs:{color:"green"}}:a<1e3?{attrs:{color:"cyan"}}:a<1500?{attrs:{color:"orange"}}:{attrs:{color:"red"}},[t._v(t._s(a)+" ms")])]}},{key:"responseStatus",fn:function(a){return[a<200?e("a-tag",{attrs:{color:"pink"}},[t._v(t._s(a)+" ")]):a<201?e("a-tag",{attrs:{color:"green"}},[t._v(t._s(a)+" ")]):a<399?e("a-tag",{attrs:{color:"cyan"}},[t._v(t._s(a)+" ")]):a<403?e("a-tag",{attrs:{color:"orange"}},[t._v(t._s(a)+" ")]):a<501?e("a-tag",{attrs:{color:"red"}},[t._v(t._s(a)+" ")]):e("span",[t._v(t._s(a))])]}},{key:"requestMethod",fn:function(a){return["GET"===a?e("a-tag",{attrs:{color:"#87d068"}},[t._v(t._s(a))]):"POST"===a?e("a-tag",{attrs:{color:"#2db7f5"}},[t._v(t._s(a))]):"PUT"===a?e("a-tag",{attrs:{color:"#ffba5a"}},[t._v(t._s(a))]):"DELETE"===a?e("a-tag",{attrs:{color:"#f50"}},[t._v(t._s(a))]):e("span",[t._v(t._s(a)+" ms")])]}}])})],1)],1)},r=[],o=a("c1df"),s=a.n(o),c=a("0fea");function i(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=l(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==a.return||a.return()}finally{if(c)throw o}}}}function l(t,e){if(t){if("string"===typeof t)return u(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}s.a.locale("zh-cn");var d={data:function(){return{advanced:!1,dataSource:[],pagination:{defaultPageSize:10,defaultCurrent:1,pageSizeOptions:["10","20","30","40","100"],showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t,e){return"显示 ".concat(e[0]," ~ ").concat(e[1]," 条记录，共 ").concat(t," 条记录")}},loading:!0,tableLoading:!0}},computed:{columns:function(){return[{title:"请求时间",dataIndex:"timestamp",customRender:function(t){return s()(t).format("YYYY-MM-DD HH:mm:ss")}},{title:"请求方法",dataIndex:"request.method",scopedSlots:{customRender:"requestMethod"},filters:[{text:"GET",value:"GET"},{text:"POST",value:"POST"},{text:"PUT",value:"PUT"},{text:"DELETE",value:"DELETE"}],filterMultiple:!0,onFilter:function(t,e){return e.request.method.includes(t)}},{title:"请求URL",dataIndex:"request.uri",customRender:function(t){return t.split("?")[0]}},{title:"响应状态",dataIndex:"response.status",scopedSlots:{customRender:"responseStatus"}},{title:"请求耗时",dataIndex:"timeTaken",scopedSlots:{customRender:"timeTaken"}}]}},mounted:function(){this.fetch()},methods:{handleClickUpdate:function(){this.fetch()},handleTableChange:function(){this.fetch()},fetch:function(){var t=this;this.tableLoading=!0,Object(c["c"])("actuator/httptrace").then((function(e){var a,n=[],r=i(e.traces);try{for(r.s();!(a=r.n()).done;){var o=a.value;"OPTIONS"!==o.request.method&&-1===o.request.uri.indexOf("httptrace")&&n.push(o)}}catch(s){r.e(s)}finally{r.f()}t.dataSource=n})).catch((function(e){t.$message.error("获取HTTP信息失败")})).finally((function(){t.loading=!1,t.tableLoading=!1}))}}},f=d,h=a("2877"),p=Object(h["a"])(f,n,r,!1,null,null,null);e["default"]=p.exports}}]);