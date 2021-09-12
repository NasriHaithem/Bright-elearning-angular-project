import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin/admin.service';
import { InstructorService } from 'src/app/service/instructor/instructor.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private instructorService: InstructorService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    const mySideBar = document.getElementById('accordionSidebar');
    mySideBar.classList.toggle("toggled");
    console.log(mySideBar);
  }

  isStudentLogged(){
    return this.studentService.isLoggedInStudent()
  }
  isInstructorLogged(){
    return this.instructorService.isLoggedInInstructor()
  }
  isAdminLogged(){
    return this.adminService.isLoggedInAdmin()
  }
}
