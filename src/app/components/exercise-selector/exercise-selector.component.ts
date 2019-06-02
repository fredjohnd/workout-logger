import { Component, OnInit, Input, Output } from '@angular/core';
import { ExerciseService } from 'src/app/shared/exercise.service';
import { Exercise } from 'src/app/shared/exercise.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise-selector',
  templateUrl: './exercise-selector.component.html',
  styleUrls: ['./exercise-selector.component.scss']
})
export class ExerciseSelectorComponent implements OnInit {

  exerciseList: Exercise[];
  @Input() categoryId: string;
  @Output() exerciseSelected = new EventEmitter();
  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.loadExercises();
  }

  loadExercises() {
    this.exerciseList = this.exerciseService.getExercisesForCategory(this.categoryId);
  }

  onExerciseSelect(exercise: Exercise) {
    this.exerciseSelected.emit(exercise.ref.id);
  }

}
