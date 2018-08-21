<template>
  <div class="menu" :style="{width:width}">
    <span v-for="(item,index) in menus" @click="menuActive(item,index)"
          :class="[itemClass,index===activeIndex?activeClass:'',vertical?'vertical':'']" :style="spanStyle"
     ><slot  v-bind:menu="item"> {{item.title}}</slot></span>
  </div>
</template>
<script>
  export default {
    props: {
      menus: {type: Array, required: true},
      activeClass: {
        type: String,
        default: "active"
      },
      itemClass: {
        type: String,
        default: "item"
      },
      activeStyle: {
        type: Object,
      },
      itemStyle: {
        type: Object,
      },
      height: {
        type: String,
        default: '60px'
      },
      activeForRouter: {
        type: Boolean,
        default: true,
      },
      vertical: {
        type: Boolean,
        default: false,
      },
      width: {
        type: String,
      },
    },
    computed: {
      spanStyle() {
        let span = {};
        span.height=this.height;
        if (this.itemStyle && Object.keys(this.itemStyle).length > 0) {
          Object.assign(span, this.itemStyle);
        }
        if (this.activeStyle && Object.keys(this.activeStyle).length > 0) {
          Object.assign(span, this.activeStyle);
        }
        return span;
      }
    },
    data() {
      return {
        activeIndex: 0,
      }
    },
    created() {
      if (this.activeForRouter) {
        this.menus.forEach((item, index) => {
          let path = this.$route.fullPath;
          if (path.indexOf(item.path) === 0) {
            this.activeIndex = index;
          }
        })
      }
    },
    methods: {
      setDefaultIndex(index) {
        this.activeIndex = index;
      },
      menuActive(menu, index) {
        this.activeIndex = index;
        if (menu.path) {
          this.$router.push(menu.path);
        }
        this.$emit("onActive", menu)
      }
    }
  }
</script>
<style lang="less">
  .menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      height: 100%;
    }
  }

  .item {
    display: inline-flex;
    /*border: solid 1px red;*/
    width: 150px;
    justify-content: center;
    align-items: center;
  }

  .active {
    color: lightcoral;
    font-size: 1.5em;
    font-weight: 900;
  }
  .vertical{
     width: 100%;
  }
</style>
