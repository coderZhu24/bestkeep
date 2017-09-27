<template>
    <div id="product">
        <header>
            <h2 class="title">
                <a href="###">商品</a>
                <a href="###">详情</a>
                <a href="###">评价</a>
            </h2>
            <div class="list" ></div>
            <div id="showlist" style="display:none;">
                <ul>
                <li><a href="###">
                    <span></span>
                    <strong>首页</strong>
                </a></li>
                <li><a href="###">
                    <span></span>
                    <strong>分类</strong>
                </a></li>
                <li><a href="###">
                    <span></span>
                    <strong>购物车</strong>
                </a></li>
                <li><a href="###">
                    <span></span>
                    <strong>我的</strong>
                </a></li>
                </ul>
            </div>  
        </header>

        <main id="main">
            <div class="imgbox">
                <img src="../../static/images/goods_1496976709841.jpg">
            </div>
            <div class="text">
                <h2>日本CPB肌肤之钥化妆水170ml滋润型保湿露爽肤水 深层滋润 提亮紧致</h2>
                <div class="price">
                    <div class="normal">
                        <strong>￥688.85</strong>
                        <span>市场价￥799.00</span>
                    </div>
                    <div class="vip">
                        <img src="../../static/images/VIP.png">
                        <i>￥658.90</i>
                        <b>节省￥29.95</b>
                        <a href="###">立即成为VIP </a>
                    </div>
                </div>
                <div class="revenue">
                    <span>进口税</span>
                    <b>预计￥81.97</b>
                    <a href="###">
                        <img src=" ../../static/images/question.png">
                        税费信息
                    </a>
                </div>
            </div>
            <!-- 促销 -->
            <div class="sale">
                <p>促</p>
                <ul>
                    <li>
                        <span>满包邮</span>
                        <em>满150包邮</em>
                    </li>
                    <li>
                        <span>满减</span>
                        <em>跨境全场满150减10</em>

                    </li>
                </ul>
                <a href="###">></a>
            </div>
            <!-- 地址 -->
            <div class="address">
                <span>发货地 : </span>
                <em>宁波市</em>
            </div>
            <!-- 退货 -->
            <div class="return">
                <span>支持7天无理由退货</span>
            </div>
            <!-- 评价 -->
            <div class="appraise">
                <a href="###" class="product_appraise"> 
                    商品评价
                    <span class="number_appraise">
                        暂无评价
                        <b>></b>
                    </span>
                </a>
            </div>
            <!-- 商品参数 -->
            <div class="parameter">
                <h2 class="title">商品参数</h2>
                <p>
                    <span>品牌</span>
                    <em>资生堂CPB肌肤之钥</em>
                </p>
                <p>
                    <span>净含量</span>
                    <em>170ml</em>
                </p>
                <p>
                    <span>产地</span>
                    <em>日本</em>
                </p>
            </div>
            <!-- img -->
            <div class="img">
                <img src="../../static/images/goods_1496976709124.jpg">
                <img src="../../static/images/goods_1496976709550.jpg">
                <img src="../../static/images/goods_1496976709882.jpg">
                <img src="../../static/images/goods_1496976709447.jpg">
                <img src="../../static/images/notify1.jpg">
                <img src="../../static/images/goods_1496976709790.jpg">
                <img src="../../static/images/goods_1496976710150.jpg">
                <img src="../../static/images/goods_1496976709986.jpg">
            </div>       
        </main>

        <footer>
            <div class="icon cart">
                <span ></span>
                <i>购物车</i>
            </div>
            <div  class="icon cang">
                <span></span>
                <i>收藏</i>
            </div>
            <a href="###" class="add">加入购物车</a>
            <a href="###">立即购买</a>
        </footer>

        <!-- 客服 -->
        <a href="###" class="help"></a>

        <!-- 返回顶部 -->
        <div class="return_top" style="display:none"></div>

    </div>
</template>
    
<script>
export default {
  name: "product",
  data () {
    return {
        
    };
  }
}

    // var showlist=document.getElementById('showlist');
    // var main=document.getElementById('main');
    // $(".list").on("click",function(){
    //     console.log(111);
    //     if (showlist.style.display=="none") {
    //         showlist.style.display="block";
    //         main.style.marginTop="0.9rem";
    //     }else{
    //         showlist.style.display="none";
    //         main.style.marginTop="0.422rem";
    //     }
    // })

//回到顶部
    // $(window).scroll(function(){
    //    var scroll=$(window).scrollTop();
    //    if(scroll>0){
    //         $(".return_top").css("display","block");
    //    }else{
    //         $(".return_top").css("display","none");
    //    }
    //  })
    // $(".return_top").click(function(){
    //    var scroll=$(window).scrollTop();
    //    $('body,html').animate({scrollTop:0},500);
    // })

