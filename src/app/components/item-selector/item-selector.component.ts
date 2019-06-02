import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent {

  @Input() items: any[];
  @Output() itemSelected = new EventEmitter();


  onItemSelect(item: any) {
    this.itemSelected.emit(item);
  }

}
