(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/info/info"],{1681:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return u}));var o=function(){var t=this,n=t.$createElement;t._self._c},c=[]},4039:function(t,n,e){"use strict";e.r(n);var u=e("5b48"),o=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);n["default"]=o.a},4750:function(t,n,e){"use strict";e.r(n);var u=e("1681"),o=e("4039");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);var a,r=e("f0c5"),f=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=f.exports},"5b48":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{infoContents:null}},mounted:function(){this.submitSelectContent()},methods:{submitSelectContent:function(){var n=this;t.request({url:"http://www.wetalk.ltd/AppSelectContent",method:"GET",success:function(t){console.log(t.data),n.infoContents=t.data}})}}};n.default=e}).call(this,e("543d")["default"])},"665d":function(t,n,e){"use strict";(function(t){e("3b7f");u(e("66fd"));var n=u(e("4750"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["665d","common/runtime","common/vendor"]]]);