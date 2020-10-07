<template>
  <div class="mobile-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration">
          <span class="title">微信成为生活中日益密切相关的工具。<br /> 移动终端将成为未来信息查询阅读主要必备，<br />移动微站应运而生。</span>
          <br />
          <br />
          <span class="content"
            >我们公司设计的移动微站有如下特点：<br /><br/>
            ● 高端大气、扁平化设计视觉 <br />
            ● HTML5+CSS3新技术制作前端 <br />
            ● 采用PHP+MYSQL平台建设 <br />
            ● 运行于LIUNX服务器系统上面 <br />
            ● 高速、稳定、安全、可靠是我们的责任<br />
          </span>
        </p>
        <el-button type="primary" round>立刻获取定制方案</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  naem: "MobileItem",
};
</script>

<style scoped>
.mobile-item >>> .el-image {
  width: 400px;
  height: 440px;
  display: inline-block;
  position: absolute;
  top: 53px;
  left: 493px;
}

.mobile-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.mobile-item >>> .demonstration {
  display: inline-block;
  width: 427px;
  height: 200px;
  color: rgba(170, 170, 170, 1);
  font-size: 16px;
  position: absolute;
  top: 60px;
  left: 933px;
  margin: 0;
  line-height: 22px;
  text-align: left;
}

.mobile-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
}

.mobile-item {
  position: relative;
}

.mobile-item >>> .title {
  color:#000;
  line-height: 30px;
  font-size: 16px;
}

.mobile-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 30px;
  font-size: 16px;
}

.mobile-item >>> .final {
  text-align: center;
  width: 866px;
  height: 406px;
  display: inline-block;
  margin-top: 580px;
}

.mobile-item >>> .final-title,
.final-text {
  text-align: left;
  font-size: 16px;
}

.mobile-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.mobile-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 30px;
}

.mobile-item >>> .el-button {
  position: absolute;
  top: 360px;
  left: 933px;
}
</style>
