<template>
    <div class="Carousel">
		<swiper :options="swiperOption" class="swiper-box">
			<swiper-slide class="swiper-item" v-for="item in list" :key="item.id">
				<a href="#">
					<img :src="item.img">
				</a>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
	</div>
</template>
    
<script>
export default {
	//这是 轮播图 组件
  name: "banner",
  data () {
    return {
		list: [],
		swiperOption: {
			slidesPerView: 1,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			loop: true,
		}	
    };
  },
	props: ['url', 'category'],
	created () {
		this.axios.get(this.url).then(res=>{
			console.log(res.data[this.category]);
			this.list = res.data[this.category];
		},err=>{
			console.log(err);
		});
	},
}
</script>
    
<style lang="css" scoped>
    /*轮播图部分*/
.Carousel{
	height:1.44rem;width: 100%;background-color: pink;margin-top: 1rem;position: relative;
}
.Carousel>.swiper-box{
	height:1.44rem;width: 100%;
}
.Carousel>.swiper-box img{
	height: 1.44rem;
}
</style>