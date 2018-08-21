<template>
  <div class="table">
    <slot>
      <el-table :data="table.dataList"  style="width: 100%" border>
        <el-table-column v-for="(label,field) in table.columns" :label="label" :prop="field"></el-table-column>
      </el-table>
    </slot>
    <div :style="{textAlign:this.paginationAlgin}" style="width: 100%">
      <el-pagination
        v-if="table.pagination"
        :total="table.dataTotal" pager-count="9"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[5,10,15,20]"
        :page-size.sync="table.pageSize"
        current-page.sync="table.currentPage"
        @size-change="tableload"
        @current-change="tableload"
        @prev-click="tableload"
        @next-click="tableload"
      ></el-pagination>
    </div>

  </div>

</template>
<script>
  export default {
    props: {
      table: {type: Object, required: true,},
      paginationAlgin:{type:String,default:"center"}

    }, //page pagList 对象
    data() {
      return {}
    },
    created() {

    },
    methods: {
      tableload() {
        this.table.load();
      },

    }
  }
</script>
<style>

</style>
