import { Category } from './shared/category.model';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
  DocumentReference,
  DocumentData,
} from '@angular/fire/firestore';
import { Exercise } from './shared/exercise.model';
import { Workout } from './shared/workout.model';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  getCollection(collectionName: string, orderBy?: string, where?: {key: string, value: string}) {
    return this.afs
    .collection(collectionName, (ref) => {
      // return ref;
      if (where) {
        return ref.where(where.key, '==', where.value).orderBy(orderBy);
      } else {
        if (orderBy) {
          const orderByArgs = orderBy.split(':');

          // for some reason typescript doesn't like the variable orderByArgs[1] as the second parameter,
          // it really wants a string with either 'desc' or 'asc' so we got to work around it
          // return ref.orderBy(orderByArgs[0], orderByArgs[1]);
          return ref.orderBy(orderByArgs[0], orderByArgs[1] === 'desc' ? 'desc' : 'asc');
        } else {
          return ref;
        }
      }
    })
    .snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {

          // get doc type
          const path = a.payload.doc.ref.path;
          const interfaceType = path.split('/')[0];

          let data;
          // Get doc data
          switch (interfaceType) {
            case 'exercises':
            data = a.payload.doc.data() as Exercise;
            break;
            case 'categories':
            data = a.payload.doc.data() as Category;
            break;
            case 'workout':
            data = a.payload.doc.data() as Workout;
            break;
            default:
            data = a.payload.doc.data();
            break;
          }

          // Get doc id
          const id = a.payload.doc.id;
          const ref = a.payload.doc.ref;

          data.id = id;
          data.ref = ref;
          return data;
          // return {id, ref, ...data};
        });
      })
      );
    }

    getSingle(docId) {
      return this.afs.doc(`${docId}`)
      .snapshotChanges()
      .pipe(
        map(doc => {

          // get doc type
          const path = doc.payload.ref.path;
          const interfaceType = path.split('/')[0];

          let data;
          // Get doc data
          switch (interfaceType) {
            case 'exercises':
            data = doc.payload.data() as Exercise;
            break;
            case 'categories':
            data = doc.payload.data() as Category;
            break;
            default:
            data = doc.payload.data();
            break;
          }

          if (data && doc.payload.exists) {
            data.id = doc.payload.id;
            data.ref = doc.payload.ref;
          }
          return data;
        })
        );
      }

      deleteObject(object) {
        return object.ref.delete();
      }

      createObject(objectType, objectData) {
        const id = this.afs.createId();
        const doc = this.afs.doc(`${objectType}/${id}`);
        doc.set(objectData);
      }

      saveObject(ref: DocumentReference, objectData: DocumentData) {
        ref.set(objectData);
      }

    }
