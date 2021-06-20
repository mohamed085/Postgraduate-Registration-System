<template>
  <main>
    <h2 class="dash-title st">الطلاب المتقدمين</h2>
    <section class="recent">
      <div class="activity-grid">
        <div class="activity-card">
          <Table></Table>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Table from "../../components/Admin-Dashboard/Table";
export default {
  name: "Presenters",
  components: {Table}
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