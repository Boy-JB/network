<template>
  <div class="want">
    <div class="want-all">
      <p class="want-title">诚聘英才</p>
      <p class="want-bg">TALENTS WANTED</p>
      <div class="want-icon"></div>
      <p class="little-want">TALENTS WANTED</p>
    </div>
    <want-item />
  </div>
</template>

<script>
import WantItem from "./WantItem";

export default {
  name: "Want",
  components: {
    WantItem,
  },
};
</script>

<style scoped>
.want >>> .want-all {
  text-align: center;
  color: #000;
}

.want >>> .want-title {
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

.want >>> .want-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 244, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 645px;
}

.want >>> .want-icon {
  background: #d1d1d1;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.want >>> .little-want {
  margin-top: 36px;
  font-size: 12px;
}
</style>
