import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckingInDialogComponent } from '../checking-in-dialog/checking-in-dialog.component';

@Component({
  selector: 'app-checking-in',
  templateUrl: './checking-in.component.html',
  styleUrl: './checking-in.component.scss',
})
export class CheckingInComponent {
  isCheckedIn: boolean = false;
  constructor(private dialog: MatDialog) {}

  openCheckInDialog(): void {
    const dialogRef = this.dialog.open(CheckingInDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      } else {
        console.log(result);
      }
    });
  }
  ngOnInit(): void {
    if (this.isCheckedIn) {
      this.openCheckInDialog();
    }
  }
}
