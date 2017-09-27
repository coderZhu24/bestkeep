<template>
    <div id="cart">
      <div class="header">
        <h2 class="title">
          购物车
          <a href="###" class="edit">编辑</a>
        </h2>
      </div>
      <cart-goods></cart-goods>
      <recommend></recommend>
      <div class="confirm con_view">
      <div class="set_sel">
          <div class="icon">
            <input type="checkbox" class="input_be">
          </div>
        </div>
        <div class="sel_all">全选</div>
        <div class="total">
          <h2 class="main">
            合计：
            <em>
              ￥
              <span>
                0.00
              </span>
            </em>
          </h2>
          <h3>不含海关税和运费</h3>
        </div>
        <div class="sumSubmit">
          <a href="###">
            去结算(<span>0</span>)
          </a>
        </div>
      </div>
      <div class="con_edit con_view hidden">
        <div class="set_sel">
          <div class="icon">
            <input type="checkbox" class="input_be">
          </div>
        </div>
        <div class="sel_all">全选</div>
        <div class="move">
          移至收藏夹
        </div>
        <div class="del">
          删除
        </div>
      </div>
      <stype></stype>
    </div>
</template>

<script>
// 引入购物车内商品部件
import CartGoods from '../components/CartGoods';
// 导入为你推荐部件
import Recommend from '../components/Recommend';
// 导入推荐商品部件
import Stype from '../components/Stype';

export default {
  name: "Cart",
  data () {
    return {

    };
  },
  components: {
    // 将商品部件设为模板
    CartGoods,
    // 将为你推荐部件设为模板
    Recommend,
    // 将推荐商品部件设为模板
    Stype,
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

  /* 总计栏 */

  .hidden{
    display: none;
  }

  .con_view{
    position: fixed;
    bottom: .44rem;
    overflow: hidden;
    height: .49rem;
    width: 100%;
    background-color: #fff;
      border-top: solid 1px #dadada;
      z-index: 998;
  }
  .set_sel{
    float: left;
      margin-top: .12719rem;
      width: .2344rem;
      height: .2344rem;
      line-height: .2344rem;
      overflow: hidden;
      position: relative;
      margin-left: 0.0389rem;
      margin-right: .1rem;
  }

  .set_sel>div{
    width: .14rem;
      height: .14rem;
      border: 1px solid #ccc;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }
  .set_sel .input_be{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .con_view .sel_all{
    height: 100%;
    line-height: .49rem;
    float: left;
  }
  .con_view .total{
    margin-top: .05rem;
    margin-left: .28125rem;
    width: 1.52344rem;
    float: left;
  }
  .con_view .total .main{
    font-size: .15rem;
  }
  .con_view .total .main em{
    font-style: normal;
    color: #f00;
  }
  .con_view .total h3{
    font-size: .14rem;
      color: #404040;
      font-weight: 300;
  }
  .con_view .sumSubmit{
    float: right;
      font-family: '微软雅黑';
      width: 1.1719rem;
      font-size: 0.16rem;
      height: .49rem;
      cursor: pointer;
      line-height: .49rem;
      color: #fff;
      text-align: center;
      background-color: #00ba9c;
      margin-top: -0.02rem;
  }
  .con_view .sumSubmit a{
    color: #fff;
  }
  .con_edit .move{
    margin-top: 0.07031rem;
      height: .32813rem;
      width: 1.17188rem;
      border: 1px solid #ccc;
      margin-left: .46875rem;
      text-align: center;
      line-height: .32813rem;
      font-size: 0.12rem;
      border-radius: 0.03rem;
      color: #404040;
      float: left;
  }
  .con_edit .del{
    float: left;
    margin-left: .17578rem;
      margin-top: 0.07031rem;
      height: .32813rem;
      width: 1.05469rem;
      border: 1px solid #f83030;
      text-align: center;
      line-height: .32813rem;
      font-size: 0.12rem;
      border-radius: 0.03rem;
      background-color: #f83030;
      color: #fff;
  }
</style>
