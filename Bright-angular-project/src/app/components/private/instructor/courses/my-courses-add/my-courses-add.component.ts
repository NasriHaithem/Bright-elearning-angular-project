import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-courses-add',
  templateUrl: './my-courses-add.component.html',
  styleUrls: ['./my-courses-add.component.css']
})
export class MyCoursesAddComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  //MAIN FORM GROUP
  courseDetailsForm = this.fb.group({
    title : [''],
    overview : [''],
    price : [''],
    modules : this.fb.array([this.addModule()]),
    image : [''],
    category : [''],
    difficulty : ['']
  })

  ngOnInit(): void {
    
  }
  //courseDetailsForm Getters
  get title() { return this.courseDetailsForm.get('title')};
  get overview() { return this.courseDetailsForm.get('overview')};
  get price() { return this.courseDetailsForm.get('price')};
  get image() { return this.courseDetailsForm.get('image')};
  get category() { return this.courseDetailsForm.get('category')};
  get difficulty() { return this.courseDetailsForm.get('difficulty')};
  get modules() { return this.courseDetailsForm.get('modules') as FormArray};

    //module subform getters
  get moduleTitle() { return this.courseDetailsForm.get('modules').get('moduleTitle')};
  get lessonTitle() { return this.courseDetailsForm.get('modules').get('lessons').get('lessonTitle')};
  get lessonDescription() { return this.courseDetailsForm.get('modules').get('lessons').get('lessonDescription')};
  get lessonVideo() { return this.courseDetailsForm.get('modules').get('lessons').get('lessonVideo')};
  
    
  //this function add a new module group to the 'modules' array attribute in
  //the main courseDetailsForm form group
  addModuleClickEvent(): void {
    
    let  moduleArray = (<FormArray>this.courseDetailsForm.get('modules'));
    const moduleArrayLength = moduleArray.length;
    moduleArray.push(this.addModule());

    setTimeout(() => {
      let el = document.getElementById(`moduleTitle${moduleArrayLength}`);
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }, 100);
  }

  //this function access the i'th element of the 'modules' array attribute
  //and add a new lesson group to the 'lessons' array attribute
  addLessonClickEvent(i: number, j: number): void {
    let moduleArray = (<FormArray>this.courseDetailsForm.get('modules')).at(i);
    let lessonArray = (<FormArray>moduleArray.get('lessons'));
    lessonArray.push(this.addLesson());

    setTimeout(() => {
      let el = document.getElementById(`lessonTitle${j+1}-${i}`);
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }, 100);
  }



  removeModuleClickEvent(i: number) {
    let moduleArray = (<FormArray>this.courseDetailsForm.get('modules'));
    
    moduleArray.removeAt(i);
  }
  removeLessonClickEvent(i: number, j: number) {
    let moduleArray = (<FormArray>this.courseDetailsForm.get('modules')).at(i);
    let lessonArray = (<FormArray>moduleArray.get('lessons'));
    
    lessonArray.removeAt(j);
  }



  addModule() : FormGroup{
    return this.fb.group({
      moduleTitle : [''],
      lessons : this.fb.array([this.addLesson()])
    })
  }

  addLesson() : FormGroup{
    return this.fb.group({
      lessonTitle : [''],
      lessonDescription : [''],
      lessonVideo : ['']
    })
  }
}
