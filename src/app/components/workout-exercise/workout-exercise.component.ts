import { WorkoutExercise } from './../../shared/workout.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseService } from 'src/app/shared/exercise.service';

@Component({
  selector: 'app-workout-exercise',
  templateUrl: './workout-exercise.component.html',
  styleUrls: ['./workout-exercise.component.scss']
})
export class WorkoutExerciseComponent {

  @Input() exercise: WorkoutExercise;
  @Input() categoryIndex: number;

  @Output() exerciseDelete = new EventEmitter();

  @Output() valueAdd    = new EventEmitter();
  @Output() valueUpdate = new EventEmitter();
  @Output() valueDelete = new EventEmitter();

  constructor(private exerciseService: ExerciseService) { }

  getExerciseNameById(exerciseId: string): string {
    return this.exerciseService.getExerciseNameById(exerciseId);
  }

  exerciseTracker(index: number, value: any) {
    return `${value.exercise}-${index}`;
  }

  onDeleteExercise() {
    this.exerciseDelete.emit();
  }

  onAddValue(value: string) {
    this.valueAdd.emit(value);
  }

  onUpdateValue(valueIndex: number, value: string) {
    this.valueUpdate.emit({valueIndex, value});
  }

  onDeleteValue(valueIndex: number) {
    this.valueDelete.emit(valueIndex);
  }


}
