import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent {

  model: string;

  constructor(public dialogRef: MatDialogRef<InputDialogComponent>) { }

  cancel() {
    this.dialogRef.close();
  }

}
