
<template>
      <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><a><router-link to="/home">Nazsha</router-link></a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active"><router-link to="/home">Home</router-link></a></li>
          <!-- <li><a class="nav-link scrollto">About</a></li>
          <li><a class="nav-link scrollto">Services</a></li>
          <li><a class="nav-link scrollto">Portfolio</a></li>
          <li><a class="nav-link scrollto">Team</a></li>
          <li><a class="nav-link scrollto">Pricing</a></li> -->
          <li class="dropdown"><a><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a>Drop Down 1</a></li>
              <li><a>Drop Down 2</a></li>
              <li><a>Drop Down 3</a></li>
              <li><a>Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto">Contact</a></li>
          <li><a class="nav-link scrollto" style="color:white;"><router-link to="/login">Login</router-link></a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
<!-- End Header -->
</template>
<style>
@import './assets/vendor/aos/aos.css';
  @import './assets/vendor/bootstrap/css/bootstrap.css';
  @import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
  @import './assets/vendor/boxicons/css/boxicons.min.css';
  @import './assets/css/style.css';
  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
  /* @import './assets/vendor/aos/aos.js';
  @import './assets/js/main.js'; */
</style>
