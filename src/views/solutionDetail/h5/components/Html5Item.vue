<template>
  <div class="html5-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration">
          <span class="title">全网H5响应式 自适应网站建设技术要点：</span>
          <br />
          <br />
          <span class="content"
            >● 扁平化设计效果、高端大气布局<br />
            ● HTML5+CSS3前端布局<br />
            ● PHP+MySQL系统架设<br />
            ● LIUNX服务器强力支持<br />
            ● 同步兼容电脑、手机、IPAD等多种终端<br />
          </span>
        </p>
        <el-button type="primary" round>立刻获取定制方案</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  naem: "Html5Item",
};
</script>

<style scoped>
.html5-item >>> .el-image {
  width: 400px;
  height: 440px;
  display: inline-block;
  position: absolute;
  top: 53px;
  left: 493px;
}

.html5-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.html5-item >>> .demonstration {
  display: inline-block;
  width: 427px;
  height: 200px;
  color: rgba(170, 170, 170, 1);
  font-size: 16px;
  position: absolute;
  top: 153px;
  left: 933px;
  margin: 0;
  line-height: 22px;
  text-align: left;
}

.html5-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
}

.html5-item {
  position: relative;
}

.html5-item >>> .title {
  color:rgba(170, 170, 170, 1);
  line-height: 30px;
  font-size: 16px;
}

.html5-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 30px;
  font-size: 16px;
}

.html5-item >>> .final {
  text-align: center;
  width: 866px;
  height: 406px;
  display: inline-block;
  margin-top: 580px;
}

.html5-item >>> .final-title,
.final-text {
  text-align: left;
  font-size: 16px;
}

.html5-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.html5-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 30px;
}

.html5-item >>> .el-button {
  position: absolute;
  top: 340px;
  left: 933px;
}
</style>
