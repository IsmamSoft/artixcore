<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let form = reactive({
    email: '',
    password: '',
})

let error = ref('')

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};

const login = async () => {
    await axios.post('/api/login', form)
        .then(response => {
            if (response.data.success) {
                localStorage.setItem('token', response.data.data.token)
                router.push('/admin/home')
            } else {
                error.value = response.data.message;
            }
        })
}

</script>

<template>

    <h2>Login</h2>
    <p style="color:black;" v-if="error">{{ error }}</p>
    <form @submit.prevent="login">

            <input type="email" v-model="form.email" />
            <label>Email</label>


            <input type="password" v-model="form.password" />
            <label>Password</label>


            <input type="submit" value="Submit">

        </form>
        <router-link to="/">Back to Home</router-link>
        <router-link to="/register">Register</router-link>

</template>
