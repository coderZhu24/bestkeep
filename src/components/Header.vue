<template>
	<div class="head">
		<div class="head_top">
			<span><img src="../../static/images/logo_01.png" ></span><div><input type="text" placeholder="请输入商品名称"></div>
			<a href="#"><img src="../../static/images/message.png" ></a>
		</div>
		<div class="head_bottom">
			<div class="swiper-container">
				<div class="swiper-wrapper" id="Carousel">
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>推荐</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_02.png" ><i>国内商品</i></div>
						<div class="swiper-slide" id="ceshi"><img src="../../static/images/head_03.png" ><i>跨境淘</i></div>
						<div class="swiper-slide" id="ceshi1"><img src="../../static/images/head_04.png" ><i>品质生活</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>美妆个护</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>家用电器</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>食品保健</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>母婴玩具</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>保健养生</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>手机数码</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>电脑办公</i></div>
						<div class="swiper-slide"><img src="../../static/images/head_01.png" ><i>服饰箱包</i></div>
				</div>
			</div>
		</div>
	</div>
</template>
    
<script>
export default {
  name: "header",
  data () {
    return {
        
    };
	},
	created () {
		
	}
}

</script>
    
<style lang="css" scoped>
    /*头部部分*/
.head{
	position:fixed;width: 100%;height: 1rem;top: 0;z-index: 2;background-color: white;
}
.head_top{
	height: .46rem;width: 100%;border-bottom: 0.01rem solid #cccccc;position: relative;
}
.head_top>span>img{
	height:.28rem;width: .28rem;margin-left: .12rem;margin-top: .08rem; 
}
.head_top>div{
	position: absolute;left: .56rem;right: .52rem;height:.3rem;width: 2.66rem;float: left;display: inline-block;top: .08rem
}
.head_top>div>input{
	height: 100%;width: 100%;border: none;background-color:#eeeeee;border-radius: .15rem;background-image: url(../../static/images/search.png);background-repeat:  no-repeat;background-position:.8rem .07rem; background-size: .17rem .17rem;text-indent: 1.04rem;
}
.head_top>div>input[placeholder]{
	font-size: .14rem;color: #b2b2b2;outline: none;
}
.head_top>a>img{
	height:.22rem;width: .22rem;float: right;margin-top:.12rem;margin-right: .15rem;  
}
.head_bottom{
	height: .53rem;width: 100%;position: relative;
}
.swiper-container i{
	text-align: center;width: 100%;color: #888888;font-size: .13rem;height: .13rem;
}
.swiper-container img{
	text-align: center;height: .33rem;margin-left: .1rem;
}
</style>