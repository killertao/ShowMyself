import Vue from 'vue'
import Router from 'vue-router';
import Learn from '@/app/learn/router';
import note from '@/app/note/router';
Vue.use(Router);
let router= new Router({
  routes: [
    ...Learn,
    ...note,
  ]
});
// router.afterEach((to,from,next)=> {
//      debugger;
//      let path=to.fullPath;
//      console.log(this);
//      next();
//
// });

export  default  router;

