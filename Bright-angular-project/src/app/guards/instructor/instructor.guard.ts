import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InstructorService } from 'src/app/service/instructor/instructor.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorGuard implements CanActivate {
  constructor(
    private instructorService: InstructorService,
    private router: Router
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.instructorService.isLoggedInInstructor()) {
        return true
      }else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
