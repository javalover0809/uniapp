(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/content/content"],{2873:function(t,e,n){"use strict";n.r(e);var o=n("621e"),u=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e["default"]=u.a},"41e6":function(t,e,n){"use strict";n.r(e);var o=n("6db4"),u=n("2873");for(var l in u)"default"!==l&&function(t){n.d(e,t,(function(){return u[t]}))}(l);var c,s=n("f0c5"),i=Object(s["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=i.exports},"621e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{content_id:null,infoContents:null,comments:null,childComments:null,input_value:null,post_result:null}},mounted:function(){this.submitSelectContent(),this.submitSelectComment(),this.getContentId()},methods:{onKeyUserNameInput:function(t){this.input_value=t.target.value,console.log("输入的数据是:"+this.input_value)},click_yes:function(){var e=this;console.log("这个是确认输入的数据:"+this.input_value),t.request({url:"http://localhost/AppInsertComment?user_id=191&commented_user_id=191&comment_content="+this.input_value+"&content_id=796",method:"POST",success:function(t){console.log(t.data),e.post_result=t.data}}),this.input_value=null},getContentId:function(){this.content_id=this.getUrlVar("content_id")},submitSelectContent:function(){var e=this;t.request({url:"http://www.wetalk.ltd/AppSelectContent",method:"GET",success:function(t){console.log(t.data),e.infoContents=t.data}})},submitSelectComment:function(){var e=this;t.request({url:"http://localhost/AppSelectComment?content_id=(796)",method:"GET",success:function(t){console.log(t.data),e.comments=t.data}})},submitSelectChildComment:function(){var e=this;t.request({url:"http://localhost/AppSelectChildComment?comment_id=(1220)",method:"GET",success:function(t){console.log(t.data),e.childComments=t.data}})},getUrlVar:function(t){var e=getCurrentPages(),n=e[e.length-1].route,o=e[e.length-1].options;return console.log("当前页面的是routes"+e),console.log("当前页面的是curRoute"+n),console.log("当前页面的是curParam"+o),console.log("当前页面的是curParam"+o.username),console.log("当前页面的是curParam"+o.password),console.log("当前页面的是to_user_id"+o.to_user_id),o.value},skip:function(e){console.log("跳转到video"+e),t.navigateTo({url:"../photo/photo?username=我是测试用户名&password=我的测试的密码"})}}};e.default=n}).call(this,n("543d")["default"])},"6db4":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return o}));var u=function(){var t=this,e=t.$createElement;t._self._c},l=[]},bb8e:function(t,e,n){"use strict";(function(t){n("3b7f");o(n("66fd"));var e=o(n("41e6"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["bb8e","common/runtime","common/vendor"]]]);