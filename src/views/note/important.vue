<template>
  <div>
    <el-table :data="datalist">
      <el-table-column prop="name" label="账户" width="180"></el-table-column>
      <el-table-column prop="pwd" label="密码" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  import axios from 'axios'
  import Mock from 'mockjs'
  let api = {
    list: "/Information/ImportantList"
  };
  if (window.localMockData) {
    Mock.mock(hostname.concat(api.list),{
      'list|6-10':[
        {
          'name':'@cword(2,7)',
          'pwd':'@word(6,12)'
        }
      ]
    });
  }
  export default {
    name: "Important",
    data() {
      return {
        datalist:[],
        loading:true
      }
    },
    created() {
      debugger;
      axios.get(hostname.concat(api.list)).then(res => {
        debugger;
        this.datalist = res.data.list;
        console.log(res);
      }).catch(() => {
        console.log("出错了");
      })
    },
  }


</script>
