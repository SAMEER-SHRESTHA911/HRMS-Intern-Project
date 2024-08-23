import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private matDialog: MatDialog) {}
  checkedIn: boolean = true;

  openCheckInDialog() {
    this.matDialog.open(DialogComponent, {
      width: '500px',
      height: '200px',
      data: { message: 'Hello from the dialog!' },
    });
  }
}
