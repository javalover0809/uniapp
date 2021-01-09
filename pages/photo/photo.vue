<template>
	<view>
		<view style="background-color:white;width:100%;min-height:700px;">
			<view style="background-color:white;width:100%;height:100px;align-items:center;justify-content:center;display:flex">
				<p>选择你喜欢的照片</p>
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
		  
		       this.choose()
				
		   },
				
		methods: {
			choose(){
			
				uni.request({
					
									url: 'http://localhost/AppSelectHeadUrl',
									// url: 'www.wetalk.ltd/test',
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
