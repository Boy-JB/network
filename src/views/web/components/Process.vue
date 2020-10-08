<template>
    <div class="process">
      <div class="process-all">
        <p class="process-title">建站流程</p>
        <p class="process-bg">PROCESS</p>
        <div class="process-icon"></div>
        <p class="little-process">PROCESS</p>
      </div>
      <process-item />
    </div>
</template>

<script>
import ProcessItem from "./ProcessItem";

export default {
  name: "Process",
  components: {
    ProcessItem,
  },
};
</script>

<style scoped>
.process >>> .process-all {
  text-align: center;
  color: #ffffff;
}

.process >>> .process-title {
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

.process >>> .process-bg {
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

.process >>> .process-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.process >>> .little-process {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
