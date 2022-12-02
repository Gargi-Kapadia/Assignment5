import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import PurchaseView from "../views/PurchaseView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        path: '/',
        component: Home
      },
    {
      path: '/Login',
      component: Login
    },
    {
        path: '/Purchase',
        component: PurchaseView
      },
  ],
});

export default router;