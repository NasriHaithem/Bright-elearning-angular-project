import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCategory } from 'src/app/models/courseCategory/course-category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.css']
})
export class CategoriesUpdateComponent implements OnInit {

  updateCategoryForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    public route: ActivatedRoute
    ) {
    let formControls = {
      categoryName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.updateCategoryForm = this.fb.group(formControls);
   }

  ngOnInit(): void {
  }

  get categoryName(): any { return this.updateCategoryForm.get('categoryName') }

  updateCategory() {
    let data = this.updateCategoryForm.value;
    const categoryName = data.categoryName;
    const categoryId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    const updatedCategory = new CourseCategory(categoryId, categoryName)
    console.log(updatedCategory);
    
    this.categoryService.updateCategory(updatedCategory).subscribe(
      (result) => {
        this.router.navigate(['/admin/categories/list'])
      },
      (err) => console.log(err)
    )
  }


}
