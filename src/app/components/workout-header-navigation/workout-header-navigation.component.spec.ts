import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutHeaderNavigationComponent } from './workout-header-navigation.component';

describe('WorkoutHeaderNavigationComponent', () => {
  let component: WorkoutHeaderNavigationComponent;
  let fixture: ComponentFixture<WorkoutHeaderNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutHeaderNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutHeaderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
