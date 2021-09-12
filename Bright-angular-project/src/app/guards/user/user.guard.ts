import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/service/admin/admin.service';
import { InstructorService } from 'src/app/service/instructor/instructor.service';
import { StudentService } from 'src/app/service/student/student.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private studentService: StudentService,
    private instructorService: InstructorService,
    private adminService: AdminService,
    private router: Router
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (
        this.studentService.isLoggedInStudent() || 
        this.instructorService.isLoggedInInstructor() ||
        this.adminService.isLoggedInAdmin()
        ) {
        return true
      }else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
