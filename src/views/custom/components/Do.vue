<template>
  <div class="do">
    <div class="do-all">
      <p class="do-title">我们能做什么</p>
      <p class="do-bg">WHAT CAN WE DO</p>
      <div class="do-icon"></div>
      <p class="little-do">WHAT CAN WE DO</p>
    </div>
    <do-item />
  </div>
</template>

<script>
import DoItem from "./Doitem";

export default {
  name: "Service",
  components: {
    DoItem,
  },
};
</script>

<style scoped>
.do >>> .do-all {
  text-align: center;
  color: #ffffff;
}

.do >>> .do-title {
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

.do >>> .do-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.2);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
 margin: 0;
 top: 1.25rem;
 left: 38.125rem;
}

.do >>> .do-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.do >>> .little-do {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
