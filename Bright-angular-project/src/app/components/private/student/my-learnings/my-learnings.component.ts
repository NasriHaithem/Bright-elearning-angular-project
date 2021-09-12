import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from 'src/app/models/course/course';
import { CourseService } from 'src/app/service/course/course.service';

@Component({
  selector: 'app-my-learnings',
  templateUrl: './my-learnings.component.html',
  styleUrls: ['./my-learnings.component.css']
})
export class MyLearningsComponent implements OnInit {

  allCourses: Course[] = [];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe(
      (res) => this.allCourses = res,
      (err) => console.log(err)
    )
  }

  getCourseProgress(course: Course) {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const studentId = helper.decodeToken(token).data.id;
      
      for (const enrollment of course.enrollments) {
        if (studentId == enrollment.student.id) {
          return enrollment.progress
        }  
      }
      return 0;
    }
    return 0;
  }
}
