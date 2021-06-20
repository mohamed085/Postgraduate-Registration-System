<template>
  <main>
    <h2 class="dash-title st">تعديل المادة</h2>
    <div class="form">
      <b-form @submit="onSubmit">
        <b-form-group
            class="mt-3 mb-3"
            id="input-group-1"
            label="كود المادة :"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="code"
              placeholder="ادخل كود المادة"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="اسم المادة باللغه العربية :" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="courseNameInArabic"
              placeholder="ادخل اسم المادة باللغه العربية"
              class="mt-3 mb-3"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="اسم المادة باللغه الانجليزية :" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="courseNameInEnglish"
              placeholder="ادخل اسم المادة باللغه الانجليزية"
              class="mt-3 mb-3"
              required
          ></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-2" label="عدد الساعات المعتمدة :" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="hours"
              placeholder="ادخل عدد الساعات المعتمدة"
              class="mt-3 mb-3"
              required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="dark">تعديل المادة</b-button>
      </b-form>

    </div>
  </main>
</template>

<script>
export default {
  name: "Edit-Subject",
  data() {
    return {
      code: '',
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
.st {
  color: #1D2231;
  font-weight: bold;
  border-bottom: 2px solid #1D2231;
  padding-bottom: 10px;
  display: inline-block;
}
.dark {
  background-color: #0d959e;
  border: 1px solid #0d959e;
}
.dark:hover {
  background-color: #1D2231;

}
</style>