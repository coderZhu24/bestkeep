<template>
    <div>
      <!-- 头部 -->
      <!-- <my-header></my-header> -->
      <header-top></header-top>
      <header-bottom></header-bottom>
      <router-view></router-view>
      <!-- 底部撑开 -->
      <div class="dibu"></div>
      <!-- 脚部 -->
      <tab-bar></tab-bar>
   </div>
   
</template>
    
<script>
import TabBar from '../components/Tabbar'
import HeaderTop from '../components/HeaderTop'
import HeaderBottom from '../components/HeaderBottom'

export default {
  //这是 主页
  name: "home",
  data () {
    return {
        
    };
  },
  components:{
      TabBar,
      HeaderTop,
      HeaderBottom
  },
  created () {
    this.$router.push('/home');
  }
}
</script>
    
<style lang="css" scoped>
/*底部*/
.dibu{
	height: 130px;width: 100%;background-color:#f2f2f2; 
}
</style>