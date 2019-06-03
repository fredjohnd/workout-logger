import { Exercise } from 'src/app/shared/exercise.model';
import { DocumentSnapshot } from '@angular/fire/firestore';

export function serialize(data: Exercise) {
  return data;
}

export function normalize(doc: DocumentSnapshot<any>): Exercise {
  return doc.data() as Exercise;
}
