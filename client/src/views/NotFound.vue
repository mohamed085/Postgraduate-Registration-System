<template>
  <section class="d-flex justify-content-center">
    <base-card>
      <h2>        الصفحة غير موجودة
      </h2>
      <p>
        تعذر العثور على هذه الصفحة - ربما تحقق من جميع ملفات
        <router-link to="/">الصفحة الرئيسية</router-link>.
      </p>
    </base-card>
  </section>
</template>
<script>
import BaseCard from "../components/ui/BaseCard";
export default {
  components: {
    BaseCard
  }
}
</script>
<style scoped>

</style>