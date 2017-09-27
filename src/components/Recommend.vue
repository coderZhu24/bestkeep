<template>
  <!-- 为你推荐 -->
    <div class="recommend">
			为你推荐
		</div>
</template>

<script>
export default {
  name: "recommend",
  data () {
    return {

    };
  }
}
</script>

<style lang="css" scoped>
  .recommend{
    font-size: 0.16rem;
    color: #404040;
    background: #fff;
    height: .4rem;
    border-bottom: 1px solid #dadada;
    line-height: .4rem;
    margin-top: .16477rem;
    text-align: center;
  }
  .recommend::before{
	  content: " ";
    display: inline-block;
    width: .15938rem;
    height: .15938rem;
    background: url(../../static/images/star_index.png) no-repeat center center/98%;
    position: relative;
    top: 0.02109rem;
    right: 0.02344rem;
    margin-left: 0.03281rem;
}
</style>
