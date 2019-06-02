import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { config } from '../app.config';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor(private firestore: FirestoreService) {

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
