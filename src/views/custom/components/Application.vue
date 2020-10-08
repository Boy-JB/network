<template>
    <div class="application">
      <div class="application-all">
        <p class="application-title">我们的优势</p>
        <p class="application-bg">ADVANTAGE</p>
        <div class="application-icon"></div>
        <p class="little-application">ADVANTAGE</p>
      </div>
      <application-item />
      <div class="application-footer"><p>我们已为多家知名企业提供了相应的技术解决方案，积累了丰富的经验和成功案例，通过将设计创新、产品研发与已有的传统标准流程相结合的方式，成功帮助客户部署了移动应用并在市场拓展、品牌传播方面取得了巨大成效。</p></div>
    </div>
</template>

<script>
import ApplicationItem from "./ApplicationItem";

export default {
  name: "Application",
  components: {
    ApplicationItem,
  },
};
</script>

<style scoped>
.application >>> .application-all {
  text-align: center;
  color: #ffffff;
}

.application >>> .application-title {
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

.application >>> .application-bg {
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
  left: 45.3125rem;
}

.application >>> .application-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.application >>> .little-application {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}

.application >>> .application-footer {
  display: inline-block;
  width: 45.3125rem;
  margin-top: 2.5rem;
}
</style>
