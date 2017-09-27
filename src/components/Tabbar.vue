<template>
    <div>
       <ul class="footer">
            
                <li><router-link to="/home">
                    <img src="../../static/images/footer_01x.png" alt="">
                    <p>首页</p></router-link>
                </li>
            
			
			    <li><router-link to="/classify">
                    <img src="../../static/images/footer_02.png" alt="">
                    <p>分类</p></router-link>
                </li>
			
            
			    <li><router-link to="/cart">
                    <img src="../../static/images/footer_03.png" alt="">
                    <p>购物车</p></router-link>
                </li>
            
            
			    <li><router-link to="/mine">
                    <img src="../../static/images/footer_04.png" alt="">
                    <p>我的</p></router-link>
                </li>
            
		</ul>
   </div>
</template>
    
<script>
export default {
  name: "tabbar",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    /*footer部分*/
.footer{
	height: .44rem;width: 100%;position: fixed;bottom: 0;z-index: 2;background-color: white;
	display: flex;
}
.footer li{
	height: 100%;flex: 1 0;list-style: none;text-align: center;
}
.footer li img{
	height: .2rem;text-align: center;display: inline-block;margin-top: .04rem;
}
.footer li:nth-of-type(1) p{
	text-align: center;color: #00ba9c;
}
.footer li p{
	text-align: center;
}
</style>