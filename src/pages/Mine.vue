<template>
    <div id="mine">
			<div class="mine-title">
				<h2>我的</h2>
				<a href=""><span></span></a>
				<a href=""><i></i></a>
			</div>
			<div class="mine-l">
				<dl>
					<dt class="user-pic">
						<a href="" class="user-info"></a>
					</dt>
					
					<a href=""><dd>登录/注册</dd></a>
					<span class="mine-l-sp-novip"></span>
				</dl>
			</div>
			<div class="myorder divbot">
				<div class="options go">
					<a href="##">
						<div class="op-tit">
							<div>
								<img src="../../static/images/order.png" alt="" class="fullimg">
							</div>
							<span>我的订单</span>
						</div>
						<span>查看全部订单</span>
					</a>
				</div>
				<div class="myorder-ops">
					<ul>
						<a href="">
							<li>
								<div class="mo-ops-pic"><img src="../../static/images/payment.png" alt="" class="fullimg"></div>
								<p>待付款</p>
							</li>
						</a>
						<a href="">
							<li>
								<div class="mo-ops-pic"><img src="../../static/images/delivery.png" alt="" class="fullimg"></div>
								<p>待发货</p>
							</li>
						</a>
						<a href="">
							<li>
								<div class="mo-ops-pic"><img src="../../static/images/take_goods.png" alt="" class="fullimg"></div>
								<p>待收货</p>
							</li>
						</a>
						<a href="">
							<li>
								<div class="mo-ops-pic"><img src="../../static/images/evaluate.png" alt="" class="fullimg"></div>
								<p>待评价</p>
							</li>
						</a>
						<a href="">
							<li>
								<div class="mo-ops-pic"><img src="../../static/images/change.png" alt="" class="fullimg"></div>
								<p>退换货</p>
							</li>
						</a>
					</ul>
				</div>
			</div>
			<div class="options go divbot">
				<a href="##">
					<div class="op-tit">
						<div>
							<img src="../../static/images/martImg.png" alt="" class="fullimg">
						</div>
						<span>小店订单</span>
					</div>
					<span></span>
				</a>
			</div>

			<div class="options go">
				<a href="##">
					<div class="op-tit">
						<div>
							<img src="../../static/images/card.png" alt="" class="fullimg">
						</div>
						<span>我的会员卡</span>
					</div>
					<span></span>
				</a>
			</div>
			<div class="options go">
				<a href="##">
					<div class="op-tit">
						<div>
							<img src="../../static/images/user.png" alt="" class="fullimg">
						</div>
						<span>我的账户</span>
					</div>
					<span></span>
				</a>
			</div>
			<div class="options go">
				<a href="##">
					<div class="op-tit">
						<div>
							<img src="../../static/images/realname.png" alt="" class="fullimg">
						</div>
						<span>实名认证</span>
					</div>
					<span>未认证</span>
				</a>
			</div>
			<div class="options go divbot">
				<a href="##">
					<div class="op-tit">
						<div>
							<img src="../../static/images/gouwu.png" alt="" class="fullimg">
						</div>
						<span>我的优惠券</span>
					</div>
					<span></span>
				</a>
			</div>
			<div class="options go">
				<a href="##">
					<div class="op-tit">
						<div>
							<img src="../../static/images/start.png" alt="" class="fullimg">
						</div>
						<span>我的收藏</span>
					</div>
					<span></span>
				</a>
			</div>
			<div class="options go">
				<a href="##">
					<div class="op-tit">
						<div>
							<img src="../../static/images/add.png" alt="" class="fullimg">
						</div>
						<span>收货地址</span>
					</div>
					<span></span>
				</a>
			</div>
			<div class="footer-size"></div>
            <tab-bar></tab-bar>
    </div>
</template>
    
<script>
import TabBar from '../components/Tabbar'

export default {
  name: "mine",
  data () {
    return {
        
    };
  },
  components: {
      TabBar
  }
}
</script>
    
