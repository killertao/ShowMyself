import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Learn from '@/views/learn/router.js'
import NoteLayout from '@/views/note/layout.vue'
import NoteChildren from '@/views/note/router.js'

Vue.use(Router)
export default new Router({
  routes: [
    ...Learn,
    {
      path: "",
      component: HelloWorld
    },
    {
      path: "",
      component: NoteLayout,
      children: NoteChildren
    },
    {
      path: "/",
      component: NoteLayout,
      children: NoteChildren
    }
  ]
})
