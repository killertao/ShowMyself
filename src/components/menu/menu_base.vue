<template>
  <div class="menu">
    <span v-for="(item,index) in menus" @click="menuActive(item,index)"
          :class="[itemClass,index===activeIndex?activeClass:'']" :style="spanStyle"><slot
      v-bind:menu="item">{{item.title}}</slot></span>
  </div>
</template>
<script>
  export default {
    props: {
      menus:{type:Array,required:true},
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
      }
    },
    computed: {
      spanStyle() {
        let span = {};
        if (this.itemStyle&&Object.keys(this.itemStyle).length > 0) {
          Object.assign(span, this.itemStyle);
        }
        if (this.activeStyle&&Object.keys(this.activeStyle).length > 0) {
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
    methods: {
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
    height: 60px;
  }
  .item {
    display: inline-flex;
    height: 100%;
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

</style>
