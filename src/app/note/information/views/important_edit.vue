<template>
  <el-dialog :visible.sync="show" :title="title" :close-on-click-modal="false">
    <el-form ref="form" :model="form"   label-width="80px"  >
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
       <el-form-item label="密碼">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">確定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import Ajax from "axios";
import config from "../../config";
let api = {
  getDetail: "",
  save: ""
};
export default {
  name: "edit-information",
  data() {
    return {
      show: false,
      title: "",
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    init(data) {
      if (!data || Object.keys(id).length === 0) {
        this.title = "添加";
      } else {
        this.title = "修改";
      }
      this.show = true;
      // if (typeof id === "number") {
      //   Ajax.get(config.apiUrl(api.getDetail)).then(res => {
      //     if (res.data.success) {
      //       this.editData = this.data.data;
      //     } else {
      //       throw new Error("获取数据出错小哥哥");
      //     }
      //   });
      // } else if (typeof id === "object" && Object.keys(id).length > 0) {
      //   this.editData = id;
      // }
    }
  }
};
</script>

