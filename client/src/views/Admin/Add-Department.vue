<template>
  <main>
    <h2 class="dash-title st">اضافة قسم جديد</h2>
    <div class="form">
      <b-form @submit="onSubmit">
        <b-form-group
            class="mt-3 mb-3"
            id="input-group-1"
            label="اسم القسم :"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="depName"
              placeholder="ادخل اسم القسم"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="اضافة المواد الاجبارية :" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="courseNameInArabic"
              placeholder="ادخل اسم المادة باللغه العربية"
              class="mt-3 mb-3"
              required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="dark">تسجيل دخول</b-button>
      </b-form>

    </div>
  </main>
</template>

<script>
export default {
  name: "Add-Department",
  data() {
    return {
      depName: '',
      courseNameInArabic: '',
      courseNameInEnglish: '',
      hours: '',
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  }
}
</script>

<style scoped>

</style>