<template>
  <div>
      我是生日管理页面
  </div>
</template>
<script>
  if (window.localMockData) {
     ;
     import('@/mockdata/note/important.js');
  }
  var api = {};

  export default {
    name: "Birthday",
    data() {
      return {}
    },
    beforeCreate() {
      //this.formationList = api.getInformationList();
    }

  }
</script>
