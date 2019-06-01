import { DocumentReference } from '@angular/fire/firestore';

export interface Category {
  ref?: DocumentReference;
  title: string;
  rank: number;
}
