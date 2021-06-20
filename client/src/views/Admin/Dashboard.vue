<template>
  <div>
    <div className="main-content">
      <Header></Header>
      <router-view v-slot="slotProps">
        <transition
            enter-active-class="animate__animated animate__fadeInBottom"
            leave-active-class="animate__animated animate__fadeInBottom"
            mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from "../../components/Admin-Dashboard/Sidebar";
import Header from "../../components/Admin-Dashboard/Header";

export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar
  },
}
</script>

<style scoped>
@import "../../assets/css/dashboard.css";
@import "https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css";

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>