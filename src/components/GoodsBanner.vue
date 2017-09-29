<template>
    		<div class="hot_shop">
			<i><img src="../../static/images/hot.png" alt=""></i>
			<div class="hot_Carousel">
				<div class="swiper-container">
		       	<div class="swiper-wrapper">
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
		            	</dl>
		            </div>
		            <div class="swiper-slide"><dl>
						<dd><img src="../../static/images/hot_01.jpg" alt=""></dd>
						<dt>韩国WHOO后的</dt>
						<i>￥1235</i>
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
        
    };
  },
  mounted () {
    //   Vue.nextTick(function () {
          var swiper3 = new Swiper('.hot_Carousel>.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3.5,
            slidesPerColumn: 2,
            paginationClickable: true,
            spaceBetween: 0
        });
    //   })
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