<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
		
		<view style="background-color:white;width:100%;height:100%;min-height:662px">
							
				<view style="width:100%;min-height:80px;height:auto;background-color:red;float:left;align-items:center;justify-content:center;display:flex">
					
					<view style="width:22%;height:180px;background-color:white;float:left;">
						<view style="width:100%;height:80px;background-color:white;float:left;">
							<image src="http://www.wetalk.ltd/Users/Oraida/Downloads/test/test/WechatIMG8.jpeg" style="border-radius:50%;width:80px;height:80px"></image>
						</view>
						<view style="width:100%;height:100px;background-color:white;float:left;">
						  <view style="width:100%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex;">	
							<view style="width:80%;height:20px;background-color:rgb(59,89,152);float:left;align-items:center;justify-content:center;display:flex;border-bottom-right-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-top-left-radius:5px;">
								<p style="font-size:14px;color:white;"> 发送消息 </p>
							</view>	
						 </view>	
						 
						 <view style="width:100%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex;">
						 						<view style="width:80%;height:20px;background-color:rgb(59,89,152);float:left;align-items:center;justify-content:center;display:flex;border-bottom-right-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-top-left-radius:5px;">
						 							<p style="font-size:14px;color:white;"> 戳一下 </p>
						 						</view>	
						 </view>	
						 
						 <view style="width:100%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex;">
						 						<view style="width:80%;height:20px;background-color:rgb(59,89,152);float:left;align-items:center;justify-content:center;display:flex;border-bottom-right-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-top-left-radius:5px;">
						 							<p style="font-size:14px;color:white;"> 添加好友 </p>
						 						</view>	
						 </view>	
						 
						 <view style="width:100%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex;">
						 						<view style="width:80%;height:20px;background-color:rgb(59,89,152);float:left;align-items:center;justify-content:center;display:flex;border-bottom-right-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-top-left-radius:5px;">
						 							<p style="font-size:14px;color:white;"> 屏蔽 </p>
						 						</view>	
						 </view>	
					
						</view>
					</view>
					
					<view style="width:78%;min-height:180px;height:auto;background-color:white;float:left;">
						<!--姓名-->
						<view style="background-color:white;width:100%;height:auto;float:left;">	
							<view style="background-color:white;width:25%;height:30px;float:left;">
								 <p style="font-size:14px;color:grey;display:inline;"> 姓名: </p>
							</view>
							<view style="background-color:white;width:75%;height:30px;float:left;">
								<p style="font-size:14px;display:inline;"> 唐国洁 </p>
							</view>
						</view>	
						
						<!--性别-->
						<view style="background-color:white;width:100%;height:auto;float:left;">	
							<view style="background-color:white;width:25%;height:30px;float:left;">
								 <p style="font-size:14px;color:grey;display:inline;"> 性别: </p>
							</view>
							<view style="background-color:white;width:75%;height:30px;float:left;">
								<p style="font-size:14px;display:inline;"> 男生 </p>
							</view>
						</view>	
						
						<view style="background-color:white;width:100%;height:auto;float:left;">	
							<view style="background-color:white;width:25%;height:30px;float:left;">
								 <p style="font-size:14px;color:grey;display:inline;"> 生日: </p>
							</view>
							<view style="background-color:white;width:75%;height:30px;float:left;">
								<p style="font-size:14px;display:inline;"> 1994年 9月 24日 </p>
							</view>
						</view>	
						
						<view style="background-color:white;width:100%;height:auto;float:left;">
							<view style="background-color:white;width:25%;height:30px;float:left;">
								 <p style="font-size:14px;color:grey;display:inline;">  感情状态: </p>
							</view>
							<view style="background-color:white;width:75%;height:30px;float:left;">
								<p style="font-size:14px;display:inline;"> 单身 </p>
							</view>
						</view>	
						
						<view style="background-color:white;width:100%;height:auto;float:left;">
							<view style="background-color:white;width:25%;height:30px;float:left;">
								 <p style="font-size:14px;color:grey;display:inline;">  大学: </p>
							</view>
							<view style="background-color:white;width:75%;height:30px;float:left;">
								<p style="font-size:14px;display:inline;"> 北京交通大学 2018级 硕士 </p>
							</view>
						</view>	
				
						
					</view>
					
				</view>
				
				<!--分隔-->
				<view style="background-color:rgb(234,234,236);border-bottom:0px solid rgb(234,234,236);width:100%;height:10px;float:left;"></view>
				
				<view style="width:100%;height:25px;background-color:red;float:left;">
					
					<view v-on:click="to_allfriend_page" style="background-color:white;width:33.33%;height:25px;float:left;align-items:center;justify-content:center;display:flex">
						<p> 好友 10</p>
					</view>	
					
					<view v-on:click="to_allfriend_page" style="background-color:white;width:33.33%;height:25px;float:left;align-items:center;justify-content:center;display:flex">
						<p> 关注 12</p>
					</view>	
					
					<view v-on:click="to_allfriend_page" style="background-color:white;width:33.33%;height:25px;float:left;align-items:center;justify-content:center;display:flex">
						<p> 粉丝 20</p>
					</view>	
					
				</view>
				
				<!--分隔-->
				<view style="background-color:rgb(234,234,236);border-bottom:0px solid rgb(234,234,236);width:100%;height:10px;float:left;"></view>
				
				
				
				<view style="width:100%;height:80px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
					
					<view style="width:25%;height:80px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
						<image src="http://www.wetalk.ltd/Users/Oraida/Downloads/test/test/IMG_8035.JPG" style="width:80px;height:80px"></image>
						
					</view>
					
					<view style="width:25%;height:80px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
						<image src="http://www.wetalk.ltd/Users/Oraida/Downloads/test/test/IMG_8035.JPG" style="width:80px;height:80px"></image>
						
					</view>
					
					<view style="width:25%;height:80px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
						<image src="http://www.wetalk.ltd/Users/Oraida/Downloads/test/test/IMG_8035.JPG" style="width:80px;height:80px"></image>
						
					</view>
					
					<view style="width:25%;height:80px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
						<image src="http://www.wetalk.ltd/Users/Oraida/Downloads/test/test/IMG_8035.JPG" style="width:80px;height:80px"></image>
						
					</view>
							
				</view>
				
				
				
				<!--分隔-->
				<view style="background-color:rgb(234,234,236);border-bottom:0px solid rgb(234,234,236);width:100%;height:10px;float:left;"></view>
							
				<view v-for=" (content,index) in infoContents" >
					
					<view style="width:20%;min-height:50px;height:auto;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
						<image v-bind:src="[ 'http://www.wetalk.ltd/' + content.head_url ]" style="border-radius:50%;width:50px;height:50px"></image>
						
					</view>
					
					<view style="width:80%;min-height:50px;height:auto;background-color:white;float:left">
						<view style="width:90%;height:25px;background-color:white;float:left">
							<p>	{{	content.username  }} 
								{{	content.create_time  }}
							</p>
						</view>
						<view v-on:click="to_content_page(content.id)"  style="width:90%;min-height:25px;height:auto;background-color:white;float:left">
							<p style="color:black;font-size:14px">
								{{	content.content  }}
							</p>
								
							<view v-if="content.pic_url1 != null">
								<image v-bind:src="[ 'http://www.wetalk.ltd/' + content.pic_url1 ]" style="width:280px;height:280px"></image>
							</view>
						</view>
					</view>
					
				
					
					<view style="width:100%;height:25px;background-color:white;float:left">
						
						<view style="width:20%;height:25px;background-color:white;float:left">
						</view>	
						
						<view style="width:30%;height:25px;background-color:white;float:left">
							
							<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
								
								 ↑
					
							</view>
							
							<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
								
								 ↓
								
							</view>
							
						</view>
						
						<view style="width:30%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
							
						</view>
						
						<view style="width:20%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
							
							<image src="http://www.wetalk.ltd//Users/Oraida/Downloads/comment.png" style="width:25px;height:23px"></image>
							
						</view>
						
					</view>
					
					 <!--分隔-->
					<view style="background-color:rgb(234,234,236);border-bottom:0px solid rgb(234,234,236);width:100%;height:10px;float:left;"></view>
				
				</view>
				 
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				infoContents:null
				
			}
		},
		
		mounted () {
		  
			this.submitSelectContent()
				
		   },
				
		methods: {
			
			submitSelectContent(){
							    uni.request({
							    	url: 'http://www.wetalk.ltd/AppSelectContent',
									method: 'GET',
									success: (res) => {	
										
										 console.log(res.data)
										 this.infoContents = res.data		 
															
									}
									
									
							    })
							  
			 }
			
		}
	}
</script>

<style>

</style>
