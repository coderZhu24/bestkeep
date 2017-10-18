<template>
  <div id="classify">
    <!-- 头部 -->
    <MyHeader></MyHeader>
    <!-- 内容 -->
    <article>
      <div class="listbox">
        <ul class="list">
          <li class="quality_life">
            <router-link to="/classify/quality_life">品质生活</router-link>
          </li>
          <li class="beauty">
            <router-link to="/classify/beauty">美妆个护</router-link>
          </li>
          <li class="list_cont">
            <a href="###">家用电器</a>
          </li>
          <li class="list_cont">
            <a href="###">食品保健</a>
          </li>
          <li class="list_cont">
            <a href="###">母婴玩具</a>
          </li>
          <li class="list_cont">
            <a href="###">保健养生</a>
          </li>
          <li class="list_cont">
            <a href="###">手机数码</a>
          </li>
          <li class="list_cont">
            <a href="###">电脑办公</a>
          </li>
          <li class="list_cont">
            <a href="###">服饰箱包</a>
          </li>
        </ul>
      </div>
      <router-view></router-view>
      <tab-bar></tab-bar>
    </article>
  </div>
</template>

<script>
// 引入Quality_life组件
import QualityLife from "../components/Quality_life"
// 引入Beauty组件
import Beauty from "../components/Beauty"
import MyHeader from '../components/Header'
import TabBar from '../components/Tabbar'

export default {
  name: "Classify",
  data() {
    return {

    };
  },
  components: {
    QualityLife,
    Beauty,
    MyHeader,
    TabBar,
  },
}
</script>

<style lang="css" scoped>
/* 内容 */

article {
  margin-top: .4688rem;
  width: 100%;
  height: 100%;
}

.listbox {
  position: fixed;
  z-index: 5;
  width: 1.0547rem;
  height: 100%;
  overflow: hidden;
  /*background-color: pink;*/
}

.listbox ul {
  border-right: 1px solid #ddd;
  height: 100%;
  padding-right: .2rem;
  background: #fff;
}

.listbox ul li {
  width: 1.0547rem;
  height: .4875rem;
  overflow: hidden;
}

.listbox ul li a {
  padding: 0 .07rem;
  margin: .14063rem .13594rem;
  display: inline-block;
  margin-left: .15938rem;
  border-radius: .2rem;
  font-size: .14rem;
  /*color: #fff;
	background-color: #00ba9c;*/
}
.router-link-active{
  background-color: #00ba9c;
  border-radius: 50%;
  color: #fff;
}
</style>
