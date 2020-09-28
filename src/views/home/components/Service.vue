<template>
  <div class="service">
    <div class="service-all">
      <p class="service-title">我们的服务</p>
      <p class="service-bg">OUR SERVICE</p>
      <div class="service-icon"></div>
      <p class="little-service">OUR SERVICE</p>
    </div>
    <service-item />
  </div>
</template>

<script>
import ServiceItem from "./ServiceItem";

export default {
  name: "Service",
  components: {
    ServiceItem,
  },
};
</script>

<style scoped>
.service >>> .service-all {
  text-align: center;
  color: #ffffff;
}

.service >>> .service-title {
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

.service >>> .service-bg {
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
 left: 725px;
}

.service >>> .service-icon {
  background-color: #fff;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.service >>> .little-service {
  margin-top: 36px;
  font-size: 12px;
}
</style>
