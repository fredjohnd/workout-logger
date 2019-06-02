import { config } from './../app.config';
import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises: Exercise[];

  constructor(private firestore: FirestoreService) {

    // Store exercises
    this.fetchAll().subscribe(exercises => {
      this.exercises = exercises;
    });
  }

  fetchAll() {
    return this.firestore.getCollection(config.api.exercises, 'category');
  }

  add(exercise: Exercise) {
    this.firestore.createObject('exercises', exercise);
  }

  delete(exercise: Exercise) {
    this.firestore.deleteObject(exercise);
  }

  getExerciseNameById(exerciseId: string) {
    const exercise = this.exercises.find(e => e.ref.id === exerciseId);
    return exercise ? exercise.title : null;
  }

  getExercisesForCategory(categoryId: string) {
    return this.exercises.filter(e => e.category === categoryId);
  }
}
