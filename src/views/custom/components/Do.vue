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

.do >>> .do-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.2);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
 margin: 0;
 top: 20px;
 left: 610px;
}

.do >>> .do-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.do >>> .little-do {
  margin-top: 36px;
  font-size: 12px;
}
</style>
