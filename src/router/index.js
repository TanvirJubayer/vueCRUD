import { createRouter, createWebHistory } from "vue-router";
import Vendors from "../pages/Vendors.vue";
import CreateVendor from "../pages/CreateVendor.vue";
import EditVendor from "../pages/EditVendor.vue";
import Login from "../pages/login/Login.vue";
import Register from "../pages/login/Register.vue";
import Logout from "../pages/login/Logout.vue";


const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/logout", component: Logout },
    { path: "/vendor", component: Vendors },
    { path: "/vendor/create", component: CreateVendor },
    { path: "/vendor/edit/:id", component: EditVendor },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
