import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student/student';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  allStudents: Student[] = [];
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(
      result => this.allStudents = result,
      err => console.log(err)
    )
  }

  updateStudentState(Student: Student) {    
    this.studentService.updateStudentState(Student.id).subscribe(
      result => {
        let index = this.allStudents.indexOf(Student)
        this.allStudents[index].isEnabled = !this.allStudents[index].isEnabled; 
      },
      err => console.log(err)
    )
  }
}
