import Vue from 'vue';
import Router from 'vue-router';

import Routes from "../routes";

Vue.use(Router);

export const router = new Router({
    routes: Routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})