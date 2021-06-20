<template>
  <div class="d-flex justify-content-center">
    <base-card>
      <span class="count_top"><i class="fa fa-user"></i>&nbsp; الطلاب الجدد</span>
      <div class="count">500</div>
      <router-link to="/admin/presenters">عرض الكل</router-link>
    </base-card>
    <base-card>
    <span class="count_top"><i class="fa fa-user"></i>&nbsp; كل الطلاب</span>
      <div class="count">2500</div>
      <router-link to="/admin/presenters">عرض الكل</router-link>
    </base-card>
    <base-card>
      <span class="count_top"><i class="fa fa-user"></i>&nbsp; الطلاب المقبولة</span>
      <div class="count">600</div>
      <router-link to="/admin/presenters">عرض الكل</router-link>
    </base-card>
    <base-card>
      <span class="count_top"><i class="fa fa-user"></i>&nbsp; الطلاب المرفوضة</span>
      <div class="count">100</div>
      <router-link to="/admin/presenters">عرض الكل</router-link>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "../ui/BaseCard";
export default {
name: "Trendy",
  components: {BaseCard}
}
</script>
<style scoped>

  .count_top {
    font-size: 13px;
    white-space: nowrap;
    color: #73879C;

  }
  .count {
    font-size: 40px;
    line-height: 47px;
    font-weight: 600;
    white-space: nowrap;
    color: #73879C;
    padding: 5px 10px 0;
  }

  a {
    color: #73879C;
    padding: 5px 13px 0;
  }

  a:hover {
    color: #1D2231;
    padding: 5px 13px 0;
  }
</style>