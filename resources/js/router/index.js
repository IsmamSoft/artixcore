import { createRouter, createWebHistory } from "vue-router";
// Admin
import HomeAdminIndex from '../components/admin/dashboard.vue'
import HomeAdminDashboard from '../components/admin/dashboard.vue'
// Frontend
import Frontend from '../components/frontend/home.vue'
// Not Found
import NotFound from '../components/notfound.vue'

// Auth
import Login from '../components/auth/login.vue'

const routes = [
        // Admin
        {
            path:'/admin/home',
            component: HomeAdminIndex,
            // meta:{
            //     requiresAuth:true
            // }
        },

        {
            path:'/dashboard',
            component: HomeAdminDashboard
        },

        // Frontend
        {
            path:'/home',
            component: Frontend
        },

        {
            // Login
            path:'/login',
            component: Login,
            // meta:{
            //     requiresAuth:false
            // }
        },

        // Not Found
        // {
        //     path:'/home',
        //     component: Frontend
        // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to,from) => {
//     if(to.meta.requiresAuth && !localStorage.getItem('token')){
//         return {
//             name: Login
//         }
//         if(to.meta.requiresAuth == false && localStorage.getItem('token')){
//             return { name: 'adminHome' }
//         }
//     }
// })

export default router
