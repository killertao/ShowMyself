<template>
    <div>
        <prop-array  v-model="array" ></prop-array>
    </div>
</template>
<script>
    import  PropArray from "./component_proparray"
    export default {
        components:{PropArray},
        data() {
            return {
              array:["你在","干什么","啊啊啊"]
            }
        }
    }
</script>
