import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from 'src/app/models/course/course';
import { Enrollment } from 'src/app/models/enrollment/enrollment';
import { Lesson } from 'src/app/models/lesson/lesson';
import { Module } from 'src/app/models/module/module';
import { CourseService } from 'src/app/service/course/course.service';
import { EnrollmentService } from 'src/app/service/enrollment/enrollment.service';
import { LessonService } from 'src/app/service/lesson/lesson.service';

@Component({
  selector: 'app-my-learnings-content',
  templateUrl: './my-learnings-content.component.html',
  styleUrls: ['./my-learnings-content.component.css']
})
export class MyLearningsContentComponent implements OnInit {

  courseDetails: Course
  allModules: Module[] = [];
  pickedLesson: Lesson;
  loading: boolean = true;
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private enrollmentService: EnrollmentService,
    private lessonService: LessonService

  ) {
  }

  ngOnInit(): void {
    this.getAllModules();
  }


  getAllModules() {
    const courseId: Number = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(courseId).subscribe(
      (res) => {
        setTimeout(() => {
          this.loading = false
        }, 2000);
        this.allModules = res.result.modules;
        this.pickedLesson = this.allModules[0].lessons[0];
        
        this.loading = false
      },
      (err) => console.log(err)
    )

  }
  nbrOfLessons() {
    let count: number = 0;
    for (const module of this.allModules) {
      count += module.lessons.length;
    }
    return count;
  }
  updateEnrollment(lesson: Lesson) {
    const courseId: Number = Number(this.route.snapshot.paramMap.get("id"));
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const studentId = helper.decodeToken(token).data.id;
      const enrollmentId = {
        studentId: studentId,
        courseId: courseId
      }
      if (!lesson.seen) {
        console.log(lesson.seen);

        this.enrollmentService.findEnrollmentByIds(studentId, courseId).subscribe(
          (res) => {
            console.log(res.result);
            
            let progress = res.result.progress/this.nbrOfLessons();
            const updatedEnrollment = new Enrollment(enrollmentId, undefined, undefined, undefined,progress)
            this.enrollmentService.updateEnrollment(updatedEnrollment).subscribe(
              (res) => console.log(res),
              (err) => console.log(err)
            )
          },
          (err) => console.log(err)
        )
      }
    }
  }
  pickLesson(lesson: Lesson) {
    this.pickedLesson = lesson;
    lesson.seen = true;
    this.lessonService.updateLesson(lesson).subscribe();
  }
}
