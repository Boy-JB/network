<template>
    <div class="customization">
      <div class="customization-all">
        <p class="customization-title">建站流程</p>
        <p class="customization-bg">PROCESS</p>
        <div class="customization-icon"></div>
        <p class="little-customization">PROCESS</p>
      </div>
      <customization-item />
    </div>
</template>

<script>
import CustomizationItem from "./CustomizationItem";

export default {
  name: "Customization",
  components: {
    CustomizationItem,
  },
};
</script>

<style scoped>
.customization >>> .customization-all {
  text-align: center;
  color: #ffffff;
}

.customization >>> .customization-title {
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

.customization >>> .customization-bg {
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

.customization >>> .customization-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.customization >>> .little-customization {
  margin-top: 36px;
  font-size: 12px;
}
</style>
