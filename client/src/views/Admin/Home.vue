<template>
  <main>

    <h2 class="dash-title st">اهم الاحداث</h2>

    <Trendy></Trendy>


    <section class="recent">
      <div class="activity-grid">
        <div class="activity-card">
          <h2 class="st">التقديمات الجديدة</h2>
          <Table></Table>
        </div>

      </div>
    </section>

  </main>
</template>

<script>
import Trendy from "../../components/Admin-Dashboard/Trendy";
import Table from "../../components/Admin-Dashboard/Table";
export default {
  name: "Home",
  components: {Table, Trendy}
}
</script>

<style scoped>
.st {
  color: #1D2231;
  font-weight: bold;
  border-bottom: 2px solid #1D2231;
  padding-bottom: 10px;
  display: inline-block;
}
</style>