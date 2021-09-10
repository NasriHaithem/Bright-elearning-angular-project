import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { InstructorsComponent } from './components/public/instructors/instructors.component';
import { InstructorsDetailsComponent } from './components/public/instructors-details/instructors-details.component';
import { CoursesDetailsComponent } from './components/public/courses-details/courses-details.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { CategoriesListComponent } from './components/private/admin/categories/categories-list/categories-list.component';
import { CategoriesAddComponent } from './components/private/admin/categories/categories-add/categories-add.component';
import { CategoriesUpdateComponent } from './components/private/admin/categories/categories-update/categories-update.component';
import { CoursesListComponent } from './components/private/admin/courses/courses-list/courses-list.component';
import { InstructorsListComponent } from './components/private/admin/instructors/instructors-list/instructors-list.component';
import { StudentsListComponent } from './components/private/admin/students/students-list/students-list.component';
import { MyLearningsComponent } from './components/private/student/my-learnings/my-learnings.component';
import { MyLearningsContentComponent } from './components/private/student/my-learnings-content/my-learnings-content.component';
import { ContentSidebarComponent } from './components/private/student/my-learnings-content/content-sidebar/content-sidebar.component';
import { MyCoursesListComponent } from './components/private/instructor/courses/my-courses-list/my-courses-list.component';
import { MyCoursesAddComponent } from './components/private/instructor/courses/my-courses-add/my-courses-add.component';
import { MyCoursesUpdateComponent } from './components/private/instructor/courses/my-courses-update/my-courses-update.component';
import { MyStudentsListComponent } from './components/private/instructor/students/my-students-list/my-students-list.component';
import { AdminLoginComponent } from './components/public/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InstructorsComponent,
    InstructorsDetailsComponent,
    CoursesDetailsComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoriesListComponent,
    CategoriesAddComponent,
    CategoriesUpdateComponent,
    CoursesListComponent,
    InstructorsListComponent,
    StudentsListComponent,
    MyLearningsComponent,
    MyLearningsContentComponent,
    ContentSidebarComponent,
    MyCoursesListComponent,
    MyCoursesAddComponent,
    MyCoursesUpdateComponent,
    MyStudentsListComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
