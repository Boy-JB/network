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
  name: "Html5Item",
};
</script>

<style scoped>
.html5-item >>> .el-image {
  width: 25rem;
  height: 27.5rem;
  display: inline-block;
  position: absolute;
  top: 3.3125rem;
  left: 30.8125rem;
}

.html5-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.html5-item >>> .demonstration {
  display: inline-block;
  width: 26.6875rem;
  height: 12.5rem;
  color: rgba(170, 170, 170, 1);
  font-size: 1rem;
  position: absolute;
  top: 9.5625rem;
  left: 58.3125rem;
  margin: 0;
  line-height: 1.375rem;
  text-align: left;
}

.html5-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 1.125rem;
}

.html5-item {
  position: relative;
}

.html5-item >>> .title {
  color:rgba(170, 170, 170, 1);
  line-height: 1.875rem;
  font-size: 1rem;
}

.html5-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
  font-size: 1rem;
}

.html5-item >>> .final {
  text-align: center;
  width: 54.125rem;
  height: 25.375rem;
  display: inline-block;
  margin-top: 36.25rem;
}

.html5-item >>> .final-title,
.final-text {
  text-align: left;
  font-size: 1rem;
}

.html5-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.html5-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
}

.html5-item >>> .el-button {
  position: absolute;
  top: 21.25rem;
  left: 58.3125rem;
}
</style>
