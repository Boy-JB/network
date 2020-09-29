<template>
  <div class="boutique">
    <div class="boutique-all">
      <p class="boutique-title">精品案例</p>
      <p class="boutique-bg">BOUTIQUE CASE</p>
      <div class="boutique-icon"></div>
      <p class="little-boutique">BOUTIQUE CASE</p>
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
  color: #000;
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
  color: rgba(210, 210, 210, 0.2);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 660px;
}

.boutique >>> .boutique-icon {
  background-color: #fff;
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
