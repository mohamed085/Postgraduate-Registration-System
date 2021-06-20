import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/User/Home.vue'
import Dashboard from "../views/Admin/Dashboard";
import HomeDashboard from "../views/Admin/Home";
import Presenters from "../views/Admin/Presenters";
import Departments from "../views/Admin/Departments";
import EditSubject from "../views/Admin/Edit-Subject";
import AddSubject from "../views/Admin/Add-Subject";
import AddDepartment from "../views/Admin/Add-Department";
import ContactUs from "../views/User/ContactUs";
import Services from "../views/User/Services";
import About from "../views/User/About";
import Login from "../views/User/Login";
import NotFound from "../views/NotFound";
import Main from "../views/User/Main";
import MasterRegister from "../views/User/MasterRegister";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, children: [
      { path: '', component: Main },
      { path: '/contact-us', component: ContactUs },
      { path: '/services', component: Services },
      { path: '/about', component: About },
      { path: '/master-register', component: MasterRegister },
      ]
  },
  { path: '/login', component: Login },
  { path: '/admin', component: Dashboard, children: [
      { path: '/admin/dashboard', component: HomeDashboard },
      { path: '/admin/presenters', component: Presenters },
      { path: '/admin/departments', component: Departments },
      { path: '/admin/edit-subject', component: EditSubject },
      { path: '/admin/add-subject', component: AddSubject },
      { path: '/admin/add-department', component: AddDepartment },
      ]
  },
  { path: '/:notFound(.*)', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
