import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Exercise } from './exercise.model';

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
