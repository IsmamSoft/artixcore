<script setup>
// import axios from 'axios';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
// import router from '../../router';

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
        if(response.data.success){
            localStorage.setItem('token', response.data.data.token)
            router.push('/dashboard')
        } else {
            error.value = response.data.message;
        }
    })
}

</script>

<template>

          <p v-if="error">{{ error }}}</p>

                <form @submit.prevent="login">

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Email address</label>
                  <input type="email" name="email" class="form-control @error('email') is-invalid @enderror" v-model="form.email">
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                   <label class="form-label" for="form3Example4">Password</label>
                  <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" v-model="form.password">
                </div>

                <!-- Submit button -->
                <input type="submit" class="btn btn-outline-primary btn-block mb-4" value="Submit">
                </form>

</template>
