import { Injectable } from '@angular/core';
import { normalize, serialize } from './serializers/main.serializer';
import { map, filter } from 'rxjs/operators';
import {
  AngularFirestore,
  DocumentReference,
  DocumentData,
  DocumentSnapshot,
} from '@angular/fire/firestore';

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
        return actions.filter(a => a.payload.doc.exists).map(a => {
          return normalize(a.payload.doc as DocumentSnapshot<{}>);
        });
      })
      );
    }

    getSingle(docId) {
      return this.afs.doc(`${docId}`)
      .snapshotChanges()
      .pipe(
        filter(doc => doc.payload.exists),
        map(doc => {
          return normalize(doc.payload);
        })
        );
      }

      deleteObject(object) {
        return object.ref.delete();
      }

      createObject(objectType, objectData) {
        const id = this.afs.createId();
        const doc = this.afs.doc(`${objectType}/${id}`);
        const serialized = serialize(doc.ref, objectData);
        doc.set(serialized);
      }

      saveObject(ref: DocumentReference, objectData: DocumentData) {
        const serialized = serialize(ref, objectData);
        ref.set(serialized);
      }

    }
