import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course/course';
import { CourseCategory } from 'src/app/models/courseCategory/course-category';
import { CategoryService } from 'src/app/service/category/category.service';
import { CourseService } from 'src/app/service/course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public allCategories: CourseCategory[] = [];
  public allCourses: Course[] = []

  constructor(
    private categoryService: CategoryService,
    private courseService: CourseService
    ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllCourses();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.allCategories = result
      },
      (err) => console.log(err)
    )
  }
  getAllCourses() {
    this.courseService.getAllCourses().subscribe(
      (result) => {
        this.allCourses = result
      },
      (err) => console.log(err)
    )
  }
}
