<template>
  <div>
     <lt-div 
    :content="msg"
    bclass="nowarp"
    @changeColor="changeColor"> 
    </lt-div>
    <lt-twowaybind :input-text="msg"></lt-twowaybind>
    <lt-scope>
       <p slot="header">我是头部</p>
       <div slot-scope="props">我是默认的{{props.text}}</div>
       <p slot="footer">我是脚步</p>
    </lt-scope>
  </div>
   
</template>                          
 <script>
import LtDiv from "@/components/test/simple.vue";
import LtTwowaybind from "@/components/test/twowaybind.vue";
import  LtScope from "@/components/test/scope.vue";
export default {
  name: "Components",
  data() {
    return {
      msg: "我是div里面的信息",
      textcolor: "red",
      pms: {}
    };
  },
  components: {
    LtDiv,LtTwowaybind,LtScope
  },
  methods: {
    changeColor(msg) {
      console.log(msg);
    }
  }
};
</script>
