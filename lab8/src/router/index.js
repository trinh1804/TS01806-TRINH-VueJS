// // src/router/index.js
// import { createRouter, createWebHistory } from 'vue-router';
// // import components for your routes
// import About from '../views/About.vue';
// import Home from '../views/Home.vue';
// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',
//         component: About
//     }
// ];
// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes
// });
// export default router;

import { createRouter, createWebHistory } from "vue-router";
import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import UserProfile from "../views/UserProfile.vue";
import UserProfileInfo from "../views/UserProfileInfo.vue";
import UserProfileSettings from "../views/UserProfileSettings.vue";

export const auth = { isAuthenticated: false } // Mock authentication state

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/blog", name: "BlogList", component: BlogList },
    { path: "/blog/:id", name: "BlogPost", component: BlogPost },
    {
        path: "/profile",
        name: "UserProfile",
        component: UserProfile,
        alias: "/me",
        children: [
            { path: "info", name: "UserProfileInfo", component: UserProfileInfo },
            {
                path: "settings",
                name: "UserProfileSettings",
                component: UserProfileSettings
            }
        ],
    },
    { path: "/login", name: "Login", component: Login },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

// Route Guard for Authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !auth.isAuthenticated) {
        next({ name: "Login" });
    } else {
        next();
    }
});

export default router;