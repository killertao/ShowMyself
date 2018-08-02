<template>
      <el-dialog :visible.sync="show" :close-on-click-modal="false">
        <p>日期<input type="date" v-model="data.date"/></p>
        <p>姓名昵称<input type="text" v-model="data.name"/></p>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>

      </el-dialog>
</template>
<script>
   import  Birthday from "@/api/note/birdthday";
   let model=new Birthday();
   export default {
     data() {
       return {
         data: {},
         show: false,
       }
     },
     methods: {
       init(data) {
         this.show = true;
         this.data = {};//再这里改变data的引用对象，使得监听触发 达到清空效果5
       },
       confirm() {
         model.add(this.data).then(res => {
           debugger;
           if (res.data.success) {
             console.log("添加成功");
             this.show = false;
           }
         })
       }
     }
   }
</script>

