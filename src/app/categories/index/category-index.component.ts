import { ConfirmDialogComponent } from './../../components/confirm-dialog/confirm-dialog.component';
import { InputDialogComponent } from './../../components/input-dialog/input-dialog.component';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../../shared/category.model';

import { CategoryService } from '../../shared/category.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.scss']
})
export class CategoryIndexComponent implements OnInit {

  items: Observable<any>;

  // categoryName: string;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {
    this.items = this.categoryService.fetchAll('rank');

    this.items.subscribe(items => {
      console.log(items);
    });
  }

  ngOnInit() {
  }

  openModalAddCategory() {
    const dialogRef = this.dialog.open(InputDialogComponent);
    dialogRef.afterClosed().subscribe(categoryName => {
      if (categoryName) {
        this.addCategory(categoryName);
      }
    });
  }

  openModalDeleteCategory(category: Category) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: `Are you sure you want to delete the category "${category.title}"?`,
      }
    });
    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.deleteCategory(category);
      }
    });
  }

  deleteCategory(category: Category) {
    this.categoryService.delete(category);
  }

  addCategory(categoryName: string) {
    const category: Category = {title: categoryName, rank: 0, image: 'bench.png'};
    this.categoryService.add(category);
  }

}
