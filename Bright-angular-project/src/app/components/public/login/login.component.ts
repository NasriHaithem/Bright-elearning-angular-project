import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor/instructor';
import { Student } from 'src/app/models/student/student';
import { InstructorService } from 'src/app/service/instructor/instructor.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  studentLoginForm: FormGroup
  teacherLoginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private studenService: StudentService,
    private instructorService :InstructorService,
    private router: Router
    ) {

    let studentFormControls = {
      studentEmail: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      studentPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    }
    let teacherFormControls = {
      teacherEmail: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      teacherPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.studentLoginForm = this.fb.group(studentFormControls);
    this.teacherLoginForm = this.fb.group(teacherFormControls);
  }
  //student Getters
  get studentEmail() { return this.studentLoginForm.get('studentEmail') }
  get studentPassword() { return this.studentLoginForm.get('studentPassword') }
  //teacher Getters
  get teacherEmail() { return this.teacherLoginForm.get('teacherEmail') }
  get teacherPassword() { return this.teacherLoginForm.get('teacherPassword') }
  

  studentLogin(){
    let data = this.studentLoginForm.value;
    let student = new Student(
      undefined,
      undefined,
      undefined,
      data.studentEmail,
      data.studentPassword
    )
    this.studenService.loginStudent(student).subscribe(
      (result) =>{
        let token = result.token;
        localStorage.setItem("myToken", token)
        this.router.navigate(['/courses']);
        console.log(result);
      },
      (err) => console.log(err)  
    )
  }
  teacherLogin(){
    let data = this.teacherLoginForm.value;
    let instructor = new Instructor(
      undefined,
      undefined,
      undefined,
      data.teacherEmail,
      data.teacherPassword
    )
    this.instructorService.loginInstructor(instructor).subscribe(
      (result) =>{
        let token = result.token;
        localStorage.setItem("myToken", token)
        this.router.navigate(['/instructor/courses/list']);
        console.log(result);
      },
      (err) => console.log(err)  
    )
  }


  //DOM MANIPULATION
  addTeacherFormToggledClass() {
    const box = document.querySelector(".box");
    box.classList.add("teacher-form-toggled");
  }
  removeTeacherFormToggledClass() {
    const box = document.querySelector(".box");
    box.classList.remove("teacher-form-toggled");
  }


}
