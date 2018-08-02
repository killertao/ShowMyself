<template>
<div>
    <div class="button">
        <el-button @click="add">添加</el-button>
    </div>
  <birthday-add ref="add"></birthday-add>
</div>
</template>
<script>
  import  Birthday from "@/api/note/birdthday";
  import  BirthdayAdd from "./birthday_add";
  let model=new Birthday();
  export default {
    components:{BirthdayAdd},
    data(){
        return {
        }
    },
    methods:{
      add(){
          this.$refs.add.init();
      }
    }
  }
</script>
