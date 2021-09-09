import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student/student';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentPath = "http://localhost:8081/students/"
  constructor(private http: HttpClient) { }

  registerStudent(student: Student) {
    return this.http.post<any>(this.studentPath + "register", student);
  }

  loginStudent(student: Student) {
    return this.http.post<any>(this.studentPath + "login", student);
  }
  isLoggedInStudent(){
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      const isEnabled = decodedToken.data.isEnabled;
      
      if (isEnabled) {
        return true
      }
      return false ;
    }
    return false;  
  }
}
