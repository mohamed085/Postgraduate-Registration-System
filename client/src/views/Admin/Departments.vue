<template>
  <main>
    <div class="d-flex justify-content-between">
      <h2 class="dash-title st">الاقسام المتاحة</h2>
      <b-button class="d-flex align-items-center pr-3 pl-3" to="/admin/add-department" variant="outline-primary">اضافة قسم جديد</b-button>
    </div>
    <div class="dep mt-4">
      <div class="d-flex justify-content-between">
        <h3>الماجيستير في تخصص علوم الحاسب</h3>
        <b-button to="/admin/add-subject" variant="outline-primary">اضافة مادة جديدة</b-button>
      </div>
      <div class="table-responsive">
        <ul>
          <li class="mt-4 mb-3">
            <span>المقررات الاجبارية</span>
            <table>
              <thead>
                <tr>
                  <th>الكود</th>
                  <th>اسم المقرر</th>
                  <th>Course name</th>
                  <th>عدد الساعات المعتمدة</th>
                  <th>الاعدادات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CS611</td>
                  <td>تصميم وتحليل الخوارزميات</td>
                  <td>Design and Analysis of Parallel Algorithms</td>
                  <td>3</td>
                  <td class="links">
                    <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                    <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                  </td>
                </tr>
                <tr>
                  <td>CS611</td>
                  <td>تصميم وتحليل الخوارزميات</td>
                  <td>Design and Analysis of Parallel Algorithms</td>
                  <td>3</td>
                  <td class="links">
                    <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                    <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاختيارية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاضافية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>

        </ul>
      </div>
    </div>

    <div class="dep mt-4">
      <div class="d-flex justify-content-between">
        <h3>الماجيستير في تخصص نظم المعلومات</h3>
        <b-button to="/admin/add-subject" variant="outline-primary">اضافة مادة جديدة</b-button>
      </div>
      <div class="table-responsive">
        <ul>
          <li class="mt-4 mb-3">
            <span>المقررات الاجبارية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاختيارية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاضافية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to="/admin/edit-subject"><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>

        </ul>
      </div>
    </div>

    <div class="dep mt-4">
      <div class="d-flex justify-content-between">
        <h3>الماجيستير في تخصص علوم الحاسب</h3>
        <b-button to="/admin/add-subject" variant="outline-primary">اضافة مادة جديدة</b-button>
      </div>
      <div class="table-responsive">
        <ul>
          <li class="mt-4 mb-3">
            <span>المقررات الاجبارية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاختيارية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاضافية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>

        </ul>
      </div>
    </div>

    <div class="dep mt-4">
      <div class="d-flex justify-content-between">
        <h3>الماجيستير في تخصص علوم الحاسب</h3>
        <b-button to="/admin/add-subject" variant="outline-primary">اضافة مادة جديدة</b-button>
      </div>
      <div class="table-responsive">
        <ul>
          <li class="mt-4 mb-3">
            <span>المقررات الاجبارية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاختيارية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>
          <li class="mt-4 mb-3">
            <span>المقررات الاضافية</span>
            <table>
              <thead>
              <tr>
                <th>الكود</th>
                <th>اسم المقرر</th>
                <th>Course name</th>
                <th>عدد الساعات المعتمدة</th>
                <th>الاعدادات</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              <tr>
                <td>CS611</td>
                <td>تصميم وتحليل الخوارزميات</td>
                <td>Design and Analysis of Parallel Algorithms</td>
                <td>3</td>
                <td class="links">
                  <router-link to=""><i class="fas fa-edit"></i></router-link> |
                  <router-link to=""><i class="far fa-trash-alt"></i></router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </li>

        </ul>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "Departments"
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

.dep {
  padding-bottom: 40px;
  border-bottom: 2px solid #1D2231;
}
.btn {
  padding-bottom: 2px;
}
</style>