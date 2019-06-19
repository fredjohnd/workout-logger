import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  title: string;
  message: string;
  confirm: string;
  cancel: string;
  model?: any;
}

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent {

  defaults = {
    title: 'Please enter a value',
    message: `Enter a value`,
    confirm: 'OK',
    cancel: 'Cancel',
    model: ''
  };

  constructor(public dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  cancel() {
    this.dialogRef.close();
  }

}
