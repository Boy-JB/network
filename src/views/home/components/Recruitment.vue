<template>
  <div class="recruitment"> 
    <div class="recruitment-all">
        <p class="recruitment-title">诚聘英才</p>
        <p class="recruitment-bg">TALENTS WANTED</p>
        <div class="recruitment-icon"></div>
        <p class="little-recruitment">TALENTS WANTED</p>
      </div>
      <recruitment-item />
  </div>
</template>

<script>
import RecruitmentItem from "./RecruitmentItem"

export default {
  name: "Recruitment",
  components: {
    RecruitmentItem
  }
}
</script>

<style scoped>
.recruitment >>> .recruitment-all {
  text-align: center;
  color: #ffffff;
}

.recruitment >>> .recruitment-title {
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

.recruitment >>> .recruitment-bg {
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
  left: 640px;
}

.recruitment >>> .recruitment-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.recruitment >>> .little-recruitment {
  margin-top: 36px;
  font-size: 12px;
}
</style>