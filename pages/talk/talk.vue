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

								<p style="color:grey;font-size:10px">{{	infoPerson.mess_content  }}</p>	

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
								  <p style="color:grey;font-size:10px" align="right">{{	infoPerson.mess_content  }}</p>
							  </view>
									
						</view>
						</view>
					
		
			</view>
	  	</view>	
		
		<view style="background-color:white;width:100%;height:50px">
			
			<view style="background-color:white;width:80%;height:50px;float:left;align-items:center;justify-content:center;display:flex">
				 <input type="text" maxlength="11" v-model="login.phone"   
				                    placeholder="输入消息..." @input="onKeyUserNameInput" class="is-input1 " /> 
			
			</view>
			
			<view style="background-color:green;width:20%;height:50px;float:left;align-items:center;justify-content:center;display:flex">
					<button type="default">发送</button>
			</view>
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: { phone: "",  password: "",  }, 
				messDetail:null
				
			}
		},
		
		mounted () {
		  
		       this.submitSelectMess()
				
		   },
		
		methods: {
			onKeyUserNameInput: function(event) {  
			                this.phone = event.target.value  
							console.log("输入的数据是:" + this.phone)
						
			},  
			
			submitSelectMess(){
				
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由
				let curParam = routes[routes.length - 1].options; //获取路由参数
				
				uni.request({
					url: 'http://www.wetalk.ltd/AppSelectMess?user_id=' + '191' + '&to_user_id=' + curParam.to_user_id,
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
