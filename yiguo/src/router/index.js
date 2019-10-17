import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Eat from './eat'
import Classify from './good'
import textdetail from './textdetail'
import good from './good'
export default new Router({
  routes: [
    textdetail,good,
    {path:"/eat",component:Eat},
    {path:"/classify",component:Classify}

    // {path:"./eat",component:()=>import("@/views/Eat")}
  ]
})
