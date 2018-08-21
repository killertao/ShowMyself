<template>
  <div class="container" ref="container">
    <div class="item" v-for="(src) in imgs">
      <img :src="src" @mousemove.prevent="imgmousemove" @mousedown.prevent="imgmousemove"/>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      imgs: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        height: 0,
        activeIndex: 0,
        scrollLeft: 0,
        si: undefined,//计时器对象
      }
    },
    created() {
      // let psarr = this.imgs.map(function (item) {
      //   return new Promise(function (s, r) {
      //     var img = new Image();
      //     img.onload = function () {
      //       s(this.height);
      //     };
      //     img.src = item;
      //   })
      // });
      // Promise.all(psarr).then(result => {
      //   let max = -1;
      //   result.forEach(item => {
      //     if (item > max) {
      //       max = item;
      //     }
      //   });
      //   this.height = max;
      // })
    },
    mounted() {
      var target = this.$refs.container;
      let startX;
      let vm = this;
      let mousedownHandle = function (e) {
        startX = e.pageX || e.changedTouches[0].pageX;
      };
      let mouseupHandle = function (e) {

        let endX = e.pageX || e.changedTouches[0].pageX;
        let type = endX - startX;
        if (type < 0 && this.activeIndex === 0) {
          return;
        }
        else if (type > 0 && this.activeIndex === vm.imgs.length - 1) {
          return;
        }
        vm.whatSwitch(startX, endX);
        //设置停止轮播 5秒后开始轮播
        vm.stopSwitch();
        window.setTimeout(function () {
          vm.autoStart()
        }, 5000)
      };
      let isPc = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
      let mousedown = isPc ? "mousedown" : "touchstart";
      //let mousemove=isPc?"mousemove":"touchmove";
      let mouseup = isPc ? "mouseup" : "touchend";
      target.addEventListener(mousedown, mousedownHandle, false);
      //target.addEventListener(mousemove, mousedownHandle, false);
      target.addEventListener(mouseup, mouseupHandle, false);
      this.autoStart();
    },
    methods: {
      imgmousemove() {
      },
      whatSwitch(start, end) {
        if (Math.abs(end - start) > 10) {
          if (end - start > 0) {
            this.switchImg(-1);//右滑上一张
          }
          else {
            //左滑动下一张
            this.switchImg(1);
          }
        }
      },
      switchImg(type) {
        this.activeIndex += type;
      },
      autoStart() {
        if (this.si) return;
        let add = 1;
        this.si = window.setInterval(() => {
          if (this.activeIndex === this.imgs.length - 1) {
            add = -1;
          }
          if (this.activeIndex === 0) {
            add = 1;
          }
          this.activeIndex += add;
        }, 2000)
      },
      stopSwitch() {
        window.clearInterval(this.si);
        this.si = undefined;
      },
      switchRender(offset) {
        let vm=this;
        let timer =offset/10;
        let addTimer = 0;
        let orginLeft = this.$refs.container.scrollLeft;
        let min = 0, max = (document.body.offsetWidth * this.imgs.length);
        let si = window.setInterval(function(){
          if (addTimer >=Math.abs(offset)) {
            vm.$refs.container.scrollLeft = orginLeft + offset;
            window.clearInterval(si);
            si = null;
          }
          else {
            let temp = vm.$refs.container.scrollLeft + timer;
            if (temp < min) {
              temp = 0
            }
            else if (temp > max) {
              temp = max
            }
            addTimer += Math.abs(timer);
            vm.$refs.container.scrollLeft=temp;
          }
        },20)
      }

    },
    watch: {
      activeIndex: function (newIndex, oldIndex) {
        this.switchRender(document.body.offsetWidth * (newIndex - oldIndex));
        // this.$refs.container.scrollLeft += document.body.offsetWidth * (newIndex - oldIndex);
      }
    },

  }
</script>
<style>
  .container {
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    flex-wrap: nowrap;
  }

  .container .item {
    width: 100vw;
  }

  .item img {
    width: 100vw;
  }
</style>
