import Vue from 'vue'
import Router from 'vue-router'
import Learn from '@/app/learn/router.js'
import note from '@/app/note/router.js'
import searchTel from '@/app/spider/tel.vue'
Vue.use(Router)
export default new Router({ 
  routes: [
    ...Learn,
    ...note,
    {
      path:"/searchTel",
      component:searchTel
    }
  ]
})
