import { Category } from './../../shared/category.model';
import { WorkoutExercise, WorkoutPlanCategory } from './../../shared/workout.model';
import { CategoryService } from './../../shared/category.service';
import { WorkoutService } from './../../shared/workout.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Workout } from 'src/app/shared/workout.model';
import { ExerciseService } from 'src/app/shared/exercise.service';
import { Exercise } from 'src/app/shared/exercise.model';
import * as moment from 'moment';

@Component({
  selector: 'app-workout-show',
  templateUrl: './workout-show.component.html',
  styleUrls: ['./workout-show.component.scss']
})
export class WorkoutShowComponent {

  id: string;
  workout: Workout;

  showExercisePicker = false;
  showCategoryPicker = false;
  itemPickerData = null;
  itemPickerId: string;

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
      if (workout) {
        this.workout = workout;
      }
    });

  }

  getCategoryNameById(categoryId: string): string {
    return this.categoryService.getCategoryNameById(categoryId);
  }

  getExerciseNameById(exerciseId: string): string {
    return this.exerciseService.getExerciseNameById(exerciseId);
  }

  onShowExercisePicker(category: WorkoutPlanCategory) {
    this.showExercisePicker = true;
    this.itemPickerData = this.exerciseService.getExercisesForCategory(category.category);
    this.itemPickerId = category.category;
  }

  onShowCategoryPicker() {
    this.showCategoryPicker = true;
    this.itemPickerData = this.categoryService.categories;
  }

  onCloseItemPicker() {
    this.showExercisePicker = false;
    this.showCategoryPicker = false;
    this.itemPickerData = null;
    this.itemPickerId = null;
  }

  onEndWorkout() {
    this.workout.finish = moment().startOf('m');
    this.saveWorkout();
  }

  addCategoryToPlan(category: Category) {
    const workoutCategory: WorkoutPlanCategory = {
      category: category.ref.id,
      exercises: []};

    this.workout.plan.push(workoutCategory);
    this.onCloseItemPicker();
  }

  addExerciseToCategory(item: Exercise) {
    const categoryIndex = this.workout.plan.findIndex(cat => cat.category === this.itemPickerId);
    const exercise: WorkoutExercise = {
      exercise: item.ref.id,
      values: []
    };
    this.workout.plan[categoryIndex].exercises.push(exercise);
    this.saveWorkout();
    this.onCloseItemPicker();
  }

  deleteExercise(categoryIndex: number, exerciseIndex: number) {
    this.workout.plan[categoryIndex].exercises.splice(exerciseIndex, 1);
    this.saveWorkout();
  }

  deleteCategory(categoryIndex: number) {
    this.workout.plan.splice(categoryIndex, 1);
    this.saveWorkout();
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
