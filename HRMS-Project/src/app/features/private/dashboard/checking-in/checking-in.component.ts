import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { DialogData } from '../../../../shared/components/model/dialog.interface';

@Component({
  selector: 'app-checking-in',
  templateUrl: './checking-in.component.html',
  styleUrl: './checking-in.component.scss',
})
export class CheckingInComponent {
  checkedIn: boolean = true;
  constructor(private dialog: MatDialog) { }

  openCheckInDialog() {
    const dialogData: DialogData = {
      titleArray: ['Are you sure?'],
      buttonArray: [
        {
          label: 'Cancel',
          type: 'mat-warn',
          action: () => {
            return;
          },
        },
      ],
    };
    this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }
}
