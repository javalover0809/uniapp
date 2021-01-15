<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
		
		<view style="background-color:white;width:100%;height:100%;min-height:662px">
		
						<view style="width:100%;min-height:50px;background-color:red;float:left;align-items:center;justify-content:center;display:flex">
							
							<view v-on:click="allFriend_fun" style="width:33.33%;min-height:50px;background-color:white;height:auto;float:left;">
							<view v-if="allFriend_white_flag" style="width:100%;min-height:50px;background-color:white;height:auto;float:left;align-items:center;justify-content:center;display:flex">					
								
								<p style="color:black">好友</p>
								
							</view>	
							
							<view v-if="allFriend_grey_flag" style="width:100%;min-height:50px;background-color:grey;height:auto;float:left;align-items:center;justify-content:center;display:flex">
								
								<p style="color:white">好友</p>
								
							</view>	
							</view>
							
							
							<view v-on:click="addOtherFriend_fun" style="width:33.33%;min-height:50px;background-color:white;height:auto;float:left;">
							<view v-if="addOtherFriend_white_flag" style="width:100%;min-height:50px;background-color:white;height:auto;float:left;align-items:center;justify-content:center;display:flex">
								
								<p style="color:black">关注</p>
								
							</view>	
							
							<view v-if="addOtherFriend_grey_flag" style="width:100%;min-height:50px;background-color:grey;height:auto;float:left;align-items:center;justify-content:center;display:flex">
								
								<p style="color:white">关注</p>
								
							</view>	
							</view>
							
							
							<view v-on:click="addMeFriend_fun" style="width:33.33%;min-height:50px;background-color:white;height:auto;float:left;">
							<view v-if="addMeFriend_white_flag" style="width:100%;min-height:50px;background-color:white;height:auto;float:left;align-items:center;justify-content:center;display:flex">
								
								<p style="color:black">粉丝</p>
								
							</view>	
							
							<view v-if="addMeFriend_grey_flag" style="width:100%;min-height:50px;background-color:grey;height:auto;float:left;align-items:center;justify-content:center;display:flex">
								
								<p style="color:white">粉丝</p>
								
							</view>	
							</view>
								
				     	</view>
					 <!--分割线-->
				    <view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:3px;float:left;"></view>
					
					<view v-for=" (infoPerson,index) in allFriends" v-if="allFriend_grey_flag">
						
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
			
			
			<view v-for=" (infoPerson,index) in addMeFriends" v-if="addMeFriend_grey_flag">
				
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
			
			
			<view v-for=" (infoPerson,index) in addOtherFriends" v-if="addOtherFriend_grey_flag">
				
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
				
				allFriends: null,
				addMeFriends: null,
				addOtherFriends: null,
				
				allFriend_white_flag: false,
				allFriend_grey_flag: true,
				
				addOtherFriend_white_flag: true,
				addOtherFriend_grey_flag: false,
				
				addMeFriend_white_flag: true,
				addMeFriend_grey_flag: false
				
			}
		},
		
		mounted () {
		  
				this.submitSelectFriend(),
				this.submitSelectAddMe(),
				this.submitSelectAddOther()
				
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
						  
		 },
		 
		 submitSelectAddMe(){
		 				    uni.request({
		 				    	url: 'http://localhost/AppSelectAddMe?user_id=191',
		 						method: 'GET',
												
		 						success: (res) => {	
		 							
		 							 console.log(res.data)
		 							 this.addMeFriends = res.data		 
		 												
		 						}
		 						
		 						
		 				    })
		 				  
		  },
		  
		 submitSelectAddOther(){
		  				    uni.request({
		  				    	url: 'http://localhost/AppSelectAddOther?user_id=191',
		  						method: 'GET',
		  										
		  						success: (res) => {		
		  							 console.log(res.data)
		  							 this.addOtherFriends = res.data		 					
		  						}
		  						
		  						
		  				    })
		  				  
		   },	
			
			allFriend_fun(){
				this.allFriend_white_flag = false
				this.allFriend_grey_flag = true
				
				this.addOtherFriend_white_flag = true
				this.addOtherFriend_grey_flag = false
				
				this.addMeFriend_white_flag = true
				this.addMeFriend_grey_flag = false
				this.submitSelectFriend()
			},
			
			addOtherFriend_fun(){
				this.allFriend_white_flag = true
				this.allFriend_grey_flag = false
				
				this.addOtherFriend_white_flag = false
				this.addOtherFriend_grey_flag = true
				
				this.addMeFriend_white_flag = true
				this.addMeFriend_grey_flag = false
				this.submitSelectAddOther()
			},
			
			addMeFriend_fun(){
				this.allFriend_white_flag = true
				this.allFriend_grey_flag = false
				
				this.addOtherFriend_white_flag = true
				this.addOtherFriend_grey_flag = false
				
				this.addMeFriend_white_flag = false
				this.addMeFriend_grey_flag = true
				this.submitSelectAddMe()
			}
			
		}
	}
</script>

<style>

</style>
