import { createRouter, createWebHistory } from "vue-router"
import Home from './../pages/products/Overview.vue'
import Create from './..//pages/products/Create.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/create', name: 'Create', component: Create}
    ]
})

export default router