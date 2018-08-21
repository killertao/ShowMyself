<template>
  <div class="container">
      <div class="left">
          <div class="left-content">fdsfasd</div>
      </div>
      <div class="right">
        <div class="right-content">fdsfds</div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  html{
    background:orange ;
  }
  .container {
    display: flex;
    background-color: orange;
    height: 600px;
    width: 100vw;
  }
  .left{
    width: 200px;
    background-color: #fff;
    margin-right: 10px;
  }
  .right{
    background-color: #fff;
    flex-grow: 1;

  }
  .left-content{
    background-color:bisque;
  }
  .right-content{
    background-color:rosybrown;
    height: 100%;
  }
</style>
