import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesAddComponent } from './my-courses-add.component';

describe('MyCoursesAddComponent', () => {
  let component: MyCoursesAddComponent;
  let fixture: ComponentFixture<MyCoursesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoursesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
