import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Instructor } from 'src/app/models/instructor/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private instructorPath = "http://localhost:8081/instructors/"
  constructor(private http: HttpClient) { }

  registerInstructor(instructor: Instructor) {
    return this.http.post<any>(this.instructorPath + "register", instructor);
  }

  loginInstructor(instructor: Instructor) {
    return this.http.post<any>(this.instructorPath + "login", instructor);
  }

  isLoggedInInstructor(){
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      const instructor: Instructor = decodedToken.data;
      
      if (instructor.isEnabled && instructor.role == "instructor" ) {
        return true
      }
      return false ;
    }
    return false;  
  }

  getAllInstructors() {
    return this.http.get<any>(this.instructorPath + "all");
  }

  getInstructorById(id:Number) {
    return this.http.get<any>(this.instructorPath + id);
  }

  updateInstructorState(id: Number) {
    return this.http.patch<any>(this.instructorPath + `updateState/${id}`, {});
  }

  getMyStudents(id: Number) {
    return this.http.get<any>(this.instructorPath + `${id}/students`);
  }
}
