<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI,{size:'small'});  
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "App"
};
</script>

