import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor/instructor';
import { Student } from 'src/app/models/student/student';
import { InstructorService } from 'src/app/service/instructor/instructor.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  studentRegisterForm: FormGroup
  teacherRegisterForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private instructorService: InstructorService,
    private router: Router
  ) {

    let studentFormControls = {
      studentFirstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      studentLastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      studentEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      studentPassword: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\.#?!@$%^&*-]).{0,}$"),
        Validators.minLength(8)
      ]),
      studentRepassword: new FormControl('', [
        Validators.required,
      ])
    }

    let teacherFormControls = {
      teacherFirstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      teacherLastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      teacherEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      teacherProfession: new FormControl('', [
        Validators.required
      ]),
      teacherPassword: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\.#?!@$%^&*-]).{0,}$"),
        Validators.minLength(8)
      ]),
      teacherRepassword: new FormControl('', [
        Validators.required,
      ])
    }
    this.studentRegisterForm = this.fb.group(studentFormControls);
    this.teacherRegisterForm = this.fb.group(teacherFormControls);
  }

  //student Getters
  get studentFirstname() { return this.studentRegisterForm.get('studentFirstname') }
  get studentLastname() { return this.studentRegisterForm.get('studentLastname') }
  get studentEmail() { return this.studentRegisterForm.get('studentEmail') }
  get studentPassword() { return this.studentRegisterForm.get('studentPassword') }
  get studentRepassword() { return this.studentRegisterForm.get('studentRepassword') }

  //teacher Getters
  get teacherFirstname() { return this.teacherRegisterForm.get('teacherFirstname') }
  get teacherLastname() { return this.teacherRegisterForm.get('teacherLastname') }
  get teacherEmail() { return this.teacherRegisterForm.get('teacherEmail') }
  get teacherProfession() { return this.teacherRegisterForm.get('teacherProfession') }
  get teacherPassword() { return this.teacherRegisterForm.get('teacherPassword') }
  get teacherRepassword() { return this.teacherRegisterForm.get('teacherRepassword') }


  studentRegister() {
    let data = this.studentRegisterForm.value;
    let newStudent = new Student(
      undefined,
      data.studentFirstname,
      data.studentLastname,
      data.studentEmail,
      data.studentPassword,
    )
    console.log(newStudent);
    this.studentService.registerStudent(newStudent).subscribe(
      (result) => {
        this.router.navigate(['/login']);
        console.log("result: \n");

        
      },
      (err) => console.log(err)  
    )
  }
  teacherRegister() {
    let data = this.teacherRegisterForm.value;
    let newInstructor = new Instructor(
      undefined,
      data.teacherFirstname,
      data.teacherLastname,
      data.teacherEmail,
      data.teacherPassword,
      data.teacherProfession
    )
    this.instructorService.registerInstructor(newInstructor).subscribe(
      (result) => {
        this.router.navigate(['/login']);
        console.log("result: \n");
        console.log(result);
        
      },
      (err) => console.log(err)  
    )
  }




  //DOM MANIPULATION
  addSignUpMode() {
    const box = document.querySelector(".box");
    box.classList.add("teacher-form-toggled");
  }
  removeSignUpMode() {
    const box = document.querySelector(".box");
    box.classList.remove("teacher-form-toggled");
  }

}
