<template>


	<view style="background-color:white;width:100%;height:100%;min-height:712px">
	
	
	<view v-if="mess_flag" style="background-color:white;width:100%;height:100%;min-height:662px">
				<view v-for=" (infoPerson,index) in manageTalkPersons" v-if="index < 12">
					
					<view style="width:20%;min-height:50px;background-color:white;height:auto;float:left">
						
						<image v-bind:src="[ 'http://www.wetalk.ltd/' + infoPerson.head_url ]" style="width:50px;height:45px"></image>
						
					</view>
					
					
					<view v-on:click="talk_fun(infoPerson.user_id)" style="width:80%;height:50px;background-color:white;float:left">
						<view style="width:80%;min-height:25px;background-color:white;float:left">
							<p>	{{	infoPerson.username  }} </p>
						</view>
						<view style="width:80%;height:25px;background-color:white;float:left">
							<p style="color:grey;font-size:10px">{{	infoPerson.mess_content  }}</p>	
						</view>
					</view>
					 <!--分割线-->
					<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;">
						
					</view>
				</view>
		

	</view>
	
	
	
	<view v-else-if="friend_flag" style="background-color:white;width:100%;height:100%;min-height:662px">

					<view style="width:100%;min-height:50px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
			     		<input type="text" maxlength="11" v-model="login.phone" placeholder="搜索" @input="onKeyUserNameInput" class="is-input1" />
						
			     		
			     	</view>
			  

			      <!--分割线-->
			     <view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
				<view v-for=" (infoPerson,index) in allFriends" v-if="index < 12">
					
					<view style="width:20%;min-height:50px;background-color:white;height:auto;float:left">
						
						<image v-bind:src="[ 'http://www.wetalk.ltd/' + infoPerson.head_url ]" style="width:50px;height:45px"></image>
						
					</view>
					
					<view style="width:80%;height:50px;background-color:white;float:left">
						<view style="width:80%;min-height:25px;background-color:white;float:left">
							<p>	{{	infoPerson.username  }} </p>
						</view>
						<view style="width:80%;height:25px;background-color:white;float:left">
							<p style="color:grey;font-size:10px">{{	infoPerson.mess_content  }}</p>	
						</view>
					</view>
					
					 <!--分割线-->
					<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
				</view>
		

	</view>	
	
	
	
	
	<view v-else-if="news_flag" style="background-color:white;width:100%;height:100%;min-height:662px">
			
				<view v-for=" (content,index) in infoContents" v-if="index < 12">
					
					<view style="width:20%;min-height:50px;background-color:white;height:auto;float:left">
						
						<image v-bind:src="[ 'http://www.wetalk.ltd/' + content.head_url ]" style="width:50px;height:45px"></image>
						
					</view>
					
					<view style="width:80%;height:50px;background-color:white;float:left">
						<view style="width:80%;min-height:25px;background-color:white;float:left">
							<p>	{{	content.username  }} </p>
						</view>
						<view style="width:80%;height:25px;background-color:white;float:left">
							<p style="color:grey;font-size:10px">{{	content.content  }}</p>	
						</view>
					</view>
					
					 <!--分割线-->
					<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
				</view>
		
	
	</view>
	
	
	
	<view v-else-if="my_flag" style="background-color:white;width:100%;height:100%;min-height:662px">
		
			个人资料
			 <button type="primary" @click="scanCode()">扫一扫</button>
	
	</view>
	
	<view style="background-color:red;width:100%;height:100%;min-height:50px">
		<!--底部信息-->
			<view v-on:click="mess_fun" style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<p style="color:black" align="middle">消息</p>
			</view>
			
			<view v-on:click="friend_fun" style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
				
					
					<p style="color:black" align="middle">好友</p>
					
			</view>
			
			<view v-on:click="news_fun"  style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
							
					<p style="color:black" align="middle">新鲜事</p>
					
			</view>
		
			
			<view v-on:click="my_fun" style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						
						<p style="color:black" align="middle">我的</p>
						
			</view>
	</view>


