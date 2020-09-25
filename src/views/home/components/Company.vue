<template>
  <div class="company">
    <div class="company-all">
        <p class="company-title">公司动态</p>
        <p class="company-bg">DYNAMIC</p>
        <div class="company-icon"></div>
        <p class="little-company">DYNAMIC</p>
      </div>
    <company-item />
  </div>
</template>

<script>
import CompanyItem from "./CompanyItem"

export default {
  name: "Company",
  components: {
    CompanyItem
  }
}
</script>

<style scoped>
.company >>> .company-all {
  text-align: center;
  color: #ffffff;
}

.company >>> .company-title {
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

.company >>> .company-bg {
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
  left: 780px;
}

.company >>> .company-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.company >>> .little-company {
  margin-top: 36px;
  font-size: 12px;
}
</style>
