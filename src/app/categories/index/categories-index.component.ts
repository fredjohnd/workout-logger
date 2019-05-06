import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories-index',
  templateUrl: './categories-index.component.html',
  styleUrls: ['./categories-index.component.scss']
})
export class CategoriesIndexComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private catServ: CategoriesService) {
    this.items = this.catServ.fetch();
  }

  ngOnInit() {
  }

  deleteCategory(category) {
    this.catServ.delete(category);
  }

}
