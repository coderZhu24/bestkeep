<template>
    <div id="More">
       <div class="loadmore">
    	    <i>点击加载更多 </i>
        </div>
   </div>
</template>
    
<script>
export default {
  name: "more",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
     /*下载更多*/
    .loadmore{
        padding:0.14rem;
        text-align: center;
        border-radius: 2px;
        color: #999;
        background-color: #fff;
        border-bottom:1px solid #dadada;
        font-size:0.14rem;
    }
    .loadmore i{
        font-style: normal;
    }
</style>