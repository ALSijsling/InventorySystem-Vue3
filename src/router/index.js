import { createRouter, createWebHistory } from "vue-router"
import Home from './../pages/products/Overview.vue'
import Create from './..//pages/products/Create.vue'
import Edit from './..//pages/products/Edit.vue'
import Order from './..//pages/products/OrderPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/create', name: 'Create', component: Create},
        {path: '/edit/:id', name: 'Edit', component: Edit},
        {path: '/order', name: 'Order', component: Order}
    ]
})

export default router