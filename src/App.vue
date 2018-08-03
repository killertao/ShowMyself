<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: "App"
  };
  import domTool from "#/js/dom_tool"
  domTool.init();
</script>

