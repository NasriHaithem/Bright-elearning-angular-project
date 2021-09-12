import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Enrollment } from 'src/app/models/enrollment/enrollment';
import { Student } from 'src/app/models/student/student';
import { InstructorService } from 'src/app/service/instructor/instructor.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-my-students-list',
  templateUrl: './my-students-list.component.html',
  styleUrls: ['./my-students-list.component.css']
})
export class MyStudentsListComponent implements OnInit {

  allEnrollments: Enrollment[] = [];
  constructor(
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    this.getMyStudents();
  }

  getMyStudents() {
    const token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedData = helper.decodeToken(token).data;

      this.instructorService.getMyStudents(decodedData.id).subscribe(
        (res) => this.allEnrollments = res.result,
        (err) => console.log(err)
      )
    }
  }
}
