import { createRouter, createWebHistory } from 'vue-router';
// import UserRegister from './components/Register/Register.vue';
// import UserLogin from './components/Login/Login.vue';
import UserDetails from './components/UserDetails/UserDetails.vue';
import HomePage from './components/Home/Home.vue'
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout.vue';
import HeaderOnly from './Layout/HeaderOnly/HeaderOnly.vue';
import Detail from './Page/Detail/Detail.vue';
import Home from './Page/Home/Home.vue';
import Profile from './Page/Profile/Profile.vue';
import Storage from './Page/Storage/Storage.vue';
import Booking from './Page/Booking/Booking.vue';

const routes = [
  {
    path: '/', 
    component: HeaderOnly,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },  
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
      },
      {
        path: '/booking/:id',
        name: 'Booking',
        component: Booking,
      },
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
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
