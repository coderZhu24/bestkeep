<template>
    <div class="Carousel">
		<!-- <div class="swiper-container">
	        <div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in list" :key="item.id"><img :src="item.img" ></div>
	        </div>
        	<div class="swiper-pagination"></div> 
    	</div> -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in list" :key="item.id"><img :src="item.img" ></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
    
<script>
// import '/static/js/jquery-1.11.2.js'
// import '/static/js/swiper-3.4.2.jquery.min.js'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
	//这是 轮播图 组件
  name: "banner",
  data () {
    return {
		list: [],
		mySwiper: {},
		
    };
	},
	props: ['url', 'category'],
	created () {
		
	},
  mounted () {
	  this.axios.get(this.url).then(res=>{
			console.log(res.data[this.category]);
			this.list = res.data[this.category];
			console.log(document)
			// this.mySwiper = new Swiper('.Carousel .swiper-container', {
			// 	pagination: '.swiper-pagination',
			// 	nextButton: '.swiper-button-next',
			// 	prevButton: '.swiper-button-prev',
			// 	paginationClickable: true,
			// 	spaceBetween: 30,
			// 	centeredSlides: true,
			// 	autoplay: 2500,
			// 	autoplayDisableOnInteraction: false
			// });
			setTimeout(function () {
				new Swiper('.Carousel>.swiper-container', {
					pagination: '.swiper-pagination',
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        paginationClickable: true,
			        spaceBetween: 30,
			        centeredSlides: true,
			        autoplay: 2500,
					autoplayDisableOnInteraction: false,
					direction: 'vertical',
					
					// loop: true,

					// // 如果需要分页器
					// pagination: '.swiper-pagination',

					// // 如果需要前进后退按钮
					// nextButton: '.swiper-button-next',
					// prevButton: '.swiper-button-prev',

					// // 如果需要滚动条
					// //scrollbar: '.swiper-scrollbar',

					// // effect:"cube",
					// autoplay:1000

				});
			}, 2000);
			console.log('new swiper finished')
		},err=>{
			console.log(err);
		});
		
		// 	new Swiper('.Carousel>.swiper-container', {
		// 		pagination: '.swiper-pagination',
		// 		nextButton: '.swiper-button-next',
		// 		prevButton: '.swiper-button-prev',
		// 		paginationClickable: true,
		// 		spaceBetween: 30,
		// 		centeredSlides: true,
		// 		autoplay: 2500,
		// 		autoplayDisableOnInteraction: false
		// });
		
		
  }
}
</script>
    
<style lang="css" scoped>
    /*轮播图部分*/
.Carousel{
	height:1.44rem;width: 100%;background-color: pink;margin-top: 1rem;position: relative;
}
.Carousel>.swiper-container{
	height:1.44rem;width: 100%;
}
#Carousel>div:first-type-of{
	color:#00ba9c;
}
.Carousel>.swiper-container img{
	height: 1.44rem;
}
/*热门商品和新品*/
.hot_new{
	height: 6.37rem;width: 100%;
}
.hot_new>.hot_new_title{
	height: .78rem;width: 100%;border-bottom: .05rem solid #f2f2f2;display: flex;
}
.hot_new>.hot_new_title dl{
	width: 33.3%;color: #1fd4af;
}
.hot_new>.hot_new_title dd{
	float: left;
}
.hot_new>.hot_new_title dt{
	float: left;height: .78rem;line-height: .78rem;
}
.hot_new>.hot_new_title img{
	height: .56rem;vertical-align:middle;margin-top: .15rem;margin-left:.03rem;
}
</style>