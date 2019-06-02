import { WorkoutService } from './../../shared/workout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/shared/workout.model';

@Component({
  selector: 'app-workout-show',
  templateUrl: './workout-show.component.html',
  styleUrls: ['./workout-show.component.scss']
})
export class WorkoutShowComponent {

  id: string;
  workout: Observable<Workout>;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {

    this.route.params.subscribe(params => {
      this.model(params);
    });
   }

   model(params) {
    this.id = params.id;
    this.workoutService.fetchById(this.id).subscribe(workout => {
      console.log(workout);
      this.workout = workout;
    });

  }

}
