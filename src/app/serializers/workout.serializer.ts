import { Workout } from 'src/app/shared/workout.model';
import { DocumentSnapshot, DocumentData } from '@angular/fire/firestore';
import * as moment from 'moment';


export function normalize(doc: DocumentSnapshot<any>): Workout {
  const data = doc.data(); // hello
  data.start = data.start ? moment(data.start) : null;
  data.finish = data.finish ? moment(data.start) : null;
  return data as Workout;
}

export function serialize(data: DocumentData): DocumentData {

  data.start = data.start ? moment(data.start).toISOString() : null;
  data.finish = data.finish ? moment(data.finish).toISOString() : null;
  return data;
}
