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

.customization >>> .customization-bg {
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
  left: 49.375rem;
}

.customization >>> .customization-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.customization >>> .little-customization {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
