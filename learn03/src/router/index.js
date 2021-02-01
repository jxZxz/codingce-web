import Vue from 'vue'
import Router from 'vue-router'
import grade from "../components/grade";
import name from "../components/name";

Vue.use(Router)
const routes=[
  {
    path: '/grade',
    component:grade
  },
  {
    path:'/name',
    component: name
  }
]
export default new Router({
  routes
})
