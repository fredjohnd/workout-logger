import { DocumentReference } from '@angular/fire/firestore';

export interface Workout {
  id: string;
  start: string;
  finish: string;
  ref?: DocumentReference;
  plan: WorkoutPlanCategory[]
}

export interface WorkoutPlanCategory {
  category: string;
  exercises: WorkoutExercise[];
}

export interface WorkoutExercise {
  exercise: string;
  values: string[];
}
