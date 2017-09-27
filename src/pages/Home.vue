<template>
    <div>
      <!-- 头部 -->
      <my-header></my-header>
      <!-- 轮播图 -->
      <banner></banner>
      <!-- 积分签到。。。。。 -->
      <div class="hot_new_title">
        <dl>
          <dd><img src="../../static/images/new_hot_01.png" alt=""></dd>
          <dt>积分签到</dt>
        </dl>
        <dl>
          <dd><img src="../../static/images/new_hot_02.png" alt=""></dd>
          <dt>手机充值</dt>
        </dl>
        <dl>
          <dd><img src="../../static/images/new_hot_03.png" alt=""></dd>
          <dt>我的VIP</dt>
        </dl>
		  </div>
      <!-- 物品展示 -->
      <goods-banner></goods-banner>
      <goods-banner></goods-banner>
      <!-- 跨境 精选 -->
      <div class="nice_title"><img src="../../static/images/niceGood.png" alt=""></div>
      <bkjx></bkjx>
      <bkjx></bkjx>

      <thre-goods></thre-goods>
      <thre-goods></thre-goods>
      <thre-goods></thre-goods>
      
      <!-- 底部撑开 -->
      <div class="dibu"></div>
      <!-- 脚部 -->
      <tab-bar></tab-bar>
   </div>
   
</template>
    
<script>
import TabBar from '../components/Tabbar'
import MyHeader from '../components/Header'
import Banner from '../components/Banner'
import GoodsBanner from '../components/GoodsBanner'
import Bkjx from '../components/Bkjx'
import ThreGoods from '../components/ThreGoods'

export default {
  name: "home",
  data () {
    return {
        
    };
  },
  components: {
      TabBar,
      MyHeader,
      Banner,
      GoodsBanner,
      Bkjx,
      ThreGoods
  }
}
</script>
    
<style lang="css" scoped>
    /*热门商品和新品*/
.hot_new{
	height: 6.37rem;width: 100%;
}
.hot_new_title{
	height: .78rem;width: 100%;border-bottom: .05rem solid #f2f2f2;display: flex;
}
.hot_new_title dl{
	width: 33.3%;color: #1fd4af;
}
.hot_new_title dd{
	float: left;
}
.hot_new_title dt{
	float: left;height: .78rem;line-height: .78rem;
}
.hot_new_title img{
	height: .56rem;vertical-align:middle;margin-top: .15rem;margin-left:.03rem;
}
/*精选部分*/
.nice_title img{
	height: .9rem;width: 100%;
}
/*底部*/
.dibu{
	height: 130px;width: 100%;background-color:#f2f2f2; 
}
</style>