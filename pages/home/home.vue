<template>


	<view style="background-color:white;width:100%;height:100%;min-height:712px">
	
	
	<view v-if="mess_flag" style="position:relative;bottom:70px;background-color:white;width:100%;height:100%;min-height:662px">
		<!--空格-->
		<view style="width:100%;height:70px;background-color:red;float:left;align-items:center;justify-content:center;display:flex"></view>
		
		<!-- <view style="width:100%;height:50px;background-color:rgb(234,234,236);float:left;align-items:center;justify-content:center;display:flex">
			
			<view style="width:90%;height:40px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
				
				<input type="text" v-model="mess_search_value" placeholder="搜索" @input="mess_search_fun" style="width:80%"/>
					
			</view>	
			
		</view> -->

				<view v-for=" (infoPerson,index) in manageTalkPersons">
					
					<view style="width:20%;min-height:50px;background-color:white;height:auto;float:left">
						
						<image v-bind:src="[ 'http://www.wetalk.ltd/' + infoPerson.head_url ]" style="width:50px;height:45px"></image>
				
					</view>
					
					<view v-on:click="talk_fun(infoPerson.user_id)" style="width:80%;min-height:50px;height:auto;background-color:white;float:left">
						<view style="width:80%;min-height:25px;background-color:white;float:left">
							
							<view style="width:50%;min-height:25px;background-color:white;float:left">
								<p>	 {{	infoPerson.username  }} </p>
							</view>
							<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
								<p style="color:grey;font-size:8px">{{	infoPerson.create_time  }} </p>
							</view>
		
						</view>
						<view style="width:80%;height:25px;background-color:white;float:left">
							<p style="color:grey;font-size:10px">{{	infoPerson.mess_content  }}</p>	
						</view>
					</view>
					 <!--分割线-->
					<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
				
				</view>
		

	</view>
	
	
	
	<view v-else-if="friend_flag" style="position:relative;bottom:70px;background-color:white;width:100%;height:100%;min-height:662px">

					<!--空格-->
					<view style="width:100%;height:70px;background-color:red;float:left;align-items:center;justify-content:center;display:flex">
						
					</view>
			    
					<!-- <view style="width:100%;height:50px;background-color:rgb(234,234,236);float:left;align-items:center;justify-content:center;display:flex">
						
						<view style="width:90%;height:40px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
							
							<input type="text" v-model="mess_search_value" placeholder="搜索" @input="mess_search_fun" style="width:80%"/>
								
						</view>	
						
					</view> -->
					
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
					
					<view v-on:click="to_info_page(infoPerson.user_id)" style="width:80%;height:50px;background-color:white;float:left">
						<view style="width:80%;min-height:25px;background-color:white;float:left">
							
							<view style="width:50%;min-height:25px;background-color:white;float:left">
								<p>	 {{	infoPerson.username  }} </p>
							</view>
							<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
								<!-- <p style="font-size:10px;"> 查看主页 </p> -->
							</view>
								
						</view>
						<view style="width:80%;height:25px;background-color:white;float:left">
							<view style="width:50%;min-height:25px;background-color:white;float:left">
							</view>
							<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
								<!-- <p style="color:red;font-size:10px;" v-on:click="to_talk_page(infoPerson.user_id)"> 发送消息 </p> -->
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
			
			<view v-on:click="to_info_page(infoPerson.user_id)" style="width:80%;height:50px;background-color:white;float:left">
				<view style="width:80%;min-height:25px;background-color:white;float:left">
					
					<view style="width:50%;min-height:25px;background-color:white;float:left">
						<p>	 {{	infoPerson.username  }} </p>
					</view>
					<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
						<!-- <p style="font-size:10px;"> 查看主页 </p> -->
					</view>
						
				</view>
				<view style="width:80%;height:25px;background-color:white;float:left">
					<view style="width:50%;min-height:25px;background-color:white;float:left">
					</view>
					<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
						<!-- <p style="color:red;font-size:10px;" v-on:click="to_talk_page(infoPerson.user_id)"> 发送消息 </p> -->
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
			
			<view v-on:click="to_info_page(infoPerson.user_id)" style="width:80%;height:50px;background-color:white;float:left">
				<view style="width:80%;min-height:25px;background-color:white;float:left">
					
					<view style="width:50%;min-height:25px;background-color:white;float:left">
						<p>	 {{	infoPerson.username  }} </p>
					</view>
					<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
						<!-- <p style="font-size:10px;"> 查看主页 </p> -->
					</view>
						
				</view>
				<view style="width:80%;height:25px;background-color:white;float:left">
					<view style="width:50%;min-height:25px;background-color:white;float:left">
					</view>
					<view style="width:50%;min-height:25px;background-color:white;float:left;align-items:center;justify-content:cneter;display:flex">
						<!-- <p style="color:red;font-size:10px;" v-on:click="to_talk_page(infoPerson.user_id)"> 发送消息 </p> -->
					</view>
				</view>
			</view>
			
			<!--分割线-->
			<view style="background-color:rgb(234,234,236);border-bottom:1px solid rgb(234,234,236);width:100%;height:1px;float:left;"></view>
			
		</view>

	</view>	
	
	
	
	<view v-else-if="news_flag" style="position:relative;bottom:70px;background-color:white;width:100%;height:100%;min-height:662px">
			    <!--空格-->
			    <view style="width:100%;height:70px;background-color:red;float:left;align-items:center;justify-content:center;display:flex"></view>
			    
				<!-- <view style="width:100%;height:50px;background-color:rgb(234,234,236);float:left;align-items:center;justify-content:center;display:flex">
					
					<view style="width:90%;height:40px;background-color:white;float:left;align-items:center;justify-content:center;display:flex">
						
						<input type="text" v-model="mess_search_value" placeholder="搜索" @input="mess_search_fun" style="width:80%"/>
							
					</view>	
					
				</view> -->
				
				<view v-for=" (content,index) in infoContents">
					
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
					
					 <!--分隔-->
					<view style="background-color:rgb(234,234,236);border-bottom:0px solid rgb(234,234,236);width:100%;height:10px;float:left;"></view>
				
				</view>
		
	
	</view>
	
	
	<view v-else-if="my_flag" style="position:relative;bottom:70px;background-color:white;width:100%;height:100%;min-height:662px">
		
			<view style="width:100%;height:70px;background-color:white;float:left;align-items:center;justify-content:center;display:flex"></view>
			
			<view style="width:100%;min-height:80px;height:auto;background-color:white;float:left;">
				
				<view style="width:22%;height:180px;background-color:white;float:left;">
					<view style="width:100%;height:80px;background-color:white;float:left;">
						<image src="http://www.wetalk.ltd/Users/Oraida/Downloads/test/test/WechatIMG8.jpeg" style="border-radius:50%;width:80px;height:80px"></image>
					</view>
					<view style="width:100%;height:100px;background-color:white;float:left;">
					  <view style="width:100%;height:25px;background-color:white;float:left;align-items:center;justify-content:center;display:flex;">	
						<view style="width:80%;height:20px;background-color:rgb(59,89,152);float:left;align-items:center;justify-content:center;display:flex;border-bottom-right-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-top-left-radius:5px;">
							<p style="font-size:14px;color:white;"> 编辑资料 </p>
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
							<p style="font-size:14px;display:inline;"> {{ personalInfo.username }} </p>
						</view>
					</view>	
					
					<!--性别-->
					<view style="background-color:white;width:100%;height:auto;float:left;">	
						<view style="background-color:white;width:25%;height:30px;float:left;">
							 <p style="font-size:14px;color:grey;display:inline;"> 性别: </p>
						</view>
						<view style="background-color:white;width:75%;height:30px;float:left;">
							<p style="font-size:14px;display:inline;"> {{ personalInfo.sex_name }} </p>
						</view>
					</view>	
					
					<view style="background-color:white;width:100%;height:auto;float:left;">	
						<view style="background-color:white;width:25%;height:30px;float:left;">
							 <p style="font-size:14px;color:grey;display:inline;"> 生日: </p>
						</view>
						<view style="background-color:white;width:75%;height:30px;float:left;">
							<p style="font-size:14px;display:inline;"> 
							{{ personalInfo.birth_year }} 年
							{{ personalInfo.birth_month }} 月
							{{ personalInfo.birth_day }} 日
							</p>
						</view>
					</view>	
					
					<view style="background-color:white;width:100%;height:auto;float:left;">
						<view style="background-color:white;width:25%;height:30px;float:left;">
							 <p style="font-size:14px;color:grey;display:inline;">  感情状态: </p>
						</view>
						<view style="background-color:white;width:75%;height:30px;float:left;">
							<p style="font-size:14px;display:inline;"> 
							{{ personalInfo.status_name }}
							</p>
						</view>
					</view>	
					
					<view style="background-color:white;width:100%;height:auto;float:left;">
						<view style="background-color:white;width:25%;height:30px;float:left;">
							 <p style="font-size:14px;color:grey;display:inline;">  大学: </p>
						</view>
						<view style="background-color:white;width:75%;height:30px;float:left;">
							<p style="font-size:14px;display:inline;"> 
							 {{ personalInfo.university }} 
							 {{ personalInfo.student_grade }} 
							 {{ personalInfo.student_type }} 
							</p>
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
						
			<view v-for=" (content,index) in infoContents"  v-if="content.user_id == '191' ">
				
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
				
				 <!--分隔-->
				<view style="background-color:rgb(234,234,236);border-bottom:0px solid rgb(234,234,236);width:100%;height:10px;float:left;"></view>
			
			</view>
			 
	</view>
	
	<view v-if="news_flag == true"  style="position:fixed;bottom:100px;left:300px;background-color:white;width:20%;height:60px;border-radius:100px;align-items:center;justify-content:center;display:flex;">
		<p v-on:click="publish_content">发布</p>
