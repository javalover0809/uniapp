(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/allFriend/allFriend"],{"35cd":function(e,t,d){"use strict";d.r(t);var i=d("5450"),n=d("84f1");for(var a in n)"default"!==a&&function(e){d.d(t,e,(function(){return n[e]}))}(a);var r,l=d("f0c5"),u=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=u.exports},5450:function(e,t,d){"use strict";var i;d.d(t,"b",(function(){return n})),d.d(t,"c",(function(){return a})),d.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"7fea":function(e,t,d){"use strict";(function(e){d("3b7f");i(d("66fd"));var t=i(d("35cd"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,d("543d")["createPage"])},"84f1":function(e,t,d){"use strict";d.r(t);var i=d("af65"),n=d.n(i);for(var a in i)"default"!==a&&function(e){d.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},af65:function(e,t,d){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d={data:function(){return{allFriends:null,addMeFriends:null,addOtherFriends:null,allFriend_white_flag:!1,allFriend_grey_flag:!0,addOtherFriend_white_flag:!0,addOtherFriend_grey_flag:!1,addMeFriend_white_flag:!0,addMeFriend_grey_flag:!1}},mounted:function(){this.submitSelectFriend(),this.submitSelectAddMe(),this.submitSelectAddOther()},methods:{submitSelectFriend:function(){var t=this;e.request({url:"http://www.wetalk.ltd/AppSelectFriend?user_id=191",method:"GET",success:function(e){console.log(e.data),t.allFriends=e.data}})},submitSelectAddMe:function(){var t=this;e.request({url:"http://localhost/AppSelectAddMe?user_id=191",method:"GET",success:function(e){console.log(e.data),t.addMeFriends=e.data}})},submitSelectAddOther:function(){var t=this;e.request({url:"http://localhost/AppSelectAddOther?user_id=191",method:"GET",success:function(e){console.log(e.data),t.addOtherFriends=e.data}})},allFriend_fun:function(){this.allFriend_white_flag=!1,this.allFriend_grey_flag=!0,this.addOtherFriend_white_flag=!0,this.addOtherFriend_grey_flag=!1,this.addMeFriend_white_flag=!0,this.addMeFriend_grey_flag=!1,this.submitSelectFriend()},addOtherFriend_fun:function(){this.allFriend_white_flag=!0,this.allFriend_grey_flag=!1,this.addOtherFriend_white_flag=!1,this.addOtherFriend_grey_flag=!0,this.addMeFriend_white_flag=!0,this.addMeFriend_grey_flag=!1,this.submitSelectAddOther()},addMeFriend_fun:function(){this.allFriend_white_flag=!0,this.allFriend_grey_flag=!1,this.addOtherFriend_white_flag=!0,this.addOtherFriend_grey_flag=!1,this.addMeFriend_white_flag=!1,this.addMeFriend_grey_flag=!0,this.submitSelectAddMe()}}};t.default=d}).call(this,d("543d")["default"])}},[["7fea","common/runtime","common/vendor"]]]);