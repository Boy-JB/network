<template>
    <div class="development">
      <div class="development-all">
        <p class="development-title">建站流程</p>
        <p class="development-bg">PROCESS</p>
        <div class="development-icon"></div>
        <p class="little-development">PROCESS</p>
      </div>
      <development-item />
    </div>
</template>

<script>
import DevelopmentItem from "./DevelopmentItem";

export default {
  name: "Development",
  components: {
    DevelopmentItem,
  },
};
</script>

<style scoped>
.development >>> .development-all {
  text-align: center;
  color: #ffffff;
}

.development >>> .development-title {
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

.development >>> .development-bg {
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
  left: 790px;
}

.development >>> .development-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.development >>> .little-development {
  margin-top: 36px;
  font-size: 12px;
}
</style>
