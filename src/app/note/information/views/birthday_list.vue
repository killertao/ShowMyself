<template>
  <div>
    <div class="button">
      <el-button @click="add">添加</el-button>
    </div>
    <my-table :table="model.tableList">
    </my-table>
    <birthday-add ref="add"></birthday-add>
  </div>
</template>
<script>
  import Birthday from "@/api/note/birdthday";
  import BirthdayAdd from "./birthday_add";
  import MyTable from "@/elementui_extend/component/table"
  let model = new Birthday();
  export default {
    components: {BirthdayAdd,MyTable},
    data() {
      return {
        model:model,
      }
    },
    created(){
      model.tableList.load();
    },
    methods: {
      add() {
        this.$refs.add.init();
      }
    }
  }
</script>
