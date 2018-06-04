<template>
    <simple :content="content">
    </simple>
</template>

<script>
import Vue from 'vue'
import simple from './simple'
let  instanceSimple=new Vue({components:{simple}});
console.log(instanceSimple);
 export default {
     extends:simple,
     components:{simple}, 
 }
</script>