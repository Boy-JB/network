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

.advantage >>> .advantage-bg {
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
  left: 650px;
}

.advantage >>> .advantage-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.advantage >>> .little-advantage {
  margin-top: 36px;
  font-size: 12px;
}
</style>
