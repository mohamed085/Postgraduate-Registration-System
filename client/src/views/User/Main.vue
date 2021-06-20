<template>
  <main class="container">
    <div class="container">
      <div class="mt-2">
        <h2 class="head">نظام الدراسة بكليات الجامعة</h2>
        <p class="p">
          يبدأ الطالب بالتقدم للدراسات العليا بتحديد نوع الدراسة المتقدم لها (دبلوم - ماجستير - دكتوراه) وفقا للمواعيد المحددة لكل كلية والمستندات المطلوبة مع كل إجراء
        </p>
        <div class="d-flex"><p>للتسجيل Online:</p>&nbsp;<router-link to="">http://pgs.mans.edu.eg</router-link>
        </div>
      </div>
      <div class="mt-5">
        <h2 class="head mb-4">* البرامج الاكاديمية للدراسات العليا:</h2>
        <router-link class="type" to="/master-register">الماجيستر</router-link>
        <router-link class="type" to="">الدبلومة</router-link>
        <router-link class="type" to="">الدكتوراة</router-link>
      </div>

      <div class="mt-5">
        <h2 class="head mb-4">* دليل الطالب في الدراسات العليا</h2>
        <p class="p"> بعد مراجعة مستندات الطالب يتم أخذ موافقة كلا من مجلس القسم المختص و لجنه الدراسات و مجلس الكلية
          يتم ارسالها للإدارة العامة للدراسات العليا للاعتماد من مجلس الدراسات أو من السيد أ.د/ نائب رئيس الجامعة
          للدراسات العليا و يرفق:
        </p>
      </div>
    </div>


  </main>
</template>

<script>
export default {
name: "Main"
}
</script>

<style scoped>
.p {
  width: 50%;
  margin: 10px;
}

main p {
  font-family: 'JF-Flat-Regular';
}
a {
  color: red;
}
a:hover {
  text-decoration: none;
  color: black;
}

.type {
  border: 1px solid #0d959e;
  color: #0d959e;
  padding: 10px 30px;
  margin: 30px 10px;
  border-radius: 25px;
}

.type:hover {
  background-color: #0d959e;
  color: white;
}
</style>