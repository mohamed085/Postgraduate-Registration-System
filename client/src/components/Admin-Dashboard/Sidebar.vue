<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h3 class="brand">
        <span class="ti-unlink"></span>
        &nbsp;<span>الداشبورد</span>
      </h3>
    </div>
    <div class="sidebar-menu">
      <ul>
        <li>
          <router-link class="p-3" to="/admin/dashboard">
            <span class="ti-home"></span>
            <span class="mr-2"> الصفحه الرئيسية</span>
          </router-link>
        </li>
        <li>
          <router-link class="p-3" to="/admin/departments">
            <span class="ti-agenda"></span>
            <span class="mr-2"> الاقسام</span>
          </router-link>
        </li>
        <li>
          <router-link class="p-3" to="/admin/presenters">
            <span class="ti-agenda"></span>
            <span class="mr-2"> المتقدمون</span>
          </router-link>
        </li>
        <li>
          <router-link class="p-3" to="/admin/students">
            <span class="ti-clipboard"></span>
            <span class="mr-2"> الطلاب المسجله</span>
          </router-link>
        </li>
        <li>
          <router-link class="p-3" to="/admin/tasks">
            <span class="ti-folder"></span>
            <span class="mr-2"> اضافة تاسك جديده</span>
          </router-link>
        </li>
        <li>
          <router-link class="p-3" to="/admin/setting">
            <span class="ti-time"></span>
            <span class="mr-2"> الاعدادات</span>
          </router-link>
        </li>
        <li>
          <router-link class="p-3" to="/admin/contact">
            <span class="ti-book"></span>
            <span class="mr-2"> اضافة موظف جديد </span>
          </router-link>
        </li>
        <li>
          <router-link class="p-3" to="/admin/user">
            <span class="ti-settings"></span>
            <span class="mr-2"> الصفحة الشخصية </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
  .sidebar,.sidebar-menu {
    padding: 20px 0;
  }


  ul {
    padding: 0;
  }

  li a {
    display: block;
  }

  li a:active,
  li:hover a,
  li a.router-link-active {
    background-color: #f1f5f9;
    color: #1D2231;
    text-decoration: none;
  }

  li a:hover:not(.router-link-active) {
    background-color: #1D2231;
    color: #f1f5f9;
    text-decoration: none;
  }

</style>