</script>
    
<style lang="css" scoped>

    html{
    font-size: 100px;
    background: #f2f2f2;
    }
    header{
        background: #fcfcfc;
        position: fixed;
        left: 0;
        top: 0;
        padding-top:0.0421rem;
        width: 100%;
        z-index: 1001;
        border-bottom: 1px solid #dadada;
        position:fixed;
    }
    header .title{
        height:0.375rem;
        line-height:0.375rem;
        font-size: 0.18rem;
        color: #404040;
        text-align: center;
        font-weight: normal;
    }
    header .title a{
        display: inline-block;
        width:0.515rem;
        color: #888;
    }
    header .list{
        position: absolute;
        right: 0.1rem;
        top: 0.129rem;
        width: 0.21rem;
        height: 0.21rem;
        display: block;
        background: url(../../static/images/bk-sprites.png) no-repeat;
        background-size: 100%;
    }
    header .showlist{
        width: 100%;
        height: 100%;
    }
    header ul{
        width: 100%;
        background: #404042;
        display:flex;
        justify-content: space-around;
        padding: 0.03rem 0;
    }
    header li span{
        background: url(../../static/images/icon_cart1.png) no-repeat;
        background-size: 100%;
        width:0.234rem;
        height: 0.234rem;
        display: block;
        margin: 0 auto;
    }
    header li strong{
        display: block;
        margin: 0 auto;
        color: #fff;
        font-weight: normal;
        font-size: 0.12rem;
        margin-top: 0.03rem;
    }

    main{
        width: 100%;
        margin-top:0.422rem;
        margin-bottom:0.29rem;
    }
    .imgbox img{
        width: 100%;
        vertical-align: middle;
        width:
    }

    .text h2{
        padding: 0.196rem 0.117rem 0;
        font-weight: normal;
        background: #fff;
        font-size:0.16rem; 
    }
    .text .price{
        padding: 0.046rem 0.12rem;
        background: #fff;
        position: relative;
    }
    .price .normal{
        font-size: 0.18rem;
        font-weight: normal;
        color: #ff1010;
    }
    .price .normal strong{
        font-style: normal;
    }
    .price .normal span{
        text-decoration: line-through;
        margin-left: 0.023rem;
        font-size: 0.1rem;
        color: #999;
    }
    .price .vip{
        width:100%;
        padding: 0.046rem 0rem;
        position: relative;
        font-size: 0.14rem;
    }
    .vip img{
        width:0.3rem;
        margin-top: -0.046rem;
        margin-right: 0.07rem;
        vertical-align: middle;
    }
    .vip i{
        color: #ff1010;
        font-style: normal;
    }
    .vip b{
        color: #3a3a3a;
        font-size: 0.1rem;
        margin-left: 0.07rem;
        font-weight: normal;
    }
    .vip a{
        border-radius: 0.02rem;
        border: 1px solid #79cdbb;
        padding: 0 0.035rem;
        color: #79cdbb !important;
        top: -0.035rem;
        position: relative;
        float: right;
        font-size: 0.11rem;
    }

    .revenue{
        padding: 0.046rem 0.12rem;
        background: #fff;
        position: relative;
        font-size: 0.12rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        line-height: 0.21rem;
        color: #888;
    }
    .revenue span{
        display: inline-block;
        width:0.46rem;
    }
    .revenue b{
        font-weight: normal;
    }
    .revenue a{
        float: right;

    }
    .revenue a img{
        display: inline-block;
        width: 0.152rem;
        height: 0.152rem;
        margin-right:0.01rem;
        vertical-align: middle;
    }

    /*促销*/
    .sale{
        padding: 0.07rem 0.11rem;
        background: #fff;
        position: relative;
        font-size: 0.11rem;      
    }
    .sale p{
        position: absolute;
        width: 0.175rem;
        height: 0.175rem;
        background-color: #ff1010;
        color: #fff;
        text-align: center;
        border-radius: 0.023rem;
        margin-top: 0.023rem;
    }
    .sale ul{
        margin-left:0.328rem;
    }
    .sale li{
        height: 0.23rem;
    }
    .sale span{
        border: 1px solid #ff1010;
        color: #ff1010;
        line-height:0.23rem;
        margin-right: 0.046rem;
    }
    .sale em{
        margin-left: 0.023rem;
        font-style: normal;
    }
    .sale>a{
        position: absolute;
        top: 0.164rem;
        right: 0.164rem;
        color: #999;
        font-size:0.2rem;
    }
    /*地址*/
    .address{
        line-height: 0.29rem; 
        margin-top: 0.117rem;
        padding: 0.046rem 0.121rem;
        background: #fff;
        position: relative;
        font-size: 0.14rem;
    }
    .address em{
        font-style: normal;
    }
    /*退货*/
    .return{
        line-height:0.28rem;
        padding: 0.046rem 0.121rem;
        background: #fff;
        position: relative;
        font-size: 0.11rem;
        border-top: 1px solid #f2f2f2;
    
    }
    .return span{
        padding-left:0.234rem;
        background: url(../../static/images/Surport.png) left center no-repeat;
        color: #b2b2b2;
        background-size: contain;
    }

    /*评价*/
    .appraise{  
        margin-top: 0.117rem;     
        border-bottom: 1px solid #e0e0e0;      
        padding: 0.07rem 0.11rem;
        line-height:0.28rem;       
        background-color: #fff;
        position: relative;
    }
    .appraise .product_appraise{
        display:block;
        color: #404040;
        font-size: 0.15rem;
    }
    .appraise .number_appraise{
        float: right;
        font-size: 0.13rem;
        color: #888;
        height:0.28rem;
        line-height:0.28rem;   

    }
    .appraise .number_appraise b{
        float: right;
        font-size: 0.18rem;
        font-weight: normal;
    }
    /*商品参数*/
    .parameter{
        padding: 0.046rem 0;
        margin-top:0.117rem;
        background-color: #fff;
        margin-bottom: 0.117rem;     
    }
    .parameter h2{
        font-size:0.13rem;
        font-weight: normal;
        text-align: left;
        margin-left: 0.117rem;
        padding: 0.046rem 0;
    }
    .parameter p{
        color: #888;
        font-size: 0.12rem;
        padding: 0.023rem 0;
        font-weight: normal;
        text-align: left;
        margin-left: 0.117rem;
        height: 0.203rem;
    }
    .parameter p span{
        display: block;
        float: left;
        width: 30%;
    }
    .parameter p em{
        display: block;
        float: left;
        width: 65%;
        font-style: normal;
    }

    /*图片介绍*/
    .img{
        width: 100%;
    }
    .img img{
        width: 100%;
    }

    /**/
    footer{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 0.49rem;
        overflow: hidden;
        background: #fff;
    }
    .icon{
        position: relative;
        display: block;
        float: left;
        width: 15%;
        height:0.49rem;
        text-align: center;
        font-size: 0.1rem;
        line-height: 0.1rem;
    }
    .icon span{
        position: absolute;
        right: 0.15rem;
        top: 0.06rem;
        display: block;
        width:0.25rem;
        height:0.23rem;
        margin: 0 auto;
    }
    .cart span{
    background: url(../../static/images/icon_cart.png) center no-repeat;
        background-size: 100%;
    }
    .cang span{
    background: url(../../static/images/star_index.png) center no-repeat;
        background-size: 100%;
    }
    .icon i{
        position: absolute;
        white-space: normal;
        width: 100%;
        bottom: 0.058rem;
        right: 0;
        font-size: 0.09rem;
        color: #404040;
        font-style: normal;
        text-align: center;
    }
    footer a{
        float: left;      
        display: block;
        background: #00ba9c;
        color: #fff;
        width: 35%;
        height: 0.49rem;
        text-align: center;
        font-size: 0.18rem;
        line-height:0.49rem;
    }
    footer .add{
        background-color: #5adf99;
    }

    /*客服*/
    .help{
        display: block;
        border-radius: 100%;
        border: 1px solid #f6f6f6;
        width: 0.42rem;
        height: 0.42rem;
        background: url(../../static/images/kefu.png) 0 0 no-repeat;
        background-size: 100% 100%;
        right: 0.2rem;
        bottom:1.68rem;
        position: fixed;
        z-index: 1000;
    }



    /*返回顶部*/
    .return_top{
        width: 0.42rem;
        height: 0.42rem;
        background: url(../../static/images/scoll.png) 0 0 no-repeat;
        background-size: 100% 100%;
        right: 0.2rem;
        bottom:0.8rem;
        position: fixed;
        z-index: 1000;
    }


    @media screen and (max-width:320px){
        html{font-size:85.3334px;}
    }
    @media screen and (min-width:321px) and (max-width:375px){
        html{font-size:100px;}
    }
    @media screen and (min-width:376px) and (max-width:414px){
        html{font-size:110.4px;}
    }
    @media screen and (min-width:415px) and (max-width:568px){
        html{font-size:151.4666px}
    }
    @media screen and (min-width:569px) and (max-width:667px){
        html{font-size:177.8666px}
    }
    @media screen and (min-width:668px) and (max-width:767px){
        html{font-size:196.2666px}
    }
    @media screen and (min-width:768px) and (max-width:1024px){
        html{font-size:200px}
    }
    @media screen and (min-width:1024px) and (max-width:1824px){
        html{font-size:260px}
    }

</style>