<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderVue from '../pages/layouts/header.vue'
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
    <HeaderVue/>

<div class="container">
<!-- Section: Design Block -->
<section class="text-center text-lg-start">
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-6 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-4">
        <p style="color:black;" v-if="error">{{ error }}</p>
        <div class="card-body py-5 px-md-5">

            <form @submit.prevent="login">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control"  v-model="form.email"/>
              <label class="form-label" for="form2Example1">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" v-model="form.password" />
              <label class="form-label" for="form2Example2">Password</label>
            </div>



            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

          </form>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<!-- Section: Design Block -->

</template>
