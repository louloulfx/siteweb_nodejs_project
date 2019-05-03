import Vue from 'vue';
import Router from 'vue-router';

import Routes from "../routes";

Vue.use(Router);

export const router = new Router({
    routes: Routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    // redirection à la page login si l'utilisateur n'est pas logué et essayer d'atteindre une page non autorisée
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})