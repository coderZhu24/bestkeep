<template>
    <div>
        <div id="main">
            <div class="scroller">
                <div class="img_wrap">
                    <img src="../../static/images/icon007.png">
                </div>
                <form method = "post" id="registerForm">
                    <ul>
                        <li class="ipt_wrap" id="usernameWrap">
                            <label></label>
                            <input type="text" placeholder = "请输入手机号码" id="userName">
                        </li>
                        <li>
                            <div class="ipt_wrap" id="passwordWrap">
                                <label for="password"></label>
                                <input name="password" id="password" type="text" placeholder="请输入6到18位字母加数字">
                            </div>
                        </li>
                        <li>
                            <div class="ipt_wrap" id="cipherWrap">
                                <label for="cipher"></label>
                                <input name="cipher" id="cipher" type="text" placeholder="请输入暗号(选填)">
                            </div>
                        </li>
                        <li>
                            <div class="ipt_wrap" id="valiCodeWrap">
                                <label for="valiCode"></label>
                                <input name="valicode" id="valiCode" type="text" maxlength="4" placeholder="请输入图片验证码">
                            </div>
                            <div class="ipt_wrap" id="valiImageWrap">
                                <img src="" id="imgCode" codes="1508238633000.6208">
                            </div>
                        </li>
                        <li>
                            <div class="ipt_wrap" id="sendCodeWarp">
                                <label for="smsCode"></label>
                                <input name="smsCode" id="smsCode" type="text" maxlength="6" placeholder="请输入短信验证码">
                            </div>
                            <button class="ipt_wrap button-verifyCodeSend" type="button">发送验证码</button>
                        </li>
                        <li>
                            <input type="checkbox" id="manual" checked="">
                            <label for="manual">我同意</label><a class="lnk_manual" id="lnkManual">《有糖用户服务协议》</a>
                        </li>
                        <li>
                            <div class="btn_wrap">
                                <input class="btn_submit disable" id="btnFormSubmit" type="submit" value="立即注册" data-turn-url="/login"> 
                                <input type="hidden" id="visitor" name="visitor" value="">
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
html{
    font-size:100px;
    background: #f2f2f2;
}
#main{
    width: 100%;
    height: 100%;
    position: relative;
    
}
.scroller{
    display: block;
    position: absolute;
    width: 100%;
    font-size: 0.12rem;
}
.img_wrap{
    text-align: center;
}
.img_wrap img{
    width: 90%;
    margin: 0.2rem auto;
    vertical-align: middle;
}

form{
    font-size: 0.14rem;
}
ul{
    display: block;
    width: 90%;
    margin: 0 auto;
}
li{
    list-style: none;
    display: block;
    margin: 0.15rem 0;
}
.ipt_wrap{
    display: inline-block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius:0.05rem;
    background-color: #ffffff;
    line-height:0.48rem;
    height: 0.48rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.ipt_wrap>label{
    position: absolute;
    width:0.4rem;
    height:0.48rem;
    text-align: right;
    background-position: center,center;
    background-repeat: no-repeat;
    background-size: 60%;
}
#usernameWrap>label{
    background-image: url(../../static/images/icon_username.png);
}
.ipt_wrap input{
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    line-height:0.45rem;
    text-indent: 0.45rem;
    display: inline-block;
    border: 0;
    padding: 0;
    margin: 0;
}
#passwordWrap>label {
    background-image: url(../../static/images/icon_password.png);
}
#cipherWrap>label {
    background-image: url(../../static/images/icon_cipher.png);
}
#valiCodeWrap {
    width: 67%;
    clear: both;
}
#valiCodeWrap>label {
    background-image: url(../../static/images/icon_valicode.png);
}
#valiImageWrap {
    width: 30%;
    float: right;
    text-align: center;
    overflow: hidden;
    padding: 0.06rem 0;
}
#sendCodeWarp {
    width: 67%;
    clear: both;
}
#sendCodeWarp>label {
    background-image: url(../../static/images/icon_send.png);
}
.button-verifyCodeSend {
    width: 30%;
    float: right;
    text-align: center;
    overflow: hidden;
    padding: 6px 0;
    line-height: inherit;
    font-size:0.14rem;
}
.lnk_manual {
    color: dodgerblue;
}

.btn_wrap {
height:0.45rem;
}

.btn_wrap .btn_submit{
    background-color: #ff84a3;
    color: #fff;
    border-bottom-color: #ff84a3;
    display: block;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #ff3366;
    border-radius: 0.05rem;
    font-size: 0.18rem;
    -webkit-appearance: none;
    border:none;
}

</style>