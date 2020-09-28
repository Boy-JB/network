<template>
  <div class="contact-icon">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('../../../assets/imgs/home/ic_微信.png')"></el-image>
        <el-image :src="require('../../../assets/imgs/home/ic_QQ.png')"></el-image>
        <el-image :src="require('../../../assets/imgs/home/ic_微博.png')"></el-image>
        <el-image :src="require('../../../assets/imgs/home/ic_wifi.png')"></el-image>
        <el-image :src="require('../../../assets/imgs/home/ic_邮件.png')"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactIcon",
};
</script>

<style scoped>
.contact-icon >>> .el-image {
  margin: 34px 0 20px 10px;
}
</style>