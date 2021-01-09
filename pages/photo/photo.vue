<template>
	<view>
		<view style="background-color:white;width:100%;min-height:650px;">
			<view style="background-color:white;width:100%;height:50px;align-items:center;justify-content:center;display:flex">
				<p>选择你喜欢的照片</p>
				<navigator url="../video/video">
					<p>视频</p>
				</navigator>
			</view>
			<view style="background-color:white;width:100%;height:500px;">
				<view style="background-color:white;width:10%;height:500px;float:left">
				</view>
				<view style="background-color:white;width:80%;height:500px;float:left">
						<view style="background-color:white;width:100%;height:100px;float:left">
							
						</view>
						<view style="background-color:white;width:100%;height:400px;float:left">

							<view v-for="(BasInfo,index) in BasInfoList"  v-if="index == index_choose">									
									<p> {{BasInfo.username}}</p> 
									<image :src="BasInfo.head_url"></image>
							</view>
							
						</view>
				</view>
				<view style="background-color:white;width:10%;height:500px;float:left">
				</view>
			</view>
			<view style="background-color:white;width:100%;height:100px;align-items:center;justify-content:center;display:flex">
					<view style="background-color:white;width:50%;min-height:200px;align-items:center;justify-content:center;display:flex">
						<p v-on:click="dislove()">不喜欢</p>
					</view>
					<view style="background-color:white;width:50%;min-height:200px;align-items:center;justify-content:center;display:flex">
						<p v-on:click="love()">喜欢</p>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				BasInfoList: null,
				index_choose: 0
			}
		},
		mounted () {
		  
		       this.choose(),
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
				console.log("当前页面的是curParam" + curParam.username)
				console.log("当前页面的是curParam" + curParam.password)
				
			},
			
			choose(){
				
			
				uni.request({
					
									url: 'http://localhost/AppSelectHeadUrl',
									method: 'GET',
									success: (res) => {	
										 console.log(res.data)
										 this.BasInfoList = res.data
									}
								})
				
			},
			
			love(){
				console.log("喜欢啊")
				this.index_choose = this.index_choose + 1
			},
			dislove(){
				console.log("不喜欢啊")
				this.index_choose = this.index_choose + 1
			}
			
		}
	}
</script>

<style>

</style>
