import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseCategory } from 'src/app/models/courseCategory/course-category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  addCategoryForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
    ) {
    let formControls = {
      categoryName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.addCategoryForm = this.fb.group(formControls);
   }

  ngOnInit(): void {
  }

  get categoryName(): any { return this.addCategoryForm.get('categoryName') }

  addCategory() {
    let data = this.addCategoryForm.value;
    const newCategory = new CourseCategory(undefined, data.categoryName);
    this.categoryService.addCategory(newCategory).subscribe(
      (result) => {
        this.router.navigate(['/admin/categories/list']);
      },
      (err) => console.log(err)
    )
    
  }

}
