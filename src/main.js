// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

// $(function(){
    // var swiper1 = new Swiper('.head_bottom>.swiper-container', {
    //   // pagination: '.swiper-pagination',
    //   slidesPerView: 6.5,
    //   // paginationClickable: true,
    //   spaceBetween: 5,
    //   freeMode: true
    // });
    // var swiper2 = new Swiper('.Carousel>.swiper-container', {
    //       pagination: '.swiper-pagination',
    //       nextButton: '.swiper-button-next',
    //       prevButton: '.swiper-button-prev',
    //       paginationClickable: true,
    //       spaceBetween: 30,
    //       centeredSlides: true,
    //       autoplay: 2500,
    //       autoplayDisableOnInteraction: false
    // });
    // var swiper3 = new Swiper('.hot_Carousel>.swiper-container', {
    //       pagination: '.swiper-pagination',
    //       slidesPerView: 3.5,
    //       slidesPerColumn: 2,
    //       paginationClickable: true,
    //       spaceBetween: 0
    // });
    // var swiper4 = new Swiper('.new_Carousel>.swiper-container', {
    //       pagination: '.swiper-pagination',
    //       slidesPerView: 3.5,
    //       slidesPerColumn: 2,
    //       paginationClickable: true,
    //       spaceBetween: 0
    // });
    // $(".footer>li").on("click",function(){
		// 	var str = $(this).find("img").attr("src")
		// 	if(str.length == 26){
		// 	var subStr = str.substr(0,str.length-4)
		// 	var string = subStr + "x.png";
			
		// 	$(this).find("img").attr({src:string});
		// 	$(this).css({color:"#00ba9c"})
		// 	}
		// 	var other = $(this).siblings().find("img")
		// 	other.each(function(){
		// 		$(this).parent().css({color:"black"})
		// 		var old_src = $(this).attr("src")
		// 		if(old_src.length == 27){
		// 			var subStrl = old_src.substr(0,old_src.length-5)
		// 		 var stringl = subStrl + ".png"
		// 			$(this).attr({src:stringl})
		// 		}	
		// 	})
		// })
		// $("#Carousel>div").on("click",function(e){
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
  // });
