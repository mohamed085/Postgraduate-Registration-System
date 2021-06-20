<template>
  <div class="container">
    <div class="text-center mb-5">
      <h3 class="st">تسجيل قيد بالدراسات العليا</h3>
      <br>
      <h3 class="st">درجة الماجيستير</h3>
    </div>
    <div class="form mt-4">
      <b-form class="row g-3" @submit="onSubmit">
        <h4 class="st">معلومات عنك </h4>
        <div class="col-md-6">
          <label class="form-label">الاسم : (من واقع شهادة الميلاد)</label>
          <input
              v-model="name"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-6">
          <label class="form-label">اسم الوالد : (من واقع شهادة الميلاد)</label>
          <input
              v-model="fatherName"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-3">
          <label class="form-label">تاريخ الميلاد : </label>
          <input
              v-model="dateOfBirth"
              type="date"
              class="form-control"
          >
        </div>

        <div class="col-md-3">
        <label class="form-label">محل الميلاد : (القرية)</label>
        <input
            v-model="village"
            type="text"
            class="form-control"
        >
        </div>

        <div class="col-md-3">
          <label class="form-label">المركز : </label>
          <input
              v-model="city"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-3">
          <label class="form-label">المحافظة : </label>
          <input
              v-model="state"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-4">
          <label class="form-label">الرقم القومي : </label>
          <input
              v-model="id"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-4">
          <label class="form-label">جهة اصدارها : </label>
          <input
              v-model="idPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-4">
          <label class="form-label">تاريخ الاصدار : </label>
          <input
              v-model="idDate"
              type="date"
              class="form-control"
          >
        </div>

        <div class="col-12">
          <label class="form-label">الموقف من التجند :</label>
          <input
              v-model="ThePositionOnRecruitment"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-6">
          <label class="form-label">الوظيف الحالية : </label>
          <input
              v-model="job"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-6">
          <label class="form-label">جهة العمل : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-8">
          <label class="form-label">العنوان : </label>
          <input
              v-model="address"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-4">
          <label class="form-label">رقم التلفون : </label>
          <input
              v-model="phoneNumber"
              type="text"
              class="form-control"
          >
        </div>

        <h4 class="st mt-5">الدرجات العلمية الحاصل عليها</h4>
        <h5 class="stt mt-5">اولا </h5>

        <div class="form-check mr-3">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            بكاليريوس
          </label>
        </div>
        <div class="form-check mr-3">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            ليسانس
          </label>
        </div>

        <div class="col-md-8">
          <label class="form-label">في : </label>
          <input
              v-model="job"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-4">
          <label class="form-label">دور : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-4">
          <label class="form-label">تقدير عام : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-4">
          <label class="form-label">شعبة : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-4">
          <label class="form-label">تقدير التخصص : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-8">
          <label class="form-label">من كلية : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-4">
          <label class="form-label">جامعة : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <h5 class="stt mt-5">ثانيا</h5>
        <div class="col-md-8">
          <label class="form-label">دبلوم الدراسات العليا في  : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-4">
          <label class="form-label">دور : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-8">
          <label class="form-label">تخصص : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-4">
          <label class="form-label">بتقدير : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>
        <div class="col-md-8">
          <label class="form-label">من كلية : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-md-4">
          <label class="form-label">جامعة : </label>
          <input
              v-model="jobPlace"
              type="text"
              class="form-control"
          >
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary pr-3 pl-3">تسجيل</button>
        </div>
      </b-form>

    </div>
  </div>
</template>

<script>
export default {
  name: "MasterRegister",
  data() {
    return {
      name: '',
      fatherName: '',
      dateOfBirth: '',
      village: '',
      city: '',
      state: '',
      nationality: '',
      Religion: '',
      id: '',
      idPlace: '',
      idDate: '',
      ThePositionOnRecruitment: '',
      job: '',
      jobPlace: '',
      address: '',
      phoneNumber: '',
      selected: '',



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
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
.st {
  color: #1D2231;
  font-weight: bold;
  border-bottom: 2px solid #1D2231;
  padding-bottom: 10px;
  display: inline-block;
  font-family: 'Cairo', sans-serif;
}
.stt {
  color: #1D2231;
  font-weight: bold;
  padding-bottom: 10px;
  display: inline-block;
  font-family: 'Cairo', sans-serif;
}
.form {
  margin: 10px 0 70px;
}

</style>