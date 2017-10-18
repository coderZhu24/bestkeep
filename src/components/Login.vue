<template>
    <div>
        <form name="loginForm" id="loginForm" method="post">
            <ul class="field_list">
                <li class="field_item">
                    <input type="text" class="ipt01" name="username" id="loginName" placeholder="UTOUU帐号" maxlength="11"></li>
                <li class="field_item">
                    <input type="password" class="ipt01" name="password" id="pwd" placeholder="6-18位密码" maxlength="18"></li>
                <li>  
                    <a href="###" target="_blank">忘记密码？</a>
                    <a href="###" target="_blank">注册新账号</a>
                </li>
                <li class="field_item">
                    <input type="submit" id="btnSubmit" class="btnRed" value="授权并登录">
                </li>
                <li class="field_item msg"></li>
            </ul>

            <ul class="roles_list">
                <li class="roles_title">bestkeep将获得以下权限：
                    <input type="hidden" name="oauth20_state">
                </li>
                
                <li class="roles_item">        
                    <input type="checkbox" name="authCode" value="100011" checked="checked" disabled="disabled">获得您的昵称和头像
                    <input type="hidden" name="authCode" value="100011">                 
                </li>
                
                <li class="roles_item">        
                    <input type="checkbox" name="authCode" value="10004" checked="checked" disabled="disabled">获取你的会员信息
                    <input type="hidden" name="authCode" value="10004">       
                </li>
                
            </ul>
        </form>
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
    background: #fff;
}
body {
    width: 100%;
    height: auto;
    font-size: 0.12rem;
    color: #000;
    background-color: white;           
}
.field_list {
    padding: 0.15rem;
}
.field_item {
    text-align: center;
    margin: 0.15rem 0;
}
.ipt01{
    border: 1px solid #e5e5e5;
    width: 100%;
    font-size: 0.14rem;
    line-height:0.42rem;
    height:0.42rem;
    text-align: left;
    margin: 0 auto;
    padding: 0 0.05rem;
    outline: none;
}
a {
    text-decoration: none;
    color: #000;
}
.btnRed {
    -webkit-appearance: none;
    display: block;
    background-color: #ff3366;
    color: white;
    font-size: 0.14rem;
    text-align: center;
    width: 100%;
    height:0.42rem;
    line-height:0.42rem;
    border:none;
}
.msg {
    color: #ff3366;
    font-size: 0.12rem;
    line-height:0.42rem;
    margin: 0.05rem 0;
    height:0.42rem;
}

.roles_list {
    padding:0.15rem;
}
.roles_title{
    border-bottom: 1px solid #e5e5e5;
    line-height:0.42rem;
    height:0.42rem;
    font-size: 0.14rem;
}

.roles_item {
    line-height:0.42rem;
    height:0.42rem;
}
.roles_item input {
    margin-right:0.05rem;
    vertical-align: middle;
}

    
</style>