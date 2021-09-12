import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
  logout() {
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);
  }
  isAdmin() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const role = helper.decodeToken(token).data.role;

      if (role == "admin") {
        return true
      } else false;
    } else {
      return false
    }
  }
  isStudent() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const role = helper.decodeToken(token).data.role;

      if (role == "student") {
        return true
      } else false;
    } else {
      return false;
    }
  }
  isInstructor() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const role = helper.decodeToken(token).data.role;

      if (role == "instructor") {
        return true
      } else false;
    }else {
      return false;
    }
  }
}
