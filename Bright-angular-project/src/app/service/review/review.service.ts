import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseReview } from 'src/app/models/courseReview/course-review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewPath = "http://localhost:8081/course-reviews/"
  constructor(private http: HttpClient) { }

  addReview(review: CourseReview) {
    return this.http.post<any>(this.reviewPath + "add", review);
  }}
