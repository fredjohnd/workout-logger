import { DocumentSnapshot, DocumentReference, DocumentData } from '@angular/fire/firestore';
import { normalize as normalizeCategory } from './category.serializer';
import { normalize as normalizeExercise } from './exercise.serializer';
import { normalize as normalizeWorkout } from './workout.serializer';

import { serialize as serializeCategory } from './category.serializer';
import { serialize as serializeExercise } from './exercise.serializer';
import { serialize as serializeWorkout } from './workout.serializer';


export function normalize(doc: DocumentSnapshot<any>) {
  const path = doc.ref.path;
  const modelName = path.split('/')[0];
  let data;
  switch (modelName) {
    case 'categories':
      data = normalizeCategory(doc);
    break;
    case 'exercises':
      data = normalizeExercise(doc);
    break;
    case 'workouts':
      data = normalizeWorkout(doc);
    break;
    default:
      data = doc.data();
    break;
  }

  if (data && doc.exists) {
    data.id = doc.id;
    data.ref = doc.ref;
  }

  console.log(data);
  return data;
}

export function serialize(ref: DocumentReference, docData: DocumentData): DocumentData {

  const path = ref.path;
  const modelName = path.split('/')[0];

  let data;
  switch (modelName) {
    case 'categories':
      data = serializeCategory(docData);
    break;
    case 'exercises':
      data = serializeExercise(docData);
    break;
    case 'workouts':
      data = serializeWorkout(docData);
    break;
    default:
      data = docData;
    break;
  }

  return data as DocumentData;
}
