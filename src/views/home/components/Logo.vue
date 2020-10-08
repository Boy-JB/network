<template>
<div class="logo">
  <div class="demo-image">
  <div class="block">
    <el-image style="width: 11.875rem; height: 3.1875rem" :src="require('assets/imgs/home/ic_顺凯科技.png')"></el-image>
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
  top: 0.3125rem;
  left: 28.75rem;
}
</style>
