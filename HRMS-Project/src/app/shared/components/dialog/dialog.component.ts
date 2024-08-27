import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogButton } from '../model/dialog.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input() TitleArray: string[] = [];
  @Input() ButtonArray: DialogButton[] = [];
  @Output() buttonClick = new EventEmitter<string>();
  constructor() {}
  onButtonClick(action: string) {
    this.buttonClick.emit(action);
  }
}
