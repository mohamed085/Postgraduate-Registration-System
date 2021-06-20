<template>
  <div class="table-responsive">
    <table>
      <thead>
      <tr>
        <th>الاسم</th>
        <th>المؤهل الدراسي</th>
        <th>سنة التخرج</th>
        <th>التقدير العام</th>
        <th>الوظيفة الحالية</th>
        <th>الموقف من التجنيد</th>
        <th>الحالة</th>
        <th>الاعدادات</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge accept">مقبول</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td>
      </tr>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge waiting">انتظار</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td> </tr>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge reject">مرفوض</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td> </tr>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge reject">مرفوض</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td> </tr>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge reject">مرفوض</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td> </tr>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge reject">مرفوض</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td> </tr>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge reject">مرفوض</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td> </tr>
      <tr>
        <td>محمد عماد</td>
        <td>كلية الحاسبات</td>
        <td>22 Aug, 2020</td>
        <td>جيد جدا</td>
        <td>مهندس برمجيات</td>
        <td>اعفاء</td>
        <td>
          <span class="badge reject">مرفوض</span>
        </td>
        <td class="links">
          <router-link to=""><i class="fas fa-edit"></i></router-link> |
          <router-link to=""><i class="far fa-trash-alt"></i></router-link>
        </td> </tr>


      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table"
}
</script>

<style scoped>
  .links {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }


  .links a:hover {
    color: #8390A2;
  }

</style>