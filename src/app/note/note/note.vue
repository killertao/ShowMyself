<template>
  <div id="main">
    <el-tree id="nav" :data="outLineData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <div>
      <div class="operator">
        <el-button type="primary" icon="el-icon-save" @click="save" size="small" v-show="toolbarsFlag">保存</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="edidorActive" size="small">编辑</el-button>
        <el-button type="primary" size="small" @click="edidorPreview">取消编辑</el-button>
      </div>
      <mavon-editor ref="mdEditor" style="min-height:600px" v-model="mdData.content" :toolbarsFlag.sync="toolbarsFlag" :subfield.sync="subfield" defaultOpen="preview" />
    </div>
  </div>
</template>
<script>
let api = {
  getOutLine: "/note/getOutline",
  getNote: "/note/getNote",
  saveNote: "/note/saveNote"
};
import Ajax from "axios";
import config from "../config.js";
export default {
  name: "note",
  data() {
    return {
      outLineData: [],
      mdData: { content: `lt制作` },
      defaultProps: {
        children: "children",
        label: "lable"
      },
      toolbarsFlag: false,
      subfield: false
    };
  },
  created() {
    Ajax.get(config.apiUrl(api.getOutLine)).then(res => {
      this.outLineData = res.data.data;
    });
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
      let id = data.id;
      if (!id) {
        return;
      }
      Ajax.get(config.apiUrl(api.getNote), { params: { id } }).then(res => {
        this.mdData = res.data.data;
      });
    },
    edidorActive() {
      this.toolbarsFlag = true;
      this.subfield = true;
      //this.$refs.mdEditor.toolbarsFlag = true;
    },
    edidorPreview() {
      this.toolbarsFlag = false;
      this.subfield = false;
    },
    save() {
      Ajax.post(config.apiUrl(api.saveNote), this.mdData).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
#main {
  display: flex;
  background-color: #fff;
}
#main div {
  width: 100%;
  box-sizing: border-box;
}
#nav {
  flex-basis: 200px;
  /* /border-right: solid 2px gray; */
}
.operator {
  text-align: end;
  padding-right: 1rem;
}
</style>
