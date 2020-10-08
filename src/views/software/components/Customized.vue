<template>
  <div class="customized">
    <div class="customized-all">
      <p class="customized-title">企业为什么需要定制化软件</p>
      <p class="customized-bg">CUSTOMIZED SOFTWARE</p>
      <div class="customized-icon"></div>
      <p class="little-customized">CUSTOMIZED SOFTWARE</p>
    </div>
    <customized-item />
  </div>
</template>

<script>
import CustomizedItem from "./CustomizedItem";

export default {
  name: "Customized",
  components: {
    CustomizedItem,
  },
};
</script>

<style scoped>
.customized >>> .customized-all {
  text-align: center;
  color: #ffffff;
}

.customized >>> .customized-title {
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

.customized >>> .customized-bg {
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
 left: 33.4375rem;
}

.customized >>> .customized-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.customized >>> .little-customized {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
