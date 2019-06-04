import { DocumentReference } from '@angular/fire/firestore';
import { Moment } from 'moment';

export interface Workout {
  id?: string;
  index?: number;
  start?: Moment;
  finish?: Moment;
  ref?: DocumentReference;
  plan?: WorkoutPlanCategory[];
}

export interface WorkoutPlanCategory {
  category: string;
  exercises: WorkoutExercise[];
}

export interface WorkoutExercise {
  exercise: string;
  values: string[];
}

// To Match Firebase timestamp
export interface WorkoutTimestamp {
  seconds: string;
  nanoseconds?: string;
}
