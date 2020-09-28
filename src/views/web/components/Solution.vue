<template>
  <div class="solution">
    <div class="solution-all">
      <p class="solution-title">解决方案</p>
      <p class="solution-bg">SOLUTION</p>
      <div class="solution-icon"></div>
      <p class="little-solution">SOLUTION</p>
    </div>
    <solution-item />
  </div>
</template>

<script>
import SolutionItem from "./SolutionItem";

export default {
  name: "Solution",
  components: {
    SolutionItem,
  },
};
</script>

<style scoped>
.solution >>> .solution-all {
  text-align: center;
  color: #ffffff;
}

.solution >>> .solution-title {
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

.solution >>> .solution-bg {
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
 left: 778px;
}

.solution >>> .solution-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.solution >>> .little-solution {
  margin-top: 36px;
  font-size: 12px;
}
</style>
