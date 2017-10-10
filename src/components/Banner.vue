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

import Vue from 'vue'
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
		this.axios.get(this.url).then(res=>{
			console.log(res.data[this.category]);
			this.list = res.data[this.category];
			var that = this;
			Vue.nextTick(function(){
				setTimeout(function(){

				
				let s = new Swiper('.Carousel .swiper-container',{
		  			autoplay: 1000,
	  			});
	  			console.log(s)
				// that.mySwiper.autoplay.start();
				},1000);
			});
		},err=>{
			console.log(err);
		});
	},
  mounted () {
	  
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