(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209ae6"],{a9a9:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(a,i){return s("a-list-item",{key:i},[s("a-list-item-meta",[s("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.title))]),s("span",{attrs:{slot:"description"},slot:"description"},[s("span",{staticClass:"security-list-description"},[t._v(t._s(a.description))]),a.value?s("span",[t._v(" : ")]):t._e(),s("span",{staticClass:"security-list-value"},[t._v(t._s(a.value))])])]),a.actions?[s("a",{attrs:{slot:"actions"},on:{click:a.actions.callback},slot:"actions"},[t._v(t._s(a.actions.title))])]:t._e()],2)}}])})},e=[],n={data:function(){var t=this;return{data:[{title:"账户密码",description:"当前密码强度",value:"强",actions:{title:"修改",callback:function(){t.$message.info("This is a normal message")}}},{title:"密保手机",description:"已绑定手机",value:"138****8293",actions:{title:"修改",callback:function(){t.$message.success("This is a message of success")}}},{title:"密保问题",description:"未设置密保问题，密保问题可有效保护账户安全",value:"",actions:{title:"设置",callback:function(){t.$message.error("This is a message of error")}}},{title:"备用邮箱",description:"已绑定邮箱",value:"ant***sign.com",actions:{title:"修改",callback:function(){t.$message.warning("This is message of warning")}}},{title:"MFA 设备",description:"未绑定 MFA 设备，绑定后，可以进行二次确认",value:"",actions:{title:"绑定",callback:function(){t.$message.info("This is a normal message")}}}]}}},c=n,l=a("2877"),o=Object(l["a"])(c,i,e,!1,null,"9a371cb2",null);s["default"]=o.exports}}]);