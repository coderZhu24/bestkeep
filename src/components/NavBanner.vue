<template>
	<div class="nav">
		<div class="head_bottom">
			<swiper class="swiper-box" :options="swiperOption">
				<swiper-slide v-for="(item, index) in navList" :key="item.id">
					<router-link :to="'/home/referral'+item.id" v-if="index > 2"><img :src="navStateList[index] ? item.icon2 : item.icon1" ><i>{{ item.name }}</i></router-link>
					<router-link :to="'/home/aaa'+item.id" v-else-if="index == 0"><img :src="navStateList[index] ? item.icon2 : item.icon1" ><i>{{ item.name }}</i></router-link>
					<router-link :to="'/home/bbb'+item.id" v-else><img :src="navStateList[index] ? item.icon2 : item.icon1" ><i>{{ item.name }}</i></router-link>
				</swiper-slide>
				<!-- <div class="swiper-wrapper">
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>推荐</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_02.png" ><i>国内商品</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_03.png" ><i>跨境淘</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_04.png" ><i>品质生活</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>美妆个护</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>家用电器</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>食品保健</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>母婴玩具</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>保健养生</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>手机数码</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>电脑办公</i></router-link></div>
						<div class="swiper-slide"><router-link to="/home/referral"><img src="../../static/images/head_01.png" ><i>服饰箱包</i></router-link></div>
				</div> -->
			</swiper>
		</div>
	</div>
</template>
    
<script>
export default {
  name: "navbanner",
  data () {
    return {
		navList: null,
        swiperOption: {
			slidesPerView: 6.5,
			freeMode: true,
		},
		navStateList: [],
    };
  },
  created () {
	  this.axios.get('../../static/json/navList.json').then(res => {
		  this.navList = res.data.list
		  for (let i = 0; i < this.navList.length; i++){
			  if (i==0){
				  this.navStateList.push(true)
			  }else{
				  this.navStateList.push(false)
			  }
		  }
	  }, err => {
		  console.log(err)
	  })
  },
  mounted () {
		// 	$("#Carousel>div").on("click",function(e){
		// 	var tar = e.target
		// 	// console.log($(tar).parent())
		// 	$(this).find("i").css({color:"#1fd5b1"})
		// 	$(this).siblings().find("i").css({color:"#888888"})
		// 	var disdence = $(tar).parent().position().left
		// 	//换位到中间位置
		// 	if (disdence>175.35 && disdence < 468) {
		// 	Carousel.style.transform = "translate3d(" + (175.35-disdence) + "px"+",0,0)"
		// 	}
		// 	if (disdence<175.35) {
		// 	Carousel.style.transform = "translate3d(0,0,0)"
		// 	}
		// 	if (disdence>468) {
		// 	Carousel.style.transform = "translate3d(-320px,0,0)"
		// 	}
		// 	//切换图片
		// 	var str = $(this).find("img").attr("src")
		// 	if(str.length == 25){
		// 	var subStr = str.substr(0,str.length-4)
		// 	var string = subStr + "x.png";
		// 	$(this).find("img").attr({src:string});
		// 	$(this).css({color:"#00ba9c","border-bottom":"2px solid #00ba9c"})
		// 	}
		// 	var other = $(this).siblings().find("img")
		// 	other.each(function(){
		// 		$(this).parent().css({color:"black"})
		// 		var old_src = $(this).attr("src")
		// 		if(old_src.length == 26){
		// 			var subStrl = old_src.substr(0,old_src.length-5)
		// 		 	var stringl = subStrl + ".png"
		// 			$(this).attr({src:stringl})
		// 			$(this).parent().css({border:"0"})

		// 		}	
		// 	})
		// })
	}
}
</script>
    
<style lang="css" scoped>

.nav{
	position:fixed;width: 100%;top: .47rem;z-index: 2;background-color: white;height: .53rem;
}
.head_bottom{
	height: .53rem;width: 100%;position: relative;
}
.swiper-slide i{
	text-align: center;width: 100%;color: #888888;font-size: .13rem;height: .13rem;
}
.swiper-slide img{
	text-align: center;height: .3rem;margin-left: .14rem;margin-top: .02rem;
}
/* .swiper-slide a{
	font-size: .13rem;
} */
.router-link-active i{
	color: #1fd5b1;
}
</style>