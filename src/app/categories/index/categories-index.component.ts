import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../../shared/category.model';

import { CategoryService } from '../../shared/category.service';


@Component({
  selector: 'app-categories-index',
  templateUrl: './categories-index.component.html',
  styleUrls: ['./categories-index.component.scss']
})
export class CategoriesIndexComponent implements OnInit {

  items: Observable<any>;

  categoryName: string;

  constructor(private categoryService: CategoryService) {
    this.items = this.categoryService.fetchAll();

    this.items.subscribe(items => {
      console.log(items);
    });
  }

  ngOnInit() {
  }

  deleteCategory(category: Category) {
    this.categoryService.delete(category);
  }

  addCategory() {
    const category: Category = {title: this.categoryName, rank: 0};
    this.categoryService.add(category);
    this.categoryName = '';
  }

}
