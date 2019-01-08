import { Injectable } from '@angular/core';
import { FirestoreService } from './../firestore.service';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore: FirestoreService) { }

  fetch() {
    return this.firestore.getCollection(config.api.categories);

  }
}
