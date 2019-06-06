import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { config } from '../app.config';
import { Category } from './category.model';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor(private firestore: FirestoreService, private exerciseService: ExerciseService) {

    // Store categories
    this.fetchAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  fetchById(id) {
    return this.firestore.getSingle(`${config.api.categories}/${id}`);
  }

  fetchAll(sortBy = 'rank') {
    return this.firestore.getCollection(config.api.categories, sortBy);
  }

  fetchExercises(sortBy = 'title') {
    return this.firestore.getCollection(config.api.exercises, sortBy);
  }

  fetchExercisesForCategory(categoryId, sortBy = 'title') {
    return this.firestore.getCollection(config.api.exercises, sortBy, {key: 'category', value: categoryId});
  }

  addExerciseToCategory(category: Category, exerciseId: string) {
    if (!category.exercises) {
      category.exercises = [];
    }
    category.exercises.push(exerciseId);
    this.firestore.saveObject(category.ref, category);
  }

  removeExerciseFromCategory(category: Category, exerciseId: string) {
    if (!category.exercises) {
      category.exercises = [];
    }
    const index = category.exercises.indexOf(exerciseId);
    category.exercises.splice(index, 1);
    this.firestore.saveObject(category.ref, category);
  }

  delete(category: Category) {
    this.firestore.deleteObject(category);
  }

  add(category: Category) {
    this.firestore.createObject('categories', category);
  }

  getCategoryNameById(id: string) {
    const category = this.categories.find(c => c.ref.id === id);
    return category ? category.title : null;
  }
}
