<template>
  <div>
    <div class="first" v-for="item in bkjxList" :key="item.id">
        <div class="left"><img :src="item.goodsCoverImg" alt=""></div>
        <div class="right">
        <i>{{ item.goodsSpecialDescribe }}</i>
        <b>{{ item.goodsName }}</b>
        <em>{{ item.goodsPrice }}</em><br>
        <span>市场价：</span><s>{{ item.goodsMarketPrice }}</s><strong>立即购买</strong>
        </div>
    </div>
  </div>
</template>
    
<script>
export default {
  //这是 bk精选 组件
  name: "bkjx",
  data () {
    return {
        bkjxList: []
    };
  },
  props: ['url', 'category'],
  mounted () {
      this.axios.get(this.url).then(res=>{
        console.log(res.data[this.category][0].goodsList);
        this.bkjxList = res.data[this.category][0].goodsList;
      },err=>{
        console.log(err);
      })
    //   console.log(res)
    //   this.bkjxList = res.data[category][0].goodsList;
      
    // },err=>{
    //   console.log(err);
    // })
     
  }
}
</script>
    
<style lang="css" scoped>
.first{
	height: 1.23rem;width: 100%;
}
.left{
	width: 1.5rem;float: left;height: 1.23rem;
}
.left>img{
	height: 1rem;margin-top:.105rem;margin-left:.145rem;
}
.right{
	height: 1.22rem;width: 2.25rem;	float: right;border-bottom: .01rem solid #efefef;
}
.right>b{
	overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
}
.right>i{width: 2rem;padding-right: .25rem;margin-top: .16rem;font-size: .15rem;}
.right>b{width: 2.11rem;padding-right: .14rem;color: #a3a3a3;font-size: .13rem;}
.right>em{color:#ff2222;font-size: .15rem; }
.right>s{
	color: #a3a3a3;font-size: .13rem;
}
.right>strong{
	height: .24rem;width: .65rem;line-height: .24rem;text-align: center;font-size: .13rem;background-color: #00ba9c;
	float: right;margin-right:.17rem;border-radius: .05rem;
}

</style>