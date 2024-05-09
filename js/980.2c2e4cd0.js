"use strict";(self["webpackChunk_aidol_questionnaire_ui"]=self["webpackChunk_aidol_questionnaire_ui"]||[]).push([[980],{203:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("DocCard",{attrs:{"show-source":!0},scopedSlots:e._u([{key:"source-code",fn:function(){return[n("pre",{staticClass:"lang-markup"},[n("code",[e._v(e._s(e.BasicUsageCode))])])]},proxy:!0}])},[n("BasicUsage")],1),n("DocCard",{attrs:{title:"文档说明"},scopedSlots:e._u([{key:"description",fn:function(){return[n("BlockTipsMd")]},proxy:!0}])})],1)},a=[],c=n(912),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ai-block-tips",{attrs:{message:e.validMessage}},[n("ai-choice",{attrs:{index:1,options:e.options,"collect-reason":!1,"title-content":"How much are you willing to spend every time when shop clothing online?"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),n("div",{staticStyle:{padding:"20px 0"}},[n("button",{on:{click:e.handleReset}},[e._v(" Reset ")])])],1)},s=[],o={name:"BlockTipsDemo",data(){return{checked:"",options:[{label:"选项文本内容",value:1},{label:"选项文本内容",value:2},{label:"选项文本内容",value:3},{label:"选项文本内容",value:4},{label:"选项文本内容",value:5}]}},computed:{validMessage(){return this.checked?"":"Please complete the current question before clicking the next."}},methods:{handleReset(){this.checked=""}}},r=o,d=n(364),u=(0,d.Z)(r,i,s,!1,null,null,null),p=u.exports,v="<template>\n  <div>\n    <ai-block-tips :message=\"validMessage\">\n      <ai-choice\n        v-model=\"checked\"\n        :index=\"1\"\n        :options=\"options\"\n        :collect-reason=\"false\"\n        title-content=\"How much are you willing to spend every time when shop clothing online?\"\n      />\n    </ai-block-tips>\n\n    <div style=\"padding: 20px 0\">\n      <button @click=\"handleReset\">\n        Reset\n      </button>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'BlockTipsDemo',\n  data () {\n    return {\n      checked: '',\n      options: [\n        {\n          label:\n            '选项文本内容',\n          value: 1\n        },\n        { label: '选项文本内容', value: 2 },\n        { label: '选项文本内容', value: 3 },\n        { label: '选项文本内容', value: 4 },\n        { label: '选项文本内容', value: 5 }\n      ]\n\n    }\n  },\n  computed: {\n    validMessage () {\n      return this.checked ? '' : 'Please complete the current question before clicking the next.'\n    }\n  },\n  methods: {\n    handleReset () {\n      this.checked = ''\n    }\n  }\n}\n<\/script>\n",h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",[e._v("Attributes")]),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[e._v("参数")]),n("th",{staticStyle:{"text-align":"center"}},[e._v("说明")]),n("th",{staticStyle:{"text-align":"center"}},[e._v("类型")]),n("th",{staticStyle:{"text-align":"center"}},[e._v("可选值")]),n("th",{staticStyle:{"text-align":"center"}},[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[e._v("message")])]),n("td",{staticStyle:{"text-align":"center"}},[e._v("提示信息文本，当其为 "),n("code",{pre:!0},[e._v("非空字符串")]),e._v(" 时，显示提示效果")]),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[e._v("String")])]),n("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),n("td",{staticStyle:{"text-align":"center"}},[e._v("''")])]),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[e._v("animation")])]),n("td",{staticStyle:{"text-align":"center"}},[e._v("是否开启提示动画")]),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[e._v("boolean")])]),n("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),n("td",{staticStyle:{"text-align":"center"}},[n("code",{pre:!0},[e._v("true")])])])])])])}],g={components:{}},m=g,k=(0,d.Z)(m,h,_,!1,null,null,null),x=k.exports,y={name:"RadioDoc",components:{DocCard:c.Z,BasicUsage:p,BlockTipsMd:x},data(){return{BasicUsageCode:v}}},b=y,f=(0,d.Z)(b,l,a,!1,null,null,null),S=f.exports}}]);