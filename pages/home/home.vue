<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
			
			<view style="overflow:auto;background-color:white;width:100%;height:650px;" >
				<view  v-for="(info,index) in messDetail" v-if="index < 15 && index > 4">
					<view style="width:100%;min-height:50px;background-color:white;height:auto;">
						{{	info.mess_content  }}
					</view>
				</view>
			</view>
				
			<view style="background-color:red;width:100%;height:100%;min-height:50px">
					<view style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<navigator url="../new/new">
							<p style="color:black" align="middle">新鲜事</p>
						</navigator>
					</view>
					
					<view v-on:click="submitSelectMess"  style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<navigator url="../photo/photo">
							<p style="color:black" align="middle">选美</p>
							
						</navigator>
					</view>
					
					<view style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
							<p style="color:black" align="middle">消息</p>
					</view>
					
					<view v-on:click="skip('传递的参数是word')"  style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					
							<p style="color:black" align="middle">照片</p>
					
					</view>
					
					<view v-on:click="submitSelectMess"  style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<navigator url="../login/login">
							<p style="color:black" align="middle">登你录</p>
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
				user_my_id:'191'
				
			}
		},
		 mounted () {
		   
		        this.submitSelectMess(),
				this.getUrl()
		
		    },
		
		methods: {
			getUrl(){
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由
				let curParam = routes[routes.length - 1].options; //获取路由参数
				console.log("当前的是")
				console.log("当前页面的是routes" + routes)
				console.log("当前页面的是curRoute" + curRoute)
				console.log("当前页面的是curParam" + curParam)
				
			},
			
			skip(words){	        console.log("跳转到video" + words)
			                
			                 uni.navigateTo({
			                     url: '../photo/photo'
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
