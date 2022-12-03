import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
// import PurchaseView from "../views/PurchaseView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    // {
    //     path: '/purchase',
    //     name: 'PurchaseView',
    //     component: PurchaseView
    //   },
  ],
});

export default router;