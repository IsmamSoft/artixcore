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
<router-view/>
<router-link to="/">Home</router-link>
<router-link to="/">Welcome</router-link>
<router-link to="/login">Login</router-link>

   <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            The best offer <br />
            <span style="color: hsl(218, 81%, 75%)">for your business</span>
          </h1>
          <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">

          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

          <p v-if="error">{{ error }}}</p>

          <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">

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
                <!-- <button type="submit" class="btn btn-outline-primary btn-block mb-4">
                  Login
                </button> -->

                <!-- Register buttons -->
                <div class="text-center">
                  <p>or signin with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i style="color: #000000;" class="fa-brands fa-facebook fa-2x"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i style="color: #000000;" class="fa-brands fa-google fa-2x"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i style="color: #000000;" class="fa-brands fa-twitter fa-2x"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i style="color: #000000;" class="fa-brands fa-github fa-2x"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>
