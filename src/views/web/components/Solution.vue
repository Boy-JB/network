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
  methods: {

  },
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

.solution >>> .solution-bg {
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
 left: 48.625rem;
}

.solution >>> .solution-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.solution >>> .little-solution {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
