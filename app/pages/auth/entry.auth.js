import AuthComp from "./auth.vue";
import elpisBoot from "$elpisBoot";

const routes = [
  {
    path: "/view/auth/login",
    component: () => import("./complex-view/login/login.vue"),
  },
];

elpisBoot(AuthComp, { routes });
