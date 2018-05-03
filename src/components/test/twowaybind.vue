<template>
<input type="text" v-on:input="changeText" ref="input" :value="inputText">
</template>

<script>
export default {
  name: "LtTwowaybind",
  data() {
    return {};
  },
  props: {
      inputText:{
          required:true
      }
  },
  methods: { 
  changeText(event) {
      console.log(this.$refs.input.value)
      this.$emit('update:inputText',this.$refs.input.value)
    }  
  }
};
</script>