</view>



	

</template>

<script>
	export default {
		data() {
			return {
				user_my_id:'191',
				
				manageTalkPersons: null,
				infoContents: null,
				allFriends: null,
				
				mess_flag: true,
				friend_flag: false,
				news_flag: false,
				my_flag: false
				
				
				
				
			}
		},
		 mounted () {
		   
		        this.submitSelectTalkPerson(),
				this.submitSelectFriend()	
				this.submitSelectContent(),
				this.getUrl()
		
		    },
		
		methods: {
			
			
			   submitSelectTalkPerson(){
				    uni.request({
				    	url: 'http://www.wetalk.ltd/AppSelectTalkPerson?user_id=191',
						method: 'GET',
						success: (res) => {	
							
							 console.log(res.data)
							 this.manageTalkPersons = res.data		 
												
						}
						
						
				    })
				  
			    },
				
				submitSelectContent(){
								    uni.request({
								    	url: 'http://www.wetalk.ltd/AppSelectContent',
										method: 'GET',
										success: (res) => {	
											
											 console.log(res.data)
											 this.infoContents = res.data		 
																
										}
										
										
								    })
								  
				 },
				 
				 submitSelectFriend(){
				 				    uni.request({
				 				    	url: 'http://www.wetalk.ltd/AppSelectFriend?user_id=191',
				 						method: 'GET',
				 						success: (res) => {	
				 							
				 							 console.log(res.data)
				 							 this.allFriends = res.data		 
				 												
				 						}
				 						
				 						
				 				    })
				 				  
				  },

		
			//跳转消息
			mess_fun(){
				this.mess_flag = true
				this.talk_flag = false
				this.friend_flag = false
				this.news_flag = false
				this.my_flag = false
				
			},
			
			talk_fun(user_id){
				
				uni.navigateTo({
					url:'../talk/talk?to_user_id=' + user_id
				})
			},
			
			//跳转好友
			friend_fun(){
				this.mess_flag = false
				this.talk_flag = false
				this.friend_flag = true
				this.news_flag = false
				this.my_flag = false
				
			},
			//跳转新鲜事
		    news_fun(){
				this.mess_flag = false
				this.talk_flag = false
				this.friend_flag = false
				this.news_flag = true
				this.my_flag = false
				
			},
			
			my_fun(){
				this.mess_flag = false
				this.talk_flag = false
				this.friend_flag = false
				this.news_flag = false
				this.my_flag = true
				
			},
			scanCode() {
                 // 允许从相机和相册扫码
                 uni.scanCode({
                     success: function (res) {
                         console.log('条码类型：' + res.scanType);
                         console.log('条码内容：' + res.result);
                     }
                 });
            },
		
			
			getUrl(){
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由
				let curParam = routes[routes.length - 1].options; //获取路由参数
				console.log("当前页面的是routes" + routes)
				console.log("当前页面的是curRoute" + curRoute)
				console.log("当前页面的是curParam" + curParam)
				console.log("当前页面的是curParam" + curParam.username)
				console.log("当前页面的是curParam" + curParam.password)
				console.log("当前页面的是to_user_id" + curParam.to_user_id)
			},
			
			skip(words){console.log("跳转到video" + words)
			                
			                 uni.navigateTo({
			                     url: '../photo/photo?username=' + '我是测试用户名' + '&password=' + '我的测试的密码'
			                 })
			  },
			
			    submitSelectMess(user_id){
					uni.request({
						url: 'http://www.wetalk.ltd/AppSelectMess?user_id=' + '191' + '&to_user_id=' + user_id ,
										// url: 'http://www.wetalk.ltd/AppSelectHeadUrl',
										method: 'GET',
										success: (res) => {	
											console.log(res.data)
											 this.messDetail = res.data
											 
						
										}
									})
				   }
			
			}
	}
</script>

<style>

</style>
