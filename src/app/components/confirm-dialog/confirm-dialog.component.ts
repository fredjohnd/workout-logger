import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  title: string;
  message: string;
  confirm: string;
  reject: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  model: string;

  defaults = {
    title: 'Confirm?',
    message: `Are you sure?`,
    confirm: 'Yes',
    cancel: 'No'
  };

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    cancel() {
      this.dialogRef.close();
    }

  }
