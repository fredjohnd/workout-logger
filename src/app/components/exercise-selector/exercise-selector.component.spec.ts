import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSelectorComponent } from './exercise-selector.component';

describe('ExerciseSelectorComponent', () => {
  let component: ExerciseSelectorComponent;
  let fixture: ComponentFixture<ExerciseSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
