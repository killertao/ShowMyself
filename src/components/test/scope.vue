<template>
  <div>
      <slot name="header"></slot>
      <slot text="我是子插槽传过来的">default
      </slot>
      <slot name="footer">footer</slot>
  </div>
</template>
<script>
export default {
   name:"LtScope",
   data(){
       return {}
   }
}
</script>
