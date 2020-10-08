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

.development >>> .development-bg {
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

.development >>> .development-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.development >>> .little-development {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
