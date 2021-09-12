import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Admin } from 'src/app/models/admin/admin';
import { Instructor } from 'src/app/models/instructor/instructor';
import { Student } from 'src/app/models/student/student';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(event) {
    if (window.innerWidth > 768) {
      const mySideBar = document.getElementById('accordionSidebar');
      mySideBar.classList.remove('collapse')
    }
  }
  public user: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userInfos();
  }
  toggleSideBar() {
    const mySideBar = document.getElementById('accordionSidebar');
    mySideBar.classList.toggle("collapse");
  }
  logout() {
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);
  }

  userInfos() {
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    this.user = decodedToken.data;
  }

  isAdmin() {
    return this.user.role.toString() == "admin";
  }
}
