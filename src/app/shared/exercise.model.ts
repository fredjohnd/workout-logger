import { DocumentReference } from '@angular/fire/firestore';

export interface Exercise {
  title: string;
  category: string;
  ref?: DocumentReference;
  description?: string;
  rank?: number;
  image?: string;
}
