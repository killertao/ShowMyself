<template>
    <div>
      {{data.msg}}
      <input type="text" v-model="data.name"/><!--v-model 绑定一个对象会造成单项绑定 -->
      <button @click="clickBtn">click me</button>
      <slot></slot>
    </div>
</template>
<script>
  //其实在这里可以是一个对象，在beforCreate里面动态改变
  let data={
    msg:"生命周期得探讨"
  };
  export default {
    data(){
      return {
        data,//因为这里用得是一个对象，会将两个变量都改变
      }
    },
    methods:{
      clickBtn(){
        debugger;
      }
    },
    beforeCreate(){

      //1.初始化。类得声明，定义
      //2.实例化. 创建一个类的对象，开辟了一块内存空间
       //在实例初始化之后,，实例化、 数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

    },
    created(){

       //vue 实例化完成, 数据观测完成（Object.define 实现）,属性和方法得运算， watch/event事件得回调  ，挂载还没有开始 $el目前不可见
    },
    beforeMount(){

      //在这之前有一个找到实例化绑定到那个 element 元素上
      //在挂载开始之前被调用：相关的 render 函数首次被调用。



    },
    mounted(){

      // 整个组件也没有渲染出来   并且奖vm.$el 替换成el
      //不保证所有子组件被一起挂载，如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted;
    },
    beforeUpdate(){

      // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
      //该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
    },
    updated(){

// 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
// 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下
// 你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
// 注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：
    },
    errorCaptured(){

    }



  }
</script>
