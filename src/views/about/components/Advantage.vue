<template>
    <div class="advantage">
      <div class="advantage-all">
        <p class="advantage-title">我们的优势</p>
        <p class="advantage-bg">OUR ADVANTAGE</p>
        <div class="advantage-icon"></div>
        <p class="little-advantage">OUR ADVANTAGE</p>
      </div>
      <advantage-item />
    </div>
</template>

<script>
import AdvantageItem from "./AdvantageItem";

export default {
  name: "Advantage",
  components: {
    AdvantageItem,
  },
};
</script>

<style scoped>
.advantage >>> .advantage-all {
  text-align: center;
  color: #ffffff;
}

.advantage >>> .advantage-title {
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

.advantage >>> .advantage-bg {
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
  left: 40.625rem;
}

.advantage >>> .advantage-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.advantage >>> .little-advantage {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
