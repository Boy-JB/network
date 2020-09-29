<template>
  <div class="type">
    <div class="type-all">
      <p class="type-title">定制开发类型</p>
      <p class="type-bg">TYPES OF</p>
      <div class="type-icon"></div>
      <p class="little-type">TYPES OF</p>
    </div>
    <type-item />
  </div>
</template>

<script>
import TypeItem from "./TypeItem";

export default {
  name: "Type",
  components: {
    TypeItem,
  },
};
</script>

<style scoped>
.type >>> .type-all {
  text-align: center;
  color: #000000;
}

.type >>> .type-title {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99;
  position: relative;
  margin-top: 50px;
}

.type >>> .type-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 785px;
}

.type >>> .type-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.type >>> .little-type {
  margin-top: 36px;
  font-size: 12px;
}
</style>
