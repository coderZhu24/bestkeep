<template>
    <div id="cart">
      <div class="header">
        <h2 class="title">
          购物车
          <a href="###" class="edit">编辑</a>
        </h2>
      </div>
      <cart-goods></cart-goods>
    </div>
</template>

<script>
// 引入购物车内商品部件
import CartGoods from '../components/CartGoods'

export default {
  name: "Cart",
  data () {
    return {

    };
  },
  components: {
    // 将商品部件设为模板
    CartGoods,
  }
}
</script>

<style lang="css" scoped>
  #cart{
    background-color: #f2f2f2;
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
