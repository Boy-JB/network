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

.company >>> .company-bg {
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
  left: 48.75rem;
}

.company >>> .company-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.company >>> .little-company {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
