import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors-details',
  templateUrl: './instructors-details.component.html',
  styleUrls: ['./instructors-details.component.css']
})
export class InstructorsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showInstructorCourses() {
    //Make Courses Section visible and hide Biography Section
    const myCourses = document.getElementById("instructor-courses-id");
    const myBio = document.getElementById("instructor-biography-id");

    myCourses.style.display = "block";
    myBio.style.display = "none";

    //Make Courses button 'active'
    const myBioBtn = document.getElementById("my-bio-btn");
    const myCoursesBtn = document.getElementById("my-courses-btn");

    myBioBtn.classList.remove("active");
    myCoursesBtn.classList.add("active");
  }

  showInstructorBio() {
    //Make Biography Section visible and hide Courses Section
    const myCourses = document.getElementById("instructor-courses-id");
    const myBio = document.getElementById("instructor-biography-id");

    myCourses.style.display = "none";
    myBio.style.display = "block";


    //Make Biography button 'active'
    const myBioBtn = document.getElementById("my-bio-btn");
    const myCoursesBtn = document.getElementById("my-courses-btn");

    myBioBtn.classList.add("active");
    myCoursesBtn.classList.remove("active");
  }

}
