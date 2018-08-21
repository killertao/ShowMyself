<template>
  <div class="container">
      <div class="left">
          <menu-base :menus="menus" height="40px"  :vertical="true"></menu-base>
      </div>
      <div class="main-content">
        <router-view class="body">
        </router-view>
      </div>
  </div>
</template>
<script>
  import menuBase from "@/components/menu/menu_base"

  export default {
    components: {menuBase},
    data() {
      return {
        menus: [{
          path: "/information/birthday",
          title: "生日",
        }, {
          path: "/information/important",
          title: "重要信息",
        }]
      }
    },
    created(){

    }
  };
</script>
<style lang="less">
  .container {
    display: flex;
    height: 100%;
    .left {
      width: 150px;
      background-color: #fff;
      margin-right: 5px;

    }
    .main-content {
      background-color: #fff;
      flex-grow: 1;
      padding-top: 10px;
      padding-left: 10px;
    }
    .body{
      display: inline-block;
    }
  }
</style>


