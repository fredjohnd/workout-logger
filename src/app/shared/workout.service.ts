import { map } from 'rxjs/operators';
import { Workout } from './workout.model';
import { Injectable, OnDestroy } from '@angular/core';
import { config } from '../app.config';
import { FirestoreService } from '../firestore.service';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService implements OnDestroy {

  endpoint = config.api.workouts;

  lastWorkout: Workout = null;
  lastWorkoutSub: Subscription = null;

  constructor(private firestore: FirestoreService) {

    // Store the most recent workout available in the db.
    this.fetchLast().subscribe((workout) => {
      this.lastWorkout = workout;
    });
  }

  fetchById(id: string) {
    return this.firestore.getSingle(`${this.endpoint}/${id}`);
  }

  fetchByIndex(index: number) {
    return this.firestore.getCollection(this.endpoint, null, {key: 'index', value: index}).pipe(
      map(data => data[0])
    );
  }

  fetchLast(): Observable<any> {

    return this.firestore.getCollection(this.endpoint, 'index:desc', null, 1).pipe(
      map(data => {
        return data[0];
      })
    );
  }

  fetchAll() {
    return this.firestore.getCollection(this.endpoint, 'start:desc');
  }

  save(workout: Workout) {
    return this.firestore.saveObject(workout.ref, workout);
  }

  add() {
    const workout: Workout = {
      start: moment(),
      finish: null,
      index: this.lastWorkout ? (this.lastWorkout.index + 1) : 0,
      plan: []
    };

    return this.firestore.createObject('workouts', workout);
  }

  delete(workout: Workout) {
    return this.firestore.deleteObject(workout);
  }

  ngOnDestroy() {
    this.lastWorkoutSub.unsubscribe();
  }
}
