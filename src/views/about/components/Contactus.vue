<template>
  <div class="contactus">
    <div class="contactus-all">
      <p class="contactus-title">联系我们</p>
      <p class="contactus-bg">CONTACT US</p>
      <div class="contactus-icon"></div>
      <p class="little-contactus">CONTACT US</p>
    </div>
    <contactus-item />
  </div>
</template>

<script>
import ContactusItem from "./ContactusItem";

export default {
  name: "Contactus",
  components: {
    ContactusItem,
  },
};
</script>

<style scoped>
.contactus >>> .contactus-all {
  text-align: center;
  color: #000;
}

.contactus >>> .contactus-title {
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

.contactus >>> .contactus-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 244, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 705px;
}

.contactus >>> .contactus-icon {
  background: #d1d1d1;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.contactus >>> .little-contactus {
  margin-top: 36px;
  font-size: 12px;
}
</style>
