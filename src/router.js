// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from './components/Register/Register.vue';
import UserLogin from './components/Login/Login.vue';
import UserDetails from './components/UserDetails/UserDetails.vue';
import HomePage from './components/Home/Home.vue'

const routes = [
  {
    path: '/register',
    name: 'Register',   
    component: UserRegister,
  },
  {
    path: '/login',
    name: 'Login',   
    component: UserLogin,
  },
  {
    path:'/UserDetails',
    name: 'UserDetails',
    component: UserDetails,
  },
  {
    path:'/HomePage',
    name: 'HomePage',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
