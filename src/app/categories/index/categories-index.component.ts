import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories-index',
  templateUrl: './categories-index.component.html',
  styleUrls: ['./categories-index.component.scss']
})
export class CategoriesIndexComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('categories').valueChanges();
  }

  ngOnInit() {
  }

}
