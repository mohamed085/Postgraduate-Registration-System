<template>
  <main>
    <h2 class="dash-title st">اضافة موظف جديد</h2>
    <div class="form">
      <b-form @submit="onSubmit">
        <b-form-group
            class="mt-3 mb-3"
            id="input-group-1"
            label="اسم الموظف :"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="name"
              placeholder="ادخل اسم الموظف"
              required
          ></b-form-input>
        </b-form-group>


        <b-form-group
            class="mt-3 mb-3"
            id="input-group-1"
            label="الوظيفة :"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="job"
              placeholder="ادخل الوظيفة"
              required
          ></b-form-input>
        </b-form-group>


        <b-form-group
            class="mt-3 mb-3"
            id="input-group-1"
            label="اسم المستخدم :"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="username"
              placeholder="ادخل اسم المستخدم الخاص بالموظف"
              required
          ></b-form-input>
        </b-form-group>


        <b-form-group
            class="mt-3 mb-3"
            id="input-group-1"
            label="كلمة السر :"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="password"
              placeholder="ادخل كلمة السر الخاصة بالموظف"
              required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="dark">اضافة موظف</b-button>
      </b-form>

    </div>
  </main>

</template>

<script>
export default {
  name: "AddEmployee",
  data() {
    return {
      name: '',
      job: '',
      username: '',
      password: '',
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