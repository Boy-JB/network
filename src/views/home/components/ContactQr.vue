<template>
  <div class="contact-qr">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image src="#"></el-image>
        <p class="demonstration qr">微信二维码</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactQr",
};
</script>

<style scoped>
.contact-qr >>> .el-image {
  width: 160px;
  height: 160px;
}

.contact-qr >>> .block {
  width: 160px;
  display: inline-block;
}

.contact-qr >>> .demonstration.qr {
  text-align: center;
  margin: 0;
  font-size: 14px;
}
</style>
