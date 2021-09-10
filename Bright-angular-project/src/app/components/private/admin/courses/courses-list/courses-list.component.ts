import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course/course';
import { CourseService } from 'src/app/service/course/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  allCourses: Course[] = [];
  constructor(
    private courseServices: CourseService
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseServices.getAllCourses().subscribe(
      (result) => {
        this.allCourses = result;
      },
      (err) => console.log(err)
    )
  }
}
