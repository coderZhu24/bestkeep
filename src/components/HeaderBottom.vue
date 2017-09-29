<template>
	<div class="headbottom">
		<div class="head_bottom">
			<div class="swiper-container">
				<div class="swiper-wrapper" id="Carousel">
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
				</div>
			</div>
		</div>
	</div>
</template>
    
<script>
export default {
	//这是 首页头部 组件
    name: "headbottom",
    data () {
        return {
        
        };
	},
	mounted () {
		// Vue.nextTick(function () {
			var swiper1 = new Swiper('.head_bottom>.swiper-container', {
				// pagination: '.swiper-pagination',
				slidesPerView: 6.5,
				// paginationClickable: true,
				spaceBetween: 5,
				freeMode: true
			});
			$("#Carousel>div").on("click",function(e){
			var tar = e.target
			// console.log($(tar).parent())
			$(this).find("i").css({color:"#1fd5b1"})
			$(this).siblings().find("i").css({color:"#888888"})
			var disdence = $(tar).parent().position().left
			//换位到中间位置
			if (disdence>175.35 && disdence < 468) {
			Carousel.style.transform = "translate3d(" + (175.35-disdence) + "px"+",0,0)"
			}
			if (disdence<175.35) {
			Carousel.style.transform = "translate3d(0,0,0)"
			}
			if (disdence>468) {
			Carousel.style.transform = "translate3d(-320px,0,0)"
			}
			//切换图片
			var str = $(this).find("img").attr("src")
			if(str.length == 25){
			var subStr = str.substr(0,str.length-4)
			var string = subStr + "x.png";
			$(this).find("img").attr({src:string});
			$(this).css({color:"#00ba9c","border-bottom":"2px solid #00ba9c"})
			}
			var other = $(this).siblings().find("img")
			other.each(function(){
				$(this).parent().css({color:"black"})
				var old_src = $(this).attr("src")
				if(old_src.length == 26){
					var subStrl = old_src.substr(0,old_src.length-5)
				 	var stringl = subStrl + ".png"
					$(this).attr({src:stringl})
					$(this).parent().css({border:"0"})

				}	
			})
		})
		// })
	}
}

</script>
    
<style lang="css" scoped>
    /*头部部分*/
.head_bottom{
	height: .53rem;width: 100%;z-index: 2;background-color: white;position:fixed;top:0.46rem;
}
.swiper-container i{
	text-align: center;width: 100%;color: #888888;font-size: .13rem;height: .13rem;
}
.swiper-container img{
	text-align: center;height: .33rem;margin-left: .1rem;
}
</style>