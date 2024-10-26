import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout.vue';
import HeaderOnly from './Layout/HeaderOnly/HeaderOnly.vue';
import Detail from './Page/Detail/Detail.vue';
import Home from './Page/Home/Home.vue';
import Profile from './Page/Profile/Profile.vue';
import Storage from './Page/Storage/Storage.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        props: true,
      },
      {
        path: 'storage',
        name: 'Storage',
        component: Storage,
      },
    ],
  },
  {
    path: '/', 
    component: HeaderOnly,
    children: [
      {
        path: 'detail',
        name: 'Detail',
        component: Detail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
