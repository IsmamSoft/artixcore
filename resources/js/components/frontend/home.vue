<script setup>

import { useRouter } from 'vue-router';
import BaseVue from '../admin/layouts/base.vue';

const router = useRouter()

const logout = () => {
    localStorage.removeItem('token')
    router.push('/')
}
</script>

<template>
     <BaseVue />
    <h1>welcome Home Frontend</h1>
    <div>
        <router-link to="/home">Home</router-link>
    </div>
    <button @click="logout">Logout</button>
</template>
