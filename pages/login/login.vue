<template>
    <view>
        <view style="width:100%;height:600px;background-color:white;align-items: center;justify-content:center;display:flex">
			
			<p v-on:click="login_fun"> 确定 </p>
		
			{{login_response}}
			
        </view>
    </view>
</template>
<script>
	export default {
		data() {
			return {
				
				login_response: null
				
			}
		},
		methods: {
			login_fun(){
				let username = 'mytest'
				let password = 'mytest_FDASpassword'
				uni.request({
					url:'http://localhost/AppLogin?username=' + username + '&password=' + password,
					method: 'POST',
					success: (res) => {
						 console.log(res.data)
						 this.login_response = res.data	 
					}
				})
			}
			
		}
	}
</script>

<style>

</style>
