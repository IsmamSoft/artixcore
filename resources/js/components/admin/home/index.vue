<script setup>
import Header from '../layouts/header.vue'
import Slide from '../layouts/sidebar.vue'
import Footer from '../layouts/footer.vue'

// import './file/js/app.js';
</script>
<template>
    <div class="wrapper">
        <Slide />
        <div class="main">
        <Header />

        <main class="content">
				<div class="container-fluid p-0">
					<h1 class="h3 mb-3">Dashboard</h1>
				</div>
			</main>

        <Footer />
       </div>
    </div>
</template>
<style>
@import './file/css/app.css';
</style>
