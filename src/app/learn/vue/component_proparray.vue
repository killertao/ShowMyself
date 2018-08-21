<template>
  <div>组件
    <div>
      <ul>
        <li v-for="item in value">{{item}}</li>
      </ul>
    </div>
    <button @click="emitChange">利用emit改变proparr的值</button>
    <button @click="updateChange">利用update:array 改变proparr的值</button>
    <button @click="untilChange">直接改变proparr的值</button>
  </div>

</template>
<script>
  export default {
    props: {
      value:{
        type:Array,
      },
      // array: {
      //   type: Array,
      //   required: true,
      // }
    },
    data() {
      return {}
    },
    methods: {
      emitChange() {
        this.$emit("input", [11111, 22222, 3333]);
      },
      updateChange() {
        this.$emit("update:array", ["up", "date", "array"]);
      },
      untilChange() {
        this.value=["xx","xx","xx"]; //组件prop 最好不要直接存储的值给改变   值类型 值改变 引用类型，堆地址改变
        //this.value.push("我是直接改的");
      }

    }
  }
</script>

