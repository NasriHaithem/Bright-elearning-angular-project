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
  public filteredCourses: Course[] = [];

  public title: string = ''
  public categoryIdFilter: Number | undefined = 0;
  public difficultyFilter: String | undefined = '0';
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
        this.allCategories = result;

      },
      (err) => console.log(err)
    )
  }
  getAllCourses() {
    this.courseService.getAllCourses().subscribe(
      (result) => {
        this.allCourses = result;
        this.filteredCourses = result;

      },
      (err) => console.log(err)
    )
  }

  getCourseScore(course: Course) {
    let score: number = 0;
    let five: number = 0;
    let four: number = 0;
    let three: number = 0;
    let two: number = 0;
    let one: number = 0;

    const ratingsArrayLength = course.ratings.length;
    
    if (ratingsArrayLength > 0) {
      for (const rate of course.ratings) {
        let rating = rate.rating as number;
  
        switch (rating) {
          case 5:
            five += 1;
            break;
          case 4:
            four += 1;
            break;
          case 3:
            three += 1;
            break;
          case 2:
            two += 1;
            break;
          case 1:
            one += 1;
            break;
  
          default:
            break;
        }
      }
      score = (five*5+four*4+three*3+two*2+one*1)/ratingsArrayLength;
      return score
    } else {
      return 0;
    }
  }

  filterCourses(
    id: Number | undefined,
    difficulty: String | undefined
    ) {
      this.difficultyFilter = difficulty;
      this.categoryIdFilter = id;

    /* id == 0 ? 
    this.filteredCourses= this.allCourses 
    : 
    this.filteredCourses= this.allCourses.filter( (c) => c.courseCategory.id == id && c.difficulty == difficulty); */
    if (id==0 && difficulty=='0' && this.title=="") {
      this.filteredCourses= this.allCourses;
      this.categoryIdFilter = 0;
      this.difficultyFilter = '0';
    }else if (id==0 ) {
      this.categoryIdFilter = 0;
      this.filteredCourses= this.allCourses.filter( (c) => c.difficulty == difficulty);
    }else if (difficulty == '0') {
      this.difficultyFilter = '0';
      this.filteredCourses= this.allCourses.filter( (c) => c.courseCategory.id == id);
    }else {
      this.filteredCourses= this.allCourses.filter( (c) => c.courseCategory.id == id && c.difficulty == difficulty);
    }
  }
}
