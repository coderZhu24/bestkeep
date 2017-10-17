<template>
    <div id="list">
        <ul class="list">
            <li>默认</li>
            <li>销量</li>
            <li>新品</li>
            <li class="price">
                价格
                <i>
                    <em class="up active"></em>
                    <em class="down"></em>
                </i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "list",
  data () {
    return {

    };
  }
}
</script>

<style lang="css" scoped>
    /*列表*/
    .list{
        background-color: #FFF;
        border-bottom: 1px solid #dadada;
        position: fixed;
        top:1rem;
        width: 100%;
        z-index: 1;
        color: #000;
    }
    .list li{
        color: #404040;
        width: 25%;
        font-size: 0.13rem;
        text-align: center;
        position: relative;
        border-right: 1px solid #F2F2F2;
        margin: 0.058rem 0;
        height: 0.21rem;
        float: left
    }
    .price i{
        position: absolute;
        top: -0.011rem;
        right: 0.14rem;
    }
    .price i em{
        display:block;
        width: 0;
        height: 0;
        border: 0.058rem solid transparent;
        font-style: normal;
    }
    .price i .up{
        border-bottom-color: #E5E5E5;
    }
    .price i .down{
        border-top-color: #E5E5E5;
        margin-top: 0.016rem;
    }
    .active{
        border-bottom-color: #E63E2E;
    }

</style>
