import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Admin } from 'src/app/models/admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminPath = "http://localhost:8081/admins/"

  constructor(private http: HttpClient) { }
  

  loginAdmin(admin: Admin) {
    return this.http.post<any>(this.adminPath + "login", admin);
  }
  isLoggedInAdmin(){
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      const role = decodedToken.data.role;
      
      if (role == "admin") {
        return true
      }
      return false ;
    }
    return false;  
  }
}
