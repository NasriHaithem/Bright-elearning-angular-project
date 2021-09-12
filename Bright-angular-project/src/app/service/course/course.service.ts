import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursePath = "http://localhost:8081/courses/"
  constructor(private http: HttpClient) { }

  addCourse(course: Course, course_image: File, introduction_video: File) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
 
    const formaData = new FormData();
    formaData.append("course_image", course_image);
    formaData.append("introduction_video", introduction_video);
    formaData.append("course", JSON.stringify(course));    
 
    return this.http.post<any>(this.coursePath + "add", formaData, {'headers': headers});
  }
  getAllCourses() {
    return this.http.get<any>(this.coursePath + "all");
  }
  getCourseById(id: Number) {
    return this.http.get<any>(this.coursePath + id);
  }
}
