import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.css']
})
export class CategoriesUpdateComponent implements OnInit {

  updateCategoryForm: FormGroup
  constructor(private fb: FormBuilder) {
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
    console.log(data);
  }

}
