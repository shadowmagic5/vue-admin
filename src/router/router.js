import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "login"
    },
    {
      path: "/Login",
      name: "Login",
      component: () => {
        return import("../views/Login");
      }
    }
  ]
});
