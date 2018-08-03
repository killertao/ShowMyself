<template>
  <div class="container">
    <div class="left">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <router-view class="body">
    </router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  };
</script>
<style lang="less">
  .container {
    display: flex;
    .left {
      flex-basis: 100px;
      background-color: #fff;
      margin-right: 5px;
      p {
        text-align: center;
        width: 180px;
        height: 2.5rem;
        line-height: 2.5rem;
        border-bottom: 1px solid #bbb2b2;
      }
      p.active {
        background-color: rgb(154, 215, 231);
      }
    }
    .body {
      background-color: #fff;
      width: 100%;
    }

  }
</style>


