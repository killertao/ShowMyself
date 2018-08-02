import Vue from 'vue'
import Router from 'vue-router';
import Learn from '@/app/learn/router';
import note from '@/app/note/router';
Vue.use(Router);
export default new Router({
  routes: [
    ...Learn,
    ...note,
  ]
})
