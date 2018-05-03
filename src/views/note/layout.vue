<HTML>
<template>
  <div id="note-layout">
    <header>
      <div><!--这里预留头部信息--></div>
      <div>
        <el-menu class="el-menu-demo header" mode="horizontal"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="1">信息中心</el-menu-item>
          <el-menu-item index="2">任务中心</el-menu-item>
          <el-submenu index="3">
            <template slot="title">系统管理</template>
            <el-menu-item index="3-1">菜单设置</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </header>
    <div id="main">
      <nav>
        <div class="nav-body">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">信息中心</template>
              <el-menu-item index="1-1"><router-link to="/information/important">账户信息</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/information/birthday">生日信息</router-link></el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </nav>
      <router-view id="main-body"></router-view>
    </div>
    <footer>foot</footer>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";

Vue.use(ElementUI);
window.isDev = Vue.prototype.isDev = process.env.NODE_ENV === "development";
window.hostname = isDev ? "http://lt.com" : "http://lt.production.com";
window.devHost = "http://lt.com";
window.localMockData = true; //是否本地 js mock数据
export default {
  name: "NoteLayout",
  data() {
    return {
      xx: { path: "/information" }
    };
  },
  mounted() {
    //document.querySelec tor("#note-layout").style.height = window.innerHeight + "px";
  }
};
</script>
<style scoped>
@import "element-ui/lib/theme-chalk/index.css";
#note-layout {
  width: 100%;
  height: 100vh;
  background-color: #545c64;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

header {
  /*flex-basis: 40px;*/
  display: flex;
  justify-content: center;
  background-color: #545c64;
}

footer {
  flex-basis: 40px;
  background-color: black;
}

#main {
  display: flex;
  flex: 1;
  background-color: orange;
}

nav {
  flex-basis: 210px;
  background-color: #545c64;
}
a {
  text-decoration: none;
  color: white;
}
.el-menu-item.is-active a {
  color: #ffd04b;
} /*用来修复导航条激活是颜色原始被覆盖的问题*/
</style>
