<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const logout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }
</script>
<template>
    <h1>Welcome to Admin Panel</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/">H</router-link>
    <button @click="logout">logout</button>
</template>
