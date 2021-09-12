import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor/instructor';
import { InstructorService } from 'src/app/service/instructor/instructor.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  name: string = '';
  allInstructors: Instructor[] = [];
  instructors: Instructor[] = [];

  constructor(
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }

  getAllInstructors() {
    this.instructorService.getAllInstructors().subscribe(
      (res) => {
        this.allInstructors = res;
        this.instructors = res
      },
      (err) => console.log(err)
    )
  }

  filterByName(name: string) {    
    this.instructors = this.allInstructors.filter( (c) => c.firstname?.includes(name) || c.lastname.includes(name));
  }
}
