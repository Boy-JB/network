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

.type >>> .type-bg {
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
  left: 49.0625rem;
}

.type >>> .type-icon {
  background-color: #ddd;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.type >>> .little-type {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
