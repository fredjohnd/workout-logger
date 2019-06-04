import { take } from 'rxjs/operators';
import { WorkoutService } from './../../shared/workout.service';
import { Workout } from 'src/app/shared/workout.model';
import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-workout-header-navigation',
  templateUrl: './workout-header-navigation.component.html',
  styleUrls: ['./workout-header-navigation.component.scss']
})
export class WorkoutHeaderNavigationComponent implements OnInit, OnChanges {

  @Input() model: Workout;

  previousWorkout: Workout = null;
  nextWorkout: Workout = null;
  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
  }

  // Check if the workout model has changed. If it has then load the respective previous and next workouts
  ngOnChanges(changes: SimpleChanges) {
    if (changes.model) {
      const prev: Workout = changes.model.previousValue;
      const current: Workout = changes.model.currentValue;

      if (!current) {
        this.previousWorkout = null;
        this.nextWorkout = null;
        return;
      }

      const prevId = prev ? prev.id : null;
      const currId = current.id;

      if (changes.model.firstChange || prevId !== currId) {
        this.workoutService.fetchByIndex(current.index - 1).pipe(take(1)).subscribe(result => {
          this.previousWorkout = <Workout>result;
        });
        this.workoutService.fetchByIndex(current.index + 1).pipe(take(1)).subscribe(result => {
          this.nextWorkout = <Workout>result;
        });
      }
    }
  }

}
