import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetUsersView from '../views/GetUsersView'
import GetUsersByIdView from '../views/GetUsersByIdView'
import PostUserView from '../views/PostUserView'
import DeleteUsersByIdView from '../views/DeleteUsersByIdView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }    
  },
  {
    path: '/get',
    name: 'get',
    component: GetUsersView
  },
  {
    path: '/getbyid',
    name: 'getbyid',
    component: GetUsersByIdView
  },
  {
    path: '/postuser',
    name: 'postuser',
    component: PostUserView
  },
  {
    path: '/deleteuser',
    name: 'deleteuser',
    component: DeleteUsersByIdView
  },
  
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
