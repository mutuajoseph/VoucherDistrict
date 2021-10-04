import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/login",
    name: "login",
    component:() => import("./components/Login")
  },
  {
    path: "/register",
    name: "register",
    component:() => import("./components/SignUpUser")
  },
  {
    path: "/profile",
    name: "profile",
    component:() => import("./components/Profile")
  },
  {
    path: "/vouchers",
    alias: "/vouchers",
    name: "vouchers",
    component: () => import("./components/VouchersList")
  },
  {
    path: "/vouchers/:id",
    name: "voucher-details",
    component: () => import("./components/Voucher")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddVoucher")
  },
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/buy",
    name: "buy",
    component: () => import("./components/BuyVoucher")
  },
  {
    path: "/activate",
    name: "activate",
    component: () => import("./components/ActivateVoucher")
  },
  {
    path: "/activate/:id",
    name: "voucher-activation",
    component: () => import("./components/VoucherActivation")
  },
  {
    path: "/companyX",
    name: "companyX",
    component: () => import("./components/CompanyX")
  },
  {
    path: "/companyY",
    name: "companyY",
    component: () => import("./components/CompanyY")
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;