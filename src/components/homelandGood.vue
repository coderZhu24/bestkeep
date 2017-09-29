<template>
  <!-- 为你推荐 -->
    <div>
       <banner></banner>
       <goods-banner></goods-banner>
       <div class="img">
         <img src="../../static/images/banner_jingxuan.png">
       </div>
   </div>
</template>

<script>
import Banner from "./Banner.vue"
import GoodsBanner from "./GoodsBanner"
export default {
  name: "recommend",
  data () {
    return {

    };
  },
  components:{
    Banner,
    GoodsBanner,
  }
}
</script>

<style lang="css" scoped>
    .img{
      width: 100%;  
    }

    .img > img{
        width: 100%;
    }
</style>
