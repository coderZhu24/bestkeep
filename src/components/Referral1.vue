<template>
    <div>
       <!-- 轮播图 -->
       <banner :url="url" :caregory="bannerList"></banner>
       <!-- 物品展示 -->
       <goods-banner :url="url" :category="newList" :pic="newListPic" ></goods-banner>

       <div class="nice_title"><img src="../../static/images/quanqiuremai.png" alt=""></div>
       <!-- 分类商品列表 -->
       <thre-goods :url="url" :category="categoryIconList"></thre-goods>
   </div>
</template>
    
<script>
import Banner from './Banner'
import GoodsBanner from './GoodsBanner'
import ThreGoods from './ThreGoods'

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
      ThreGoods
  }
}
</script>
    
<style lang="css" scoped>
/*精选部分*/
.nice_title img{
height: .9rem;width: 100%;
}
</style>