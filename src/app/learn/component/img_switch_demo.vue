<template>
  <img-switch :imgs="imgs"></img-switch>
</template>
<script>
    import  imgSwitch from "./img_switch";
    export  default {
      components:{imgSwitch},
      data(){
         return {
           imgs:[
             "https://goss.veer.com/creative/vcg/veer/612/veer-143500518.jpg",
             "https://goss.veer.com/creative/vcg/veer/612/veer-143807435.jpg",
             "https://goss.veer.com/creative/vcg/veer/612/veer-140973036.jpg",
             "https://goss.veer.com/creative/vcg/veer/612/veer-132560593.jpg"
           ]
         }
      }
    }
</script>
