<template>
<div>
    <div class="life" v-for="item in categoryIconList" :key="item.id">
        <div class="life_title"><img :src="item.goodsCategory.smallIconImg" alt="">{{ item.goodsCategory.categoryName }}</div>
        <ul>
            <li v-for="goods in item.goodsData" :key="goods.id">
                <dl>
                    <dd><img :src="goods.goodsCoverImg" alt=""></dd>
                    <dt>{{ goods.goodsName }}</dt>
                    <i>{{ goods.goodsPrice }}</i>
                </dl>
            </li>
        </ul>
    </div>
</div>
</template>
    
<script>
export default {
    // 这是 三列的物品展示 组件
  name: "showthrgoods",
  data () {
    return {
        categoryIconList: []
    };
  },
  props: ['url', 'category'],
  mounted () {
      this.axios.get(this.url).then(res=>{
          console.log(res.data[this.category])
          this.categoryIconList = res.data[this.category];
      },err=>{
          console.log(err);
      })
  }
}
</script>
    
<style lang="css" scoped>
    /*品质生活*/
.life>.life_title{
	height: .38rem;width: 100%;border-bottom: 0.01rem solid #f2f2f2;line-height: .38rem;text-align: center; font-size: 15px;
}
.life>.life_title>img{height: .21rem;vertical-align: middle;}

.life>ul{
	width: 100%;display: flex;flex-wrap:wrap;
}
.life>ul>li{
	height: 1.58rem;width: 33.3%;list-style: none;
}
.life>ul>li img{
	height: .925rem;margin-top:.14rem;margin-left:.15rem;
}
.life>ul>li>dl>dt{
	text-indent: .21rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
}
.life>ul>li>dl>i{
	width: 100%;text-align:center;color: #ff1010;
}
</style>