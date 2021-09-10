import { Component, OnInit } from '@angular/core';
import { CourseCategory } from 'src/app/models/courseCategory/course-category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  allCategories: CourseCategory[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.allCategories = result
      },
      (err) => console.log(err)
    )
  }
  deleteCategory(category: CourseCategory) {
    this.categoryService.deleteCategory(category.id).subscribe(
      (result) => {
        let index = this.allCategories.indexOf(category);
        this.allCategories.splice(index, 1);
      },
      (err) => console.log(err)
    )
  }
}
