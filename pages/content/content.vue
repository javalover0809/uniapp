<template>


	<view style="background-color:white;width:100%;height:100%;min-height:712px">

	
	<view style="background-color:white;width:100%;height:100%;min-height:662px">
			
			<view v-for=" (content,index) in infoContents" v-if="index == 0">
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
				
				<!--分割线-->
				<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
				
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
					<!--分割线-->
					<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
					
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
				<view v-for=" (childComment,index) in childComments">
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
								<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
								
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
							</view>
					</view>
				</view>
				
			</view>	
				
			</view>
			</view>
		
	
	</view>
	

	<view style="background-color:white;width:100%;height:100%;min-height:50px">
	  这个是数据
	</view>


</view>



	

</template>

<script>
	export default {
		data() {
			return {
				
				infoContents:  null,
				comments: null,
				childComments: null
				
				
				
				
			}
		},
		 mounted () {
		   
		        this.submitSelectContent(),
				this.submitSelectComment(),
				this.submitSelectChildComment()
		
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
								  
				 },
			
			submitSelectComment(){


				uni.request({
								url: 'http://localhost/AppSelectComment?content_id='+'(796)',
								method: 'GET',
								success: (res) => {	
											
									console.log(res.data)
									this.comments = res.data		 
																
									}
										
										
							})

			    },
			
			
			   submitSelectChildComment(){
			
			
			uni.request({
							url: 'http://localhost/AppSelectChildComment?comment_id=(1220)',
							method: 'GET',
							success: (res) => {	
										
								console.log(res.data)
								this.childComments = res.data		 
															
								}
									
									
						})
			
			    },
			
			
				 
			getUrl(){
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由
				let curParam = routes[routes.length - 1].options; //获取路由参数
				console.log("当前页面的是routes" + routes)
				console.log("当前页面的是curRoute" + curRoute)
				console.log("当前页面的是curParam" + curParam)
				console.log("当前页面的是curParam" + curParam.username)
				console.log("当前页面的是curParam" + curParam.password)
				console.log("当前页面的是to_user_id" + curParam.to_user_id)
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
