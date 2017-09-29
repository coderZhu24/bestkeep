<template>
  <!-- 为你推荐 -->
    <div>
       <banner></banner>
       <goods-banner></goods-banner>
       <div>
         <img src="../../static/images/banner_jingxuan.png" class="pic">
       </div>
       
      <!-- <div class="recommend">
        为你推荐
      </div> -->
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
  .pic{
    height: ;
  }
  .recommend{
    font-size: 0.16rem;
    color: #404040;
    background: #fff;
    height: .4rem;
    border-bottom: 1px solid #dadada;
    line-height: .4rem;
    margin-top: .16477rem;
    text-align: center;
  }
  .recommend::before{
	  content: " ";
    display: inline-block;
    width: .15938rem;
    height: .15938rem;
    background: url(../../static/images/star_index.png) no-repeat center center/98%;
    position: relative;
    top: 0.02109rem;
    right: 0.02344rem;
    margin-left: 0.03281rem;
}
</style>
