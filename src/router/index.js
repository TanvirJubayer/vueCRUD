import { createRouter, createWebHistory } from "vue-router";
import Vendors from "../pages/Vendors.vue";
import CreateVendor from "../pages/CreateVendor.vue";
import EditVendor from "../pages/EditVendor.vue";


const routes = [
    {'path': '/vendor', component: Vendors},
    {'path': '/vendor/create', component: CreateVendor},
    {'path': '/vendor/edit/:id', component: EditVendor},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
}   )    