<template>
	
	<view style="background-color:#007AFF;display: flex;flex-direction: column;align-items: center;justify-content: center;">
		<view>
				<image  mode="aspectFit" src='https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1713396441,1487163637&fm=26&gp=0.jpg'></image>	
		</view>
		<view style="width:100%;height:100%;min-height:100px;background-color:rgb(234,234,236)">
			这个就是，我们的吧？
			<a  url="../new/new"  v-on:click="a_button()" style="display:show">a按钮</a>
			<navigator url="../new/new" open-type="navigate">
			    <view class="struct"> 
			        I have skills such as 
			    </view>
			</navigator>
		</view>
		
		<view style="display: flex;justify-content: center;">
			<text style="font-size: 36rpx;color: black;background-color:rgb(234,234,236);">
				{{swiperList.email_address}}哲学是
			</text>
		</view>
		<button v-on:click="get" value="">
			登录
		</button> 
	
	     <button v-on:click="get" value="">
			退出
	     </button> 
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				swiperList:'这里是聊天的记录'
			}
		},
		onLoad() {
		
		},
		
		
		methods: {
			
			get(){   uni.request({
								url:'http://localhost/test2?email=tangguojie@bjtu.edu.cn',
								// url:'https://busy.silingkeji.com/api/public_api/index',
								method: 'GET',
								success: (res) => {	
									console.log(res.data)
									this.swiperList = res.data
				
								}
							})
				
				},
				get_input(){
					
					let input_value = document.getElementById('input_id')
				},
				a_button(){
					alert('这个是a按钮')
					
				}
			
			
			
		}
		
	}
</script>