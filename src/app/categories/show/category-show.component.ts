import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Category } from '../../shared/category.model';
import { Exercise } from '../../shared/exercise.model';

import { CategoryService } from '../../shared/category.service';
import { ExerciseService } from '../../shared/exercise.service';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent {

  // @ViewChild('exerciseName') exerciseName: ElementRef;
  exerciseName: string;
  id: string;
  items: Observable<Exercise[]>;
  category: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private exerciseService: ExerciseService) {

    this.route.params.subscribe(params => {
      this.model(params);
    });
   }

   model(params) {
    this.id = params.id;
    this.categoryService.fetchById(this.id).subscribe(cat => {
      console.log(cat);
      this.category = cat;
    });

    this.items = this.categoryService.fetchExercisesForCategory(this.id);
    this.items.subscribe(ex => {
      console.log(ex);
    });
  }

  addExercise() {
    const exercise: Exercise = {
      title: this.exerciseName,
      // title: this.exerciseName.nativeElement.value,
      rank: 0,
      category: this.category.ref.id
    };

    this.exerciseService.add(exercise);
    this.exerciseName = '';
  }

  deleteExercise(exercise: Exercise) {
    this.exerciseService.delete(exercise);
  }

}
