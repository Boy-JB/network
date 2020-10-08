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

.recruitment >>> .recruitment-bg {
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
  left: 40rem;
}

.recruitment >>> .recruitment-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.recruitment >>> .little-recruitment {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>