import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesUpdateComponent } from './my-courses-update.component';

describe('MyCoursesUpdateComponent', () => {
  let component: MyCoursesUpdateComponent;
  let fixture: ComponentFixture<MyCoursesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoursesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
