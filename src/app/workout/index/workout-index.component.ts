import { WorkoutService } from './../../shared/workout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Workout } from 'src/app/shared/workout.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-index',
  templateUrl: './workout-index.component.html',
  styleUrls: ['./workout-index.component.scss']
})
export class WorkoutIndexComponent {

  id: string;
  items: Observable<Workout[]>;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {

    this.route.params.subscribe(params => {
      this.model(params);
    });
   }

   model(params: Params) {
    this.id = params.id;
    this.items = this.workoutService.fetchAll();
    this.items.subscribe(ex => {
      console.log(ex);
    });
  }

  addWorkout() {
    this.workoutService.add();
  }

  // deleteWorkout(workout: Workout) {
  //   this.workoutService.delete(workout);
  // }

}
