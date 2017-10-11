<template>
    <div>
      <!-- 头部 -->
      <header-top></header-top>
      <header-bottom></header-bottom>
      <!-- 内容 -->
      <router-view></router-view>
      <!-- 底部撑开 -->
      <div class="dibu"></div>
      <!-- 脚部 -->
      <tab-bar></tab-bar>
   </div>

</template>

<script>
// 引入组件
import HeaderTop from '../components/HeaderTop'
import HeaderBottom from '../components/HeaderBottom'
import TabBar from '../components/Tabbar'


export default {
  //这是 主页
  name: "home",
  data () {
    return {

    };
  },
  components: {
      TabBar,
      // MyHeader,
      HeaderTop,
      HeaderBottom,
  },
  created () {
    this.$router.push('/home/referral');
  }
}
</script>

<style lang="css" scoped>
/*底部*/
.dibu{
	height: 130px;width: 100%;background-color:#f2f2f2;
}
</style>
