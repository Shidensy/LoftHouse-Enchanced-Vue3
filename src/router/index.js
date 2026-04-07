// routing rules
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CreditView from "@/views/CreditView.vue";
import AdmiralteyskiyView from "@/views/AdmiralteyskiyView.vue";
import PetrogratskiyView from "@/views/PetrogratskiyView.vue";
import KrasnogvardeyskiyView from "@/views/KrasnogvardeyskiyView.vue";
import CatalogView from "@/views/СatalogView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return {top: 0, behavior: "smooth"};
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/home",
            redirect: "/",
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/credit",
            name: "credit",
            component: CreditView,
        },
        {
            path: "/admiralteyskiy",
            name: "admiralteyskiy",
            component: AdmiralteyskiyView,
        },
        {
            path: "/petrogradskiy",
            name: "petrogradskiy",
            component: PetrogratskiyView,
        },
        {
            path: "/krasnogvardeyskiy",
            name: "krasnogvardeyskiy",
            component: KrasnogvardeyskiyView,
        },
        {
            path: "/catalog",
            name: "catalog",
            component: CatalogView,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundView,
        },
    ],
});

export default router;
