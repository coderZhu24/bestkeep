<template>
    <!-- 内容 -->
    <article>
      <div class="blank1"></div>
      <div class="cart_cont">
        <div class="shoper">
          <div class="sel">
            <div class="icon">
              <input type="checkbox" class="input_be">
            </div>
          </div>
          <span class="goods_add">BESTKEEP自建仓发货</span>
        </div>
        <div class="shoper_cont">
          <div class="cart_goods">
            <div class="sel goods_sel">
              <div class="icon">
                <input type="checkbox" class="input_be">
              </div>
            </div>
            <div class="imgg">
              <a href="###">
                <img src="../../static/goods.jpg" class="full">
              </a>
            </div>
            <div class="text">
              <div class="title">
                <a href="###">唐布拉纯天然百花黑蜂蜜5...</a>
              </div>
              <div class="menu clear">
                <div class="price">
                  <span>￥64.61</span>
                </div>
                <div class="num clear">
                  <span class="com ">-</span>
                  <span class="inp_num add">
                    <input type="text" name="" value="1">
                  </span>
                  <span class="com less">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <recommend></recommend>
    </article>

</template>

<script>
// 导入为你推荐部件
import Recommend from './Recommend';

export default {
  name: "CartGoods",
  data () {
    return {

    };
  },
  componends: {
    // 将为你推荐部件设为模板
    Recommend
  }
}
</script>

<style lang="css" scoped>
  /* 内容 */
article{
	margin-top: .4688rem;
	width: 100%;
	height: 100%;
}
article .blank1{
	height: .08rem;
	width: 100%;
	/*background: pink;*/
}
article .cart_cont{
	margin-bottom: .03881rem;
}
article .cart_cont .shoper{
	background-color: #fbfbfb;
    font-size: .14rem;
    line-height: .358rem;
    height: .3858rem;
    width: 100%;
    display: block;
}
article .cart_cont .shoper_cont{
	position: relative;
    background-color: #fff;
    width: 100%;
    height: 1.28906rem;
}
article .cart_cont .sel{
	float: left;
    margin-top: .0828rem;
    width: .2344rem;
    height: .2344rem;
    line-height: .2344rem;
    overflow: hidden;
    position: relative;
    margin-left: 0.0389rem;
}

.bc{
    background:url(../../static/icon.png) no-repeat;
	background-size: 100% 100%;
}
article .cart_cont .sel>div{
	width: .14rem;
    height: .14rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
article .cart_cont .sel .input_be{
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
}
article .cart_cont .shoper .goods_add{
	margin-top: 0.01172rem;
    font-size: 0.14rem;
    /*float: left;*/
    font-family: '微软雅黑';
    color: #404040;
    line-height: .3858rem;
}
article .cart_cont .cart_goods{
    height: 100%;
    width: 100%;
    float: left;
    background-color: #fff;
}
article .cart_cont .goods_sel{
	margin-top: .52734rem;
    float: left;
    margin-right: 0.02930rem;
}
article .cart_cont .cart_goods .imgg{
	margin-right: 0.04688rem;
    margin-top: 0.12891rem;
    float: left;
}
.cart_cont .cart_goods .imgg a{
	position: relative;
	display: table;
	text-align: center;
	width: .98rem;
	height: .98rem;
}
.cart_cont .cart_goods .text{
	position: relative;
    width: 2.42rem;
    height: 1.05469rem;
    margin-top: .14063rem;
	float: left;
}
.cart_cont .cart_goods .text .title{
	font-family: '微软雅黑';
    font-size: .14rem;
    font-weight: bold;
    text-align: left;
    margin-left: 0.05156rem;
}
.cart_cont .cart_goods .text .title a{
	font-weight: 300;
    color: #404040;
    font-size: .14rem;
    /*max-height: 1.36rem;*/
    line-height: 1.2;
    display: inherit;
}
.cart_cont .cart_goods .text .menu{
	position: absolute;
    bottom: 0;
}
.cart_cont .cart_goods .text .menu .price{
	float: left;
	color: #fe0101;
	width: 1.05469rem;
	font-size: 0.14rem;
	text-align: left;
	margin-left: 0.02344rem;
}
.cart_cont .cart_goods .text .menu .num{
	width: 1.00781rem;
    float: right;
    font-size: .16rem;
    height: .23438rem;
    text-align: center;
    line-height: .20438rem;
    color: #939292;
    position: relative;
    z-index: 1;
    right: -0.23906rem;
    bottom: 0;
}
.cart_cont .cart_goods .text .menu .num .com{
	position: absolute;
    top: 0;
    display: block;
    text-align: center;
    width: .25781rem;
    background-color: #fff;
    height: .23438rem;
    line-height: .23438rem;
    font-size: 0.16rem;
    font-weight: 400;
    color: #939292;
    border: solid #ccc 1px;
}
.cart_cont .cart_goods .text .menu .num .com:first-of-type{
	left: 0;
}
.cart_cont .cart_goods .text .menu .num .com:last-of-type{
	right: .21438rem;
}
.cart_cont .cart_goods .text .menu .num .inp_num{
	line-height: .23438rem;
    position: absolute;
    display: block;
    float: left;
    width: .25781rem;
    height: .23438rem;
    left: .25781rem;
}
.cart_cont .cart_goods .text .menu .num input{
	position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    display: block;
    padding: 0;
    margin: 0;
    text-align: center;
    line-height: .23438rem;
    font-size: 0.16rem;
    color: #939292;
    border: solid #ccc 1px;
}
</style>
