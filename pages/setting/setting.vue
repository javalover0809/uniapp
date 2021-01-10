<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
	
	
		<view style="background-color:white;width:100%;height:100%;min-height:662px">
			
				个人资料

		</view>
	
	
	<view style="background-color:red;width:100%;height:100%;min-height:50px">
		<!--底部信息-->
			<view v-on:click="to_news_fun" style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<p style="color:black" align="middle">消息</p>
			</view>
			
			<view v-on:click="submitSelectMess"  style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
				<navigator url="../friend/friend">
					
					<p style="color:black" align="middle">好友</p>
					
				</navigator>
			</view>
			
			<view style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<navigator url="../news/news">
						
						
						<p style="color:black" align="middle">新鲜事</p>
						
					</navigator>
			</view>
		
			
			<view style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<navigator url="../setting/setting">
						
						<p style="color:black" align="middle">我的</p>
						
					</navigator>
			</view>
	</view>


</view>
</template>

<script>
	export default {
		data() {
			return {
				messDetail:null,
				user_my_id:'191',
				allFriends: null
				
			}
		},
		 mounted () {
		   
		        this.submitSelectFriend(),
				this.getUrl()
		
		    },
		
		methods: {
			
			  enterChat(to_user_id){
				    this.submitSelectMess(to_user_id)
					uni.navigateTo({
						url:'../home/home?to_user_id=' + to_user_id
					})
			  },
			
			   submitSelectFriend(){
				    uni.request({
				    	url: 'http://localhost/AppSelectFriend?user_id=191',
						method: 'GET',
						success: (res) => {	
							
							 console.log(res.data)
							 this.allFriends = res.data		 
												
						}
						
						
				    })
				  
			    },

			
			
			//跳转新鲜事
			to_news_fun(){
				uni.navigateTo({
					url:'../home/home?username=' + '测试用户名username' + '&password=' + '测试密码password'
				})
			},
			//跳转设置
			to_setting_fun(){
				uni.navigateTo({
					url:'../setting/setting'
				})
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
			
			    submitSelectMess(to_user_id){
					uni.request({
						url: 'http://www.wetalk.ltd/AppSelectMess?user_id=' + '191' + '&to_user_id=' + to_user_id ,
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