<style lang="css" scoped>
  *{padding: 0;margin: 0;}
	a{text-decoration: none;}
	li{list-style: none;}
	

	/*我的 头部*/
	.mine-title{
		height: .4359rem;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

	}
	.mine-title h2{

		text-align: center;
		line-height: .4359rem;
		font-size: .18rem;
		color: #404040;
		font-weight: normal;
	}
	.mine-title span{
		position: absolute;
		right: .11rem;
		top: .14rem;
		height: .21rem;
		width: .21rem;
		background: url(../../static/images/Shape.png) no-repeat 0 0/100% 100%;
	}
	.mine-title i{
		position: absolute;
		top: .14rem;
		right: .48rem;
		height: .21rem;
		width: .21rem;
		background: url(../../static/images/Slice.png) no-repeat 0 0/100% 100%;
	}

	/*我的 登录注册部分*/
	.mine-l{
		height: 1.88rem;
		width: 100%;
		background: linear-gradient(to right,#6be7e7,#5eebd0,#50efb6);
		padding-top: .1px;
	}
	.mine-l dl{
		margin-top: .61rem;
		text-align: center;
	}
	.user-pic{
		width: .6rem;
		height: .6rem;
		border-radius: 50%;
		background: url(../../static/images/default_B.jpg) no-repeat 0 0/100% 100%;
		margin: 0 auto;
		padding-top: .1px;
	}

	.mine-l dd{
		font-size: .14rem;
		color: #fff;
		margin-top: .15rem;
		line-height: .14rem;
	}
	

	.user-info{
		display: none;
		width: .23rem;
		height: .23rem;
		background: url(../../static/images/but_compile.png) no-repeat 0 0/100% 100%;
		margin: .22rem 0 0 .73rem;
	}
	/*普通用户与vip图标*/
	.mine-l-sp-novip{
		display: block;
		height: .1523rem;
		width: .48rem;
		background: url(../../static/images/vip.png) no-repeat 0 0/100% 200%;
		margin: .08rem auto;
	}
	.mine-l-sp-vip{
		display: none;
		height: .1523rem;
		width: .48rem;
		background: url(../../static/images/vip.png) no-repeat 0 -0.15rem/100% 200%;
		margin: .08rem auto;
	}

	/*我的 我的订单部分*/
	/* .myorder{
		
		
	} */

	/*这里是选项，可复用*/
	.options{
		height: .45rem;
		border-bottom: 1px solid #f2f2f2;
		line-height: .45rem;
	}
	.op-tit{
		display: inline-block;
		height: .45rem;
		line-height: .45rem;
	}
	.op-tit div{
		display: inline-block;
		height: .22rem;
		width: .22rem;
		margin: .12rem .08rem 0 .12rem;
	}
	.op-tit span{
		font-size: .15rem;
		color: #404040;
		float: right;
	}

	.options>a>span{
		float: right;
		font-size: .13rem;
		color: #888;
	}
	.go:before{
		content: "";
		float: right;
		height: .1rem;
		width: .1rem;
		border-top: 1px solid #8f8f8f;
		border-right: 1px solid #8f8f8f;
		transform: rotate(45deg);
		margin: .18rem .12rem 0 .03rem;
	}

	/*订单分类部分*/
	.myorder-ops{font-size: 0;}
	.myorder-ops li{
		display: inline-block;
		width: 20%;
		height: .73rem;
		text-align: center;
	}
	.mo-ops-pic{
		height: .22rem;
		width: .28rem;
		margin: 0 auto;
		margin-top: .16rem;
	}
	.myorder-ops p{
		font-size: .13rem;
		margin-top: .04rem;
		color: #888;
	}



	/*一些通用的样式*/
	.fullimg{
		width: 100%;
		height: 100%;
		vertical-align: top;
	}
	.divbot{
		border-bottom: .1rem solid #f2f2f2;
	}


	/*页脚占位*/
	.footer-size{
		width: 100%;
		height: .64rem;
		background-color: #f2f2f2;
	}

</style>