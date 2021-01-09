<template>
	<view style="background-color:white;width:100%;height:100%;min-height:712px">
		
		<view style="overflow:auto;background-color:white;width:100%;height:650px;" >
				<view v-on:click="uploadPic" style="width:100%;min-height:50px;background-color:white;height:auto;">
						头像上传
				</view>
		
				<view style="width:100%;min-height:50px;background-color:white;height:auto;">
					个人资料
				</view>
				
				<view style="width:100%;min-height:50px;background-color:white;height:auto;">
					隐私设置
				</view>

		</view>
			
		<view style="background-color:red;width:100%;height:100%;min-height:50px">
				<view v-on:click="to_news_fun" style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<p style="color:black" align="middle">新鲜事</p>
				</view>
				
				<view v-on:click="submitSelectMess"  style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
					<navigator url="../photo/photo">
						<p style="color:black" align="middle">选美</p>
						
					</navigator>
				</view>
				
				<view style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<p style="color:black" align="middle">消息</p>
				</view>
				
				<view v-on:click="skip('传递的参数是word')"  style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
				
						<p style="color:black" align="middle">照片</p>
				
				</view>
				
				<view v-on:click="to_setting_fun"  style="background-color:white;width:20%;height:100%;min-height:50px;float:left;align-items:center;justify-content:center;display:flex;">
						<p style="color:black" align="middle">设置</p>
				</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
			uploadPic(){
			    uni.chooseImage({
			        count: 1,
			        sizeType:['copressed'],
			        success(res) {
			            //因为有一张图片， 输出下标[0]， 直接输出地址
			            var imgFiles = res.tempFilePaths[0]
			            console.log(imgFiles)
			            // 上传图片
			            // 做成一个上传对象
			            var uper = uni.uploadFile({
			                // 需要上传的地址
			                url:'http://demo.hcoder.net/index.php?c=uperTest',
			                // filePath  需要上传的文件
			                filePath: imgFiles,
			                name: 'file',
			                success(res1) {
			                    // 显示上传信息
			                    console.log(res1)
			                }
			            });
			            // onProgressUpdate 上传对象更新的方法
			            uper.onProgressUpdate(function(res){
			                // 进度条等于 上传到的进度
			                this.percent = res.progress
			                console.log('上传进度' + res.progress)
			                console.log('已经上传的数据长度' + res.totalBytesSent)
			                console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend)
			            })
			        }
			    })
			}
			       
			
		}
	}
</script>

<style>

</style>
