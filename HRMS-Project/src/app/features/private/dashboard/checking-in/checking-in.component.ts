import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-checking-in',
  templateUrl: './checking-in.component.html',
  styleUrl: './checking-in.component.scss',
})
export class CheckingInComponent {
  checkedIn: boolean = true;
  constructor(private matDialog: MatDialog) {}

  openCheckInDialog() {
    this.matDialog.open(DialogComponent, {
      width: '500px',
      height: '200px',
      data: { message: 'Hello from the dialog!' },
    });
  }
}
