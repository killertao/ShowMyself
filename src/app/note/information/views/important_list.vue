<template>
  <div>
    <header>
      <el-button type="primary" @click="openSave(undefined)">添加</el-button>
    </header>
    <pager-table :api="api.getTableList">
      <el-table-column prop="name" label="账户" ></el-table-column>
      <el-table-column prop="pwd" label="密码" ></el-table-column>
      <el-table-column prop="pwd"  align="right">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="openSave(scope.row)">编辑</el-button>
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="deleteItem(scope.row.id)">刪除</el-button>
        </template>
      </el-table-column>
    </pager-table>
    <eidt ref="edit"></eidt>
  </div>
</template>
<script>

import config from "../../config.js"
import PagerTable from "@/components/Pagination"
import Eidt from "./important_edit"
let api = {
  getTableList: config.apiUrl("/information/getAccountList")
};
export default {
  components:{PagerTable,Eidt},
  data() {
    return {
      api:api,
    };
  },
  created() {

  },
  methods: {
    openSave(editData){
        this.$refs.edit.init();
    },
    deleteItem(){

    }
  }
};
</script>
<style lang="less" scoped>
</style>

