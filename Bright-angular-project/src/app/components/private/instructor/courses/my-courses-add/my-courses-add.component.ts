import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from 'src/app/models/course/course';
import { CourseCategory } from 'src/app/models/courseCategory/course-category';
import { Instructor } from 'src/app/models/instructor/instructor';
import { Lesson } from 'src/app/models/lesson/lesson';
import { Module } from 'src/app/models/module/module';
import { CategoryService } from 'src/app/service/category/category.service';
import { CourseService } from 'src/app/service/course/course.service';
import { LessonService } from 'src/app/service/lesson/lesson.service';
import { ModuleService } from 'src/app/service/module/module.service';

@Component({
  selector: 'app-my-courses-add',
  templateUrl: './my-courses-add.component.html',
  styleUrls: ['./my-courses-add.component.css']
})
export class MyCoursesAddComponent implements OnInit {
  allCategories: CourseCategory[] = [];

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private moduleService: ModuleService,
    private lessonService: LessonService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  //MAIN FORM GROUP
  courseDetailsForm = this.fb.group({
    title: [''],
    overview: [''],
    price: [''],
    modules: this.fb.array([this.addModule()]),
    course_image: [File],
    category: [''],
    difficulty: [''],
    introduction_video: [File],
    estimated_duration: ['']
  })

  onImageChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.courseDetailsForm.patchValue({
        course_image: file
      });
    }
  }
  onVideoChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.courseDetailsForm.patchValue({
        introduction_video: file
      });
    }
  }
  //SUBMIT METHOD
  submitCourse() {
    let formValues = this.courseDetailsForm.value;
    let token = localStorage.getItem('myToken');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    const instructor = new Instructor(decodedToken.data.id);
    const category = new CourseCategory(formValues.category);

    let newCourse = new Course(
      undefined,
      formValues.title,
      formValues.price,
      formValues.overview,
      formValues.course_image.name,
      formValues.difficulty,
      formValues.estimated_duration,
      formValues.introduction_video.name,
      instructor,
      category
    )

    console.log(formValues.course_image);
    console.log(formValues.introduction_video.name);

    this.courseService.addCourse(newCourse, formValues.course_image, formValues.introduction_video).subscribe(
      (resp) => {


        const courseObject = new Course(resp.result.id);

        for (const module of formValues.modules) {
          const newModule = new Module(undefined, module.moduleTitle, courseObject)

          this.moduleService.addModule(newModule).subscribe(
            (resp) => {
              const moduleObject = new Module(resp.result.id);

              for (const lesson of module.lessons) {
                const newLesson = new Lesson(undefined, lesson.lessonTitle, lesson.lessonDescription, lesson.lessonVideo, undefined, moduleObject)

                this.lessonService.addLesson(newLesson)
                  .subscribe((
                    (resp) => {
                      console.log("added successfully");
                    }
                  ))
              }
            },
            (err) => console.log(err)
          )
        }
      },
      (err) => console.log(err)
    )

  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (result) => this.allCategories = result,
      (err) => console.log(err)
    )
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
  //courseDetailsForm Getters
  get title() { return this.courseDetailsForm.get('title') };
  get overview() { return this.courseDetailsForm.get('overview') };
  get price() { return this.courseDetailsForm.get('price') };
  get image() { return this.courseDetailsForm.get('image') };
  get category() { return this.courseDetailsForm.get('category') };
  get difficulty() { return this.courseDetailsForm.get('difficulty') };
  get modules() { return this.courseDetailsForm.get('modules') as FormArray };

  //module subform getters
  get moduleTitle() { return this.courseDetailsForm.get('modules').get('moduleTitle') };
  get lessonTitle() { return this.courseDetailsForm.get('modules').get('lessons').get('lessonTitle') };
  get lessonDescription() { return this.courseDetailsForm.get('modules').get('lessons').get('lessonDescription') };
  get lessonVideo() { return this.courseDetailsForm.get('modules').get('lessons').get('lessonVideo') };


  //this function add a new module group to the 'modules' array attribute in
  //the main courseDetailsForm form group
  addModuleClickEvent(): void {

    let moduleArray = (<FormArray>this.courseDetailsForm.get('modules'));
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
      let el = document.getElementById(`lessonTitle${j + 1}-${i}`);
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



  addModule(): FormGroup {
    return this.fb.group({
      moduleTitle: [''],
      lessons: this.fb.array([this.addLesson()])
    })
  }

  addLesson(): FormGroup {
    return this.fb.group({
      lessonTitle: [''],
      lessonDescription: [''],
      lessonVideo: ['']
    })
  }
}
