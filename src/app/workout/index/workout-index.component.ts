import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { WorkoutService } from './../../shared/workout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute, private workoutService: WorkoutService) {

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
    this.workoutService.add().then((workoutDocument: AngularFirestoreDocument) => {
      this.router.navigate(['workouts', workoutDocument.ref.id]);
    });
  }

  // deleteWorkout(workout: Workout) {
  //   this.workoutService.delete(workout);
  // }

}
