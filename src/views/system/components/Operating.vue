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

.operating >>> .operating-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(210, 210, 210, 0.2);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 37.8125rem;
}

.operating >>> .operating-icon {
  background: #d1d1d1;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.operating >>> .little-operating {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
