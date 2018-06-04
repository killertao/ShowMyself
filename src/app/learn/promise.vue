<template>
    <div>
        <span>{{msg}}</span>
        <el-button @click="clickBtn">点击一哈看看</el-button>

    </div>
</template>
<script>
//promise 是一promise对象的实例 拥有then 和catch方法
export default {
  data() {
    return {
        msg:undefined,
    };
  },
  methods: {
    clickBtn() {
      let p = new Promise(function(resolve, reject) {
        try {
          this.msg = "prending...";
          setTimeout(resolve, 2000); //模拟运行中
        } catch (error) {
          reject(error);
        }
      });
      p.then(res => {
        this.msg = "resolved";
      });
    }
  }
};
</script>

