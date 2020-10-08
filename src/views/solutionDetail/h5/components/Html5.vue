<template>
  <div class="html5">
     <div class="html5-all">
      <p class="html5-title">全网H5响应式 自适应</p>
      <div class="html5-icon"></div>
      <p class="little-html5">企业建站的终极解决方案。精简代码、追求速度，覆盖全网终端。全方位营销，无论客户是在使用电脑进行搜索，PAD浏览资讯，亦或是在刷朋友圈，您的企业门户都具备推送信息与触达能力。。</p>
    </div>
    <html5-item />
  </div>
</template>

<script>
import Html5Item from "./Html5Item";

export default {
  name: "Html5",
  components: {
    Html5Item,
  },
};
</script>

<style scoped>
.html5 >>> .html5-all {
  text-align: center;
  color: #000000;
}

.html5 >>> .html5-title {
  font-size: 2.25rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99;
  position: relative;
  margin-top: 3.125rem;
}

.html5 >>> .html5-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 48.125rem;
}

.html5 >>> .html5-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.html5 >>> .little-html5 {
  margin-top: 2.25rem;
  font-size: 1rem;
  color: rgba(170, 170, 170, 1);
  width: 45%;
  height: 5.5%;
  display: inline-block;
  text-align: center;
}

.html5 >>> .el-button {
  margin-top: 2.5rem;
  background-color: rgba(32, 48, 245, 1);
  border-color: rgba(32, 48, 245, 1);
}
</style>