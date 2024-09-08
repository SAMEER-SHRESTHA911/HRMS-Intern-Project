import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileDetails } from './models/profile-details';
import { ProfileDetailsState } from './store/profile-details.state';
import {
  selectProfileDetails,
  selectProfileDetailsDataError,
  selectProfileDetailsDataLoading,
} from './store/profile-details.selector';
import { FETCH_PROFILE_DETAILS_ACTION } from './store/profile-details.action';
import { UploadPictureDialogComponent } from './components/upload-picture-dialog/upload-picture-dialog.component';
import { ProfileDetailsService } from './services/profile.service';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent implements OnInit {
  paramProfileId: string | null = null;
  profileImage64: string | null = null;
  profileDetails$: Observable<ProfileDetails | null> = of(null);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  constructor(
    private profileDetailsService: ProfileDetailsService,
    private store: Store<ProfileDetailsState>,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  selectorInitializer(): void {
    this.profileDetails$ = this.store.select(selectProfileDetails);

    this.loading$ = this.store.select(selectProfileDetailsDataLoading);

    this.error$ = this.store.select(selectProfileDetailsDataError);

    // this.profileDetails$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    this.selectorInitializer();
    this.paramProfileId = this.route.snapshot.params['id'];
    this.store.dispatch(
      FETCH_PROFILE_DETAILS_ACTION({ profileId: this.paramProfileId ?? '' })
    );
    this.profileDetailsService
      .getProfilePictureofEmployeeById(this.paramProfileId ?? '')
      .subscribe({
        next: (res) =>
          (this.profileImage64 = `data:image/jpeg;base64,${res.data.imageDataBase64}`),
      });
  }

  onEditProfileDetails(id: string | number): void {
    this.router.navigate(['/admin/profile-details/edit-profile', id]);
  }

  onChangePicture(): void {
    const dialogRef = this.dialog.open(UploadPictureDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      } else {
        console.log('closes');
      }
    });
  }

  onChangePassword() {
    this.router.navigate(['/change-password']);
  }
}
