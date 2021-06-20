<template>
  <div>
    <TopHeader></TopHeader>

    <Navbar></Navbar>

    <Carousel></Carousel>

    <router-view />

  </div>
</template>

<script>
import Navbar from "../../components/User/Layout/Navbar";
import Carousel from "../../components/User/Layout/Carousel";
import TopHeader from "../../components/User/Layout/TopHeader";
export default {
  name: 'Home',
  components: {
    TopHeader,
    Carousel,
    Navbar
  },
}
</script>

<style scoped>
  @import "https://getbootstrap.com/docs/5.0/examples/blog-rtl/";
  @import "../../assets/dist/css/bootstrap.rtl.min.css";
  @import "https://fonts.googleapis.com/css?family=Amiri:wght@400;700&amp;display=swap";
  @import "../../assets/css/LandinPage.rtl.css";
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');

  * {
    text-align: right;
  }
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }


</style>