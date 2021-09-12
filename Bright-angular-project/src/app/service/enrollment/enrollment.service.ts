import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrollmentPath = "http://localhost:8081/enrollments/"
  constructor(private http: HttpClient) { }

  addEnrollment(enrollment: Enrollment) {
    return this.http.post<any>(this.enrollmentPath + "add", enrollment);
  }
  findEnrollmentByIds(studentId: Number, courseId: Number) {
    return this.http.get<any>(this.enrollmentPath + `${studentId}/${courseId}`);
  }
  updateEnrollment(enrollment: Enrollment) {
    return this.http.put<any>(this.enrollmentPath + "update", enrollment);
  }
}
