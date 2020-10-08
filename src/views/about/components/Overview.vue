<template>
  <div class="overview">
    <div class="overview-all">
      <p class="overview-title">公司概况</p>
      <p class="overview-bg">OVERVIEW</p>
      <div class="overview-icon"></div>
      <p class="little-overview">OVERVIEW</p>
    </div>
    <overview-item />
  </div>
</template>

<script>
import OverviewItem from "./OverviewItem";

export default {
  name: "Overview",
  components: {
    OverviewItem,
  },
};
</script>

<style scoped>
.overview >>> .overview-all {
  text-align: center;
  color: #000;
}

.overview >>> .overview-title {
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

.overview >>> .overview-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 244, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 48.125rem;
}

.overview >>> .overview-icon {
  background: #d1d1d1;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.overview >>> .little-overview {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
