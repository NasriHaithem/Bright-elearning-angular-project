import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Enrollment } from 'src/app/models/enrollment/enrollment';
import { Lesson } from 'src/app/models/lesson/lesson';
import { EnrollmentService } from 'src/app/service/enrollment/enrollment.service';
import { LessonService } from 'src/app/service/lesson/lesson.service';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.css']
})
export class LessonContentComponent implements OnInit {

  @Input() lessonDetails: Lesson;
  @Input() nbOfLessons: number;

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService,
    private enrollmentService: EnrollmentService
  ) { }

  ngOnInit(): void {
  }

  
}
