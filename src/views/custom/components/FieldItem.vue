<template>
  <div class="field-item">
    <div class="field-top">
        <img
        class="img"
        src="../../../assets/imgs/app/img_全行业领域应用.png"
        alt=""
      /> 
      <img
        class="img"
        src="../../../assets/imgs/app/img_全定制化APP.png"
        alt=""
      />
      <img
        class="img"
        src="../../../assets/imgs/app/img_社交APP应用.png"
        alt=""
      />
    </div>

    <div class="field-bottom">
      <img
        class="img"
        src="../../../assets/imgs/app/img_新闻媒体类应用.png"
        alt=""
      />
      <img
        class="img"
        src="../../../assets/imgs/app/img_电商行业应用.png"
        alt=""
      />
      <img
        class="img"
        src="../../../assets/imgs/app/img_行业门户型应用.png"
        alt=""
      />
    </div>

    <div class="title1">
      <p>全行业多领域应用</p>
      <p class="contant">涵盖所有行业及领域，定制化服务，<br />以满足每个用户需求为核心</p>
    </div>

    <div class="title2">
      <p>全定制化APP</p>
    </div>

    <div class="title3">
      <p>社交APP应用</p>
    </div>
    <div class="title4">
      <p>新闻媒体类应用</p>
    </div>
    <div class="title5">
      <p>电商行业应用</p>
    </div>
    <div class="title6">
      <p>行业门户型应用</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldItem",
};
</script>

<style scoped>
.field-item >>> .img {
  margin: 0 0.25rem;
}

.field-item {
  position: relative;
}

.field-item >>> .field-top,
.field-bottom {
  position: absolute;
}

.field-item >>> .field-top {
  left: 40.875rem;
  top: 3.3125rem;
}

.field-item >>> .field-bottom {
  left: 33.0625rem;
  top: 16.5rem;
}

.field-item >>> .title1, .title2, .title3, .title4, .title5, .title6 {
  color: #fff;
  font-size: 0.875rem;
  margin: 0;
  font-weight: bold;
}


.field-item >>> .title1 {
  position: absolute;
  width: 14.375rem;
  top: 13.125rem;
  left: 41.5625rem;
}

.field-item >>> .title1 p {
  margin-top: 0;
}

.field-item >>> .contant {
  font-size: 0.75rem;
  font-weight: normal;
  margin-top: 0;
}

.field-item >>> .title2 {
  position: absolute;
  top: 13.125rem;
  left: 61.875rem;
}
.field-item >>> .title3 {
  position: absolute;
  top: 13.125rem;
  left: 76.875rem;
}
.field-item >>> .title4 {
  position: absolute;
  top: 26.25rem;
  left: 37.8125rem;
}
.field-item >>> .title5 {
  position: absolute;
  top: 26.25rem;
  left: 53.75rem;
}
.field-item >>> .title6 {
  position: absolute;
  top: 26.25rem;
  left: 68.75rem;
}
</style>
