<template>
  <div class="boutique">
    <div class="boutique-all">
      <p class="boutique-title">推荐案例</p>
      <p class="boutique-bg">CASE</p>
      <div class="boutique-icon"></div>
      <p class="little-boutique">RECOMMENDED CASE</p>
    </div>

    <boutique-item />
  </div>
</template>

<script>
import BoutiqueItem from "./BoutiqueItem";

export default {
  name: "Boutique",
  components: {
    BoutiqueItem,
  },
};
</script>

<style scoped>
.boutique >>> .boutique-all {
  text-align: center;
  color: #000000;
}

.boutique >>> .boutique-title {
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

.boutique >>> .boutique-bg {
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
  left: 865px;
}

.boutique >>> .boutique-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.boutique >>> .little-boutique {
  margin-top: 36px;
  font-size: 12px;
}
</style>
