<template>
	<div class="headtop">
		<div class="head_top">
			<span><img src="../../static/images/logo_01.png" ></span><div><input type="text" placeholder="请输入商品名称"></div>
			<a href="#"><img src="../../static/images/message.png" ></a>
		</div>
	</div>
</template>
    
<script>
export default {
	//这是 首页头部 组件
  	name: "headtop",
  	data () {
    	return {
        
    	};
	},
	
}

</script>
    
<style lang="css" scoped>
    /*头部部分*/
.head_top{
	height: .46rem;width: 100%;border-bottom: 0.01rem solid #cccccc;position:fixed;top: 0;z-index: 2;background-color: white;
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
</style>