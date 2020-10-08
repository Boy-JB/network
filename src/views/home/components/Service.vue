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

.service >>> .service-bg {
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

.service >>> .service-icon {
  background-color: #fff;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.service >>> .little-service {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
