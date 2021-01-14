<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px;">
		<view style="background-color:white;width:100%;height:100%;min-height:100px;align-items:center;justify-content:center;display:flex">
			
			<input type="text" v-model="content" placeholder="想说点什么..." @input="content_fun" style="width:90%"/>
		
		</view>	
		<view style="background-color:white;width:100%;height:100%;min-height:100px;align-items:center;justify-content:center;display:flex">
			
			<p v-on:click="publish_content"> 发布 </p>
		
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: null
				
			}
		},
		methods: {
			content_fun(e){
				
				this.content = e.target.value
				
			},
			publish_content(){
					uni.request({
						
						url: 'http://localhost/AppInsertNewContent?content=' + this.content
                        + '&contentTopic=' + ''
						+ '&user_id=' + '191'
                        + '&content_see_level=' + '0',
						method:'POST'
						
					})
					this.content = null
			}
			
		}
	}
</script>

<style>

</style>
