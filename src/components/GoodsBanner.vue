<template>
	<div class="hot_shop">
		<i><img :src="pic" alt=""></i>
		<div class="hot_Carousel">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in list" :key="item.id"><dl>
						<dd><img :src="item.goodsCoverImg" alt=""></dd>
						<dt>{{ item.goodsName }}</dt>
						<i>{{ item.goodsPrice }}</i>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
    
<script>

export default {
	//这是 使用了swiper 的物品展示 组件
	//两行 可滑动
  name: "goodsbanner",
  data () {
    return {
		list: [],
		mySwiper: {}
    };
  },
  props: ['url', 'category', 'pic'],
  created () {
	  	this.axios.get(this.url).then(res=>{
			console.log(res);
			this.list = res.data[this.category];
		},err=>{
			console.log(err);
		})
  },
  mounted () {
    
  }
}
</script>
    
<style lang="css" scoped>
    /*热门商品*/
.hot_shop{
	padding-top:.15rem;border-bottom: .05rem solid #f2f2f2;
}
.hot_shop>i{
	height: .28rem;width: 100%;text-align: center;
}
.hot_shop img{
	height: .16rem;
}
.swiper-slide{
	width: 28.6%;
}
.swiper-slide img{
	height: .76rem;margin-left: .2rem;
}
.swiper-slide dd
{
	width: 100%;
}
.swiper-slide dt{
	width: 100%;text-indent: .09rem;overflow: hidden;text-overflow: ellipsis;
	white-space: nowrap;
}
.swiper-slide i{
	width: 100%;text-align:center;color: #ff1010;
}
</style>