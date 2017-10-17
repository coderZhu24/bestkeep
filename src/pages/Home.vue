<template>
    <div>
      <!-- 头部 -->
<<<<<<< HEAD
      <my-header></my-header>
      <nav-banner></nav-banner>
=======
      <header-top></header-top>
      <header-bottom></header-bottom>
>>>>>>> 13d5edc20f73e058bca2cb052c78950be57bc06c
      <router-view></router-view>
      <!-- 底部撑开 -->
      <div class="dibu"></div>
      <!-- 脚部 -->
      <tab-bar></tab-bar>
   </div>

</template>

<script>
// import MyHeader from '../components/Header'
import HeaderTop from '../components/HeaderTop'
import HeaderBottom from '../components/HeaderBottom'
import TabBar from '../components/Tabbar'
<<<<<<< HEAD
import MyHeader from '../components/Header'
import NavBanner from '../components/NavBanner'
=======

>>>>>>> 13d5edc20f73e058bca2cb052c78950be57bc06c

export default {
  //这是 主页
  name: "home",
  data () {
    return {

    };
  },
  components: {
      TabBar,
<<<<<<< HEAD
      MyHeader,
      NavBanner
=======
      // MyHeader,
      HeaderTop,
      HeaderBottom,
>>>>>>> 13d5edc20f73e058bca2cb052c78950be57bc06c
  },
  created () {
    this.$router.push('/home/referral0');
  }
}
</script>

<style lang="css" scoped>
<<<<<<< HEAD
    a{
      text-decoration: none;
      color: #262b2f;
    }
    li{
      list-style: none;
    }
    img{
      vertical-align: top;
    }
    .full{
      width: 100%;
      height: 100%;
    }
    .clear::after{
      content: "";
      display: block;
      clear: both;
      height: 0;
    }
    /* 头部 */
    .header{
      height: .35156rem;
      width: 100%;
      background-color: #fcfcfc;
      position: fixed;
      top: 0;
      left: 0;
      padding: 0.04219rem 0;
      z-index: 1001;
      border-bottom: 1px solid #dadada;
    }
    .header h2{
      height: .375rem;
      line-height: .375rem;
      font-size: .18rem;
      color: #404040;
      text-align: center;
      font-weight: normal;
    }
    .header h2 a{
      position: absolute;
      color: #888;
      right: .12938rem;
      font-size: .14rem;
    }
</style>
=======
/*底部*/
.dibu{
	height: 130px;width: 100%;background-color:#f2f2f2;
}
</style>
>>>>>>> zhu/bk
