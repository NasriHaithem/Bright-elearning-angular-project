import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(event) {
    if(window.innerWidth>768) {
      const mySideBar = document.getElementById('accordionSidebar');
      mySideBar.classList.remove('collapse')
    }    
  }
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    const mySideBar = document.getElementById('accordionSidebar');
    mySideBar.classList.toggle("collapse");  
  }
}
