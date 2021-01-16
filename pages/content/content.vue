<template>


	<view style="background-color:white;width:100%;height:100%;min-height:712px">

	
	<view style="background-color:white;width:100%;height:100%;min-height:662px">
			
			<view v-for=" (content,index) in infoContents">
			  <!--主评内容-->
			  <view style="width:100%;height:auto">

				<view style="width:20%;min-height:50px;height:auto;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
					
					<image v-bind:src="[ 'http://www.wetalk.ltd/' + content.head_url ]" style="border-radius:50%;width:50px;height:50px"></image>
					
				</view>
				
				<view style="width:80%;min-height:50px;height:auto;background-color:white;float:left">
					<view style="width:90%;height:25px;background-color:white;float:left">
						<p>	{{	content.username 	 }} 
							{{	content.create_time  }}
						</p>
					</view>
					<view style="width:90%;min-height:25px;height:auto;background-color:white;float:left">
						<p style="color:black;font-size:14px">
							{{	content.content  }}
						</p>	
					</view>
				</view>
			  </view>	
				
				
				<!--主内容点赞-->
				<view style="width:100%;height:25px;background-color:white;float:left">
					
					<view style="width:20%;height:25px;background-color:white;float:left">
					</view>	
					
					<view style="width:30%;height:25px;background-color:white;float:left">
						
						<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
							
							 ⬆
							
						</view>
						
						<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
							
							 ⬇
							
						</view>
						
					</view>
					
					<view style="width:30%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
					</view>
					
					<view style="width:20%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
						<image src="http://www.wetalk.ltd//Users/Oraida/Downloads/comment.png" style="width:25px;height:23px"></image>
						
					</view>
						
				</view>
				<!--分割线-->
			
				<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
				
				
			<view v-for=" (comment,index) in comments">	
			<!--评论-->
			<view style="width:100%;height:auto">	
				<view style="width:20%;min-height:50px;height:auto;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
					
					<image v-bind:src="[ 'http://www.wetalk.ltd/' + comment.head_url ]" style="border-radius:50%;width:50px;height:50px"></image>
					
				</view>
				
				<!--评论内容-->
				<view style="width:80%;min-height:50px;height:auto;background-color:white;float:left">
					<view style="width:90%;height:25px;background-color:white;float:left">
						<p>	{{	comment.username  }} 
							{{	comment.create_time  }}
						</p>
					</view>
					<view style="width:90%;min-height:25px;height:auto;background-color:white;float:left">
						<p style="color:black;font-size:14px">
							{{	comment.comment_content  }}
						</p>	
					</view>
					
					<!--评论点赞-->
					<view style="width:100%;height:25px;background-color:white;float:left">
						
						<view style="width:20%;height:25px;background-color:white;float:left">
						</view>	
						
						<view style="width:30%;height:25px;background-color:white;float:left">
							
							<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
								
								 ⬆
								
							</view>
							
							<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
								
								 ⬇
								
							</view>
							
						</view>
						
						<view style="width:30%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
							
						</view>
						
						<view style="width:20%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
							
							<image src="http://www.wetalk.ltd//Users/Oraida/Downloads/comment.png" style="width:25px;height:23px"></image>
							
							
						</view>
							
					</view>
					
					<!--分割线-->
					<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
					
					
				<!--子评论内容-->
				<view v-for=" (childComment,index) in childComments" v-if="childComment.comment_id == comment.id">
							<!--子评论-->
							<view style="width:20%;min-height:50px;height:auto;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
								
								<image v-bind:src="[ 'http://www.wetalk.ltd/' + content.head_url ]" style="border-radius:50%;width:50px;height:50px"></image>
								
							</view>
					
							<view style="width:80%;min-height:50px;height:auto;background-color:white;float:left">
								
								<view style="width:90%;height:25px;background-color:white;float:left">
									<p>	{{	childComment.username  }} 
										{{	childComment.create_time  }}
									</p>
								</view>
								<view style="width:90%;min-height:25px;height:auto;background-color:white;float:left">
									<p style="color:black;font-size:14px">
										 {{ childComment.comment_content }}
									</p>	
								</view>
								
								<!--子评论点赞-->
								<view style="width:100%;height:25px;background-color:white;float:left">
									
									<view style="width:20%;height:25px;background-color:white;float:left">
									</view>	
									
									<view style="width:30%;height:25px;background-color:white;float:left">
										
										<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
											
											 ⬆
											
										</view>
										
										<view style="width:50%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
											
											 ⬇
											
										</view>
										
									</view>
									
									<view style="width:30%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
										
									</view>
									
									<view style="width:20%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
										
										<image src="http://www.wetalk.ltd//Users/Oraida/Downloads/comment.png" style="width:25px;height:23px"></image>
									
									</view>
										
								</view>
								<!--分割线-->
								<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
							</view>
					</view>
				</view>
				
			</view>	
				
			</view>
			</view>
		
	
	</view>
	

	<view style="background-color:white;width:100%;height:100%;min-height:50px">
		<input type="text" v-model="input_value" placeholder="输入评论..." @input="onKeyUserNameInput"  />
		<p v-on:click="click_yes()"> 确定 </p>
	</view>


</view>



	

</template>

<script>
	export default {
		data() {
			return {
				content_id: null,
				infoContents:  null,
				comments: null,
				childComments: null,
				input_value: null,
				post_result: null
			}
		},
		 mounted () {
		   
		        this.submitSelectContent(),
				this.submitSelectComment(),
				this.submitSelectChildComment()
		
		    },
		
		methods: {
				
				onKeyUserNameInput(event) {
				                this.input_value = event.target.value  
								console.log("输入的数据是:" + this.input_value)
							
				}, 	
				click_yes(){
					
						console.log("这个是确认输入的数据:" + this.input_value)
						
						uni.request({
							url:'http://localhost/AppInsertComment?user_id=' + '191' + '&commented_user_id=' + '191' + '&comment_content=' + this.input_value + '&content_id=' + '796',
							method:'POST',
							success: (res) => {
								
								 console.log(res.data)
								 this.post_result = res.data		 
													
							}
						})
						this.input_value = null
				},

		
				submitSelectContent(){
								    uni.request({
								    	url: 'http://localhost/AppSelectContentById?content_id=' + getCurrentPages()[getCurrentPages().length - 1].options.content_id ,
										method: 'GET',
										success: (res) => {	
											
											 console.log(res.data)
											 this.infoContents = res.data		 
																
										}
	
								    })
								  
				 },
			
			submitSelectComment(){
				

				uni.request({
								url: 'http://localhost/AppSelectComment?content_id=('+ getCurrentPages()[getCurrentPages().length - 1].options.content_id + ')',
								method: 'GET',
								success: (res) => {	
											
									console.log(res.data)
									this.comments = res.data		 
																
									}
										
										
							})

			    },
				
			submitSelectChildComment(){
						uni.request({
							url: 'http://localhost/AppSelectChildComment?content_id=(' + getCurrentPages()[getCurrentPages().length - 1].options.content_id + ')',
							method: 'GET',
							success: (res) => {	
										
								console.log(res.data)
								
								this.childComments = res.data		 
															
								}		
						})
			
			    },
			
			skip(words){console.log("跳转到video" + words)
			                
			                 uni.navigateTo({
			                     url: '../photo/photo?username=' + '我是测试用户名' + '&password=' + '我的测试的密码'
			                 })
			  }
			  
			
			}
	}
</script>

<style>

</style>
