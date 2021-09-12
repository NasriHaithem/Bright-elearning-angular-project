import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn(){
    let token = localStorage.getItem("myToken");
    if (token) {
      return true ;
    }
    return false;  
  }
}
