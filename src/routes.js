import showList from './components/showList.vue'
import addProvider from './components/addProvider.vue'
import singleProvider from './components/singleProvider.vue'
import login from './components/login.vue'

export default [
    {path: '/providers', component: showList},
    {path: '/add', component: addProvider},
    {path: '/provider/:id', component: singleProvider},
    {path: '/', component: login}
]