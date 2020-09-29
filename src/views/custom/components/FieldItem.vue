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
  margin: 0 4px;
}

.field-item {
  position: relative;
}

.field-item >>> .field-top,
.field-bottom {
  position: absolute;
}

.field-item >>> .field-top {
  left: 654px;
  top: 53px;
}

.field-item >>> .field-bottom {
  left: 529px;
  top: 264px;
}

.field-item >>> .title1, .title2, .title3, .title4, .title5, .title6 {
  color: #fff;
  font-size: 14px;
  margin: 0;
  font-weight: bold;
}


.field-item >>> .title1 {
  position: absolute;
  width: 230px;
  top: 210px;
  left: 665px;
}

.field-item >>> .title1 p {
  margin-top: 0;
}

.field-item >>> .contant {
  font-size: 12px;
  font-weight: normal;
  margin-top: 0;
}

.field-item >>> .title2 {
  position: absolute;
  top: 210px;
  left: 990px;
}
.field-item >>> .title3 {
  position: absolute;
  top: 210px;
  left: 1230px;
}
.field-item >>> .title4 {
  position: absolute;
  top: 420px;
  left: 605px;
}
.field-item >>> .title5 {
  position: absolute;
  top: 420px;
  left: 860px;
}
.field-item >>> .title6 {
  position: absolute;
  top: 420px;
  left: 1100px;
}
</style>
