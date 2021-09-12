import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course/course';
import { Instructor } from 'src/app/models/instructor/instructor';
import { InstructorService } from 'src/app/service/instructor/instructor.service';

@Component({
  selector: 'app-instructors-details',
  templateUrl: './instructors-details.component.html',
  styleUrls: ['./instructors-details.component.css']
})
export class InstructorsDetailsComponent implements OnInit {

  public instructorDetails: Instructor;
  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    this.getInstructorInfos();
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

  getInstructorInfos() {
    const id: Number = Number(this.route.snapshot.paramMap.get('id'));
    this.instructorService.getInstructorById(id).subscribe(
      (res) => {
        this.instructorDetails = res.result;
      },
      (err) => console.log(err)
    )
  }
  getCourseScore(course: Course) {
    let score: number = 0;
    let five: number = 0;
    let four: number = 0;
    let three: number = 0;
    let two: number = 0;
    let one: number = 0;

    const ratingsArrayLength = course.ratings.length;
    
    if (ratingsArrayLength > 0) {
      for (const rate of course.ratings) {
        let rating = rate.rating as number;
  
        switch (rating) {
          case 5:
            five += 1;
            break;
          case 4:
            four += 1;
            break;
          case 3:
            three += 1;
            break;
          case 2:
            two += 1;
            break;
          case 1:
            one += 1;
            break;
  
          default:
            break;
        }
      }
      score = (five*5+four*4+three*3+two*2+one*1)/ratingsArrayLength;
      return score
    } else {
      return 0;
    }
  }
}
