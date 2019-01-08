import { Category } from './categories/category.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  getCollection(collectionName: string, orderBy: string = 'rank') {
    return this.afs
    .collection(collectionName, (ref) => ref.orderBy(orderBy))
    .snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {

          // Get doc data
          const data = a.payload.doc.data() as Category;

          // Get doc Id
          const id = a.payload.doc.id;

          return {id, ...data};
        });
      })
    );
  }

}
