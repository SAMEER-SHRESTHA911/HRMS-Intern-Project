import { MatSnackBar } from '@angular/material/snack-bar';
import { FETCH_PROFILE_DETAILS_ACTION } from './../../../profile-details/store/profile-details.action';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckingInDialogComponent } from '../checking-in-dialog/checking-in-dialog.component';
import { Observable, of } from 'rxjs';
import { CheckedInStatusState } from '../../store/checkin-in/checkin-in.state';
import { Store } from '@ngrx/store';
import { selectCheckCheckedInStatusData } from '../../store/checkin-in/checkin-in.selector';
import { ProfileDetailsState } from '../../../profile-details/store/profile-details.state';
import { ProfileDetails } from '../../../profile-details/models/profile-details';

import { selectProfileDetails } from '../../../profile-details/store/profile-details.selector';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FETCH_CHECKED_IN_STATUS } from '../../store/checkin-in/checkin-in.actions';
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
  profileDetails$: Observable<ProfileDetails | null> = of(null);
  loggedInUserId: string | null = localStorage.getItem('employeeId');

  constructor(
    private dialog: MatDialog,
    private store: Store<CheckedInStatusState>,
    private profileStore: Store<ProfileDetailsState>,
    private snackBar: MatSnackBar
  ) {}
  selectorInitializer(): void {
    this.store.dispatch(FETCH_CHECKED_IN_STATUS());
    this.checkedInStatus$ = this.store.select(selectCheckCheckedInStatusData);
    this.profileStore.dispatch(
      FETCH_PROFILE_DETAILS_ACTION({ profileId: this.loggedInUserId ?? '' })
    );
    this.profileDetails$ = this.profileStore.select(selectProfileDetails);
    // this.profileDetails$.subscribe((data) => console.log(data));
    this.checkedInStatus$.subscribe((data) => {
      this.isCheckedIn = data;
      console.log('are you checkedIn: ', data);
    });
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
    this.selectorInitializer();

    if (!this.isCheckedIn) {
      setTimeout(() => {
        this.snackBar.open(
          'You are not Checked In, Please check-in!',
          'Close',
          {
            duration: 8000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          }
        );
      }, 5000);
    }
  }
}
