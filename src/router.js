// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from './components/Register/Register.vue';
import UserLogin from './components/Login/Login.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
