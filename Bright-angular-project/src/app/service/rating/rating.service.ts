import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseRate } from 'src/app/models/courseRate/course-rate';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private ratePath = "http://localhost:8081/course-rates/"
  constructor(private http: HttpClient) { }

  addRate(rate: CourseRate) {
    return this.http.post<any>(this.ratePath + "add", rate);
  }
}
