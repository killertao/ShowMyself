<template>
    <div class="container">
        <div class="left">
            <p class="active">
                <router-link to="/information/important">账户信息</router-link>
            </p>
            <p>
                <router-link to="/information/birthday">生日信息</router-link>
            </p>
        </div>
        <router-view class="body">

        </router-view>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.container {
  display: flex;
  margin-top: 5px;
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


