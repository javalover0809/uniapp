(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/photo/photo"],{"00c1":function(o,t,e){"use strict";(function(o){e("3b7f");n(e("66fd"));var t=n(e("1fbe"));function n(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("543d")["createPage"])},"12d9":function(o,t,e){"use strict";var n;e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return n}));var c=function(){var o=this,t=o.$createElement;o._self._c},u=[]},"1fbe":function(o,t,e){"use strict";e.r(t);var n=e("12d9"),c=e("4fbd");for(var u in c)"default"!==u&&function(o){e.d(t,o,(function(){return c[o]}))}(u);var s,l=e("f0c5"),r=Object(l["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=r.exports},"4fbd":function(o,t,e){"use strict";e.r(t);var n=e("9bba"),c=e.n(n);for(var u in n)"default"!==u&&function(o){e.d(t,o,(function(){return n[o]}))}(u);t["default"]=c.a},"9bba":function(o,t,e){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{BasInfoList:null,index_choose:0}},mounted:function(){this.choose(),this.getUrl()},methods:{getUrl:function(){var o=getCurrentPages(),t=o[o.length-1].route,e=o[o.length-1].options;console.log("当前的是"),console.log("当前页面的是routes"+o),console.log("当前页面的是curRoute"+t),console.log("当前页面的是curParam"+e),console.log("当前页面的是curParam"+e.username),console.log("当前页面的是curParam"+e.password)},choose:function(){var t=this;o.request({url:"http://localhost/AppSelectHeadUrl",method:"GET",success:function(o){console.log(o.data),t.BasInfoList=o.data}})},love:function(){console.log("喜欢啊"),this.index_choose=this.index_choose+1},dislove:function(){console.log("不喜欢啊"),this.index_choose=this.index_choose+1}}};t.default=e}).call(this,e("543d")["default"])}},[["00c1","common/runtime","common/vendor"]]]);