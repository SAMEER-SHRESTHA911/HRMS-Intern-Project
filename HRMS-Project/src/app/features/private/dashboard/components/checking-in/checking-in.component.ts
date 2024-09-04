import { loggedInUser } from './../../../../../shared/constants/global.constants';
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
    private profileStore: Store<ProfileDetailsState>
  ) {}
  selectorInitializer(): void {
    this.checkedInStatus$ = this.store.select(selectCheckCheckedInStatusData);
    this.profileDetails$ = this.profileStore.select(selectProfileDetails);
    this.profileDetails$.subscribe((data) => console.log(data));
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
    this.profileStore.dispatch(
      FETCH_PROFILE_DETAILS_ACTION({ profileId: this.loggedInUserId ?? '' })
    );
    if (this.isCheckedIn) {
      // this.openCheckInDialog();
    }
  }
}
