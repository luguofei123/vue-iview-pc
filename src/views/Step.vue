<template>
  <div class="stepBox">
    <span class="step1">
      <span v-bind:class="{ success: isActive1, icon : !isActive1 }">提交入住申请</span>
    </span>
    <span class="step2">
      <span v-bind:class="{ success: isActive2, icon : !isActive2 }">资质审批</span>
    </span>
    <span class="step3">
      <span v-bind:class="{ success: isActive3, icon : !isActive3 }">申请成功</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'step',
  data () {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false
    }
  }
}
</script>
<style scoped lang="scss">
  .stepBox{
    position: relative;
    width: 766px;
    margin: 10px auto;
    span{
      position: absolute;
      display: inline-block;
      width: 254px;
      height: 32px;
      span{
        display: inline-block;
        line-height: 32px;
      }
    }
    .step1{
      background-image: url("../assets/img/step1.png");
      background-repeat: no-repeat;
      .success{
        padding-left: 50px;
        background-image: url("../assets/img/carry out.svg");
        background-repeat: no-repeat;
        background-position: 20px 4px;
        color: blue;
      }
      .icon{
        padding-left: 20px;
        color: blue;
        &::before{
          content: '1';
          color: blue;
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
          width: 22px;
          height: 22px;
          text-align: center;
          line-height: 22px;
          border-radius: 11px;
          background: white;
          margin-right: 5px;
        }
      }
    }
    .step2{
      left:242px;
      background-image: url("../assets/img/step2.png");
      background-repeat: no-repeat;
      .success{
        padding-left: 60px;
        background-image: url("../assets/img/carry out.svg");
        background-repeat: no-repeat;
        background-position: 30px 4px;
        color: white;
      }
      .icon{
        padding-left: 30px;
        color: white;
        &::before{
          content: '2';
          color: blue;
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
          width: 22px;
          height: 22px;
          text-align: center;
          line-height: 22px;
          border-radius: 11px;
          background: white;
          margin-right: 5px;
        }
      }
    }
    .step3{
      left:484px;
      background-image: url("../assets/img/step3.png");
      background-repeat: no-repeat;
      .success{
        padding-left: 60px;
        background-image: url("../assets/img/carry out.svg");
        background-repeat: no-repeat;
        background-position: 30px 4px;
        color: #313131;
      }
      .icon{
        padding-left: 30px;
        color: #313131;
        &::before{
          content: '3';
          color: #313131;
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
          width: 22px;
          height: 22px;
          text-align: center;
          line-height: 22px;
          border-radius: 11px;
          background: white;
          margin-right: 5px;
        }
      }
    }
  }
</style>
