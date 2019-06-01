import { Injectable } from '@angular/core';
import { Exercise } from '../categories/exercises/exercise.model';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private firestore: FirestoreService) { }

  add(exercise: Exercise) {
    this.firestore.createObject('exercises', exercise);
  }

  delete(exercise: Exercise) {
    this.firestore.deleteObject(exercise);
  }
}
