<template>
    <div>
       <!-- 轮播图 -->
       <banner :url="url" :category="bannerList"></banner>
       <blank></blank>
       <!-- 物品展示 -->
       <goods-banner :url="url" :category="newList" :pic="newListPic" ></goods-banner>

       <div class="nice_title"><img src="../../static/images/quanqiuremai.png" alt=""></div>
       <!-- 分类商品列表 -->
       <thre-goods :url="url" :category="categoryIconList"></thre-goods>
       <blank></blank>
       <!-- 为你推荐 -->
       <recommend></recommend>
       <stype></stype>
   </div>
</template>
    
<script>
import Banner from './Banner'
import GoodsBanner from './GoodsBanner'
import ThreGoods from './ThreGoods1'
import Recommend from './Recommend'
import Stype from './Stype'
import Blank from './Blank'

export default {
    // nav中的第二，三个页面
  name: "referral1",
  data () {
    return {

        // newSalesGoods: 新品上架 hotSaleGoods
        url: '/static/json/inland.json',
        bannerList: 'bannerList',
        newList: 'newSalesGoods',
        newListPic: '/static/images/new.png',
        categoryIconList: 'hotSaleGoods'
    };
  },
  components: {
      Banner,
      GoodsBanner,
      ThreGoods,
      Recommend,
      Stype,
      Blank
  }
}
</script>
    
<style lang="css" scoped>
/*精选部分*/
.nice_title img{
height: .9rem;width: 100%;
}
</style>