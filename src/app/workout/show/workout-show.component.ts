import { WorkoutExercise } from './../../shared/workout.model';
import { CategoryService } from './../../shared/category.service';
import { WorkoutService } from './../../shared/workout.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/shared/workout.model';
import { ExerciseService } from 'src/app/shared/exercise.service';
import { Exercise } from 'src/app/shared/exercise.model';

@Component({
  selector: 'app-workout-show',
  templateUrl: './workout-show.component.html',
  styleUrls: ['./workout-show.component.scss']
})
export class WorkoutShowComponent {

  id: string;
  workout: Workout;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private categoryService: CategoryService,
    private exerciseService: ExerciseService
    ) {

    this.route.params.subscribe(params => {
      this.model(params);
    });
   }

   model(params: Params) {
    this.id = params.id;
    this.workoutService.fetchById(this.id).subscribe(workout => {
      console.log(workout);
      this.workout = workout;
    });

  }

  getCategoryNameById(categoryId: string) {
    return this.categoryService.getCategoryNameById(categoryId);
  }

  getExerciseNameById(exerciseId: string) {
    return this.exerciseService.getExerciseNameById(exerciseId);
  }

  addExerciseValue(exercise: WorkoutExercise) {
    exercise.values.push('10x10');
    this.saveWorkout();
  }

  updateValue(categoryIndex: number, exerciseIndex: number, valueIndex: number , value: string) {
    this.workout.plan[categoryIndex].exercises[exerciseIndex].values[valueIndex] = value;
    this.saveWorkout();
  }

  saveWorkout() {
    this.workoutService.save(this.workout);
  }

}
