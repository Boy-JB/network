<template>
  <div class="case">
    <div class="case-all">
      <p class="case-title">精品案例</p>
      <p class="case-bg">BOUTIQUE CASE</p>
      <div class="case-icon"></div>
      <p class="little-case">BOUTIQUE CASE</p>
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
  color: #000000;
}

.case >>> .case-title {
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

.case >>> .case-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 42.5rem;
}

.case >>> .case-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.case >>> .little-case {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
