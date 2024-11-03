// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import UserRegister from "./components/Register/Register.vue";
import UserLogin from "./components/Login/Login.vue";
import TourList from "./[vendor]/tours/Tour.vue";
import CreateTour from "./[vendor]/tours/CreateTour.vue";
import UpdateTour from "./[vendor]/tours/UpdateTour.vue";
import DetailTour from "./[vendor]/tours/DetailTour.vue";
import Payment from "./[user]/Payment.vue";

const routes = [
  {
    path: "/register",
    name: "Register",
    component: UserRegister,
  },
  {
    path: "/login",
    name: "Login",
    component: UserLogin,
  },
  {
    path: "/:vendor/tours",
    name: "Tours",
    component: TourList,
  },
  {
    path: "/:vendor/tours/create",
    name: "CreateTour",
    component: CreateTour,
  },
  {
    path: "/:vendor/tours/edit/:id",
    name: "UpdateTour",
    component: UpdateTour,
  },
  {
    path: "/:vendor/tours/:id",
    name: "DetailTour",
    component: DetailTour,
  },
  {
    path: "/:user/payment",
    name: "Payment",
    component: Payment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
