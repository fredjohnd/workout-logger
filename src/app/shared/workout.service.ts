import { Workout } from './workout.model';
import { Injectable } from '@angular/core';
import { config } from '../app.config';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private firestore: FirestoreService) {}

  fetchById(id: string) {
    return this.firestore.getSingle(`${config.api.workouts}/${id}`);
  }

  fetchAll() {
    return this.firestore.getCollection(config.api.workouts, 'start:desc');
  }

  save(workout: Workout) {
    return this.firestore.saveObject(workout.ref, workout);
  }
}
