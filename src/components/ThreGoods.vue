<template>
    <div class="life">
        <div class="life_title"><img src="../../static/images/life_01.png" alt="">品质生活</div>
        <ul>
            <li>
                <dl>
                    <dd><img src="../../static/images/life_01.jpg" alt=""></dd>
                    <dt>日本利秋困不的开</dt>
                    <i>￥169.00</i>
                </dl>
            </li>
            <li>
                <dl>
                    <dd><img src="../../static/images/life_01.jpg" alt=""></dd>
                    <dt>日本利秋困不的开</dt>
                    <i>￥169.00</i>
                </dl>
            </li>
            <li>
                <dl>
                    <dd><img src="../../static/images/life_01.jpg" alt=""></dd>
                    <dt>日本利秋困不的开</dt>
                    <i>￥169.00</i>
                </dl>
            </li>
            <li>
                <dl>
                    <dd><img src="../../static/images/life_01.jpg" alt=""></dd>
                    <dt>日本利秋困不的开</dt>
                    <i>￥169.00</i>
                </dl>
            </li>
            <li>
                <dl>
                    <dd><img src="../../static/images/life_01.jpg" alt=""></dd>
                    <dt>日本利秋困不的开</dt>
                    <i>￥169.00</i>
                </dl>
            </li>
            <li>
                <dl>
                    <dd><img src="../../static/images/life_01.jpg" alt=""></dd>
                    <dt>日本利秋困不的开</dt>
                    <i>￥169.00</i>
                </dl>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    // 这是 三列的物品展示 组件
  name: "showthrgoods",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    /*品质生活*/
.life>.life_title{
	height: .38rem;width: 100%;border-bottom: 0.01rem solid #f2f2f2;line-height: .38rem;text-align: center;
}
.life>.life_title>img{height: .18rem;vertical-align: middle;}

.life>ul{
	height: 3.16rem;width: 100%;display: flex;flex-wrap:wrap;
}
.life>ul>li{
	height: 1.58rem;width: 33.3%;list-style: none;
}
.life>ul>li img{
	height: .925rem;margin-top:.14rem;margin-left:.15rem;
}
.life>ul>li>dl>dt{
	text-indent: .21rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
}
.life>ul>li>dl>i{
	width: 100%;text-align:center;color: #ff1010;
}
</style>