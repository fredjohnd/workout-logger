import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFooterComponent } from './workout-footer.component';

describe('WorkoutFooterComponent', () => {
  let component: WorkoutFooterComponent;
  let fixture: ComponentFixture<WorkoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
