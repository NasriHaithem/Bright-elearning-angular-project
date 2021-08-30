import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningsContentComponent } from './my-learnings-content.component';

describe('MyLearningsContentComponent', () => {
  let component: MyLearningsContentComponent;
  let fixture: ComponentFixture<MyLearningsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLearningsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLearningsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
