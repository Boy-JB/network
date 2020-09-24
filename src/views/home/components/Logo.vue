<template>
<div class="logo">
  <div class="demo-image">
  <div class="block">
    <el-image style="width: 190px; height: 51px" :src="require('assets/imgs/home/ic_顺凯科技.png')"></el-image>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "Logo",
}
</script>

<style scoped>
.logo >>> .el-image {
  position: absolute;
  top: 5px;
  left: 460px;
}
</style>
