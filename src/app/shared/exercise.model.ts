import { DocumentReference } from '@angular/fire/firestore';

export interface Exercise {
  id?: string;
  title?: string;
  category?: string;
  ref?: DocumentReference;
  description?: string;
  rank?: number;
  image?: string;
}
