import { Injectable } from '@angular/core';
import { normalize, serialize } from './serializers/main.serializer';
import { map, filter } from 'rxjs/operators';
import {
  AngularFirestore,
  DocumentReference,
  DocumentData,
  DocumentSnapshot,
  CollectionReference,
  Query,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  getCollection(collectionName: string, orderBy?: string, where?: {key: string, value: any}, limit: number = 100) {
    return this.afs
    .collection(collectionName, (ref) => {

      let query: CollectionReference | Query = ref;

      if (where) {
        query = ref.where(where.key, '==', where.value);
      }

      if (orderBy) {
        const orderByArgs = orderBy.split(':');

        // for some reason typescript doesn't like the variable orderByArgs[1] as the second parameter,
        // it really wants a string with either 'desc' or 'asc' so we got to work around it
        // return ref.orderBy(orderByArgs[0], orderByArgs[1]);
        query = query.orderBy(orderByArgs[0], orderByArgs[1] === 'desc' ? 'desc' : 'asc');
      }

      if (limit) {
        query = query.limit(limit);
      }

      return query;
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
        return doc.set(serialized).then(() => {
          return doc;
        });
      }

      saveObject(ref: DocumentReference, objectData: DocumentData) {
        const serialized = serialize(ref, objectData);
        ref.set(serialized);
      }

    }
