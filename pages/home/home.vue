<template>
	<view style="overflow:auto;background-color:green;width:100%;height:auto;min-height:660px">
			
			<view style="overflow:auto;background-color:blue;width:100%;height:auto;min-height:00px" >
				<view v-for=" (infoPerson,index) in manageTalkPersons" v-if="index < 13 && index > 0">
					<view style="width:20%;min-height:50px;background-color:white;height:auto;float:left">
						<image v-bind:src="['http://www.wetalk.ltd/' + infoPerson.head_url]" style="width:50px;height:45px"></image>
					</view>
					<view style="width:80%;height:50px;background-color:white;float:left">
						<view style="width:80%;min-height:25px;background-color:white;float:left">
								{{	infoPerson.username  }}
						</view>
						<view style="width:80%;height:25px;background-color:white;float:left">
							<p style="color:grey;font-size:10px">{{	infoPerson.mess_content  }}</p>	
						</view>
					</view>
					 <!--分割线-->
					<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
				</view>
		
	</view>
	
	
	<view style="background-color:red;width:100%;height:100%;min-height:50px">
		<!--底部信息-->
			<view v-on:click="to_news_fun" style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<p style="color:black" align="middle">消息</p>
			</view>
			
			<view v-on:click="submitSelectMess"  style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
				<navigator url="../photo/photo">
					<p style="color:black" align="middle">好友</p>
					
				</navigator>
			</view>
			
			<view style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<p style="color:black" align="middle">新鲜事</p>
			</view>
		
			
			<view v-on:click="to_setting_fun()"  style="background-color:white;width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<p style="color:black" align="middle">我的</p>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messDetail:null,
				user_my_id:'191',
				manageTalkPersons: null
				
			}
		},
		 mounted () {
		   
		        this.submitSelectTalkPerson(),
				this.getUrl()
		
		    },
		
		methods: {
			   submitSelectTalkPerson(){
				    uni.request({
				    	url: 'http://localhost/AppSelectTalkPerson?user_id=191',
						method: 'GET',
						success: (res) => {	
							
							 console.log(res.data)
							 this.manageTalkPersons = res.data		 
												
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
				
			},
			
			skip(words){console.log("跳转到video" + words)
			                
			                 uni.navigateTo({
			                     url: '../photo/photo?username=' + '我是测试用户名' + '&password=' + '我的测试的密码'
			                 })
			  },
			
			    submitSelectMess(){
					uni.request({
										url: 'http://www.wetalk.ltd/AppSelectMess?to_user_id=224',
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
