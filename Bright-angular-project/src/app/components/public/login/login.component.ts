import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

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
    console.log(data);
  }
  teacherLogin(){
    let data = this.teacherLoginForm.value;
    console.log(data);
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
