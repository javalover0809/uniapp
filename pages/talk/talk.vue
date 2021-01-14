<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
		<view style="background-color:white;width:100%;height:auto;min-height:662px">	
					<view v-for=" (infoPerson,index) in messDetail" v-if="index < 15">
						
						<!--A对话-->
						<view v-if="infoPerson.user_id != '191'">
						<view style="width:20%;min-height:50px;background-color:white;height:auto;float:left">
							
							<image v-bind:src="[ 'http://www.wetalk.ltd/' + infoPerson.head_url ]" style="width:50px;height:45px"></image>
							
						</view>
						
						
						<view style="width:80%;height:50px;background-color:white;float:left">

								<p style="color:black;font-size:10px">{{	infoPerson.mess_content  }}</p>	

						</view>
						</view>
					     
						<!--B对话-->
						<view v-if="infoPerson.user_id == '191'">
						<view style="width:20%;min-height:50px;background-color:white;height:auto;float:right">
							
							<image v-bind:src="[ 'http://www.wetalk.ltd/' + infoPerson.head_url ]" style="width:50px;height:45px"></image>
							
						</view>
						
						
						<view style="width:80%;height:50px;background-color:white;float:left">
						     
							  <view style="width:70%;height:50px;background-color:white;float:left">
							  </view>
							  <view style="width:30%;height:50px;background-color:white;float:right">
								  <p style="color:black;font-size:10px" align="right">{{	infoPerson.mess_content  }}</p>
							  </view>
									
						</view>
						</view>
					
		
			</view>
	  	</view>	
		
		<view style="position:fixed;bottom:10px;background-color:rgb(234,234,236);width:100%;height:60px">
			
			<view style="width:100%;height:50px;background-color:rgb(234,234,236);float:left;align-items:center;justify-content:center;display:flex">
				
				<view style="width:80%;height:40px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
					
					<input type="text" v-model="mess_content" placeholder="请输入消息..." @input="mess_content_fun" style="width:80%"/>
						
				</view>	
				<view style="width:17%;height:40px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
					
					<p style="background-color:white;font-size:18px" v-on:click="sendMess()"> 发送 </p>
						
				</view>	
				<view style="width:3%;height:40px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
					
						
				</view>	
				
			</view>
			
		</view>
		<view style="position:fixed;bottom:0px;background-color:rgb(234,234,236);width:100%;height:10px">
		</view>	

	</view>
</template>

<script>
	export default {
		data() {
			return {
				mess_content: null, 
				messDetail:null
				
			}
		},
		
		mounted () {
		  
		       this.submitSelectMess()
				
		   },
		
		methods: {
			mess_content_fun(e) {  
			                this.mess_content = e.target.value  
							console.log("输入的数据是:" + this.mess_content)	
			},  
			sendMess(){

				uni.request({
					url:'http://localhost/AppInsertMess?user_id=' + '191' + '&to_user_id=' + getCurrentPages()[getCurrentPages().length - 1].options.to_user_id + '&mess_content=' + this.mess_content,
					method:'POST'
				})
				this.mess_content = null
			   
			},
			
						
			submitSelectMess(){
				
				uni.request({
					url: 'http://www.wetalk.ltd/AppSelectMess?user_id=' + '191' + '&to_user_id=' + getCurrentPages()[getCurrentPages().length - 1].options.to_user_id,
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
