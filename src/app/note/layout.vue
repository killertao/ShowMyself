
<template>
  <div id="container">
    <div id="note-layout">
      <header>
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
      <template slot="title">
        <router-link to="/note">笔记</router-link>
      </template>
    </el-menu-item>
      <el-menu-item index="2">
        <template slot="title">
          <router-link to="/information">信息中心</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="3">任务管理</el-menu-item>
      </el-menu>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI,{size:'small'});
import "element-ui/lib/theme-chalk/index.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
export default {
  name: "NoteLayout",
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
#container {
  background-color: #c3cfc649;
  height: 100vh;
}
#note-layout {
  min-height: 100vh;
  width: 70%;
  margin: 0 auto;
  /* background-color: #fff; */
}
</style>
