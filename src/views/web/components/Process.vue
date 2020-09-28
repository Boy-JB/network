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

.process >>> .process-bg {
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
  left: 790px;
}

.process >>> .process-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.process >>> .little-process {
  margin-top: 36px;
  font-size: 12px;
}
</style>
