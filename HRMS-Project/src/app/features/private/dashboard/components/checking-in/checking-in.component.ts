import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckingInDialogComponent } from '../checking-in-dialog/checking-in-dialog.component';
import { Observable, of } from 'rxjs';
import { CheckedInStatusState } from '../../store/checkin-in/checkin-in.state';
import { Store } from '@ngrx/store';
import { selectCheckCheckedInStatusData } from '../../store/checkin-in/checkin-in.selector';

@Component({
  selector: 'app-checking-in',
  templateUrl: './checking-in.component.html',
  styleUrl: './checking-in.component.scss',
})
export class CheckingInComponent {
  isCheckedIn: boolean = false;
  checkedInStatus$: Observable<boolean> = of(false);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);

  constructor(
    private dialog: MatDialog,
    private store: Store<CheckedInStatusState>
  ) {}
  selectInitilizer(): void {
    this.checkedInStatus$ = this.store.select(selectCheckCheckedInStatusData);
  }

  openCheckInDialog(): void {
    const dialogRef = this.dialog.open(CheckingInDialogComponent, {
      width: '600px',
      data: { isCheckedIn: this.isCheckedIn },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      } else {
        console.log('closes');
      }
    });
  }
  ngOnInit(): void {
    if (this.isCheckedIn) {
      this.openCheckInDialog();
    }
  }
}
