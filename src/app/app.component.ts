import { Component } from '@angular/core';
import { ExerciseService } from './shared/exercise.service';
import { CategoryService } from './shared/category.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private categoryService: CategoryService, private exerciseService: ExerciseService) {}

}
