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

.want >>> .want-bg {
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
  left: 40.3125rem;
}

.want >>> .want-icon {
  background: #d1d1d1;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.want >>> .little-want {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
