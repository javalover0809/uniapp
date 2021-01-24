<template>  
    <view>  
        <!-- #ifndef H5 -->  
        <cu-custom bgColor="bg-gradual-green">  
            <block slot="content">语音识别</block>  
        </cu-custom>  
        <!-- #endif -->  

        <view class="voicepad">  
            {{voiceState}}  
        </view>  
        <button class="cu-btn  bg-green voicebtn " @touchstart="touchStart" @touchend="touchEnd">
			<text class="cuIcon-voicefill">按住说话</text>
			</button>  
    </view>  
</template>  

<script>  
    var plugin = requirePlugin("WechatSI")  
    let manager = plugin.getRecordRecognitionManager();  

    export default {  
        data() {  
            return {  
                voiceState: "你可以..."  
            }  
        },  
        onShow() {  

        },    
        onLoad() {  
            this.initRecord();  
        },  
        methods: {  
            touchStart: function() {  
 
                        manager.start({  
                            duration: 60000,  
                            lang: "zh_CN"  
                        }); 
						 
            },  
            touchEnd: function() {  
                uni.showToast()  
                manager.stop();  
            },  
            /**  
             * 初始化语音识别回调  
             * 绑定语音播放开始事件  
             */  
            initRecord: function() {  
                manager.onStart = function(res) {  
                    this.voiceState ="onStart:"+ res.msg+"正在录音"  
                };  
                //有新的识别内容返回，则会调用此事件  
                manager.onRecognize = (res) => {  
                    this.voiceState = "onRecognize"+res.result;  
                }  

                // 识别结束事件  
                manager.onStop = (res) => {  

                    this.voiceState ="onStop"+ res.result;  
                }  

                // 识别错误事件  
                manager.onError = (res) => {  

                    this.voiceState = "onError "+res.msg;  

                }  
            },  
        }  
    }  
</script>  

<style>  
.voicebtn{height:130upx;display: block;width:130upx;line-height:130upx;border-radius: 65upx;font-size: 50upx;position: absolute;top:1060upx;left:310upx;}  
.voicepad{height: 250upx;width:680upx;background: #fff;margin: 30upx auto;border-radius: 8upx;color: #CCCCCC;padding:20upx;font-size: 35upx;}  
</style>  