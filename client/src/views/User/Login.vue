<template>
  <main class="container align-items-center">
    <div class="header-login text-center">
      <h2 class="dash-title st">سجل دخول الان</h2>
      <p class="text-center">سجل دخول الان لمعرفة مزيد من الاخبار ومتابعة ما يحدث</p>
    </div>
    <div class="form">
      <b-form @submit="onSubmit">
        <b-form-group
            class="mt-3 mb-3"
            id="input-group-1"
            label="البريد الالكتروني او اسم المستخدم:"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="email"
              placeholder="ادخل البريد الالكتروني او اسم المستخدم"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="الرقم السري:" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="password"
              placeholder="الرقم السري"
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
  name: "Login",
  data() {
    return {
      email: '',
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
  main {
    width: 40%;
  }
  .header-login {
    background-color: #0d959e;
    color: white;
    padding: 50px;
  }
  .st {
    font-weight: bold;
    padding-bottom: 10px;
    display: inline-block;
  }
  .dark {
    background-color: #0d959e;
  }
  .dark:hover {
    background-color: #1D2231;

  }
</style>