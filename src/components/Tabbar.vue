<template>

      <ul class="footer">

          <li><router-link to="/home">
              <img src="../assets/footer_01a.png" alt="">
              <p>首页</p></router-link>
          </li>


			    <li><router-link to="/classify">
              <img src="../assets/footer_02.png" alt="">
              <p>分类</p></router-link>
          </li>


			    <li><router-link to="/cart">
              <img src="../assets/footer_03.png" alt="">
              <p>购物车</p></router-link>
          </li>


			    <li><router-link to="/mine">
              <img src="../assets/footer_04.png" alt="">
              <p>我的</p></router-link>
          </li>

		  </ul>

</template>

<script>
export default {
	//这是 底部一级路由 组件
  name: "tabbar",
  data () {
    return {

    };
  },
  mounted () {
	  
  }
}
</script>

<style lang="css" scoped>
    /*footer部分*/
.footer{
	height: .44rem;width: 100%;position: fixed;bottom: 0;z-index: 2;background-color: white;
	display: flex;
  z-index: 9999;
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
