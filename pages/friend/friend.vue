<template>
		    <div  style="background-color:white;width:41.5%;height:700px;float:left;margin-top:15px;margin-left:60px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;">
		
		        <!--框顶部-->
		        <div style="width:100%;height:50px;border:0px solid rgb(59,89,152);background:white;margin:0px auto 0;overflow:auto;border-top-left-radius:10px;border-top-right-radius:10px;">
		            <!--左边搜索-->
		            <div style="background-color:white;width:10%;height:50px;float:left;align-items:center;justify-content:center;display:flex">
		                <a href="JavaScript:void(0)" style="font-size:14px;text-decoration:none;" v-on:click="submitSelectFriend()">
		                    <img src="/Users/Oraida/Downloads/find.png" style="width:15px;height:15px;">
		                </a>
		            </div>
		            <!--中间输入-->
		            <div style="background-color:white;width:50%;height:50px;float:left;align-items:center;justify-content:center;display:flex">
		                <input id="search_this_content_id"  type = "textarea" v-model = "search_this_content_value" placeholder="好友搜索..."   style="outline:none;border:0;font-size:14px;" size="40px">
		            </div>
		            <!--垂直间隔-->
		            <div style="background-color:white;width:30%;height:50px;float:left;align-items:center;justify-content:center;display:flex"></div>
		            <!--右边搜索-->
		            <div style="background-color:white;width:10%;height:50px;float:left;align-items:center;justify-content:center;display:flex">
		                <a href="JavaScript:void(0)" style="font-size:14px;text-decoration:none;" v-on:click="submitSelectFriend()">
		                    <a href="JavaScript:void(0)" id="submitSelectFriendId" style="display:none;font-size:14px;text-decoration:none;" v-on:click="submitSelectFriend()"></a>
		                    <img src="/Users/Oraida/Downloads/find.png" style="width:15px;height:15px;">
		                </a>
		            </div>
		        </div>
		        <!--分割线-->
		        <div style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></div>
				  这里是我们的好友界面，好友搜索界面
		
		        <!--好友列表-->
		        <div id="scrolldIV1" style="width:100%;height:660px;border:0px solid rgb(59,89,152);background:white;margin:0px auto 0;overflow:auto;border-bottom-left-radius:10px;border-bottom-right-radius:10px;">
		            <div v-for="(friend,index) in allFriends" id="friend.uni_key">
		                <!--整个聊天框-->
		                <div  style="background-color:white;width:auto;min-height:50px;height:auto;">
		                    <!--一行聊天框-->
		                    <div  style="display:show;background-color:white;width:100%;height:auto;float:left;">
		                        <!--头像-->
		                        <div style="background-color:white;width:10%;height:auto;float:left;">
		                            <br>
		                            <img :src="friend.head_url" style="border-radius:50%;position:relative;left:3px;width: 50px; height: 50px;">
		                        </div>
		                        <!--信息-->
		                        <div style="background-color:white;width:55%;min-height:50px;height:auto;float:left;">
		                            <p align="left">
		                                <a v-bind:href="['info?user_id='+friend.user_id]" style="text-decoration:none;font-size:16px;color:black">&nbsp;&nbsp;&nbsp;{{ friend.username }}</a>
		                            </p>
		                            <p align="left">
		                                <a v-bind:href="['talk?user_id='+friend.user_id]" style="text-decoration:none;font-size:16px;color:blue">&nbsp;&nbsp;&nbsp;发消息</a>
		                            </p>
		                        </div>
		                        <!--信息-->
		                        <div style="background-color:white;width:35%;min-height:50px;height:auto;position:relative;float:left;">
		                            <p align="left">
		                                <a v-bind:href="['friend?user_id='+friend.user_id]" style="text-decoration:none;font-size:16px;color:black">&nbsp;&nbsp;&nbsp;查看对方好友</a>
		                            </p>
		                            <!-- <p v-if="user_my_id == user_url_id" align="left"> -->
		                                <!-- <a href="JavaScript:void(0)"  v-on:click="updateAddDel(friend.user_id, friend.uni_key)"  style="text-decoration:none;font-size:14px;color:red">&nbsp;&nbsp;&nbsp;移出好友</a> -->
		                            <!-- </p> -->
		                        </div>
		                    </div>
		                </div>
		                <!--分割线-->
		                <div style="background-color:white;border-bottom:1px solid white;width:2%;height:1px;float:left;"></div>
		                <div style="background-color:white;border-bottom:1px solid #CCC;width:98%;height:1px;float:left;"></div>
		            </div>
		        </div>		
		    </div>
</template>

<script>
	export default {
		data() {
			return {
				allFriends:null
				
			}
		},
		
		mounted() {
		  
		      this.submitSelectFriend()
				
		},
		methods: {
			submitSelectFriend(){
				
			     let user_id = this.getUrlVar('user_id')
			     axios.get('/selectFriend?user_id='+user_id).then(response => ( this.allFriends = response.data )).catch(function (error) {  console.log(error)})
			}
			
		}
	}
</script>

<style>

</style>
