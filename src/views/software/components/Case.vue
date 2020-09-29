<template>
  <div class="case">
    <div class="case-all">
      <p class="case-title">推荐案例</p>
      <p class="case-bg">CASE</p>
      <div class="case-icon"></div>
      <p class="little-case">CASE</p>
    </div>

    <case-item />
  </div>
</template>

<script>
import CaseItem from "./CaseItem";

export default {
  name: "Case",
  components: {
    CaseItem,
  },
};
</script>

<style scoped>
.case >>> .case-all {
  text-align: center;
  color: #fff;
}

.case >>> .case-title {
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

.case >>> .case-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 48, 245, 0.2);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 865px;
}

.case >>> .case-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.case >>> .little-case {
  margin-top: 36px;
  font-size: 12px;
}
</style>
