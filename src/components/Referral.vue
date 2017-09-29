<template>
    <div>
       <!-- 轮播图 -->
      <banner :url="url" :category="bannerList"></banner>
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
   </div>
</template>
    
<script>
import Banner from './Banner'
import GoodsBanner from './GoodsBanner'
import Bkjx from './Bkjx'
import ThreGoods from './ThreGoods'

export default {
    //这是主页中的  推荐页面
  name: "referral",
  data () {
    return {
        url: "static/json/tuijian.json",
        bannerList: 'bannerList',
        startList: 'startList',
        newList: 'newList',
        bkjxList: 'bkjxList',
        categoryIconList: 'categoryIconList'
    };
  },
  components: {
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
</style>