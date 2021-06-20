<template>
  <div class="container">
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <router-link class="link-secondary type" to="">التقديم الان</router-link>
        </div>
        <div class="col-4 text-center">
          <router-link class="blog-header-logo" to="/">إداره الدراسات العليا</router-link>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <router-link class="link-secondary type" to="/login">تسجيل الدخول</router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "TopHeader"
}
</script>

<style scoped>

header{
  position: static;
  width: 100%;
  height: 100%;
}

  .blog-header-logo {
    color: #0497a0;
  }

  .type {
    border: 1px solid #0d959e;
    color: #0d959e;
    padding: 10px 20px;
    border-radius: 25px;
  }

  .type:hover {
    background-color: #0d959e;
    text-decoration: none;
    color: white;
  }
</style>