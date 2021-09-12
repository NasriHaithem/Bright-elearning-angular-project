import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course/course';
import { CourseService } from 'src/app/service/course/course.service';

@Component({
  selector: 'app-my-courses-list',
  templateUrl: './my-courses-list.component.html',
  styleUrls: ['./my-courses-list.component.css']
})
export class MyCoursesListComponent implements OnInit {

  allCourses: Course[] =[];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }
 getAllCourses() {
   this.courseService.getAllCourses().subscribe((
     (res) => this.allCourses = res  
   ))
 }
}
