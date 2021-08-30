import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    const mySideBar = document.getElementById('accordionSidebar');
    mySideBar.classList.toggle("toggled");
    console.log(mySideBar);
    
  }
}
