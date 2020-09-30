<template>
  <div class="operating">
    <div class="operating-all">
      <p class="operating-title">应用系统</p>
      <p class="operating-bg">OPERATING SYSTEM</p>
      <div class="operating-icon"></div>
      <p class="little-operating">OPERATING SYSTEM</p>
    </div>
    <operating-item />
  </div>
</template>

<script>
import OperatingItem from "./OperatingItem";

export default {
  name: "Operating",
  components: {
    OperatingItem,
  },
};
</script>

<style scoped>
.operating >>> .operating-all {
  text-align: center;
  color: #000;
}

.operating >>> .operating-title {
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

.operating >>> .operating-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(210, 210, 210, 0.2);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 605px;
}

.operating >>> .operating-icon {
  background: #d1d1d1;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.operating >>> .little-operating {
  margin-top: 36px;
  font-size: 12px;
}
</style>
