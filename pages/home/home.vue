<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
			<view style="background-color:white;width:100%;height:100%;min-height:50px">
				<input type="text" value="" placeholder="点击输入搜索内容" sytle=" border:1px;font-size:14px;background-color: #FFFFFF;height: 60upx;width: 480upx;" maxlength="50" focus/>
			</view>
			<view style="overflow:auto;background-color:white;width:100%;min-height:600px;" >
				<view  v-for="(info,index) in messDetail" v-if="index < 4">
					{{info.username}}
				</view>
				
			<!-- 	<div v-for="(info,index) in messDetail" v-if="index < 4">
			
				                    <div v-if="info.user_id != user_my_id" style="background-color:rgb(234,234,236);width:auto;min-height:100px;height:auto;">
				            
				                                                    <div style="background-color:white;width:10%;height:auto;;float:left;">
				                                                        <a :href="['info?user_id=' + info.user_id]" style="text-decoration:none;font-size:12px;color:blue">{{ info.to_username }}</a>
				                                                        <img :src="info.to_head_url" style="border-radius:50%;left:3px;width: 50px; height: 50px;">
				                                                    </div>
										<div style="background-color:white;width:100%;height:auto;float:left;">
				                            <div style="background-color:white;width:90%;min-height:100px;height:auto;position:relative;float:left;">
				                                <p align="left" style="font-size:14px;color:black">&nbsp;&nbsp;&nbsp;{{ info.mess_content }} </p>
				                            </div>	
				                        </div>
				                    </div>
				
				                    <div v-if="info.user_id == user_my_id" style="background-color:white;width:auto;min-height:100px;height:auto;">
				                        <div style="border-radius:10px;color:black;background-color:white;width:100%;height:auto;float:left;">
				                            <div style="background-color:white;width:90%;min-height:100px;height:auto;float:left;">
				                         
				                                <p align="right" style="font-size:14px;color:black">{{ info.mess_content }}&nbsp;&nbsp;&nbsp;</p>
				                                <p align="right" style="font-size:1px;color:grey"> {{ info.create_time }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
				                            </div>
											
											<div style="background-color:white;width:10%;height:auto;position:relative;float:left;">
											    <a :href="['info?user_id=' + info.user_id]" style="text-decoration:none;font-size:12px;color:blue">{{ info.username }}</a>
											    <img :src="info.head_url" style="border-radius:50%;position:relative;left:3px;width: 50px; height: 50px;">
											</div>
				                           
				                        </div>
				                    </div>
			</div> -->
				
				
				
				
				
			</view>
			
			<view style="background-color:red;width:100%;height:100%;min-height:50px">
					<view style="background-color:orange;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<navigator url="../new/new">
							<p style="color:grey" align="middle">新鲜事</p>
						</navigator>
					</view>
					
					<view v-on:click="submitSelectMess"  style="background-color:blue;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<navigator url="../friend/friend">
							<p style="color:grey" align="middle">好友</p>
						</navigator>
					</view>
					
					<view style="background-color:orange;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
							<p style="color:grey" align="middle">消息</p>
					</view>
					
					<view v-on:click="submitSelectMess"  style="background-color:blue;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<p style="color:grey" align="middle">视频</p>
					</view>
					
					<view v-on:click="submitSelectMess"  style="background-color:blue;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<navigator url="../login/login">
							<p style="color:grey" align="middle">照片</p>
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
		   
		        this.submitSelectMess()
		
		    },
		
		methods: {
			    submitSelectMess(){
					uni.request({
										// url: 'http://www.wetalk.ltd/AppSelectMess?to_user_id=224',
										url: 'http://www.wetalk.ltd/AppSelectHeadUrl',
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
