<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
		
		<view style="background-color:white;width:100%;height:100%;min-height:662px">
						
						<view style="width:100%;min-height:50px;background-color:red;float:left;align-items:center;justify-content:center;display:flex">
							
							<view style="width:33.33%;min-height:50px;background-color:white;height:auto;float:left;align-items:center;justify-content:center;display:flex">					
								
								<p>好友</p>
								
							</view>	
							
							<view style="width:33.33%;min-height:50px;background-color:white;height:auto;float:left;align-items:center;justify-content:center;display:flex">
								
								<p>关注</p>
								
							</view>	
							
							<view style="width:33.33%;min-height:50px;background-color:white;height:auto;float:left;align-items:center;justify-content:center;display:flex">
								
								<p>粉丝</p>
								
							</view>	
								
				     	</view>
					 <!--分割线-->
				    <view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:3px;float:left;"></view>
					
					<view v-for=" (infoPerson,index) in allFriends">
						
						<view style="width:20%;min-height:50px;background-color:white;height:auto;float:left">
							
							<image v-bind:src="[ 'http://www.wetalk.ltd/' + infoPerson.head_url ]" style="width:50px;height:45px"></image>
							
						</view>
						
						<view style="width:80%;height:50px;background-color:white;float:left">
							<view style="width:80%;min-height:25px;background-color:white;float:left">
								
								<view style="width:50%;min-height:25px;background-color:white;float:left">
									<p>	 {{	infoPerson.username  }} </p>
								</view>
								<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
									<p style="font-size:10px;"> 查看主页 </p>
								</view>
									
							</view>
							<view style="width:80%;height:25px;background-color:white;float:left">
								<view style="width:50%;min-height:25px;background-color:white;float:left">
								</view>
								<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
									<p style="color:red;font-size:10px;" v-on:click="to_talk_page(infoPerson.user_id)"> 发送消息 </p>
								</view>
							</view>
						</view>
						
						<!--分割线-->
						<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
						
					</view>
			
		
		</view>	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allFriends: null
				
			}
		},
		
		mounted () {
		  
						this.submitSelectFriend()
		   },
		methods: {
			
			submitSelectFriend(){
							    uni.request({
							    	url: 'http://www.wetalk.ltd/AppSelectFriend?user_id=191',
									method: 'GET',
									success: (res) => {	
										
										 console.log(res.data)
										 this.allFriends = res.data		 
															
									}
									
									
							    })
							  
			 }
			
		}
	}
</script>

<style>

</style>
