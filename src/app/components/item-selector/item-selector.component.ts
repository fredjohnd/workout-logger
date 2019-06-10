import { Component, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  model: any;
  title: string;
  confirm: string;
  cancel: string;
}

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent {

  defaults = {
    title: 'Please select an item',
    confirm: 'Add',
    cancel: 'Cancel'
  };

  constructor(public dialogRef: MatDialogRef<ItemSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    cancel() {
      this.dialogRef.close();
    }

  }
