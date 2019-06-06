import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Category } from '../../shared/category.model';
import { Exercise } from '../../shared/exercise.model';

import { CategoryService } from '../../shared/category.service';
import { ExerciseService } from '../../shared/exercise.service';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent implements OnDestroy {

  exerciseName: string;
  id: string;
  items: Observable<Exercise[]>;
  category: Category;
  modelSubscription: Subscription = null;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private exerciseService: ExerciseService) {

    this.route.params.subscribe(params => {
      this.model(params);
    });
   }

   model(params) {
    this.id = params.id;
    this.modelSubscription = this.categoryService.fetchById(this.id).subscribe(cat => {
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
      rank: 0,
      category: this.category.ref.id
    };

    this.exerciseService.add(exercise).then((doc)  => {
      this.categoryService.addExerciseToCategory(this.category, doc.ref.id);
    });

    this.exerciseName = '';
  }

  deleteExercise(exercise: Exercise) {
    this.exerciseService.delete(exercise);
    this.categoryService.removeExerciseFromCategory(this.category, exercise.ref.id);
  }

  ngOnDestroy() {
    this.modelSubscription.unsubscribe();
  }

}
