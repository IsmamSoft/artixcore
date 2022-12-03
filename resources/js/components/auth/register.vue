<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let form = reactive({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
})

let error = ref('')

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};

const register = async () => {
    await axios.post('/api/register', form)
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

        <h2>Register</h2>
        <p style="color:black;" v-if="error">{{ error }}</p>
        <form @submit.prevent="register">
            <input type="text" placeholder="Username" v-model="form.name" />
            <input type="email" placeholder="Email" v-model="form.email" />
            <input type="password" placeholder="Password" v-model="form.password" />
            <input type="password" placeholder="Confirm Password" v-model="form.confirm_password" />
            <input type="submit" value="Submit">
        </form>
            <router-link to="/">Back to Home</router-link>
            <router-link to="/login">Login</router-link>

</template>

