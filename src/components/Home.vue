<template>
  <div class=".header">
		<h2 class="title">
			购物车
			<a href="###" class="edit">编辑</a>
		</h2>
	</div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {

    };
  }
}
</script>

<style lang="css" scoped>
    a{
      text-decoration: none;
      color: #262b2f;
    }
    li{
      list-style: none;
    }
    img{
      vertical-align: top;
    }
    .full{
      width: 100%;
      height: 100%;
    }
    .clear::after{
      content: "";
      display: block;
      clear: both;
      height: 0;
    }
    /* 头部 */
    .header{
      height: .35156rem;
      width: 100%;
      background-color: #fcfcfc;
      position: fixed;
      top: 0;
      left: 0;
      padding: 0.04219rem 0;
      z-index: 1001;
      border-bottom: 1px solid #dadada;
    }
    .header h2{
      height: .375rem;
      line-height: .375rem;
      font-size: .18rem;
      color: #404040;
      text-align: center;
      font-weight: normal;
    }
    .header h2 a{
      position: absolute;
      color: #888;
      right: .12938rem;
      font-size: .14rem;
    }
</style>
