import { Category } from 'src/app/shared/category.model';
import { DocumentSnapshot } from '@angular/fire/firestore';

export function serialize(data: Category) {
  return data;
}

export function normalize(doc: DocumentSnapshot<any>): Category {
  return doc.data() as Category;
}
