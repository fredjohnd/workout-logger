import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutShowComponent } from './workout-show.component';

describe('WorkoutShowComponent', () => {
  let component: WorkoutShowComponent;
  let fixture: ComponentFixture<WorkoutShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
