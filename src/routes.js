import showList from './components/showList.vue'
import addProvider from './components/addProvider.vue'
import singleProvider from './components/singleProvider.vue'
import login from './components/login.vue'
import register from './components/register'

export default [
    {path: '/add', component: addProvider},
    {path: '/provider/:id', component: singleProvider},
    {path: '/', component: showList},
    { path: '/login', component: login },
    { path: '/register', component: register },
]