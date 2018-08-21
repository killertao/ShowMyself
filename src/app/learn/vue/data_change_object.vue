<template>
    <div>测试在created 里面改变整个对象的引用时，对象会不会不重新监控</div>
</template>
<script>
  export default {
    data(){
        return {
            data:{},
        }
    },
    created(){
      this.data={msg:1111};
    },
    mounted(){
      console.log(this.data);
    },
    watch:{
      data(val){
         console.log("data对象监控触发");
         console.log(val);
      }
    }
  }
</script>
