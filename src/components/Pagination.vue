<template>

  <el-table :data="tableList" border>
    <slot></slot>
    <template slot="append">
      <div class="pager">
        <el-pagination layout="total, sizes, prev, pager, next, jumper"
         :total="total" :page-size="innerPageSize" :current-page.sync="currentPage"
          @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </template>
  </el-table>

</template>
<script>
import Ajax from "axios";
import { Table } from "element-ui";
export default {
  data() {
    return {
      currentPage: 1,
      tableList: [],
      total: 0,
      innerPageSize: 10
    };
  },
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    api: {
      type: String,
      require: true
    },
    pms: {
      type: Object, //object对象，相当于双向绑定 ，子组件值改变
      default() {
        return {};
      }
    }
  },
  created() {
    if (this.pageSize) {
      this.innerPageSize = this.pageSize;
    }
    this.loadTable();
  },
  methods: {
    loadTable(resetOffset) {
      if (resetOffset) {
        this.pms = 1;
      } else {
        this.pms.currentPage = this.currentPage;
      }
      this.pms.limit = this.innerPageSize;
      Ajax.get(this.api, this.pms).then(res => {
        this.tableList = res.data.data;
        this.total = res.data.total;
      });
    },
    handleSizeChange(pageSize) {
      this.innerPageSize = pageSize;
      this.loadTable();
    },
    handleCurrentChange(page) {
      this.loadTable();
    }
  }
};
</script>
