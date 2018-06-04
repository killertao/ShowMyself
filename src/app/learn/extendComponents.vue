<template>
    <div>
        <extends-simple :text-color="textColor" ref="extendsSimple" content="内容是吧" @change-color="changeColor">
        </extends-simple>
        <button @click="test">点击调用扩展方法</button>
        <p>============================</p>
        <simple :text-color="textColor"  content="内容2111" @change-color="changeColor">
        </simple>
    </div>

</template>
<script>
import extendsSimple from "@/components/test/extendsSimple";
import simple from "@/components/test/simple";
export default {
  name: "extend-components",
  components: { extendsSimple,simple },
  data() {
    return {
      textColor: "red"
    };
  },
  methods: {
    test() {
      debugger;
    },
    changeColor(color){
        console.log(color);
    }
  }
};
</script>

