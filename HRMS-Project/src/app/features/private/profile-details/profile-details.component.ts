import { Component, OnInit } from '@angular/core';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileDetiailsService } from './services/profile.service';

import { ProfileDetiailsService } from './services/profile.service';
import { ProfileDetails } from './models/profile-details';
import { Observable, of } from 'rxjs';
import { ProfileDetailsState } from './store/profile-details.state';
import { Store } from '@ngrx/store';
import {
  selectProfileDetails,
  selectProfileDetailsDataError,
  selectProfileDetailsDataLoading,
} from './store/profile-details.selector';
import { loadProfileDetailsAction } from './store/profile-details.action';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent implements OnInit {
  profileId: string | null = null;
  profileDetails$: Observable<ProfileDetails[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  constructor(
    private profileDetailsService: ProfileDetiailsService,
    private store: Store<ProfileDetailsState>
  ) {}

  selectorInitializer(): void {
    this.profileDetails$ = this.store.select(selectProfileDetails);
    this.profileDetails$.subscribe({
      next: (data: ProfileDetails[]) => {
        data ? (this.profileId = data[0].id) : null;
        console.log(this.profileId);
      },
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadProfileDetailsAction());
    this.selectorInitializer();
  }

}
