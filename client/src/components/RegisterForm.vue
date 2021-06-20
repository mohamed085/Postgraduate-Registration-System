<template>
  <div class="form">

    <form @submit="onSubmit">

    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      name: '',
      email: '',
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