<template>
  <div class="container">
    <nav class="nav d-flex justify-content-between align-items-center">
      <div class="ml-2">
        <router-link class="p-2 link-secondary" to="">
          <img src="../../../assets/img/Logo.png">
        </router-link>
      </div>
      <div class="d-flex justify-content ">
        <router-link class="p-2 link-secondary" to="/">الرئيسية</router-link>
        <router-link class="p-2 link-secondary" to="/about">عن القطاع</router-link>
        <router-link class="p-2 link-secondary" to="/services">الخدمات</router-link>
        <router-link class="p-2 link-secondary" to="/contact-us"> تواصل معانا <i class="fas fa-user-tie"></i></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>
  nav {
    padding: 2px;
    height: 100%;
  }

  img {
    height: 70px;
  }

  a:hover {
    color: #0d959e;
    text-decoration: none;
  }
</style>