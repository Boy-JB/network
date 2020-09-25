<template>
  <div class="about">
     <div class="about-all">
      <p class="about-title">关于我们</p>
      <p class="about-bg">ABOUT US</p>
      <div class="about-icon"></div>
      <p class="little-about">ABOUT US</p>
    </div>
    <about-item />
  </div>
</template>

<script>
import AboutItem from "./AboutItem";

export default {
  name: "About",
  components: {
    AboutItem,
  },
};
</script>

<style scoped>
.about >>> .about-all {
  text-align: center;
  color: #000000;
}

.about >>> .about-title {
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

.about >>> .about-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 770px;
}

.about >>> .about-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.about >>> .little-about {
  margin-top: 36px;
  font-size: 12px;
}
</style>