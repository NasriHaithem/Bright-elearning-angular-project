import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor/instructor';
import { InstructorService } from 'src/app/service/instructor/instructor.service';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.css']
})
export class InstructorsListComponent implements OnInit {

  allInstructors: Instructor[] = [];
  constructor(
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }

  getAllInstructors() {
    this.instructorService.getAllInstructors().subscribe(
      result => this.allInstructors = result,
      err => console.log(err)
    )
  }

  updateInstructorState(instructor: Instructor) {    
    this.instructorService.updateInstructorState(instructor.id).subscribe(
      result => {
        let index = this.allInstructors.indexOf(instructor)
        this.allInstructors[index].isEnabled = !this.allInstructors[index].isEnabled; 
      },
      err => console.log(err)
    )
  }
}
