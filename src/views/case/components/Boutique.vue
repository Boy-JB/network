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

.boutique >>> .boutique-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 244, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 41.25rem;
}

.boutique >>> .boutique-icon {
  background: #d1d1d1;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.boutique >>> .little-boutique {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
