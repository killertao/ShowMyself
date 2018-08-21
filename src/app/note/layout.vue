<template>
  <div id="container">
      <menu-base id="header" style="margin-bottom:5px;" :menus="headerMenu">
      </menu-base>
      <section id="content" :style="{height:contentHeight+'px'}">
        <router-view></router-view>
      </section>
      <footer id="footer">
        <p>反倒是</p>
        <p>反倒是</p>
        <p>反倒是</p>
        <p>反倒是</p>
        <p>反倒是</p>
      </footer>
    </div>
</template>
<script>
  import Vue from "vue";
  import ElementUI from "element-ui";

  Vue.use(ElementUI, {size: 'small'});
  import "element-ui/lib/theme-chalk/index.css";
  import mavonEditor from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  import menuBase from  "@/components/menu/menu_base";
  Vue.use(mavonEditor);
  //注入全局组件 element-ui  md组件mavonEditor
  export default {
    components:{menuBase,},
    data() {
        return {
           contentHeight:600,
           headerMenu:[{
              title:"笔记",
              path:"/note",
           },{
             title:"信息管理",
             path:"/information",
           }],
           activeIndex:0,
        };
    },
    mounted(){
      this.contentHeight=document.documentElement.clientHeight-document.querySelector("#header").outerHeigh();
    },
    methods:{
      menuActive(menu,index){
          this.activeIndex=index;
          this.$router.push(menu.path);
      }
    }
  };
</script>
<style lang="less">
  @bgbody:orange;
  @bgheader: #27e9ff;
  @bgcontent: #ffd5af;
  @bgfooter:#000;
  @mainWidth:80%;
  #container {
    background-color: @bgbody;
    //height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    #footer{
        width: 100%;
    }
  }
  #view{
    width:80%;
  }
  #header,#content{
    width: @mainWidth
  }
  #header{
    background-color:@bgheader;
  }
  #content {
    background-color: @bgcontent;
  }
  #footer{
    background-color: @bgfooter;
    color:white;
    font-size:1em;
  }
</style>
