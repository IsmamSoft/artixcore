import { createRouter, createWebHistory } from "vue-router";
// Admin
import HomeAdminIndex from '../components/admin/home/index.vue'
// Pages
import HomePage from '../components/pages/welcome/index.vue'
// Not Found
import notFound from '../components/notFound.vue'
// Login / Register
import Login from '../components/auth/login.vue'
import Register from '../components/auth/Register.vue'

const routes = [
     // Admin
    {
        path: '/admin/home',
        name: 'adminHome',
        component: HomeAdminIndex,
        meta: {
            requiresAuth:true
        }
    },
    // PAGES
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            requiresAuth:false
        }
    },
    // Login
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth:false
        }
    },
    // Register
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresAuth:false
        }
    },
    // NotFound
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound,
        meta: {
            requiresAuth:false
        }
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
       return {name:'Login'}
    }

    if (to.meta.requiresAuth == false && localStorage.getItem('token')) {
        return { name: 'adminHome' }
    }
})

export default router
