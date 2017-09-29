<template>
  <div id="stypes">
      <list></list>
        <div class="content">
            <a href="###" v-for="item in stypeList" :key="item.id">
                <dl>
                    <dt>
                        <i>
                            <img v-bind:src="item.goodsCoverImg">
                        </i>
                    </dt>
                    <dd>
                        <p class="kind">  
                            <img v-bind:src="iconImg">                         
                            {{item.goodsName}}
                        </p>
                        <p class="price">
                            <span>
                                {{item.goodsPrice}}
                                <b>起</b>
                            </span>
                            <s>￥{{item.goodsMarketPrice}}</s>
                        </p>
                    </dd>
                </dl>
            </a>
        </div>
        <more></more>
        
  </div>
</template>

<script>
import List from './../pages/List'
import More from './../pages/More'

export default {
  name: 'stypes',
  data(){
      return{
          iconImg:'../../static/images/qugicon.jpg',
          stypeList:[]
      };
  },
  created() {       
        this.$http.get("../../static/json/diannaobangong.json").then(res => {
            console.log(res)
            this.stypeList = res.body.data.list;
        }, err => {
            console.log(err);
        });
 },
  components:{
      List,
      More
  }
}
</script>

<style>
    html{
        background: #f2f2f2;
        font-size: 100px;
    }
    /*中间部分*/
    .content{
        overflow-x: hidden;
    }
    .content a{
        display: block;
        background: #fff;
        width: 50%;
        float: left;
        border-bottom: 1px solid #dadada;
        position: relative;
        overflow: hidden;
        border-right: 1px solid #dadada;
    }
    dl{
        margin-top: 0rem;
        margin-bottom: 0;
        height:2.343rem;
        overflow: hidden;
    }
    dt{
        display: table;
        text-align: center;		   
        height:1.2rem;
        width:1.2rem;
        margin: 0.14rem auto 0;
    }
    dt i{
        display: table-cell;
        vertical-align: middle;
        border: none; 
        width: 100%;
        position: relative;
    }
    dt i img{
        width: 100%;
        max-height: 5rem;
        vertical-align: middle;
    }
    dd{
        width: 100%;
        text-align: left;
        float: left;
        margin-left: 0;
        padding:0.143rem 0.1rem 0.046rem 0.1rem;
        overflow: hidden;
    }
    dd p{
        height:0.304rem;
        font-size:0.14rem;
        line-height:0.304rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 0.023rem;
    }
    dd .kind img{
        vertical-align: middle;
        width:0.384rem;
        margin-top: -0.035rem;
    }
    dd .price{
        margin-top: -0.046rem;
        margin-left: -0.011rem;
        height:0.304rem;
        font-size:0.14rem;
        line-height:0.304rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .price span{
        margin-left: -0.011rem;
        color: #ff1010;
        font-size:0.14rem;
    }
    .price span b{
        color: #888;
        font-size:0.12rem;
        font-weight: normal;
        margin-left: 0.023rem;
    }
    .price s{
        text-decoration: line-through;
        margin-left: 0.07rem;
        font-size: 0.12rem;
        color: #b2b2b2;
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
