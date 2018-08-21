<template>
  <div>
    <div class="div1">在我这个上面触发事件</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {
        var target = document.querySelector(".div1");
        let mousedownHandle = function (e) {
          console.log(e);
        };
        let mousemoveHandle = function (e) {
          console.log(e);
        };
        let mouseupHandle = function (e) {
        console.log(e);
      };
      let isPc = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
      let mousedown=isPc?"mousedown":"touchstart";
      let mousemove=isPc?"mousemove":"touchmove";
      let mouseup=isPc?"mouseup":"touchend";
      target.addEventListener(mousedown, mousedownHandle, false);
      //target.addEventListener(mousemove, mousedownHandle, false);
      target.addEventListener(mouseup, mouseupHandle, false);

    }
  }
</script>
<style>
  .div1 {
    width: 100vw;
    background-color: orange;
    height: 100px;
  }
</style>
