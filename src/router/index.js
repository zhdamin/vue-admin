import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Login from "../views/Login/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    // component: Home
    redirect:"login"   //重定向
  },
  {
    path: "/login",
    name: "login",
    component: () =>  import("../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
