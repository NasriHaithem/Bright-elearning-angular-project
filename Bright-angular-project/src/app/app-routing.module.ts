import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAddComponent } from './components/private/admin/categories/categories-add/categories-add.component';
import { CategoriesListComponent } from './components/private/admin/categories/categories-list/categories-list.component';
import { CategoriesUpdateComponent } from './components/private/admin/categories/categories-update/categories-update.component';
import { CoursesListComponent } from './components/private/admin/courses/courses-list/courses-list.component';
import { InstructorsListComponent } from './components/private/admin/instructors/instructors-list/instructors-list.component';
import { StudentsListComponent } from './components/private/admin/students/students-list/students-list.component';
import { MyCoursesAddComponent } from './components/private/instructor/courses/my-courses-add/my-courses-add.component';
import { MyCoursesListComponent } from './components/private/instructor/courses/my-courses-list/my-courses-list.component';
import { MyCoursesUpdateComponent } from './components/private/instructor/courses/my-courses-update/my-courses-update.component';
import { MyStudentsListComponent } from './components/private/instructor/students/my-students-list/my-students-list.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { MyLearningsContentComponent } from './components/private/student/my-learnings-content/my-learnings-content.component';
import { MyLearningsComponent } from './components/private/student/my-learnings/my-learnings.component';
import { AdminLoginComponent } from './components/public/admin-login/admin-login.component';
import { CoursesDetailsComponent } from './components/public/courses-details/courses-details.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { InstructorsDetailsComponent } from './components/public/instructors-details/instructors-details.component';
import { InstructorsComponent } from './components/public/instructors/instructors.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'courses', pathMatch:'full'},
  {path: 'courses', component:CoursesComponent},
  {path: 'courses/details', component:CoursesDetailsComponent},
  {path: 'instructors', component:InstructorsComponent},
  {path: 'instructors/details', component:InstructorsDetailsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},

  {path: 'admin/login', component:AdminLoginComponent},
  {path: 'admin/categories/list', component:CategoriesListComponent},
  {path: 'admin/categories/add', component:CategoriesAddComponent},
  {path: 'admin/categories/update/:id', component:CategoriesUpdateComponent},
  {path: 'admin/courses/list', component:CoursesListComponent},
  {path: 'admin/courses/details', component:CoursesDetailsComponent},
  {path: 'admin/instructors/list', component:InstructorsListComponent},
  {path: 'admin/students/list', component:StudentsListComponent},

  {path: 'student/courses/list', component:MyLearningsComponent},
  {path: 'student/courses/content', component:MyLearningsContentComponent},

  {path: 'instructor/courses/list', component:MyCoursesListComponent},
  {path: 'instructor/courses/add', component:MyCoursesAddComponent},
  {path: 'instructor/courses/update', component:MyCoursesUpdateComponent},
  {path: 'instructor/students/list', component:MyStudentsListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
