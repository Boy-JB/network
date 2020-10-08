<template>
  <div class="customized-item">
    <el-row>
      <el-card :body-style="{ padding: '0rem' }">
        <div style="padding: 2.3125rem 4.375rem;">
          <p class="content">
            每个企业都有自己独特的管理模式和工作流程， <br />
            而目前市面上所有的管理系统，如OA、ERP、CRM、HRM、进销存等系统 <br />
            大多数都是通用软件，这种类型软件很难满足企业个性化的需求。 为了满足企业个性化业务需求， <br />
            让软件来适合企业管理方式，而不是让企业去适应软件的功能而使用， <br />
            所以根据企业个性化管理流程和方式，量身定制一套属于自己公司管理模式的软件， <br />
            已经是每个企业信息化管理实施的标准 <br />
            <br />
            我们为企业提供量身定制软件开发服务， <br />
            采取专业的定制开发流程来满足各大企业软件产品的不同需求。
          </p>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CustomizedItem",
};
</script>

<style scoped>
.customized-item >>> .bottom {
  margin-top: 0.8125rem;
  line-height: 0.75rem;
}

.customized-item >>> .image1 {
  width: 5rem;
  height: 5rem;
  display: inline-block;
  border: dashed 0.0625rem #000;
  margin-top: 2.5rem;
}

.customized-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.customized-item >>> .clearfix:after {
  clear: both;
}

.customized-item >>> .el-col-offset-5 {
  margin-left: 0;
  /* margin-top: 13.75rem; */
}
.customized-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 37.5rem;
  height: 28.125rem;
  display: inline-block;
}

.customized-item >>> .el-row {
  margin: 0 25rem 5rem 25rem;
  /* display: inline-block; */
}

.customized-item >>> .el-card {
  margin-top: 2.5625rem;
  border-radius: 1.25rem;
}

.customized-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 1rem;
  font-weight: 900;
  color: #000000;
  margin-top: 0.5rem;
}

.customized-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 0.875rem;
  color: #000000;
  font-weight: 400;
  margin-top: 0.9375rem;
}

.customized-item >>> .content {
  font-family: "MicrosoftYaHei";
  font-size: 0.875rem;
  color: #aaaaaa;
  /* margin-top: 2.5rem; */
  line-height: 1.875rem;
}
</style>
