import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DialogButton, DialogData } from '../model/dialog.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: DialogData,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    console.log(this.data);
  }

  onButtonClick(action: () => void) {
    action();
    this.dialogRef.close();
  }
}
