import showList from './components/showList.vue'
import addProvider from './components/addProvider.vue'
import singleProvider from './components/singleProvider.vue'

export default [
    {path: '/', component: showList},
    {path: '/add', component: addProvider},
    {path: '/provider/:id', component: singleProvider}
]