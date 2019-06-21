import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workout-footer',
  templateUrl: './workout-footer.component.html',
  styleUrls: ['./workout-footer.component.scss']
})
export class WorkoutFooterComponent {

  @Output() showCategoryPicker  = new EventEmitter();
  @Output() workoutSave         = new EventEmitter();
  @Output() workoutDelete       = new EventEmitter();
  @Output() workoutSetStartDate = new EventEmitter();
  @Output() workoutFinish       = new EventEmitter();

}
