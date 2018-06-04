<template>
  <div>
    <p>我是自定义简单的组件</p>
    <p :style="'color:'+pTextColor">{{content}} 我的颜色是{{pTextColor}}</p>
    <button  @click="changeColor">随机颜色</button>
  </div>


</template>
<script>
  //1.data 必须是函数
  //父子组件的关系可以总结为 prop 向下传递，事件向上传递
  //HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，c
  // amelCase (驼峰式命名)的  prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：
  //组件必须包含在一个根元素里面  外面的html 属性可以合并
  import  Mock  from 'mockjs'
  export  default {
     name:"LtDiv",
     data(){
       return{ pTextColor:this.textColor }
     },
   //props:['content','textColor'], 数组写法
    props:{
       msg:String, //限制
       msg2:[String,Object],
       content:{
         type:String,//类型 可以是字符串或者是数组
         default:"我是自定义div里面的信息", //默认的值
         required:true,//是否必须填
         validator:function (value) {
           var b=  value.length>3;
           if(!b){
             console.error("内容必须大于3个字符");
           }
            return b;
         }

       },
       textColor:{
          default:"red"
       }



    },
    methods:{
      changeColor(){
        var color=Mock.mock('@rgb');
        this.pTextColor=color;  
        this.$emit("change-color",{color});
      }
    }
  }
</script>
