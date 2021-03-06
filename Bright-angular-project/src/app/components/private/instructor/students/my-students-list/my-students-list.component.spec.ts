import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudentsListComponent } from './my-students-list.component';

describe('MyStudentsListComponent', () => {
  let component: MyStudentsListComponent;
  let fixture: ComponentFixture<MyStudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStudentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