<!-- 		<p @click="vibrate">振动</p>
		<p v-on:click="getLocation">定位</p>
		<p v-on:click="setData('user_my_id','191')">写入</p>
		<p v-on:click="getData('user_my_id')">读出</p> -->
	</view>
	
	
	<view style="display:show;position:fixed;bottom:10px;background-color:rgb(234,234,236);width:100%;height:60px">
		<!--底部信息-->
			<view v-on:click="mess_fun" style="background-color:rgb(234,234,236);width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					
					<p style="color:black" align="middle" v-on:click="submitSelectTalkPerson">消息</p>
			</view>
			
			<view v-on:click="friend_fun" style="background-color:rgb(234,234,236);width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
				
					<p style="color:black" align="middle" v-on:click="submitSelectFriend">好友</p>
					
			</view>
			
			<view v-on:click="news_fun"  style="background-color:rgb(234,234,236);width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
							
					<p style="color:black" align="middle" v-on:click="submitSelectContent">新鲜事</p>
					
			</view>
		
			
			<view v-on:click="my_fun" style="background-color:rgb(234,234,236);width:25%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						
						<p style="color:black" align="middle">我的</p>
						
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
				user_my_id:	null,
				mess_search_value: null,
				
				manageTalkPersons: null,
				personalInfo: null,
				
				infoContents: null,
				allFriends: null,
				addMeFriends: null,
				addOtherFriends: null,
				
				mess_flag: false,
				friend_flag: false,
				news_flag: false,
				my_flag: true,
				
				allFriend_white_flag: false,
				allFriend_grey_flag: true,
				
				addOtherFriend_white_flag: true,
				addOtherFriend_grey_flag: false,
				
				addMeFriend_white_flag: true,
				addMeFriend_grey_flag: false
			
			}
		},
		 mounted () {
		   
		        this.submitSelectTalkPerson(),
				this.setData('user_my_id','191'),
				this.submitSelectContent(),
				this.submitSelectFriend(),
				this.submitSelectAddMe(),
				this.submitSelectAddOther(),
				this.submitSelectInfo(),
				this.submitSelectMyUserId(),
				
				this.getUrl()
		
		    },
		
		methods: {
			
			vibrate() {
							uni.vibrateShort({
								success: function() {
									console.log('success');
								}
							});
			},
			getData(key){
				
				uni.getStorage({
				    key: key,
				    success: function (res) {
				        console.log("获取存储的数据:" + res.data);
				    }
				});
				
			},
			
			setData(key,value){
				
				uni.setStorage({
				    key: key,
				    data: value,
				    success: function () {
				        console.log('成功写入了success');
						
				    }
				});
				
			},
			
			
			getLocation(){
				
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				    success: function (res) {
				        const latitude = res.latitude;
				        const longitude = res.longitude;
				        uni.openLocation({
				            latitude: latitude,
				            longitude: longitude,
				            success: function () {
				                console.log('success');
				            }
				        });
				    }
				});
				
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
			},
			
			to_info_page(user_id){
				
				uni.navigateTo({
					url:'../info/info?to_user_id=' + user_id
				})
				
			},
			
			to_allfriend_page(){
				
				uni.navigateTo({
					url:'../allFriend/allFriend'
				})
				
			},
			
			publish_content(){
				
				uni.navigateTo({
					url:'../publish/publish?user_id=' + getCurrentPages()[getCurrentPages().length - 1].options.user_my_id 
				})
				
			},
			
			mess_search_fun(e){
			 this.mess_search_value	= e.target.value
			 console.log("这里进行内容搜索:" + this.mess_search_value)
			},
			
			
			submitSelectMyUserId(){
				 
				 uni.getStorage({
					 
				    key: 'user_my_id',
				    success:(res) => {
						 console.log("这个数据是这样的吧" + res.data)
						 this.user_my_id = res.data
						 console.log("user_my_id这个数据是这样的吧" + this.user_my_id)
				     }
					 
				 })
				 
			},
			
			
			submitSelectInfo(){
	
				uni.request({
					url:'http://localhost/AppSelectInfo?user_id=191',
					method:'GET',
					success:(res) => {
						this.personalInfo = res.data
					}
				})
				
			},
			
			
			   submitSelectTalkPerson(){
				    uni.request({
				    	url: 'http://www.wetalk.ltd/AppSelectTalkPerson?user_id=191',
						method: 'GET',
						success: (res) => {	
							
							 console.log(res.data)
							 this.manageTalkPersons = res.data		 
												
						}
		
				    })
				  
			    },
				
				submitSelectContent(){
								    uni.request({
								    	url: 'http://localhost/AppSelectContent',
										method: 'GET',
										success: (res) => {	
											
											 console.log(res.data)
											 this.infoContents = res.data		 
																
										}
										
										
								    })
								  
				 },
				 
				 
				 submitSelectFriend(){
				 				    uni.request({
				 				    	url: 'http://www.wetalk.ltd/AppSelectFriend?user_id=191',
				 						method: 'GET',
				 						success: (res) => {	
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

		
			//跳转消息
			mess_fun(){
				this.mess_flag = true
				this.talk_flag = false
				this.friend_flag = false
				this.news_flag = false
				this.my_flag = false
				
			},
			
			talk_fun(user_id){
				uni.navigateTo({
					url:'../talk/talk?to_user_id=' + user_id + '&user_my_id=' + this.user_my_id
				})
			},
			
			to_content_page(content_id){
				
				uni.navigateTo({
					url:'../content/content?content_id=' + content_id
				})
				
			},
			
			to_talk_page(user_id){
				
				uni.navigateTo({
					url:'../talk/talk?to_user_id=' + user_id
				})
				
			},
			
			//跳转好友
			friend_fun(){
				this.mess_flag = false
				this.talk_flag = false
				this.friend_flag = true
				this.news_flag = false
				this.my_flag = false
				
			},
			//跳转新鲜事
		    news_fun(){
				this.mess_flag = false
				this.talk_flag = false
				this.friend_flag = false
				this.news_flag = true
				this.my_flag = false
				
			},
			
			my_fun(){
				this.mess_flag = false
				this.talk_flag = false
				this.friend_flag = false
				this.news_flag = false
				this.my_flag = true
				
			},
			scanCode() {
                 // 允许从相机和相册扫码
                 uni.scanCode({
                     success: function (res) {
                         console.log('条码类型：' + res.scanType);
                         console.log('条码内容：' + res.result);
                     }
                 });
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
			  },
			
			    submitSelectMess(user_id){
					uni.request({
						url: 'http://www.wetalk.ltd/AppSelectMess?user_id=' + '191' + '&to_user_id=' + user_id ,
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
